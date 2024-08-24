import React from 'react'
import './Service.css'
import { FaGoogleDrive } from "react-icons/fa";

const Service = () => {
  return (
    <div className="Service_Container">
      <h3>What I offer</h3>
      <h1>Services</h1>
      <div className='Timeline'>
        <div className="Timeline_Container right">
            <div className="text_box ">
                <h1>Responsive Web Design</h1>
                <p>
                    Creating website that works and looks good in various devices and screen sizes
                </p>
            </div>
            <span>
                <FaGoogleDrive/>
            </span>
        </div>

        <div className="Timeline_Container left">
            <div className="text_box">
                <h1>HTML/CSS Development</h1>
                <p>
                    Creating visually appealing web page that is well structured and styled using Html and Css
                </p>
            </div>
            <span>
                <FaGoogleDrive/>
            </span>
        </div>
            
        <div className="Timeline_Container right">
            <div className="text_box">
                <h1>Cross Compatibility Testing</h1>
                <p>
                    Ensuring that the website works properly and display correctly across web browsers such as chrome, Firefox and Internet Explorer
                 </p>
            </div>
            <span>
                <FaGoogleDrive/>
            </span>
        </div>

        <div className="Timeline_Container left">
            <div className="text_box">
                <h1>Performance Optimization</h1>
                <p>
                    Optimizing website performance by minimizing loading times, reucing files sizes, and implementing best practices for efficient frontend development
                </p>
            </div>
            <span>
                <FaGoogleDrive/>
            </span>
        </div>
           
        <div className="Timeline_Container right">
             <div className="text_box">
                <h1>Version Control</h1>
                <p>
                    Managing code changes and collaboration using version control system like Git and GitHub
                </p>
            </div>
            <span>
                <FaGoogleDrive/>
            </span>
        </div>

            
        <div className="Timeline_Container left">
            <div className="text_box">
                <h1>Testing and Debugging</h1>
                <p>
                    Conducting thorogh testing and debugging of frontend code to identify and fix any bugs
                </p>
            </div>
            <span>
                <FaGoogleDrive/>
            </span>
        </div>
           
      </div>
    </div>
  )
}

export default Service