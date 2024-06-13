import React from 'react'
import './Portfolio.css'
import Dashboard from '../../assets/Admindashboard.jpg'
import BackgroundGen from '../../assets/Backgroundgenerator.jpg'
import LandingPage from '../../assets/LandingPage.jpg'
import Quizapp from '../../assets/quizapp.jpg'
import Todo from '../../assets/todo.jpg'
import Weather from '../../assets/weatherapp.jpg'

const Portfolio = () => {
  return (
    <div className='Portfolio_container'>
      <h3>My Recent Work</h3>
      <h1>Portfolio</h1>
      <div className='Portfolio_content'>
        
            <div className="conten">
                <div className="portfolio_image">
                    <img src={Dashboard} alt="Image" />
                </div>
                <h1>
                    Basic Admin Dashboard And Financial Visualization
                </h1>
                <div className="online">
                    <a href="">
                        GITHUB
                    </a>
                    <a href="https://emmanex-codealpha-backgroundgenerator.netlify.app/">
                        LIVE DEMO
                    </a>
                </div>
            </div>

            <div className="conten">
                <div className="portfolio_image">
                    <img src={LandingPage} alt="Image" />
                </div>
                <h1>
                    An Online Class Landing Page
                </h1>
                <div className="online">
                    <a href="">
                        GITHUB
                    </a>
                    <a href="https://codealpha-landingpage.netlify.app/">
                        LIVE DEMO
                    </a>
                </div>
            </div>

            <div className="conten">
                <div className="portfolio_image">
                    <img src={BackgroundGen} alt="Image" />
                </div>
                <h1>
                    Bankground Generator
                </h1>
                <div className="online">
                    <a href="">
                        GITHUB
                    </a>
                    <a href="https://emmanex-codealpha-backgroundgenerator.netlify.app/">
                        LIVE DEMO
                    </a>
                </div>
            </div>

            <div className="conten">
                <div className="portfolio_image">
                    <img src={Todo} alt="Image" />
                </div>
                <h1>
                    Todo List App
                </h1>
                <div className="online">
                    <a href="">
                        GITHUB
                    </a>
                    <a href="https://codealpha-landingpage.netlify.app/">
                        LIVE DEMO
                    </a>
                </div>
            </div>
            <div className="conten">
                <div className="portfolio_image">
                    <img src={Weather} alt="Image" />
                </div>
                <h1>
                    Weather App
                </h1>
                <div className="online">
                    <a href="">
                        GITHUB
                    </a>
                    <a href="https://codealpha-landingpage.netlify.app/">
                        LIVE DEMO
                    </a>
                </div>
            </div>

            <div className="conten">
                <div className="portfolio_image">
                    <img src={Quizapp} alt="Image" />
                </div>
                <h1>
                    Basic Quiz App
                </h1>
                <div className="online">
                    <a href="">
                        GITHUB
                    </a>
                    <a href="https://codealpha-landingpage.netlify.app/">
                        LIVE DEMO
                    </a>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Portfolio
