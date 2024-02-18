// components/Chat/ChatInput.js
import React, { useState } from 'react';
import WebSocketService from '../../services/WebSocketService';

function ChatInput() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // Send message to the chat room
    WebSocketService.emit('message', { content: message });
    // Clear the input field
    setMessage('');
  };

  return (
    <div>
      <input type="text" placeholder="Type your message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default ChatInput;
