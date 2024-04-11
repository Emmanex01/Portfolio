import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import './Experience.css'

const Experience = () => {
  return (
    <div id='experience' className='Container'>
      <h3>What skill i have</h3>
      <h1>My Experience</h1>
      <div className='Experience_container'>
        <h1>Frontend Development</h1>
        <div className='box_container'>
          <div className='box_item'>
            <div className='icon'>
              <FaCheckCircle/>
            </div>
            <div className='skills'>
              <h2>HTML</h2>
              <h3>Experienced</h3>
            </div>
          </div>

          <div className='box_item'>
            <div className='icon'>
              <FaCheckCircle/>
            </div>
            <div className='skills'>
              <h2>CSS</h2>
              <h3>Experienced</h3>
            </div>
          </div>
        </div>

        <div className='box_container'>
          <div className='box_item'>
            <div className='icon'>
              <FaCheckCircle/>
            </div>
            <div className='skills'>
              <h2>JAVASCRIPT</h2>
              <h3>Experienced</h3>
            </div>
          </div>

          <div className='box_item'>
            <div className='icon'>
              <FaCheckCircle/>
            </div>
            <div className='skills'>
              <h2>TAILWINDCSS</h2>
              <h3>Experienced</h3>
            </div>
          </div>
        </div>

        <div className='box_container'>
          <div className='box_item'>
            <div className='icon'>
              <FaCheckCircle/>
            </div>
            <div className='skills'>
              <h2>REACTJS</h2>
              <h3>Experienced</h3>
            </div>
          </div>

          <div className='box_item'>
            <div className='icon'>
              <FaCheckCircle/>
            </div>
            <div className='skills'>
              <h2>GIT/GITHUB</h2>
              <h3>Experienced</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
