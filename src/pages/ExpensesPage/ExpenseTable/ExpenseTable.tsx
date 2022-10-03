import { useSelector } from "react-redux";
import { selectExpenses } from "../../../redux/slices/expenseSlice";
import Table from "./Table";

const ExpensesTable = () => {
  const expensesState = useSelector(selectExpenses);
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
    <>
      <h3 className="text-center fw-bold">Expenses Transactions</h3>
      <Table
        dataArray={expensesState}
        columns={columns}
        dataTitle="Income Transactions"
        basePath=""
      />
    </>
  );
};

export default ExpensesTable;
