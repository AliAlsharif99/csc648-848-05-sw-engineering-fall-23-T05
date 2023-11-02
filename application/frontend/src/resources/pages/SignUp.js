import React, { useState } from 'react';
import Navbar from '../Navbar'
import { Link, useNavigate } from 'react-router-dom';


function SignUp() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5005/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.status === 201) {
        alert('Registration successful!');
        navigate('/login'); // Using navigate function to redirect after sign up.
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Error during registration. Please try again later.');
    }
  };

  return (
    <div className="page-container">
    <div className="main-content">
      <h2 className="sign-up">Sign Up</h2>
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
            onChange={handleChange}
            value={formData.first_name}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.last_name}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            value={formData.password}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            onChange={handleChange}
            value={formData.confirmPassword}
          />
          <button type="submit" className="signup-btn">
            Create Account
          </button>
        </form>
        <a href="/login" className="login-link">Already have an account?</a>
      </div>
    </div>
    </div>
  );
}

export default SignUp;