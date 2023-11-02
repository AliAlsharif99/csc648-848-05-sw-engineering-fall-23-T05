import React, { useState } from 'react';
import Navbar from '../Navbar'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://3.19.239.176:5005/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Logged in successfully!', data);
        navigate('/home'); // Adjust the route as needed
      } else {
        alert('Failed to log in');
      }
    } catch (error) {
        alert('Error during login:', error);
    }
  };

  return (
    <div className="page-container">
    <div className="main-content">
      <h2 className="sign-up">Login</h2>
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" name="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="signup-btn">Submit</button>
        </form>
        <Link to="/signup" className="login-link">Don't have an account?</Link>
      </div>
      </div>
      </div>
  );
}

export default Login;