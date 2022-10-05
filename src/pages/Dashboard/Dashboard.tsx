import { useSelector } from "react-redux";
import AddButtons from "../../components/Add_Buttons/AddButtons";
import { selectExpenses } from "../../redux/slices/expenseSlice";
import ExpensesTable from "../ExpensesPage/ExpensesTable";
import IncomesTable from "../IncomesPage/IncomesTable";
import Totals from "./Totals";

const Dashboard = () => {
  const expensesState = useSelector(selectExpenses);

  return (
    <div className="row p-2">
      <AddButtons />
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
