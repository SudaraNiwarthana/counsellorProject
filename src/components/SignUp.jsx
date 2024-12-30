import React, { useState } from 'react';
import './SignUp.css';
import signup from '../assets/122.jpg'


const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    // If valid, submit form
  };

  return (
    <>
    <div className='container'>
      <div>
        <img src={signup} alt="coverimg" className='imgcover'/>
      </div>
      
      <div className="signup-container">
      
        <div className="header-section">
          <img 
            src="/logo.png" 
            alt="SLT MOBITEL The Connection" 
            className="logo"
          />
          <h1>Sign up</h1>
          <p>Give us some of your information to get access to SLT Mobitel</p>
        </div>


        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label>Your name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name.."
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Your email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address..."
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>password..</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password..."
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Confirm password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password.."
              className="form-input"
            />
          </div>

          <div className="terms-container">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />
            <label className="terms-text">
              By creating and account you agree to the{' '}
              <a href="#">term of use</a> and our{' '}
              <a href="#">privacy policy</a>
            </label>
          </div>

          <button type="submit" className="submit-button">
            Create account
          </button>

          <div className="login-section">
            <span>Already have an account?</span>
            <a href="#" className="login-link">Log in</a>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignUp;