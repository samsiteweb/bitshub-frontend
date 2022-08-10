import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
import SideNav from "./SideNav";
import CategoriesNav from "./CategoriesNav";

const SideBarModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop setSideModalOpen={props.setSideModalOpen} sideModalOpen={props.sideModalOpen} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <SideNav setSideModalOpen={props.setSideModalOpen} sideModalOpen={props.sideModalOpen} />
        </ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default SideBarModal;
