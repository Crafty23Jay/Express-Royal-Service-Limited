import React, { useState } from 'react';
import './FloatingChat.css';
import { MdCancelPresentation } from "react-icons/md";
import { MdChat } from "react-icons/md";

function FloatingChat() {
  const [open, setOpen] = useState(false);

  const toggleChat = () => {
    setOpen(prev => !prev);
  };

  return (
    <main className='chat-cont'>
        <div class="rectangle">Online Chat</div>

        <div className="chat-container">
            <div title='WhatsApp' className={`chat-option whatsapp ${open ? 'show' : ''}`}>
                <a href="https://wa.link/oymsdv" target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp"></i>
                </a>
            </div>
            <div title='Gmail' className={`chat-option gmail ${open ? 'show' : ''}`}>
                <a href="mailto:shipservices.royalexpress@gmail.com">
                <i className="far fa-envelope"></i>
                </a>
            </div>
            <div className="chat-main" onClick={toggleChat}>
                { open ? (< MdCancelPresentation />) : (<MdChat />) }
            </div>
        </div>
    </main>
  );
}

export default FloatingChat;
