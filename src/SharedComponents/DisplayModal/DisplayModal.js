import React from "react";
import Modal from "./localComponents/Modal/Modal";
import "./DisplayModal.scss";

const DisplayModal = ({ setShowModal, showModal, component: Component }) => {
  const closeMapHandler = () => {
    setShowModal(false);
  };
  return (
    <>
      <Modal
        show={showModal}
        onCancel={closeMapHandler}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={
          <button className="modal__btn" onClick={closeMapHandler}>
            Close
          </button>
        }
      >
        <div className="content-container">
          <Component />
        </div>
      </Modal>
    </>
  );
};

export default DisplayModal;
