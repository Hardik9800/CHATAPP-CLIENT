import React from 'react';
import { useHistory } from 'react-router-dom';

function LandingPage() {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push('/login'); // Replace '/login' with the actual path to your login page
  };

  const handleRegisterClick = () => {
    history.push('/register'); // Replace '/register' with the actual path to your register page
  };

  return (
    <div>
      <h2>Welcome</h2>
      <p>To continue, please login or register.</p>

      <div>
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleRegisterClick}>Register</button>
      </div>

   
    </div>
  );
}

export default LandingPage;
