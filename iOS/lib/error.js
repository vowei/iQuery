function getTokenName(type) {
	switch ( type ) {
	case iQueryLexer.ELEMENT:
		return "属性名";
	case iQueryLexer.DIGIT:
		return "数字";
	case iQueryLexer.QUOTED_STRING:
		return "字符串";
	default:
        return type;
	}
};

function onNoViableAltException(e, tokenNames, tokens) {
	if (e.token != null) { // parser
		var t = e.token.getText();
		// 最后一个Token永远都是EOF
		var idx = e.index + 1;
		var nextToken = null;
		var prevToken = null;
				
        debug("[onNoViableAltException] t: " + t);
        debug("[onNoViableAltException] idx: " + idx);
        debug("[onNoViableAltException] tokens.getTokens().length: " + tokens.getTokens().length);
		if ( idx < tokens.getTokens().length) {
		    nextToken = tokens.getTokens()[idx];

            //
            // TODO: 需要写文档告诉用户，在java版和javascript版的iquery解析时，发生错误时出现的错误消息有时是不一致的。
            //
            // 不知道为什么，javascript版的antlr跟java版的antlr在NoViableAltException
            // 方面，获取的行号和列号有不一样的地方
            // 下面这段代码就是在无效的伪类后面继续跟了一个元素，出现的异常里包含的信息
            // 跟最后一个元素是无效的伪类出现的异常里包含的信息不一致的情形的临时解决方案
            //
		    prevToken = e.index > 0 ? tokens.getTokens()[e.index - 1] : null;
		// 下面这个判断是为了>>操作符后面没有跟过滤条件的临时解决方案
		// 我不知道为什么，解析这个“TextView :first >>”语法错误时，
		// e.token竟然是EOF！
		} else {
            // t = tokens.getTokens()[e.index - 1].getText();
		    // nextToken = tokens.getTokens()[tokens.getTokens().length - 1];\
            nextToken = new org.antlr.runtime.CommonToken(org.antlr.runtime.Token.EOF, "EOF");
		    prevToken = e.index > 0 ? tokens.getTokens()[e.index - 1] : null;
		}
        
        debug("[onNoViableAltException] t: " + t);
        debug("[onNoViableAltException] nextToken: " + nextToken.getText());
        debug("[onNoViableAltException] prevToken: " + (prevToken != null ? prevToken.getText() : "null"));
        debug("[onNoViableAltException] nextToken.getType(): " + nextToken.getType());
        debug("[onNoViableAltException] EOF: " + org.antlr.runtime.Token.EOF);
		if (t == ":" || (prevToken != null && prevToken.getText() == ":") ) {
		    if (tokens.getTokens().length == 1) {
		        return "对于伪类指示符\"" + (t == null ? prevToken.getText() : t) + "\"，冒号后需要跟具体的伪类名称！";
		    } else if (prevToken == null) {
		        return "未知的伪类\"" + t + nextToken.getText() + "\"！";
		    } else if (prevToken != null) {
		        return "未知的伪类\"" + prevToken.getText() + t + "\"！";
		    }
		} else if (t == ">" || t == ">>") {
		    if (prevToken == null) {
		        return t + "操作符不能放在查询的开始，如果是要从根节点开始查询，请确保查询的集合里只有根节点一个元素，并且使用类似\"* " + t + "\"或\":first " + t + "\"的方式指定查询语句！";
		    } else {
			    if (nextToken.getType() != org.antlr.runtime.Token.EOF) {
			        return "取子控件集合\"" + t + "\"操作符后面应该跟随有合法的过滤条件，无法识别条件\"" + nextToken.getText() + "\"！";
			    } else {
			        return "取子控件集合\"" + t + "\"操作符后面应该跟随有合法的过滤条件！";
			    }
            }
		} else if ((prevToken != null && prevToken.getText() == ">") ||
                   (prevToken != null && prevToken.getText() == ">>") ) {
			if (nextToken.getType() != org.antlr.runtime.Token.EOF) {
			    return "取子控件集合\"" + prevToken.getText() + "\"操作符后面应该跟随有合法的过滤条件，无法识别条件\"" + nextToken.getText() + "\"！";
			} else {
			    return "取子控件集合\"" + prevToken.getText() + "\"操作符后面应该跟随有合法的过滤条件！";
			}
        } else if ( t == "[" ) {
			if ( nextToken.getType() != iQueryLexer.ELEMENT ) {
                return "属性查询条件里，'['后面跟随有英文字母和数字组成的控件属性名，但是找到的是\"" + getTokenName(nextToken.getType()) + "\"-\"" + nextToken.getText() + "\"！";
			} else if ( idx < (tokens.getTokens().length - 1) ) {
				nextToken = tokens.getTokens()[idx + 1];
                return "属性查询条件里，属性后面应该跟随有'='或者']'，但是找到的是\"" + nextToken.getText() + "\"！";
			}
		} else {
            return "未知语法错误，有可能是'>>'操作符后面没有过滤条件！";
		}
	} else {
        return "查询语句中有无法识别的关键字\"" + e.c + "\"！";
	}
};

