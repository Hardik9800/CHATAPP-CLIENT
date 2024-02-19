import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../../services/AuthService';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await AuthService.login(username, password);
      console.log('Login successful:', response);
      setLoginSuccess(true);
      setTimeout(() => {
        history.push('/chat'); 
      }, 1000);
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>

      {loginSuccess && (
        <div>
          <p>Login successful. Redirecting...</p>
        </div>
      )}
    </div>
  );
}

export default Login;
