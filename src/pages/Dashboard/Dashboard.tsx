import { Fragment } from "react";
import AddTransactions from "../../components/AddTransactions";
import ExpensesTable from "../ExpensesPage/ExpenseTable/ExpenseTable";
import IncomesTable from "../IncomesPage/IncomesTable/IncomesTable";
import Totals from "./Totals";

const Dashboard = () => {
  return (
    <Fragment>
      <AddTransactions />
      <Totals />
      <hr />
      <IncomesTable />
      <ExpensesTable />
    </Fragment>
  );
};

export default Dashboard;
