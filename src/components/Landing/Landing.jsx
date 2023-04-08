import React from 'react'
import Section from '../Section/Section'
import "./Landing.css"

export default function Landing() {
  return (
    <div className="landing">
      <div className='container'>
        <div className='info'>
          <h1>Welcome to Recipe Resource! Discover delicious recipes from around the world and unleash your inner chef.</h1>
          <p>Join us in the kitchen. Let's cook up something amazing!</p>
          <button>Get Started!</button>
        </div>
        <div class='img background-img'></div>
      </div>
      <div className="sections">
        <Section heading={"Discover More About Recipe Resource"}/>
      </div>
    </div>
  )
}
