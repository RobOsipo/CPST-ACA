import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavLinks.module.scss";

const NavLinks = (props) => {
  const activeStyle = {
    color: "white",
    backgroundColor: "#f8df00",
    borderColor: "#292929",
  };
  return (
    <ul className={classes["nav-links"]}>
      <li>
        <NavLink
          style={(isActive) => (isActive ? activeStyle : "undefined")}
          to="/"
          end
        >
          All Users
        </NavLink>
      </li>
      <li>
        <NavLink
          style={(isActive) => (isActive ? activeStyle : "undefined")}
          to="u1/places"
          end
        >
          My Places
        </NavLink>
      </li>
      <li>
        <NavLink to="places/new">Add Place</NavLink>
      </li>
      <li>
        <NavLink to="auth">Authenticate</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
