import React from 'react';
import './Login.css'; // We'll create this CSS file

const Login = () => {  // Capitalized component name
  return (
    <div className="login-container">
      <h2 className="login-title">Please Log In</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            className="form-input"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            className="form-input"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-button">Log In</button>
      </form>
    </div>
  );
};

export default Login;