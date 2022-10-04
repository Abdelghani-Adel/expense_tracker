import AddTransactions from "../../components/AddTransactions";
import ExpensesTable from "./ExpenseTable";
import IncomesTable from "./IncomesTable";
import Totals from "./Totals";

const Dashboard = () => {
  return (
    <div className="row p-2">
      <AddTransactions />
      <Totals />
      <IncomesTable />
      <ExpensesTable />
    </div>
  );
};

export default Dashboard;
