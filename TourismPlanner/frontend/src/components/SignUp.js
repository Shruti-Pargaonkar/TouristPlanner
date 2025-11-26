import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import HomeNav from './HomeNav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

    let newErrors = {};

    if (!username.trim()) {
      newErrors.username = 'Please enter Username';
    } else if (username.length < 2 || username.length > 20) {
      newErrors.username = 'Username should be between 2 to 20 characters';
    }

    if (!email.trim()) {
      newErrors.email = 'Please enter Email';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Email should be in proper format';
    }

    if (!password.trim()) {
      newErrors.password = 'Please enter Password';
    } else if (!passwordPattern.test(password)) {
      newErrors.password = 'Password must be at least 8 characters long and contain at least one uppercase letter, lowercase letter, number, and special character';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:8080/user/register', {
          username,
          email,
          password,
          role
        });

        if (response.status === 200 || response.status === 201 || response.status === 204) {
          toast.success('Signed up successfully...');
          navigate('/login');
        } else {
          toast.error('An error occurred. Please try again.');
        }
      } catch (error) {
        console.error('Error while signing up:', error);
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div>
      <ToastContainer position="top-center" autoClose={2000} />
      <HomeNav />

      <div className="d-flex flex-column align-items-center justify-content-center vh-75 vw-75">
        <div className="card p-4 bg-warning" style={{ minWidth: '30rem' }}>
          <h2 className="mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {errors.username && <div className="invalid-feedback">{errors.username}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">Role</label>
              <select
                className="form-select"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
          <p className="mt-3">Already registered? <Link to="/login">Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
