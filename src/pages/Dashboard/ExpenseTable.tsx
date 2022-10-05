import { useSelector } from "react-redux";
import { selectExpenses } from "../../redux/slices/expenseSlice";
import Table from "../../components/Table/Table";

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
    <div>
      <h3 className="text-center fw-bold mb-3">Expenses Transactions</h3>
      <Table
        dataArray={expensesState}
        columns={columns}
        dataTitle="Income Transactions"
        basePath="expenses"
      />
    </div>
  );
};

export default ExpensesTable;
