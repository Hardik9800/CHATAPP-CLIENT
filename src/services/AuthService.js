// services/AuthService.js
import axios from 'axios';

const AuthService = {
  login: async (username, password) => {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL || 'https://chatapp-server-7883.onrender.com/'}/auth/login`, {
      username,
      password,
    });
    return response.data;
  },

  register: async (username, password) => {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL || 'https://chatapp-server-7883.onrender.com/'}/auth/register`, {
      username,
      password,
    });
    return response.data;
  },
};

export default AuthService;
