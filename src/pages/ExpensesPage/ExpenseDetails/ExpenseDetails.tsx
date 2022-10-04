import { useParams } from "react-router-dom";

const ExpenseDetails: React.FC<{ id?: number }> = (props) => {
  let params = useParams();
  return <h1>{params.id}</h1>;
};

export default ExpenseDetails;
