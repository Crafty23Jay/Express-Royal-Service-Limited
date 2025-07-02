import React from 'react'
import './OnlineChat.css'
import { MdChat } from "react-icons/md";
import { Link } from 'react-router-dom';

const OnlineChat = () => {
  return (
    <main class="chat-cont">
        <div class="rectangle">Online Chat</div>
        <Link to="https://wa.link/q09pso">
          <button class="circle">
              <MdChat class="icon"/>
          </button>
        </Link>

    </main> 
  )
}

export default OnlineChat