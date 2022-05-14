import React, {useState} from 'react'
import Modal from '../Modal/Modal'
import './DisplayModal.css'

const DisplayModal = (props) => {

 

  const openMapHandler = () => {
    props.setShowModal(true);
  };

  const closeMapHandler = () => {
    props.setShowModal(false);
  };
  return (
    <>
           <Modal
        show={props.showModal}
        onCancel={closeMapHandler}
        header="Header Goes Here"
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<button onClick={closeMapHandler}>Close</button>}
      >
          <div className="map-container">
              <h2>Some Stuff Here</h2>
          </div>
      </Modal>
      <button onClick={openMapHandler}>Click This To Open Modal</button>
    </>
  )
}

export default DisplayModal