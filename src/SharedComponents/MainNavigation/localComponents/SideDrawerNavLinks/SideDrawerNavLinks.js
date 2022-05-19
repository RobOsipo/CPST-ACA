import React from "react";
import { NavLink } from "react-router-dom";
import Write from "../../../../icons/Write/Write";
import Read from "../../../../icons/Read/Read";
import Home from "../../../../icons/Home/Home";

import classes from "./SideDrawerNavLinks.module.scss";

const SideDrawerNavLinks = () => {
  return (
    <ul className={classes["nav-links"]}>
      <li className={classes.li}>
        <Home />
        <NavLink
          to="/choose"
          className={({ isActive }) =>
            isActive ? `${classes.activeStyle}` : `${classes["nav-link"]}`
          }
        >
          <span className={classes.span}>Home</span>
        </NavLink>
      </li>
      <li className={classes.li}>
        <Write />
        <NavLink
          to="/compose"
          className={({ isActive }) =>
            isActive ? `${classes.activeStyle}` : `${classes["nav-link"]}`
          }
        >
          <span className={classes.span}>Compose Post</span>
        </NavLink>
      </li>
      <li className={classes.li}>
        <Read />
        <NavLink
          to="/read"
          className={({ isActive }) =>
            isActive ? `${classes.activeStyle}` : `${classes["nav-link"]}`
          }
        >
          <span className={classes.span}>Read Post</span>
        </NavLink>
      </li>

      {/* <li>
            <NavLink
              to="auth"
              className={({ isActive }) =>
                isActive ? `${classes.activeStyle}` : `${classes["nav-link"]}`
              }
            >
              page 4
            </NavLink>
          </li> */}
    </ul>
  );
};

export default SideDrawerNavLinks;