function onMismatchedTokenException(mte, tokenNames, recognizer) {
    debug("onMismatchedTokenException");

	var tokenName = "<unknown>";
	if (mte.expecting == org.antlr.runtime.Token.EOF) {
		tokenName = "EOF";
	} else if (tokenNames != null) {
		tokenName = tokenNames[mte.expecting];
	} else {
        debug("[onMismatchedTokenException] - mte.expecting: " + mte.expecting);
		tokenName = mte.expecting;
	}

	if (mte.token != null) {
	    return "没有关闭的语句，期望" + tokenName + "，当前碰到的是'" + recognizer.getTokenErrorDisplay(mte.token) + "'！";
	} else if (tokenName != undefined) {
	    return "没有关闭的语句，期望" + tokenName + "！";
	} else {
	    return "没有关闭的语句！";
	}
}

function onMissingTokenException(E, D, recognizer) {
    var tokenName = "<unknown>";
    if (E.expecting == org.antlr.runtime.Token.EOF) {
        tokenName = "EOF"
    } else {
        tokenName = D[A.expecting]
    }

    return "在" + recognizer.getTokenErrorDisplay(E.token) + "处缺少期望的" + tokenName + "！";
};

function getErrorHeader(recognizer, e) {
    if (recognizer.getSourceName() != null && e.charPositionInLine >= 0) {
        return recognizer.getSourceName() + ":第" + (e.line > 0 ? e.line : 1) + "行，第" + (e.charPositionInLine + 1) + "列";
    } else if (recognizer.getSourceName() != null && e.charPositionInLine < 0) {
        return recognizer.getSourceName() + ":第" + (e.line > 0 ? e.line : 1) + "行";
    } else if (recognizer.getSourceName() == null && e.charPositionInLine >= 0) {
        return "第" + (e.line > 0 ? e.line : 1) + "行，第" + (e.charPositionInLine + 1) + "列";
    } else {
        return "第" + (e.line > 0 ? e.line : 1) + "行";
    }
};

function getErrorsHelper(E, tokens, D, recognizer) {
    var F = (E && E.getMessage) ? E.getMessage() : null, A, C;
    var hdr = getErrorHeader(recognizer, E);
    if (E instanceof org.antlr.runtime.UnwantedTokenException) {
        var B = E;
        var C = "<unknown>";
        if (B.expecting == org.antlr.runtime.Token.EOF) {
            C = "EOF"
        } else {
            C = D[B.expecting]
        }
        F = "错误的输入：  " + this.getTokenErrorDisplay(B.getUnexpectedToken()) + " 期望： " + C
    } else {
        if (E instanceof org.antlr.runtime.MissingTokenException) {
            F = hdr + ": " + onMissingTokenException(E, D, recognizer);
        } else {
            if (E instanceof org.antlr.runtime.MismatchedTokenException) {
                debug("called MismatchedTokenException");
                F = hdr + ": " + onMismatchedTokenException(E, D, recognizer);
            } else {
                if (E instanceof org.antlr.runtime.NoViableAltException) {
                    F = hdr + ": " + onNoViableAltException(E, D, tokens);
                } else {
                    if (E instanceof org.antlr.runtime.EarlyExitException) {
                        F = "required (...)+ loop did not match anything at input " + this.getTokenErrorDisplay(E.token)
                    } else {
                        if (E instanceof org.antlr.runtime.MismatchedSetException) {
                            F = "mismatched input " + this.getTokenErrorDisplay(E.token) + " expecting set " + E.expecting
                        } else {
                            if (E instanceof org.antlr.runtime.MismatchedNotSetException) {
                                F = "mismatched input " + this.getTokenErrorDisplay(E.token) + " expecting set " + E.expecting
                            } else {
                                if (E instanceof org.antlr.runtime.FailedPredicateException) {
                                    F = "rule " + E.ruleName + " failed predicate: {" + E.predicateText + "}?"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return F
}