// components/Chat/UserList.js
import React from 'react';

function UserList() {
  // Retrieve and display the list of users in the chat room
  const users = [];

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
