import React from "react";
import './CSS/Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="John" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Doe" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="johndoe@xyz.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="********" />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="********" />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="signin-link">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
