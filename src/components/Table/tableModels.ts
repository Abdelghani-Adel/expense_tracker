export type TableDataObject = {
  id: number;
  date: string;
  name: string;
  amount: number;
  category: string;
  description: string;
};

export type TableColumn = {
  id: number;
  title: string;
  style?: string;
};

export default interface TableProps {
  dataArray: TableDataObject[];
  columns: TableColumn[];
  dataTitle: string;
  basePath: string;
}
