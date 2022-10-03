import { Fragment } from "react";
import IncomeTransTable from "./IncomeTransTable";
import Totals from "./Totals";

const Dashboard = () => {
  return (
    <Fragment>
      <Totals />
      <hr />
      <IncomeTransTable />
    </Fragment>
  );
};

export default Dashboard;
