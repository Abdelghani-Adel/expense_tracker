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
      <div className="col-6">
        <IncomesTable />
      </div>
      <div className="col-6">
        <ExpensesTable expensesArray={expensesState} />
      </div>
    </div>
  );
};

export default Dashboard;
