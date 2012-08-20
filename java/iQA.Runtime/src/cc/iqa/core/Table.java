package cc.iqa.core;

import java.util.*;
import java.util.Map.Entry;

public class Table
{
    private static final String ERROR_NO_CELLS_TO_ADD = "No cells to add";
    private static final String ERROR_NO_HEADER_TO_ADD = "No headers to add";
    private static final String ERROR_COLUMN_NAME_NOT_FOUND = "Could not find a column named '{0}' in the table.";
    private static final String ERROR_CELLS_NOT_MATCHING_HEADERS = 
	"The number of cells ({0}) you are trying to add doesn't match the number of columns ({1})";
    
    private String[] _headers;
    private TableRows rows = new TableRows();
    
    public String[] getHeaders() { return _headers; }
    
    public TableRows getRows() { return rows; }
    
    public int getRowCount() { return rows.size(); }
    
    public Table(String ... headers)
    {
	if (headers == null || headers.length == 0) {
	    throw new IllegalArgumentException(ERROR_NO_HEADER_TO_ADD);
	}
	
	for (int colIndex = 0; colIndex < headers.length; colIndex++)
	    headers[colIndex] = headers[colIndex] != null ? headers[colIndex] : "";
	
	this._headers = headers;
    }
    
    public boolean ContainsColumn(String column)
    {
	return GetHeaderIndex(column, false) >= 0;
    }
    
    int GetHeaderIndex(String column) {
	return GetHeaderIndex(column, true);
    }
    
    public int GetHeaderIndex(String column, boolean throwIfNotFound)
    {
	int index = -1;
	for ( int i = 0; i < _headers.length; ++i ) {
	    if ( _headers[i].compareTo(column) == 0 ) {
		index = i;
		break;
	    }
	}
	
	if (!throwIfNotFound)
	    return index;
	if (index < 0) {
	    String mess = String.format(ERROR_COLUMN_NAME_NOT_FOUND + "\nThe table looks like this:\n{1}",
					column,
					this);
	    throw new IllegalStateException(mess);
	}

	return index;
    }

    public void AddRow(HashMap<String, String> values) {
	String[] cells = new String[_headers.length];

	Set<Entry<String, String>> entries = values.entrySet();
	Iterator<Entry<String, String>> iter = entries.iterator();
	while ( iter.hasNext() ) {
		Entry<String, String> value = iter.next();
	    int _headersIndex = GetHeaderIndex(value.getKey());
	    cells[_headersIndex] = value.getValue();
	}
	
	AddRow(cells);
    }
    
    public void AddRow(String ... cells) {
	if (cells == null)
	    throw new IllegalArgumentException(ERROR_NO_CELLS_TO_ADD);
	
	if (cells.length != _headers.length) {
	    String mess =
		String.format(ERROR_CELLS_NOT_MATCHING_HEADERS + ".\nThe table looks like this\n{2}",
			      cells.length,
			      _headers.length,
			      this);
	    throw new IllegalArgumentException(mess);
	}

	TableRow row = new TableRow(this, cells);
	rows.add(row);
    }
    
    /*
    public void RenameColumn(String oldColumn, String newColumn) {
	int colIndex = GetHeaderIndex(oldColumn);
	_headers[colIndex] = newColumn;
    }
    
    @Override public String toString() {
	int[] columnWidths = new int[_headers.length];
	for (int colIndex = 0; colIndex < _headers.length; colIndex++)
	    columnWidths[colIndex] = _headers[colIndex].length;
	
	for ( int i = 0; i < rows.Count; ++i ) {
	    TableRow row = rows[i];
	    for (int colIndex = 0; colIndex < _headers.length; colIndex++)
		columnWidths[colIndex] = Math.Max(columnWidths[colIndex], row[colIndex].length);
	}
	
	StringBuilder builder = new StringBuilder();
	AddTableRow(builder, _headers, columnWidths);
	
	for ( int i = 0; i < rows.length; ++i ) {
	    TableRow row = rows[i];
	    AddTableRow(builder, row.Select(pair => pair.Value), columnWidths);
	}
	
	return builder.ToString();
    }
    
    private void AddTableRow(StringBuilder builder, List<String> cells, int[] widths) {
	String margin = " ";
	String separator = "|";
	int colIndex = 0;
	
	builder.append(separator);
	
	for ( int i = 0; i < cells.size(); ++i ) {
	    String cell = cells.get(i);
	    builder.append(margin);
	    
	    builder.append(cell);
	    builder.append(' ', widths[colIndex] - cell.length());
	    
	    builder.append(margin);
	    builder.append(separator);
	    
	    colIndex++;
	}

	builder.append('\n');
    }
    */
}