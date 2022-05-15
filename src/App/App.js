import React, {useState} from 'react';
import { Routes, Route, Navigate} from 'react-router-dom'

import MainNavigation from '../SharedComponents/MainNavigation/MainNavigation';
import DummyPage from '../pages/DummyPage/DummyPage';
import DisplayModal from '../SharedComponents/DisplayModal/DisplayModal'
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
import classes from './App.module.scss'

function App() {
  const [showModal, setShowModal] = useState(false);

  const modalClickOn = () => {
    setShowModal(true)
  }
  return (
    <>
    <MainNavigation />
    <DisplayModal setShowModal={setShowModal} showModal={showModal} />
    
    <Routes>
      <Route exact path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/afterlogin" element={<DummyPage />} />
      <Route path="/addplace" element={<DummyPage />} />
      <Route path="/auth" element={<DummyPage />} />
      
      {/* <Navigate to="/" /> */}
    </Routes>
    </>
  );
}

export default App;
