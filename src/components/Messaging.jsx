import React, { useState, useEffect } from "react";
import io from "socket.io-client";


const socket = io("http://localhost:8000");

const Messaging = ({ username }) => {
  
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const handleMsgSubmit = (e) => {
    e.preventDefault();
    if(username && message) {
      socket.emit("sendMessage", { username, message });
      setMessage("");
      }
    };


  return (
    <div className='message-container'>
      <div className='username-message-container'>
        {username}
        </div>
        <form onSubmit={handleMsgSubmit}>
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message" />
        <button type="submit">Send</button>
      </form>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message.username}: {message.message}</li>
        ))}
      </ul> 
    </div>
  )
}

export default Messaging;