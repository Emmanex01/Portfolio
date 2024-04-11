import React from 'react'
import Me from '../../assets/HeaderPics.jpeg'
import './About.css'
import { FaRegUser } from "react-icons/fa";

const About = () => {
  return (
    <div  className='about'>
      <h2>Got to know</h2>
      <h1>About Me</h1>
      <div className='About_center'>
        <div className='image'>
            <img src={Me} alt="image" />
        </div>
        <div id='About' className='about_side'>
            <div className='details'>
                <div className='information'>
                    <FaRegUser/>
                    <h2>Experience</h2>
                    <h3>1+ year of working</h3>
                </div>
                <div className='information'>
                    <FaRegUser/>
                    <h2>Experience</h2>
                    <h3>1+ year of working</h3>
                </div>
                <div className='information'>
                    <FaRegUser/>
                    <h2>Experience</h2>
                    <h3>1+ year of working</h3>
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
            <button>Let's Talk</button>
        </div>
      </div>
    </div>
  )
}

export default About
