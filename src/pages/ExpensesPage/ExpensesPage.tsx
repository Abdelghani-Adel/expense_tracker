import AddExpenseBtn from "../../components/Add_Buttons/AddExpenseBtn";
import ExpensesTable from "./ExpensesTable";

const ExpensesPage = () => {
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

export default ExpensesPage;
