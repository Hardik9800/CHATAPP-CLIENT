// services/WebSocketService.js
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const WebSocketService = {
  on: (event, callback) => {
    socket.on(event, callback);
  },

  off: (event) => {
    socket.off(event);
  },

  emit: (event, data) => {
    socket.emit(event, data);
  },
};

export default WebSocketService;
