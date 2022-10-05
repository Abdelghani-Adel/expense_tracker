import Table from "../../components/Table/Table";
import { Expense } from "../../redux/slices/expenseSlice";

interface Props {
  expensesArray: Expense[];
}

const ExpensesTable: React.FC<Props> = (props) => {
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
        dataArray={props.expensesArray}
        columns={columns}
        dataTitle="Income Transactions"
        basePath="expenses"
      />
    </div>
  );
};

export default ExpensesTable;
