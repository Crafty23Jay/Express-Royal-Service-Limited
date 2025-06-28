import React from 'react'
import './HeroAbout.css'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const HeroAbout = () => {
  return (
    <section class="sec-3-cont">
        <Nav />
        <h1>Express Royal Service Ltd.</h1>
        <p>
            The History of Reliability in Logistics, Shipping Services, Maintenance, 
            Mechanics and other Technical Services
        </p>
        <Link to="/services" class="hero-about-btn">CHECK OUR SERVICES NOW</Link>
    </section>
  )
}

export default HeroAbout