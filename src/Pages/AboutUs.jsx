import React from 'react'
import Navbar from '../Components/Navbar'
import '../Pages/AboutUs.css'
import Footer from '../Components/Footer'
import OnlineChat from '../Components/OnlineChat';
import HeroAbout from '../Components/HeroAbout';
import Nav from '../Components/Nav';
import { Link } from 'react-router-dom';
import FloatingChat from '../Components/FloatingChat';
const AboutUs = () => {
  return (
    <section>
      <HeroAbout />

      <section className='company-div'>
          <div className='company-img'></div>
          <div className='content'>
            <h1>Our Company</h1>
            <p>EXPRESS ROYAL SERVICE LTD. is a company based in Cameroon with headquarters in Douala, with some 
               of its activities being coordinated by a group of Cameroonians based in Europe and Asia. We are 
               specialized in the provision of manpower to companies, Onshore and Offshore, Repairs and
               maintenance of broken vessels, Supply of fresh and dry provisions onboard vessels and bonded Stores, 
               Welding, plumbing, Civil works and we do make sure we protect the environment and health of all those 
               who are operating under our umbrella and the safety of the machines and structures we meet. Most of the
               manpower we supply obtains their training from our training Centres in  Cameroon and Nigeria.
            </p>
            <Link to="/services" class="button">View More</Link>
          </div>
      </section>

         <section className='company-div'>
          <div className='content'>
            <h1>Our Core Values</h1>
            <p>EXPRESS ROYAL SERVICE LTD. has some values in which the workers and the administration are so committed to. These values do help the company to
               maintain the quality of their services and products. These values are the Fear of God, Honesty and Integrity. Trust and Team work.
               We believe in clear communication based on honest and sustanable business because we are deeply about our clients, suppliers and profession. This is the standard that we live and breathe to ensure our clients get a worry free consistent services.     
            </p>
            <Link to="/services" class="button">View More</Link>
          </div>
            <div className='value-img'></div>
      </section>

       <section className='company-div'>
          <div className='headquarter-img'></div>
          <div className='content' id='head-q-content'>
            <h1>Our HeadQuarters</h1>
            <p>Ron point Bonatone diedo Douala Cameroon BP 47 36 Douala Cameroon
               TEL.: +237 675 99 72 91
            </p>
            <Link to="/services" class="button">View More</Link>
          </div>
      </section>

         <section className='company-div'>
          <div className='content'>
            <h1>Our Commitment</h1>
            <p>We have not other commitment than to render happiness to our corporate, organisational and 
              individual clients. We are committed to rendering 
              the best of our expertise to enhance their organisations and businesses. This is our passion - 
              to be of the best service to our customers.
            </p>
            <Link to="/services" class="button">View More</Link>
          </div>
            <div className='Commitment-img'></div>
      </section>
    <FloatingChat />
    <Footer />
      
    </section>
  )
}

export default AboutUs