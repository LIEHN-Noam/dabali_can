import "./NavbarStyles.css";
import LogoDouble from "../assets/dabali-can.png"
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 200) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
      <div className={color ? "header header-bg" : "header"}>
        <Link to="/dabali_can">
          <img src={LogoDouble} alt="logo Can x Dabali Xpress"/>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
              <Link to="/dabali_xpress">DABALI<span>_</span>XPRESS</Link>
          </li>
          <li>
            <Link to="/produits">NOS<span>_</span>PRODUITS</Link>
          </li>
          <li>
            <Link to="/can_xpress">CAN<span>_</span>XPRESS</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#000" }} />
          ) : (
            <FaBars size={20} style={{ color: "#000" }} />
          )}
        </div>
      </div>
    
  );
};

export default Navbar;
