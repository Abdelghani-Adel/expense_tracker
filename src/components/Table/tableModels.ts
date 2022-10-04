export interface TableColumn {
  id: number;
  title: string;
  style?: string;
}

export interface TableObject {
  id: number;
  amount: number;
  category: string;
  description: string;
  date: string;
}

export default interface TableProps {
  dataArray: TableObject[];
  columns: TableColumn[];
  dataTitle: string;
  basePath: string;
}
