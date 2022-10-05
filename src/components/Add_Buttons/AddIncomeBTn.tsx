import { useState } from "react";
import AddIncomeForm from "../AddIncomeForm/AddIncome";
import Portal from "../Portal/Portal";

const AddIncomeBtn = () => {
  const [portalIsShown, setPortalIsShown] = useState(false);
  const showPortal = () => setPortalIsShown(true);
  const closePortal = () => setPortalIsShown(false);
  return (
    <>
      {portalIsShown && (
        <Portal
          component={<AddIncomeForm closePortal={closePortal} />}
          closePortal={closePortal}
        />
      )}
      <button className="btn btn-success me-2" onClick={showPortal}>
        New Income
      </button>
    </>
  );
};

export default AddIncomeBtn;
