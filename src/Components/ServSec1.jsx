import React from 'react'
import { SlCallIn } from "react-icons/sl";
import { RiCustomerService2Line } from "react-icons/ri";
import welding from '../images/welding.jpg'
import tank from '../images/tank.webp'
import scaffold from '../images/scaffolding.jpg'

const ServSec1 = () => {
  return (
    <section class="service-sec_1">
        <main class="service-cont" id='service-cont_1'>
            <div class="service-list" id='service-list_1'>
                <div class="each-service" id='welding'>
                    <span class="each-img">
                        <img src={welding} alt="" />
                    </span>

                    <div class="each-title" >
                        <h3>WELDING</h3>
                        <p>We have a Welding training centre in Bonaberi, Douala Cameron, where we train 
                            and certify welders, Sheet metalist and pipe fitters. We train welders in: SMAW, 
                            TIG and MIG. The various certification houses we use are SGS, ABS, Veritas and most 
                            of our workers, mostly welders are being certified by these companies that are 
                            represented in  Cameroon. We do placement of these welders and fitters or projects 
                            onshore and offshore if demanded.
                        </p>
                    </div>

                </div>
                <div class="each-service" id='tank'>
                    <span class="each-img">
                        <img src={tank} alt="welding img" />
                    </span>

                    <div class="each-title">
                        <h3>TANK CLEANING</h3>
                        <p>In collaboration with our international partners, Danduct Cleaning in Denmark, 
                            we have skillful tank cleaners  who  we use in cleaning  tanks on vessels,  and 
                            stockage tanks of fuel  when requested by clients.
                        </p>
                    </div>

                </div>
                <div class="each-service" id='scaffold'>
                    <span class="each-img">
                        <img src={scaffold} alt="" />
                    </span>

                    <div class="each-title" >
                        <h3>SCAFFOLDING</h3>
                        <p>We have trained experts in scaffolding as well as specialized 
                            scaffolding material on rent at our site. According to the needs of any company, 
                            we remain at your service to hire out scaffolding material, accompanied by our very 
                            specialized staff to readily assist in mounting them. This is being coordinated by 
                            our technical department.
                        </p>
                    </div>

                </div>
            </div>
            <div class="contact-card" id='contact-card_1'>
                <div class="border-cont">
                    <SlCallIn class="contact-img" />
                    <p class="contact-p">EXPRESSROYAL <span>SERVICE</span> TECHNICAL SUPPORT</p>
                    <h6 class="contact-h6">Feel free to contact our technical support services and our dedicated staff will assist you.</h6>
                    <h1 class="contact-h1">+237 679 97 72 91</h1>
                    <h5 class="contact-h5">Phone: 09:00 - 17:00 Intercom: 24 / 24</h5>
                    <button class="contact-btn">TECH. SUPPORT <RiCustomerService2Line class="contact-icon" /></button>
                </div>
            </div>
        </main>
    </section>
  )
}

export default ServSec1