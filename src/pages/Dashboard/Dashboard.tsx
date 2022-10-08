import { useSelector } from "react-redux";
import AddTransactionBtn from "../../components/AddTransactionForm/AddTransactionBtn";
import { selectExpenses } from "../../redux/slices/expenseSlice";
import ExpensesTable from "../ExpensesPage/ExpensesTable";
import IncomesTable from "../IncomesPage/IncomesTable";
import Totals from "./Totals";

const Dashboard = () => {
  /** will be passed to <ExpensesTable /> */
  const expensesState = useSelector(selectExpenses);

  return (
    <div className="row p-2">
      <AddTransactionBtn />
      <Totals />
      <hr className="my-3 border border-2 border-dark" />
      <div className="col-12">
        <IncomesTable />
      </div>
      <hr className="my-3 border border-2 border-dark" />
      <div className="col-12">
        <ExpensesTable expensesArray={expensesState} />
      </div>
    </div>
  );
};

export default Dashboard;
