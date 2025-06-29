import React from 'react'
import './Home.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { MdChat } from "react-icons/md";
import OnlineChat from '../Components/OnlineChat'
import { HiArrowLongRight } from "react-icons/hi2";
import HeroSec from '../Components/HeroSec';
import { HashLink } from 'react-router-hash-link';
import { ImFire } from "react-icons/im";
import { TbWashDryShade } from "react-icons/tb";
import { TbBuildingBurjAlArab } from "react-icons/tb";
import { BiSolidCarMechanic } from "react-icons/bi";
import { LiaShipSolid } from "react-icons/lia";
import { GrVmMaintenance } from "react-icons/gr";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { IoTrashBinOutline } from "react-icons/io5";
import { LuConstruction } from "react-icons/lu";
import { GrUserWorker } from "react-icons/gr";
import { PiAddressBook } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { RiContactsLine } from "react-icons/ri";
import Nav from '../Components/Nav';

const Home = () => {
    return(
        <section>

        <HeroSec />
        <section>
            <div class="services">
                <h1 class="header">Our Services</h1>
                <div class="services-section">
                    <div class="section">
                        <ImFire class="services-images"/>
                        {/* <img src="images/welding.png" alt="" class="services-images" /> */}
                        <p class="services-heading">WELDING SERVICES</p>
                        <p class="services-title">We have a Welding training centre in Bonaberi, Douala Cameroon, where we train and clarify welders</p>
                        <HashLink to="/services#welding" class="services-button"> LEARN MORE <HiArrowLongRight class="arrow-icon"/></HashLink>
                    </div>
                    <div class="section">
                        <TbWashDryShade  class="services-images"/>
                        {/* <img src="images/water tank.png" alt="" class="services-images" /> */}
                        <p class="services-heading">TANK CLEANING</p>
                        <p class="services-title">In collaboration with our international partners, Danduct Cleaning in Denmark, we have skillful tank cleaners</p>
                        <HashLink to="/services#tank" class="services-button"> LEARN MORE <HiArrowLongRight class="arrow-icon"/></HashLink>
                    </div>
                    <div class="section">
                        <TbBuildingBurjAlArab class="services-images"/>
                        {/* <img src="imageS/scaffolding.png" alt="" class="services-images" /> */}
                        <p class="services-heading">SCAFFOLDING</p>
                        <p class="services-title">We have trained scaffolders and scaffolding materials on rents. When a company need, to hire our scaffolding material, we send them with our scaffold experts to mount them</p>
                        <HashLink to="/services#scaffold" class="services-button"> LEARN MORE <HiArrowLongRight class="arrow-icon"/></HashLink>
                    </div>
                </div>
                <div class="services-section">
                    <div class="section">
                        <BiSolidCarMechanic class="services-images"/>
                        {/* <img src="imageS/mechanics.png" alt="" class="services-images" /> */}
                        <p class="services-heading">MECHANICS</p>
                        <p class="services-title">We do placements of skilled mechanics on projects and plants and in our workshop in Bonaberi, we have machines that are used for the fabrication of parts and maintenance.</p>
                        <HashLink to="/services#mechanics" class="services-button"> LEARN MORE <HiArrowLongRight class="arrow-icon"/></HashLink>
                    </div>
                    <div class="section">
                        <LiaShipSolid class="services-images"/>
                        {/* <img src="images/ship.png" alt="" class="services-images" /> */}
                        <p class="services-heading">SHIPCHANDLING</p>
                        <p class="services-title">This section actually concerns supplies to vessel. We do supply vessels with food stuff of all varieties and drinks, when they come to our parts in Cameroon for bisness.</p>
                        <HashLink to="/services#shipchandling" class="services-button"> LEARN MORE <HiArrowLongRight class="arrow-icon"/></HashLink>
                    </div>
                    <div class="section">
                        <GrVmMaintenance  class="services-images"/>
                        {/* <img src="images/maintainance.png" alt="" class="services-images" /> */}
                        <p class="services-heading">MAINTAINANCE</p>
                        <p class="services-title">We also help clients to do some maintenance on board vessels when they are in Cameroon. Maintenance works such as welding, painting, mechanical jobs, etc.</p>
                        <HashLink to="/services#maintenance" class="services-button"> LEARN MORE <HiArrowLongRight class="arrow-icon"/></HashLink>
                    </div>
                </div>
            </div>
            <div class="other-services">
                <div class="other-services-section">
                    <div class="section-2">
                        <MdOutlineEmojiTransportation class="services-images"/>
                        {/* <img src="images/logistics.png" alt="" class="services-images" /> */}
                        <p class="services-heading">LOGISTICS</p>
                        <p class="other-services-title">We hire out Vehicles depending on the demand of our clients. We also hire out some of our materials such as welding machines, compressors etc. to clients on monthly basis.</p>
                        <HashLink to="/services#logistics" class="other-services-button"> LEARN MORE <HiArrowLongRight class="arrow-icon"/></HashLink>
                    </div>
                    <div class="section-2">
                        <IoTrashBinOutline class="services-images"/>
                        {/* <img src="images/garbage.png" alt="" class="services-images" /> */}
                        <p class="services-heading">GARBAGE REMOVAL</p>
                        <p class="other-services-title">
                            We also remove garbage on board vessels of our clients on demand by the captain. We have designed garbage containers to do this job and this in done by placing a garbage removal order to the company.
                        </p>
                        <HashLink to="/services#gabaging" class="other-services-button"> LEARN MORE <HiArrowLongRight class="arrow-icon"/></HashLink>
                    </div>
                    <div class="section-2">
                        <LuConstruction class="services-images"/>
                        {/* <img src="images/engineering.png" alt="" class="services-images" /> */}
                        <p class="services-heading">CIVIL ENGINEERING</p>
                        <p class="other-services-title">We do maintenance on vessel flushing systems and painting. We do design and construct houses for our based in Cameroon.</p>
                        <HashLink to="/services#engineering" class="other-services-button"> LEARN MORE <HiArrowLongRight class="arrow-icon"/></HashLink>
                    </div>
                    {/* <div class="services-section"> */}
                    <div class="section-2">
                        <GrUserWorker  class="services-images"/>
                        {/* <img src="images/man power.png" alt="" class="services-images" /> */}
                        <p class="services-heading">MAN POWER SUPPLY</p>
                        <p class="other-services-title">We have trained and certify workers in a variety of domains. A company just needs to place an order for these technicians and we will provide them under their control.</p>
                        <HashLink to="/services#manpower" class="other-services-button"> LEARN MORE <HiArrowLongRight class="arrow-icon"/></HashLink> 
                    </div>
                    {/* </div> */}
                </div>
            </div>
            <div class="contact">
                <div class="left-contact">
                    <div class="contact-details">
                        <PiAddressBook class="contact-image"/>
                        {/* <img src="images/address.png" class="contact-image" /> */}
                        <div class="new-details">
                            <p class="left-contact-details">Address</p>
                            <p class="details">Douala, Cameroon</p>
                        </div>
                    </div>
                    <div class="contact-details">
                        <div>
                            <TfiEmail class="contact-image"/>
                            {/* <img src="images/email 2.png" class="contact-image" /> */}
                        </div>
                        <div class="new-details">
                            <p class="left-contact-details">Email</p>
                            <p class="details">shipservices. royalexpress@gmail .com</p>
                            <p class="details">supply@royalexpress .com</p>
                        </div>
                    </div>
                    <div class="contact-details">
                        <div>
                            <RiContactsLine class="contact-image"/>
                            {/* <img src="images/phone 1.png" class="contact-image" /> */}
                        </div>
                        <div class="new-details">
                            <p class="left-contact-details">Phone</p>
                            <p class="details">+237 675 99 72 91</p>
                        </div>
                    </div>
                </div>
                <div class="right-contact">
                    <input type="text" placeholder="Name" class="contact-input" />
                    <input type="text" placeholder="Email" class="contact-input" />
                    <input type="text" placeholder="Message" class="contacts-input" />
                    <button class="contact-button">SEND MESSAGE</button>
                </div>
            </div>
        </section>

        <OnlineChat />

        <Footer />

        </section>
    )
  
}

export default Home