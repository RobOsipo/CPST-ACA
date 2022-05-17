import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Choose from "../pages/Choose/Choose";
import Compose from "../pages/Compose/Compose";
import ReadPosts from "../pages/ReadPosts/ReadPosts";
import ProtectedAuthRoute from "./ProtectedAuthRoute/ProtectedAuthRoute";


import classes from "./App.module.scss";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/choose"
          element={
            <ProtectedAuthRoute>
              <Choose />
            </ProtectedAuthRoute>
          }
        />
        <Route
          path="/compose"
          element={
            <ProtectedAuthRoute>
              <Compose />
            </ProtectedAuthRoute>
          }
        />
        <Route
          path="/read"
          element={
            <ProtectedAuthRoute>
              <ReadPosts />
            </ProtectedAuthRoute>
          }
        />

        {/* <Navigate to="/" /> */}
      </Routes>
    </>
  );
}

export default App;
