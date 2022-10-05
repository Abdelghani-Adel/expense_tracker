import AddIncomeBtn from "../../components/AddTransactions/AddIncomeBTn";
import IncomesTable from "../Dashboard/IncomesTable";

const IncomesPage = () => {
  return (
    <div className="row p-2">
      <div>
        <AddIncomeBtn />
      </div>
      <div>
        <IncomesTable />
      </div>
    </div>
  );
};

export default IncomesPage;
