import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
export const Navbar = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <React.Fragment>
      <div className="header">

        
        <div className="menu-icon">
          <FaBars className="menu" onClick={showMenu} />
        </div>
        <nav className={active ? "slider active" : "slider"}>
          
          <ul>
            <div className="closed" onClick={showMenu}>
              <FaTimes className="close" />
            </div>
            <li onClick={showMenu}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={showMenu}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={showMenu}>
              <Link to="/service">Service</Link>
            </li>
            <li onClick={showMenu}>
              <Link to="/contact">Contact</Link>
            </li>
            <li className="mygreen" onClick={showMenu}>
              <a href="#"> Log in </a>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};
