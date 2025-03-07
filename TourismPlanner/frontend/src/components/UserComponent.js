// UserComponent.js
import React from 'react';

const UserComponent = ({ user }) => {
  return (
    <div>
      <h2>User Details</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Mobile Number: {user.mobilenumber}</p>
    </div>
  );
};

export default UserComponent;
