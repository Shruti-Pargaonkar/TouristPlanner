import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import HomeNav from './HomeNav';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setMessage('Please fill in all fields');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/registration', {
        username,
        email,
        password,
        role
      });
      if (response.status === 200 || response.status === 201 || response.status === 204) {
        setMessage('Signed up successfully...');
      } else {
        setMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error while signing up:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <HomeNav/>
    
    <div className="d-flex  flex-column align-items-center justify-content-center" >
      
      <div className="bg-warning card p-4" style={{minWidth:'30rem'}}>
        <h2 className="mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">Role</label>
            <select className="form-select" id="role" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
          {message && <p className="mt-3">{message}</p>}
        </form>
        <p className="mt-3">Already registered? <Link to="/login">Login here</Link></p>
      </div>
    </div>
    </div>
  );
}

export default SignUp;