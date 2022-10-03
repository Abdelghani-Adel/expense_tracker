import { Income } from "../../../redux/slices/incomeSlice";

// Exported ? will be used where i'm expecting for expample <TableColumn[]> props
export type TableColumn = {
  id: number;
  title: string;
  style?: string;
};

// will be the type of the Table component props
export default interface TableProps {
  dataArray: Income[];
  columns: TableColumn[];
  dataTitle: string;
  basePath: string;
}
