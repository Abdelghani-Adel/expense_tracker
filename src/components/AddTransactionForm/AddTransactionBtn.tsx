import { useState } from "react";
import AddTransactionForm from "./AddTransactionForm";
import Portal from "../Portal/Portal";

const AddTransactionBtn = () => {
  const [portalIsShown, setPortalIsShown] = useState(false);
  const showPortal = () => setPortalIsShown(true);
  const closePortal = () => setPortalIsShown(false);
  return (
    <>
      {portalIsShown && (
        <Portal
          component={<AddTransactionForm closePortal={closePortal} />}
          closePortal={closePortal}
        />
      )}
      <div>
        <button className="btn btn-primary me-2" onClick={showPortal}>
          New Transaction
        </button>
      </div>
    </>
  );
};

export default AddTransactionBtn;
