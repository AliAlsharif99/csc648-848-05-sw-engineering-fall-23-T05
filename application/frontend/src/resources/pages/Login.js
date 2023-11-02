import React from 'react';

function Login() { 
  return (
    <div className="page-container">
      <div className="main-content">
        <h2 className="sign-up">Login</h2>
        <div className="signup-form">
          <form action="/registration" method="post">
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit" className="signup-btn">Submit</button>
          </form>
          <a href="/signup" className="login-link">Don't have an account? Signup now!</a>
        </div>
      </div>
    </div>
  );
}

export default Login;