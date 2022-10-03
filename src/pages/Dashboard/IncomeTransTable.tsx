import { useSelector } from "react-redux";
import Table from "../../components/Table/Table";
import { selectIncomes } from "../../redux/slices/incomeSlice";

const IncomeTransTable: React.FC = () => {
  const incomesState = useSelector(selectIncomes);
  const columns = [
    {
      id: 1,
      title: "name",
      style: "",
    },
    {
      id: 2,
      title: "description",
      style: "",
    },
    {
      id: 3,
      title: "amount",
      style: "",
    },
  ];
  const dataTitle = "Income Tansactions";

  return (
    <Table
      dataArray={incomesState}
      columns={columns}
      dataTitle={dataTitle}
      basePath=""
    />
  );
};

export default IncomeTransTable;
