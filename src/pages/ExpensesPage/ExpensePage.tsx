import AddExpenseBtn from "../../components/AddTransactions/AddExpenseBtn";
import ExpensesTable from "../Dashboard/ExpenseTable";

const ExpensePage = () => {
  return (
    <div className="row p-2">
      <div>
        <AddExpenseBtn />
      </div>

      <div>
        <ExpensesTable />
      </div>
    </div>
  );
};

export default ExpensePage;
