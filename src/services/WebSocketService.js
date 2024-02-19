// services/WebSocketService.js
import io from 'socket.io-client';

const socket = io('https://chatapp-server-7883.onrender.com/');

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
