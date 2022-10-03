import { Income } from "../../redux/slices/incomeSlice";

export type TableColumn = {
  id: number;
  title: string;
  style?: string;
};

export default interface TableProps {
  dataArray: Income[];
  columns: TableColumn[];
  dataTitle: string;
  basePath: string;
}
