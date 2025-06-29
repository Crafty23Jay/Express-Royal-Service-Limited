import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <nav class="nav-cont">
        <Link to="/" class="page">Home</Link>
        <Link to="/services" class="page">Our Services</Link>
        <Link to="/about" class="page">About Us</Link>
    </nav>
  )
}

export default Nav