import React from 'react'
import { RiCustomerService2Line } from 'react-icons/ri'
import { SlCallIn } from 'react-icons/sl'
import mechanics from '../images/mechanics.jpg'
import shipchandling from '../images/shipchandling.jpg'
import maintenance from '../images/maintenance.jpg'

const ServSec2 = () => {
  return (
     <section class="service-sec_2">
        <main class="service-cont" id='service-cont_2'>
            <div class="service-list" id='service-list_3'>
                <div class="each-service" id='mechanics'>
                    <span class="each-img">
                        <img src={mechanics} alt="welding-img" />
                    </span>

                    <div class="each-title">
                        <h3>MECHANICS</h3>
                        <p>We do placement of mechanics on projects and plants and in our workshop in Bonaberi, 
                            we have machines that are used for the fabrication of parts and maintenance. We 
                            have experienced fitter machinist who works on these machines and are able to 
                            work on any piece or command from clients.
                        </p>
                    </div>

                </div>
                <div class="each-service" id='scaffold'>
                    <span class="each-img">
                        <img src={shipchandling} alt="tank-cleaning-img" />
                    </span>

                    <div class="each-title">
                        <h3>SHIPCHANDLING</h3>
                        <p>We are a certified shipchandling company based in Douala Cameroon aim in the supply 
                            of fresh and dry provisions, bonded stores, electrical stores and engine stores on 
                            board your vessels. We do supply spare parts, engine oil, chartering of vessels and 
                            above all maintenance and repairs of vessels in the port of Douala and at anchorage. 
                            We can also repair your broken equipment, overhaul engine and generators, inspection 
                            and service your LSAs, underwater inspection and cleaning. If you require any of these 
                            services in the port of Douala, do not hesitate to contact us. We also supply manpower. 
                            We prompt delivery either alongside or at anchorage and our prices are competitive. It 
                            should be noted that delivery at anchorage additional charges are incurred.
                        </p>
                    </div>

                </div>
                <div class="each-service" id='maintenance'>
                    <span class="each-img">
                        <img src={maintenance} alt="scaffolding-img" />
                    </span>

                    <div class="each-title">
                        <h3>MAINTENANCE</h3>
                        <p>We also help clients to do some maintenance on board vessels when they are in Cameroon. 
                            Maintenance works such as welding, painting, mechanical jobs, etc.
                        </p>
                    </div>

                </div>
            </div>
            <div class="contact-card" id='contact-card_2'>
                <div class="border-cont">
                    <SlCallIn class="contact-img" />
                    <p class="contact-p">EXPRESSROYAL <span>SERVICE</span> TECHNICAL SUPPORT</p>
                    <h6 class="contact-h6">Feel free to contact our technical support services and our dedicated staff will assist you.</h6>
                    <h1 class="contact-h1">+237 675 99 72 91</h1>
                    <h5 class="contact-h5">Phone: 09:00 - 17:00 Intercom: 24 / 24</h5>
                    <button class="contact-btn">FINANCE <RiCustomerService2Line class="contact-icon" /></button>
                </div>
            </div>
        </main>
     </section>
  )
}

export default ServSec2