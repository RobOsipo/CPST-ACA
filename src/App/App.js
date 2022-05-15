import React, {useState} from 'react';
import { Routes, Route, Navigate} from 'react-router-dom'

import MainNavigation from '../SharedComponents/MainNavigation/MainNavigation';
import DummyPage from '../pages/DummyPage/DummyPage';
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
import Choose from '../pages/Choose/Choose'
import classes from './App.module.scss'

function App() {
 
  return (
    <>
    {/* <MainNavigation />
    <DisplayModal setShowModal={setShowModal} showModal={showModal} /> */}
    
    <Routes>
      <Route exact path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/choose" element={<Choose />} />
      <Route path="/compose" element={<DummyPage />} />
      <Route path="/read" element={<DummyPage />} />
      
      {/* <Navigate to="/" /> */}
    </Routes>
    </>
  );
}

export default App;
