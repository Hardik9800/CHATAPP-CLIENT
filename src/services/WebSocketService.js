// services/WebSocketService.js
import io from 'socket.io-client';

const socket = io(process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001');

const WebSocketService = {
  emit: (event, data) => {
    socket.emit(event, data);
  },

  // Add other WebSocket-related functions as needed
};

export default WebSocketService;
