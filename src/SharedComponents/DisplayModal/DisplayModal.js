import React, {useState} from 'react'
import Modal from './localComponents/Modal/Modal'
import './DisplayModal.css'

const DisplayModal = ({setShowModal, showModal, component: Component}) => {

 

  const openMapHandler = () => {
   setShowModal(true);
  };

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
        footer={<button className="modal__btn" onClick={closeMapHandler}>Close</button>}
      >
          <div className="content-container">
          {/* //todo-- maybe pass a component as a prop to render inside modal so It can truly be reusable  */}
              <Component />
          </div>
      </Modal>
      
    </>
  )
}

export default DisplayModal