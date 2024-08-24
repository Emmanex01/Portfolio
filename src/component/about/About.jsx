import React from 'react'
import Me from '../../assets/HeaderPics.jpeg'
import './About.css'
import { FaRegUser } from "react-icons/fa";

const About = () => {
  return (
    <div  className='about'>
      <h3>Got to know</h3>
      <h1>About Me</h1>
      <div className='About_center'>
        <div className='image'>
            <img src={Me} alt="image" />
        </div>
        <div id='About' className='about_side'>
            <div className='details'>
                <div className='information'>
                    <FaRegUser/>
                    <h2>CodeAlpha</h2>
                    <h3>1 month of internship</h3>
                </div>
                <div className='information'>
                    <FaRegUser/>
                    <h2>Artificial Intelligence</h2>
                    <h3>years of working with AI tools</h3>
                </div>
                <div className='information'>
                    <FaRegUser/>
                    <h2>Innovixion Tech</h2>
                    <h3>1 month of internship</h3>
                </div>
            </div>
            <p>
                I am a dedicated Frontend Developer with a strong foundation in JavaScript, 
                React, and modern web development. I excel at creating intuitive, responsive, 
                and visually appealing interfaces that enhance user experience. 
                With a passion for problem-solving and continuous learning, I stay updated on 
                the latest industry trends to deliver high-quality, scalable web applications.
                I thrive in collaborative environments, translating design ideas into 
                seamless code and ensuring every project I work on meets and exceeds user 
                expectations. I'm eager to contribute my skills and creativity to a dynamic 
                team, driving innovation and excellence in web development.
            </p>
            <a href="#contact">Let's Talk</a> 
        </div>
      </div>
    </div>
  )
}

export default About
