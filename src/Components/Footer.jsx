import React from 'react'
import './Footer.css'
import { PiPhoneCallLight } from "react-icons/pi";
import { PiTimerLight } from "react-icons/pi";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <section class="f-cont">
        <div class="div-1">
            <PiPhoneCallLight class="f-icon"/>
            <div class="div-1-dtl">
                <h2>Have any questions?</h2>
                <h4>+237 675 99 72 91</h4>
            </div>
        </div>
        <div class="div-1">
            <PiTimerLight class="f-icon"/>
            <div class="div-1-dtl">
                <h2>Open Mon - Fri</h2>
                <h4>08:00 - 17:00</h4>
            </div>
        </div>
        <div class="div-1">
            <GoMail class="f-icon"/>
            <div class="div-1-dtl">
                <h2>Need some help?</h2>
                <h4 class="dtl-h4">shipservices. royalexpress@gmail.com</h4>
                <h4 class="dtl-h4">supply@royalexpress .com</h4>
            </div>
        </div>
    </section>
  )
}

export default Footer