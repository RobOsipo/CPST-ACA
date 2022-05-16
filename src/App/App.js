import React, {useState} from 'react';
import { Routes, Route, Navigate} from 'react-router-dom'

import MainNavigation from '../SharedComponents/MainNavigation/MainNavigation';
import DummyPage from '../pages/DummyPage/DummyPage';
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
import Choose from '../pages/Choose/Choose'
import Compose from '../pages/Compose/Compose'
import ReadPosts from '../pages/ReadPosts/ReadPosts'
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
      <Route path="/compose" element={<Compose />} />
      <Route path="/read" element={<ReadPosts />} />
      
      {/* <Navigate to="/" /> */}
    </Routes>
    </>
  );
}

export default App;
