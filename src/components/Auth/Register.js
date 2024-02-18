// components/Auth/Register.js
import React, { useState } from 'react';
import AuthService from '../../services/AuthService';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await AuthService.register(username, password);
      console.log('Registration successful:', response);
      // Redirect or perform other actions after successful registration
    } catch (error) {
      console.error('Registration error:', error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
