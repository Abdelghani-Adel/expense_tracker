import React from "react";
import PortalReactDOM from "react-dom";

interface BackdropProps {
  closePortal: () => {};
}
const BackDrop: React.FC<BackdropProps> = (props) => {
  return (
    <div className="backdrop" onClick={props.closePortal}>
      <button
        className="btn border border-dark text-dark fw-bold rounded-circle position-absolute end-0 m-4 bg-secondary"
        onClick={props.closePortal}
      >
        X
      </button>
    </div>
  );
};

interface PortalProps {
  closePortal: () => any;
  component: React.ReactNode;
}

const Portal: React.FC<PortalProps> = (props) => {
  const backDropElement = document.getElementById("backdrop-root")!;
  const overlayElement = document.getElementById("overlay-root")!;

  return (
    <>
      {PortalReactDOM.createPortal(
        <BackDrop closePortal={props.closePortal} />,
        backDropElement
      )}
      {PortalReactDOM.createPortal(props.component, overlayElement)}
    </>
  );
};

export default Portal;
