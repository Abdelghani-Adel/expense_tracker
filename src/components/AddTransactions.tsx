import { useState } from "react";
import AddExpense from "../pages/ExpensesPage/AddExpense/AddExpense";
import AddIncome from "../pages/IncomesPage/AddIncome/AddIncome";
import Portal from "./Portal";

const AddTransactions = () => {
  const [incomeShown, setIncomeShown] = useState(false);
  const [expenseShown, setExpenseShown] = useState(false);

  const showIncomeForm = () => setIncomeShown(true);
  const showExpenseForm = () => setExpenseShown(true);

  const closePortal = () => {
    setIncomeShown(false);
    setExpenseShown(false);
  };

  return (
    <div>
      {incomeShown && (
        <Portal component={<AddIncome />} closePortal={closePortal} />
      )}
      {expenseShown && (
        <Portal component={<AddExpense />} closePortal={closePortal} />
      )}
      <button className="btn btn-success" onClick={showIncomeForm}>
        Add Income
      </button>
      <button className="btn btn-danger" onClick={showExpenseForm}>
        Add Expense
      </button>
    </div>
  );
};

export default AddTransactions;
