

export interface SelectOption {
  label: string;
  value: any;
}

export type ColumnType =
  | 'text'
  | 'number'
  | 'currency'
  | 'date'
  | 'checkbox'
  | 'input'
  | 'select'
  | 'button'
  | 'icon';

export interface DynamicTableColumn {

  field: string;

  header: string;

  type?: ColumnType;

  width?: string;

  align?: 'left' | 'center' | 'right';

  sortable?: boolean;

  filter?: boolean;

  globalFilter?: boolean;

  editable?: boolean;

  readonly?: boolean;

  frozen?: boolean;

  hidden?: boolean;

  styleClass?: string;

  headerStyleClass?: string;

  options?: SelectOption[];

  buttonLabel?: string;

  icon?: string;

  tooltip?: string;
}

export interface DynamicTableConfig {

  columns: DynamicTableColumn[];

  data: any[];

  paginator?: boolean;

  rows?: number;

  rowsPerPageOptions?: number[];

  globalFilter?: boolean;

  columnFilter?: boolean;

  scrollable?: boolean;

  scrollHeight?: string;

  sortMode?: 'single' | 'multiple';

  selectionMode?: 'single' | 'multiple';

  loading?: boolean;

  lazy?: boolean;

  totalRecords?: number;

  responsiveLayout?: 'scroll' | 'stack';

  stripedRows?: boolean;

  showGridlines?: boolean;

  size?: 'small' | 'normal' | 'large';
}

export interface TableButtonEvent {

  row: any;

  column: DynamicTableColumn;

}

export interface TableValueChangeEvent {

  row: any;

  column: DynamicTableColumn;

  value: any;

}

export interface TableSelectionEvent {

  rows: any[];

}