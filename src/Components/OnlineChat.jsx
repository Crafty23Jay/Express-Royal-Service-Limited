import React from 'react'
import './OnlineChat.css'
import { MdChat } from "react-icons/md";

const OnlineChat = () => {
  return (
    <main class="chat-cont">
        <div class="rectangle">Online Chat</div>
        <botton class="circle">
            <MdChat class="icon"/>
        </botton>
    </main>
  )
}

export default OnlineChat