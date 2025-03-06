import React, { useState } from 'react';
import Login from './Login';

const Logout = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogin = (user) => {
        setLoggedInUser(user);
    };

    const handleLogout = () => {
        setLoggedInUser(null);
    };

    return (
        <div>
            {loggedInUser ? (
                <div>
                    <p>Welcome, {loggedInUser.emailid}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
};

export default Logout;
