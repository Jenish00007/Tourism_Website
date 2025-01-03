import React from 'react';
import './CSS/Login.css';

const LoginPage = () => {
  const backgroundImage = {
    backgroundImage: `url('./New.webp')`, // Replace 'New.jpg' with the correct path to your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={backgroundImage}>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Enter your email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Enter your password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#forgot-password" className="forgot-password">Forgot password?</a>
          </div>
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <p className="register">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
