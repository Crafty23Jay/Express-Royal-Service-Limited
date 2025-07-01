import React from 'react'
import './Team.css'
import Manager from '../images/manager.jpeg'


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
            <p class="mem-numb">Phone: +237 675 99 72 91</p>
        </main>
    </section>
  )
}

export default Team