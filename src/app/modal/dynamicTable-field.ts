export interface TableColumn {
  field: string;
  header: string;
  width?: string;
  type?: 'text' | 'date' | 'currency' | 'button';
  buttonLabel?: string;
}

export interface DynamicTable {
  columns: TableColumn[];
  data: any[];
}