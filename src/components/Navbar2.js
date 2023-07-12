import LogoDouble from "../assets/dabali-can_blanc.png"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles2.css"
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar2 = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 500) {
          setColor(true);
        } else {
          setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header2 header-bg2" : "header2"}>
      <Link to="/dabali_can">
        <img src={LogoDouble} alt="logo Can x Dabali Xpress"/>
      </Link>
      <ul className={click ? "nav-menu2 active" : "nav-menu2"}>
        <li>
            <Link to="/dabali_xpress">DABALI<span className="invis">_</span>XPRESS</Link>
        </li>
        <li>
          <Link to="/produits">NOS<span className="invis">_</span>PRODUITS</Link>
        </li>
        <li>
          <Link to="/">CAN<span className="invis">_</span>XPRESS</Link>
        </li>
      </ul>
      <div className="hamburger2" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#000" }} />
        ) : (
          <FaBars size={20} style={{ color: "#000" }} />
        )}
      </div>
    </div>
  )
}

export default Navbar2
