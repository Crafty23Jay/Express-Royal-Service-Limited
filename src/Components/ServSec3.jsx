import React from 'react'
import { RiCustomerService2Line } from 'react-icons/ri'
import { SlCallIn } from 'react-icons/sl'
import scaffold from '../images/scaffolding.jpg';
import tank from '../images/tank.webp';
import welding from '../images/welding.jpg';

const ServSec3 = () => {
  return (
    <section class="service-sec_3">
        <main class="service-cont" id='service-cont_3'>
            <div class="service-list" id='service-list_3'>
                <div class="each-service">
                    <span class="each-img">
                        <img src={welding} alt="" />
                    </span>

                    <div class="each-title">
                        <h3>LOGISTICS</h3>
                        <p>We hire out Vehicles depending on the demand of our clients. We also hire out 
                            some of our materials  such as welding machines, compressors etc to clients 
                            on monthly bases. We have touristic cars,trucks buses with very experienced 
                            drivers who understand the country and landscape.
                        </p>
                    </div>

                </div>
                <div class="each-service">
                    <span class="each-img">
                        <img src={tank} alt="welding img" />
                    </span>

                    <div class="each-title">
                        <h3>GARBAGE REMOVAL</h3>
                        <p>We also remove garbage on board vessels of our clients on demand by the captain. We 
                            have designed garbage containers to do this job and this in done by placing a 
                            garbage removal orders to the company.
                        </p>
                    </div>

                </div>
                <div class="each-service">
                    <span class="each-img">
                        <img src={scaffold} alt="" />
                    </span>

                    <div class="each-title">
                        <h3>CIVIL ENGINEERING & MANPOWER</h3>
                        <h4>CIVIL ENGINEERING</h4>
                        <p>We do maintenance on vessel flushing  systems and painting. We do design and construct 
                            houses for our based in Cameroon. A client needs  to locate to us a piece of land and 
                            we will come out with a good plan of structure that can be elevated in that area
                        </p>
                        <h4>MAN POWER SUPPLY</h4>
                        <p>As already mentioned above we have trained and certify workers in so many domains.  A company 
                            just needs to place an order for these technicians and we will provide them under their control. 
                            For instance in SONARA Limbe where we have supplied manpower.We also supply manpower on-board 
                            vessels,  petrol platforms and barges (riggers, roustabouts,welders mechanics, safety officers, 
                            electricians, scaffold experts, etc.)
                        </p>
                    </div>

                </div>
            </div>

            <div class="contact-card" id='contact-card_3'>
                <div class="border-cont">
                    <SlCallIn class="contact-img" />
                    <p class="contact-p">BISHUENGINE <span>ERING</span> TECHNICAL SUPPORT</p>
                    <h6 class="contact-h6">Feel free to contact our technical support services and our dedicated staff will assist you.</h6>
                    <h1 class="contact-h1">+237 683 74 63 51</h1>
                    <h5 class="contact-h5">Phone: 09:00 - 17:00 Intercom: 24 / 24</h5>
                    <button class="contact-btn">TECH. SUPPORT <RiCustomerService2Line class="contact-icon" /></button>
                </div>
            </div>
        </main>
    </section>
  )
}

export default ServSec3