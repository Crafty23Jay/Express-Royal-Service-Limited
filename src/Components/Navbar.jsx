import React, { useState, useEffect } from 'react'
import './Navbar.css'
import Logo from '../images/ERSL.png'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancelPresentation } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Navbar = () => {
  useEffect(()=> { AOS.init(); }, [])
  const [mobileNav, setMobileNav] = useState(false);
    const openMobileNav = () => {
      setMobileNav(!mobileNav)
    };

  return (
    <nav class="nav-bar">

        <main class="nav-content">
            <Link to="/">
              <img class="logo" src={Logo} alt="Logo" />
            </Link>

            <div class="nav-pages">
                <Link class="page-link" to="/">Home</Link>

                <Link class="page-link" to="/services">Services</Link>

                <Link class="page-link" to="/about">About Us</Link>
            </div>
            
            <div onClick={openMobileNav} class="toggle-icon-box">{ mobileNav ? 
        (< MdCancelPresentation class="toggle-icon-2"/>) : (<RxHamburgerMenu class="toggle-icon-1"/>) }</div>
      

      { mobileNav && <div class="side-bar-toggle"
      data-aos="fade-left"
      data-aos-duration="1000">
          <div class="nav-pages-toggle">
              <Link class="page-link-tgl" to="/">Home</Link>

              <Link class="page-link-tgl" to="/services">Services</Link>

              <Link class="page-link-tgl" to="/about">About Us</Link>
          </div>
        </div>}
      </main>
    </nav>
  )
}

export default Navbar