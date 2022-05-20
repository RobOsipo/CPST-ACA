import React from "react";

import FormInput from "../../SharedComponents/FormInput/FormInput";

import classes from "./Login.module.scss";
const Login = () => {


  return (
    <div className={classes.area}>
      <ul className={classes.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <main className={classes["main-container"]}>
        <div className={classes["input-container"]}>
          {" "}
          <FormInput
            postEndPoint="login"
            tokenName="Token"
            buttonText="Login"
            navigateTo="/choose"
            linkTo="/"
            linkText=" I Still Need To Register!"
            graphql="login"
          />{" "}
        </div>
      </main>
    </div>
  );
};

export default Login;
