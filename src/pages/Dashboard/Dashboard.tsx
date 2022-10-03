import { Fragment } from "react";
import IncomesTable from "../IncomesPage/IncomesTable/IncomesTable";
import Totals from "./Totals";

const Dashboard = () => {
  return (
    <Fragment>
      <Totals />
      <hr />
      <IncomesTable />
    </Fragment>
  );
};

export default Dashboard;
