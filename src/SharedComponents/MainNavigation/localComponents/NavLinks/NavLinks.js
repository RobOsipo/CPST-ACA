import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavLinks.module.scss";

const NavLinks = (props) => {
 
  return (
    <ul className={classes["nav-links"]}>
      <li>
        <NavLink
          to="/afterlogin"
          className={({ isActive }) =>
            isActive ? `${classes.activeStyle}` : `${classes["nav-link"]}`
          }
        >
          Page One
        </NavLink>
      </li>
      <li>
        <NavLink
          to="myplace"
          className={({ isActive }) =>
            isActive ? `${classes.activeStyle}` : `${classes["nav-link"]}`
          }
        >
          Page Two
        </NavLink>
      </li>
      <li>
        <NavLink
          to="addplace"
          className={({ isActive }) =>
            isActive ? `${classes.activeStyle}` : `${classes["nav-link"]}`
          }
        >
          Page Three
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="auth"
          className={({ isActive }) =>
            isActive ? `${classes.activeStyle}` : `${classes["nav-link"]}`
          }
        >
          Authenticate
        </NavLink>
      </li> */}
    </ul>
  );
};

export default NavLinks;
