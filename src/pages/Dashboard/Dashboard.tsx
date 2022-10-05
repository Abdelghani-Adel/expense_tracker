import AddButtons from "../../components/Add_Buttons/AddButtons";
import ExpensesTable from "../ExpensesPage/ExpensesTable";
import IncomesTable from "../IncomesPage/IncomesTable";
import Totals from "./Totals";

const Dashboard = () => {
  return (
    <div className="row p-2">
      <AddButtons />
      <Totals />
      <div className="col-6">
        <IncomesTable />
      </div>
      <div className="col-6">
        <ExpensesTable />
      </div>
    </div>
  );
};

export default Dashboard;
