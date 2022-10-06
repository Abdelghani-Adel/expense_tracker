import { useDispatch } from "react-redux";
import { incomeActions } from "../redux/slices/incomeSlice";

const dispatch = useDispatch();

const FetchDataFromFirebase = async () => {
  const fetchData = async () => {
    const response = await fetch(
      "https://expense-tracker-3996f-default-rtdb.firebaseio.com/incomes.json"
    );

    if (!response.ok) {
      throw new Error("fetching data failed!");
    }

    const data = await response.json();

    return data;
  };

  try {
    const incomeData = await fetchData();
    dispatch(incomeActions.replaceIncomes(incomeData));
  } catch (error) {
    console.log(error);
  }
};

export default FetchDataFromFirebase;
