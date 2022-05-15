import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavLinks.module.scss";

const NavLinks = (props) => {
 
  return (
    <ul className={classes["nav-links"]}>
      <li>
        <NavLink
          to="/compose"
          className={({ isActive }) =>
            isActive ? `${classes.activeStyle}` : `${classes["nav-link"]}`
          }
        >
          Page One
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/read"
          className={({ isActive }) =>
            isActive ? `${classes.activeStyle}` : `${classes["nav-link"]}`
          }
        >
          Page Two
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="play"
          className={({ isActive }) =>
            isActive ? `${classes.activeStyle}` : `${classes["nav-link"]}`
          }
        >
          Page Three
        </NavLink>
      </li> */}
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
