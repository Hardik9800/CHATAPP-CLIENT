// components/Chat/UserList.js
import React, { useEffect, useState } from 'react';
import WebSocketService from '../../services/WebSocketService';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Listen for updates to the user list and update the state
    WebSocketService.on('userList', (userList) => {
      setUsers(userList);
    });

    // Cleanup the WebSocket listener on unmount
    return () => {
      WebSocketService.off('userList');
    };
  }, []);

  return (
    <div>
      <h3>Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
