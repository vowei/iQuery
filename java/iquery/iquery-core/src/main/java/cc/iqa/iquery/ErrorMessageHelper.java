package cc.iqa.iquery;

import org.antlr.runtime.*;

class ErrorMessageHelper {
	public static String getErrorHeader(BaseRecognizer recognizer,
			RecognitionException e) {
		if (recognizer.getSourceName() != null)
			return recognizer.getSourceName() + ":第" + e.line + "行，第"
					+ (e.charPositionInLine + 1) + "列";

		return "第" + e.line + "行，第" + (e.charPositionInLine + 1) + "列";
	}

	public static String getErrorMessage(RecognitionException e,
			CommonTokenStream tokens, String[] tokenNames,
			BaseRecognizer recognizer) {
		String msg = e.getMessage();
		String hdr = getErrorHeader(recognizer, e);
		if (e instanceof UnwantedTokenException) {
			UnwantedTokenException ute = (UnwantedTokenException) e;
			String tokenName = "<unknown>";
			if (ute.expecting == Token.EOF) {
				tokenName = "EOF";
			} else {
				tokenName = tokenNames[ute.expecting];
			}
			msg = "错误的输入： "
					+ recognizer.getTokenErrorDisplay(ute.getUnexpectedToken())
					+ " 期望： " + tokenName;
		} else if (e instanceof MissingTokenException) {
			MissingTokenException mte = (MissingTokenException) e;
			String tokenName = "<unknown>";
			if (mte.expecting == Token.EOF) {
				tokenName = "EOF";
			} else {
				tokenName = tokenNames[mte.expecting];
			}
			
			msg = String.format("%1$s: 在%2$s处缺少期望的%3$s！", 
					hdr, recognizer.getTokenErrorDisplay(e.token), tokenName);
		} else if (e instanceof MismatchedTokenException) {
			MismatchedTokenException mte = (MismatchedTokenException) e;
			String tokenName = "<unknown>";
			if (mte.expecting == Token.EOF) {
				tokenName = "EOF";
			} else if (tokenNames != null) {
				tokenName = tokenNames[mte.expecting];
			} else {
				tokenName = new String(new char[] {(char)mte.expecting});
			}
			
			if ( e.token != null ) {
				msg = String.format("%1$s: 没有关闭的语句，期望%2$s，当前碰到的是'%3$s'！",
						hdr, tokenName, recognizer.getTokenErrorDisplay(e.token));
			} else {
				msg = String.format("%1$s: 没有关闭的语句，期望%2$s！",
						hdr, tokenName);				
			}
		} else if (e instanceof NoViableAltException) {
			NoViableAltException nvae = (NoViableAltException) e;
			if (nvae.token != null) { // parser
				String t = nvae.token.getText();
				// 最后一个Token永远都是EOF
				int idx = e.index + 1;
				Token nextToken = null;
				
				if ( idx < tokens.getTokens().size())
					nextToken = (Token) tokens.getTokens().get(idx);
				// 下面这个判断是为了>>操作符后面没有跟过滤条件的临时解决方案
				// 我不知道为什么，解析这个“TextView :first >>”语法错误时，
				// nvae.token竟然是EOF！
				else if (e.index > 0) {  
					t = ((Token)tokens.getTokens().get(e.index - 1)).getText();
					nextToken = (Token) tokens.getTokens().get(tokens.getTokens().size() - 1);
				} else { // e.index == 0
					t = ((Token)tokens.getTokens().get(e.index)).getText();					
				}

				if (t.compareTo(":") == 0) {
					if (nextToken.getType() != Token.EOF) {
						msg = String.format("%1$s: 未知的伪类\"%2$s%3$s\"！", hdr, t,
								nextToken.getText());
					} else {
						msg = String.format(
								"%1$s: 对于伪类指示符\"%2$s\"，冒号后需要跟具体的伪类名称！", hdr, t);
					}
				} else if ((t.compareTo(">") == 0) || (t.compareTo(">>") == 0)) {
					if ( e.index == 0 ) {
						msg = String.format("%1$s: \"%2$s\"操作符不能放在查询的开始，如果是要从根节点开始查询，请确保查询的集合里只有根节点一个元素，并且使用类似\"* %2$s\"或\":first %2$s\"的方式指定查询语句！",
								hdr, t);
					} else {
						if (nextToken.getType() != Token.EOF) {
							msg = String
									.format("%1$s: 取子控件集合\"%2$s\"操作符后面应该跟随有合法的过滤条件，无法识别条件\"%3$s\"！",
											hdr, t, nextToken.getText());
						} else {
							msg = String.format(
									"%1$s: 取子控件集合\"%2$s\"操作符后面应该跟随有合法的过滤条件！", hdr, t);
						}
					}
				} else if ( t.compareTo("[") == 0 ) {
					if ( nextToken.getType() != iQueryLexer.ELEMENT ) {
						msg = String.format("%1$s: 属性查询条件里，'['后面跟随有英文字母和数字组成的控件属性名，但是找到的是\"%2$s\"-\"%3$s\"！", 
								hdr, getTokenName(nextToken.getType()), nextToken.getText());
					} else if ( idx < (tokens.getTokens().size() - 1) ) {
						nextToken = (Token)tokens.getTokens().get(idx + 1);
						msg = String.format("%1$s: 属性查询条件里，属性后面应该跟随有'='或者']'，但是找到的是\"%2$s\"！", 
								hdr, nextToken.getText());
					}
				} else {
					msg = String.format("%1$s: 未知语法错误，有可能是'>>'操作符后面没有过滤条件！", hdr);
				}
			} else {
				msg = String.format("%1$s: 查询语句中有无法识别的关键字\"%2$c\"！", hdr,
						nvae.c);
			}
		} else if (e instanceof EarlyExitException) {
			// EarlyExitException eee = (EarlyExitException)e;
			// for development, can add "(decision="+eee.decisionNumber+")"
			msg = "在输入中无法匹配 (...)+ 循环！"
					+ recognizer.getTokenErrorDisplay(e.token);
		} else if (e instanceof MismatchedSetException) {
			MismatchedSetException mse = (MismatchedSetException) e;
			msg = "未关闭的匹配： "
					+ recognizer.getTokenErrorDisplay(e.token)
					+ " 期望的集合是： " + mse.expecting;
		} else if (e instanceof MismatchedNotSetException) {
			MismatchedNotSetException mse = (MismatchedNotSetException) e;
			msg = "未关闭的匹配："
					+ recognizer.getTokenErrorDisplay(e.token)
					+ " 期望的集合是：  " + mse.expecting;
		} else if (e instanceof FailedPredicateException) {
			FailedPredicateException fpe = (FailedPredicateException) e;
			msg = "无法预判 规则" + fpe.ruleName + ": {"
					+ fpe.predicateText + "}?";
		}
		return msg;
	}

	private static String getTokenName(int type) {
		switch ( type ) {
		case iQueryLexer.ELEMENT:
			return "属性名";
		case iQueryLexer.DIGIT:
			return "数字";
		case iQueryLexer.QUOTED_STRING:
			return "字符串";
		default:
			// return new Integer(type).toString();
			return new String(new char[] {(char)type});
		}
	}
}