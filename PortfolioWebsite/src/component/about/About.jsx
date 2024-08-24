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
                To ascertain proficiency levels, we defined a 
                desirable level of proficiency in each of the 56 
                DELTAs (see appendix for details), then devised a 
                psychometric questionnaire to assess respondents’ 
                proficiency against this bar. Eighteen thousand 
                people from 15 countries completed the online 
                questionnaire and were given a score on a scale of 
                0 to 100 for each DELTA (see the sidebar, “Example: 
                Evaluating proficiency levels for DELTAs”).
            </p>
            <a href="#contact">Let's Talk</a> 
        </div>
      </div>
    </div>
  )
}

export default About
