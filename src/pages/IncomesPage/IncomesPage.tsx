import AddTransactionBtn from "../../components/AddTransactionForm/AddTransactionBtn";
import IncomesTable from "./IncomesTable";

const IncomesPage = () => {
  return (
    <div className="row p-2">
      <div>
        <AddTransactionBtn />
      </div>
      <div>
        <IncomesTable />
      </div>
    </div>
  );
};

export default IncomesPage;
