import { useState } from "react";
import AddExpense from "../AddExpense/AddExpense";
import Portal from "../Portal";

const AddExpenseBtn = () => {
  const [portalIsShown, setPortalIsShown] = useState(false);
  const showPortal = () => setPortalIsShown(true);
  const closePortal = () => setPortalIsShown(false);
  return (
    <>
      {portalIsShown && (
        <Portal component={<AddExpense />} closePortal={closePortal} />
      )}
      <button className="btn btn-danger me-2" onClick={showPortal}>
        New Expense
      </button>
    </>
  );
};

export default AddExpenseBtn;
