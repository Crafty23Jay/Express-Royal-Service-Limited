import React from 'react'
import '../Pages/Services.css'
import { Link } from 'react-router-dom'

const HeroSec = () => {
  return (
    <main class="home-hero">
            <div class="hero-cont">
                <h4>Express Royal Service Ltd.</h4>
                <h1>Great Shipping Services with Logistical Support & Technical Services</h1>
                <p>Bishu Engineering puts together a rich array of Services supported by Certified Staff and 
                    useful partnerships
                </p>
                <Link to="/services" class="home-hero-btn">START HERE</Link>
            </div>
        </main>
  )
}

export default HeroSec