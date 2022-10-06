import React from "react";
import PortalReactDOM from "react-dom";
import "./Portal.css";

/** BackDrop component is used in the exported Portal comopnent */
/** The background dimt dark screen that blocks interaction with the application while Portal is rendered and shown */
/** Just a dark backround div which clicking on it hides the portal */
/** Gets a closePorta() function which in the first place you pass to the Portal component, then the Portal component pass it here */
const BackDrop: React.FC<{ closePortal: () => void }> = (props) => {
  return <div className="backdrop" onClick={props.closePortal}></div>;
};

/**  */
interface PortalProps {
  closePortal: () => void /** A clear up function to close the portal and clear up the root divs in the HTML file for next use */;
  component: React.ReactNode /** A component that you want to portal */;
}
const Portal: React.FC<PortalProps> = (props) => {
  /** Selecting the backdrop-root portal div in the public/index.html */
  /** BackDrop component will be rendered in this div */
  const backDropElement = document.getElementById("backdrop-root")!;

  /** Selecting the overlay-root portal div in the public/index.html */
  /** The recieved component through props will be rendered here in this div */
  /** There is a css class you have to put in the root of your component that you want to portal 'modal-overlay' */
  /** This css class will make sure to render you component in a good way with a dimt background blocks interaction with the rest of the application */
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
