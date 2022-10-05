import AddIncomeBtn from "../../components/Add_Buttons/AddIncomeBTn";
import IncomesTable from "./IncomesTable";

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
