import React, {useState} from "react";
import { Link } from "react-router-dom";

import MainHeader from "./localComponents/MainHeader/MainHeader";
import NavLinks from "./localComponents/NavLinks/NavLinks";
import SideDrawer from "./localComponents/SideDrawer/SideDrawer";
import Backdrop from './localComponents/Backdrop/Backdrop'
import Logostache from '../../icons/LogoStache/LogoStache'
import "./MainNavigation.css";


const MainNavigation = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)


    const openDrawerHandler = () => {
        setDrawerIsOpen(true)
    }

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false)
    }

  return (
    <>
    {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <span className="navigation__span"><h1 className="main-navigation__title">
          <Link to="/choose">Post-It</Link>
          
          
        </h1>
        <Logostache width={40} height={40} customClass="white-logo" /></span>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
