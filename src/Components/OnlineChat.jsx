import React from 'react'
import './OnlineChat.css'
import { MdChat } from "react-icons/md";
import { Link } from 'react-router-dom';

const OnlineChat = () => {
  return (
    <main class="chat-cont">
        <div class="rectangle">Online Chat</div>
        <Link to="https://wa.link/q09pso">
          <botton class="circle">
              <MdChat class="icon"/>
          </botton>
        </Link>
    </main> 
  )
}

export default OnlineChat