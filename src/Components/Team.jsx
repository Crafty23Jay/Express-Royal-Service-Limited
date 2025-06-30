import React from 'react'
import './Team.css'
import Manager from '../images/manager.jpg'


const Team = () => {
  return (
    <section class="team-sec">
        <h3>OUR TEAM MEMBERS</h3>
        <main class="team-cont">
            <span class="mem-img">
                <img src={Manager} alt="manager img" />
            </span>
            <h4 class="mem-name">ACHIRI STEPHEN</h4>
            <p class="mem-post">Marketing Manager</p>
        </main>
    </section>
  )
}

export default Team