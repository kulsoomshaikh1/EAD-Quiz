import React from 'react'
import img from './logo.png' 

const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <div className='about-us-content'>
        <h1>About Us</h1>
        <p>
        Indulge your senses in a world of delectable delights at our bakery
        Our passion for baking, combined with the finest ingredients, creates
         an irresistible array of mouth-watering treats that promise to elevate 
         your culinary experience.
        </p>
      </div>
      <div className='Welcome-image'>
        <img src={img} alt='image' />
      </div>
    </div>
  )
}

export default Welcome
