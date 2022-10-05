import { useState } from "react";
import AddExpenseForm from "../AddExpenseForm/AddExpense";
import Portal from "../Portal/Portal";

const AddExpenseBtn = () => {
  const [portalIsShown, setPortalIsShown] = useState(false);
  const showPortal = () => setPortalIsShown(true);
  const closePortal = () => setPortalIsShown(false);
  return (
    <>
      {portalIsShown && (
        <Portal
          component={<AddExpenseForm closePortal={closePortal} />}
          closePortal={closePortal}
        />
      )}
      <button className="btn btn-danger me-2" onClick={showPortal}>
        New Expense
      </button>
    </>
  );
};

export default AddExpenseBtn;
