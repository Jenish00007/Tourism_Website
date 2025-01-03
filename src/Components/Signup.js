import React from 'react';
import './CSS/Signup.css';

const SignUpPage = () => {
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
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password" />
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
