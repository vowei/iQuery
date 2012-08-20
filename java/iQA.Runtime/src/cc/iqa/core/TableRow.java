package cc.iqa.core;

public class TableRow
{
    private Table table;
    private String[] items;

    public TableRow(Table table, String[] items) {
        for (int colIndex = 0; colIndex < items.length; colIndex++)
            items[colIndex] = items[colIndex] != null ? items[colIndex] : "";

        this.table = table;
        this.items = items;
    }

    public String getValue(String header)
    {
	int itemIndex = table.GetHeaderIndex(header);
	return items[itemIndex];
    }
        
    public void setValue(String header, String value)
    {
	int keyIndex = table.GetHeaderIndex(header, true);
	items[keyIndex] = value;
    }

    public String getValue(int index)
    {
	return items[index];   
    }

    public int getCount()
    {
        return items.length; 
    }

}