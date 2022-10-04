import { useSelector } from "react-redux";
import { selectIncomes } from "../../../redux/slices/incomeSlice";
import Table from "./Table";

const IncomesTable = () => {
  const incomesState = useSelector(selectIncomes);
  const columns = [
    {
      id: 1,
      title: "Amount",
    },
    {
      id: 2,
      title: "Category",
    },
    {
      id: 3,
      title: "Description",
    },
    {
      id: 4,
      title: "Date",
    },
  ];
  return (
    <div className="col-6">
      <h3 className="text-center fw-bold">Incomes Transactions</h3>
      <Table
        dataArray={incomesState}
        columns={columns}
        dataTitle="Income Transactions"
        basePath=""
      />
    </div>
  );
};

export default IncomesTable;
