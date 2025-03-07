import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import HomeNav from './HomeNav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Email and password validations
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

    if (!emailPattern.test(email)) {
      setMessage('Please enter a valid email');
      return;
    }

    if (!passwordPattern.test(password)) {
      setMessage('Password must be at least 8 characters long and contain at least one uppercase letter, lowercase letter, number, and special character');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/login', {
        email,
        password
      });

      if (response.status === 200 && response.data.role === 'ADMIN') {
        // Redirect to admin dashboard
        toast.success("Admin Login successful", {
      
          onClose: () => {
            navigate('/admin');
          }
        });
      } else if (response.status === 200 && response.data.role === 'USER') {
        // Redirect to user dashboard
        sessionStorage.setItem('userId', response.data.id);
        
        toast.success("User Login successful", {
      
          onClose: () => {
            navigate('/user');
          }
        });
      } else {
        
        toast.error('Invalid email or password');
      }
    } catch (error) {
      console.error('Error while logging in:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <ToastContainer position="top-center" autoClose={2000} />
      <HomeNav />
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 vw-100">
        <div className="card p-4 bg-info" style={{ minWidth: '25rem' }}>
          <h2 className="mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            {message && <p className="mt-3">{message}</p>}
          </form>
          <p className="mt-3">Not registered yet? <Link to="/signup">Sign Up here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
