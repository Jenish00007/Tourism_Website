import React from "react";
import './CSS/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
        </div>
        <h2>Log In</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="johndoe@xyz.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="********" />
          </div>
          <div className="options">
            <div>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
        <div className="social-login">
          <p>Or Sign In with</p>
          <div className="social-icons">
            <a href="/auth/facebook" className="facebook-icon">F</a>
            <a href="/auth/google" className="google-icon">G</a>
            <a href="/auth/apple" className="apple-icon">A</a>
          </div>
        </div>
        <p className="signup-link"> Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
