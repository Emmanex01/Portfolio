import React, { useState } from 'react'
import './Header.css'
import HeaderPics from '../../assets/HeaderPics.jpeg'
import { FaLinkedin } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaBuromobelexperte } from "react-icons/fa";
import { BsFillPersonVcardFill } from "react-icons/bs";
import CV from './../../assets/CV/Nwanosike, Emmanuel Tochukwu_CV.pdf'

const Header = () => {
  // const [activeNav, setActiveNav] = useState("#Home")
  return (
    <div id='Home' className='Header_Container'>
      <h2>Hello, I'm</h2>
      <h1>Emmanuel Tochukwu</h1>
      <h2>Frontend Developer</h2>
      <div className='Header_Button'>
        <a download={CV}>
          <button>Download CV</button>
        </a>
        
        <button className='btn'>Let's Talk</button>
      </div>
      <div className="socialLink">
        <a href=""><FaLinkedin/></a>
        <a href=""><FaRegUser/></a>
        <a href=""><FaDribbble/></a>
        <div className='Line'></div>
      </div>
      <img src={HeaderPics} alt="Image" />
      <div className='Header_Logo'><p>Emmanex</p></div>
    </div>
  )
}

export default Header
