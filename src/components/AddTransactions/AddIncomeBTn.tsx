import { useState } from "react";
import AddIncome from "../AddIncome/AddIncome";
import Portal from "../Portal";

const AddIncomeBtn = () => {
  const [portalIsShown, setPortalIsShown] = useState(false);
  const showPortal = () => setPortalIsShown(true);
  const closePortal = () => setPortalIsShown(false);
  return (
    <>
      {portalIsShown && (
        <Portal component={<AddIncome />} closePortal={closePortal} />
      )}
      <button className="btn btn-success me-2" onClick={showPortal}>
        New Income
      </button>
    </>
  );
};

export default AddIncomeBtn;
