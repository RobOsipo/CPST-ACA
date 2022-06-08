import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Choose from "../pages/Choose/Choose";
import Compose from "../pages/Compose/Compose";
import ReadPosts from "../pages/ReadPosts/ReadPosts";
import ProtectedAuthRoute from "./ProtectedAuthRoute/ProtectedAuthRoute";


function App() {
  const reRenderFlag = useSelector((state) => state.flag);

  useEffect(() => {
    return console.log("Whole App rerender");
  }, [reRenderFlag]);

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
      </Routes>
    </>
  );
}

export default App;
