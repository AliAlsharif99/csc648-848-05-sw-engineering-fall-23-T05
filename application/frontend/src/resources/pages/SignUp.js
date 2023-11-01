import React from 'react';
import Navbar from '../Navbar'
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="main-content">
      <h2 className="sign-up">Sign Up</h2>
      <div className="signup-form">
        <form action="/registration" method="post">
          <input type="text" name="first_name" placeholder="First Name" required />
          <input type="text" name="last_name" placeholder="Last Name" />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
          <button type="submit" className="signup-btn">Submit</button>
        </form>
        <a href="/login" className="login-link">Already have an account? Login now!</a>
      </div>
    </div>
  );
}

export default SignUp;