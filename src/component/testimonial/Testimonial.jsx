import React from 'react';
import './Testimonial.css'
import pics from '../../assets/HeaderPics.jpeg'

const Testimonial = () => {
  return (
    <div className='testimonial_container'>
      <h3>Reviews from clients</h3>
      <h1>Testimonials</h1>
      <div className="Cards_container">
        <div className="cards">
            <div className="cards_image">
                <img src={pics} alt="Cards image" />
            </div>
            <h3>Emmanuel Tochukwu</h3>
            <p>With a keen eye for detail and a commitment to
                continuous learning, I am eager to contribute my skills and
                enthusiasm to a dynamic team environment, while seeking
                opportunities for growth and development within the industry.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
