import React from 'react'
import '../Pages/Services.css'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Navbar from './Navbar'

const HeroSec = () => {
  return (
    <main class="home-hero">
            <div class="hero-cont">
              <Nav />
              <h4>Express Royal Service Ltd.</h4>
              <h1 id='home-header'>Welcome to the Great world of shipping services with 
                logistics support & Technical services
              </h1>
              <p>Express Royal Service Limited puts together a rich array of Services 
                supported by Certified Staff and useful partnerships
              </p>
              <Link to="/services" class="home-hero-btn">START HERE</Link>
            </div>
        </main>
  )
}

export default HeroSec