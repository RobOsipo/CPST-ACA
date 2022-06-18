import React from "react";

import MainNavigation from "../../SharedComponents/MainNavigation/MainNavigation";
import ComposeForm from "./Components/ComposeForm/ComposeForm";
import classes from "./Compose.module.scss";

const Compose = () => {
  return (
    <>
      <MainNavigation />
      <div className={classes["main-container"]}>
        <ComposeForm />
      </div>
    </>
  );
};

export default Compose;
