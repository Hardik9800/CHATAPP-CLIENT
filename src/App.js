// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatRoom from './components/Chat/ChatRoom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/chat" component={ChatRoom} />
          {/* Add additional routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
