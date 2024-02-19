// components/Chat/ChatRoom.js
import React, { useEffect, useState } from 'react';
import WebSocketService from '../../services/WebSocketService';

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  useEffect(() => {
    // Listen for incoming messages and update the state
    WebSocketService.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });


  
    // Cleanup the WebSocket listener on unmount
    return () => {
      WebSocketService.off('message');
    };
  }, []);
  const handleSend = () => {
    // Send message to the chat room
    WebSocketService.emit('message', { content: message });
    // Clear the input field
    setMessage('');
  };

  return (
    <div>
      <h2>Chat Room</h2>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.content}</div>
        ))}
      </div>
      <div>
      <input type="text" placeholder="Type your message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
    </div>
  );
}

export default ChatRoom;
