import React, { useState } from 'react';
import './NavBar.css';
import { FaBuromobelexperte } from "react-icons/fa";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";


const NavBar = () => {
    const [activeNav, setActiveNav] = useState("#Home");
  return (
    <nav className='NavContainer'>
        <a href="#Home" className={activeNav === "#Home" ? "active" : "" } onClick={() => setActiveNav("#Home")}><FaHome/></a>
        <a href="#About" className={activeNav === "#user" ? "active" : "" } onClick={() => setActiveNav("#user")}><FaRegUser/></a>
        <a href="#experience" className={activeNav === "#experience" ? "active" : "" } onClick={() => setActiveNav("#experience")}><FaBuromobelexperte/></a>
        <a href="#contact" className={activeNav === "#portfolio" ? "active" : "" } onClick={() => setActiveNav("#portfolio")}><BsFillPersonVcardFill/></a>
    </nav>
  )
}

export default NavBar
