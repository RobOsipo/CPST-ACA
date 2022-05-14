import React, {useState} from 'react';
import { Routes, Route, Navigate} from 'react-router-dom'

import MainNavigation from '../SharedComponents/MainNavigation/MainNavigation';
import DummyPage from '../pages/DummyPage/DummyPage';
import DisplayModal from '../SharedComponents/DisplayModal/DisplayModal'

import classes from './App.module.scss'

function App() {
  // const [showModal, setShowModal] = useState(false);

  // const modalClickOn = () => {
  //   setShowModal(true)
  // }
  return (
    <>
    <MainNavigation />
    {/* <DisplayModal setShowModal={setShowModal} showModal={showModal} /> */}
    
    <Routes>
      <Route to="/" element={<DummyPage />} />
      <Route to="/myplace" element={<DummyPage />} />
      <Route to="/addplace" element={<DummyPage />} />
      <Route to="/auth" element={<DummyPage />} />
      {/* <Navigate to="/" /> */}
    </Routes>
    </>
  );
}

export default App;
