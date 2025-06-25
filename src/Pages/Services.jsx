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


const Services = () => {
     useEffect(()=> {
    AOS.init();
  }, [])
  return (
    <section>
        <Navbar />
        <main class="hero">
            <div class="hero-cont">
                <h1>Great Shipping Services with Logistical Support & Technical Services</h1>
                <p>Bishu Engineering puts together a rich array of Services supported by Certified Staff and 
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

        <Footer />
    </section>
  )
}

export default Services