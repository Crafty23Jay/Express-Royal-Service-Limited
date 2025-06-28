import React from 'react'
import '../Pages/Services.css'
import Navbar from '../Components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Footer from '../Components/Footer';
import ServSec1 from '../Components/ServSec1';
import ServSec2 from '../Components/ServSec2';
import ServSec3 from '../Components/ServSec3';
import OnlineChat from '../Components/OnlineChat';
import Nav from '../Components/Nav';


const Services = () => {
     useEffect(()=> {
    AOS.init();
  }, [])
  return (
    <section>
        
        <main class="hero" id='services-hero'>
            <div class="hero-cont" id='service-hero'>
                <Nav />
                <h1>Great Shipping Services with Logistical Support & Technical Services</h1>
                <p>Express Royal Service Limited puts together a rich array of Services supported by Certified Staff and 
                    useful partnerships
                </p>
            </div>
        </main>
        <section class="services">
            <h1>Our Process & Services</h1>
            <p>Do you want to benefit from our quality shipping, logistical support and technical services? 
                Check here below
            </p>

            <ServSec1 />
            <ServSec2 />
            <ServSec3 />
           
        </section>

        <OnlineChat />

        <Footer />
    </section>
  )
}

export default Services