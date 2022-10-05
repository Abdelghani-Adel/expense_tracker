import AddTransactions from "../../components/AddTransactions/AddTransactions";
import ExpensesTable from "./ExpenseTable";
import IncomesTable from "./IncomesTable";
import Totals from "./Totals";

const Dashboard = () => {
  return (
    <div className="row p-2">
      <AddTransactions />
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
