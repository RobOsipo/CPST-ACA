import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import classes from "./NavLinks.module.scss";


const NavLinks = (props) => {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        document.cookie = "Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        document.cookie = "Registered=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        dispatch({ type: 'FLIPFLAG'})
    }
 
  return (
    <ul className={classes["nav-links"]}>
      <li>
        <NavLink
          to="/compose"
          className={({ isActive }) =>
            isActive ? `${classes.activeStyle}` : `${classes["nav-link"]}`
          }
        >
          Compose Post
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/read"
          className={({ isActive }) =>
            isActive ? `${classes.activeStyle}` : `${classes["nav-link"]}`
          }
        >
          Read Post
        </NavLink>
      </li>
      <li className={classes.button}>
        <button onClick={logoutHandler} className={classes.button}><span className={classes.logout}>Logout</span></button>
      </li>
      {/* <li>
        <NavLink
          to="play"
          className={({ isActive }) =>
            isActive ? `${classes.activeStyle}` : `${classes["nav-link"]}`
          }
        >
          Page 4
        </NavLink>
      </li> */}
     
    </ul>
  );
};

export default NavLinks;
