import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MainNavigation from "../../SharedComponents/MainNavigation/MainNavigation";
import DisplayModal from "../../SharedComponents/DisplayModal/DisplayModal";
import WordGame from "./Components/WordGame/WordGame";


import classes from "./Choose.module.scss";

const Choose = () => {
  const reRenderFlag = useSelector((state) => state.flag);
  const [showModal, setShowModal] = useState(false);

  const modalClickOn = () => {
    setShowModal(true);
  };

  useEffect(() => {
    return console.log("Choose page rerender");
  }, [reRenderFlag]);

  return (
    <section className={classes["main-container"]}>
      <MainNavigation />
      {showModal && (
        <DisplayModal
          setShowModal={setShowModal}
          showModal={showModal}
          component={WordGame}
        />
      )}
      <section className={classes["choice-container"]}>
        <Link className={classes.link} to="/compose">
          {" "}
          <div className={`${classes.box} ${classes.one}`}>
            Compose A New Post!
          </div>{" "}
        </Link>
        <Link className={classes.link} to="/read">
          {" "}
          <div className={`${classes.box} ${classes.two}`}>
            Let's See My Posts!
          </div>
        </Link>
        <div className={classes.link} onClick={modalClickOn}>
          {" "}
          <div className={`${classes.box} ${classes.three}`}>
            Test My Typing Ability!
          </div>
        </div>
      </section>
    </section>
  );
};

export default Choose;
