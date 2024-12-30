import React, { useState } from 'react';
import './Login.css'; // Import the CSS file you created
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  // **Handle login logic for admin and user (without hardcoded credentials)**
  const handleLogin = (formData) => {
    // Replace these placeholders with your actual authentication logic
    // (e.g., API call to a secure backend)
    if (formData.email === 'admin@mail' && formData.password === '123') {
      console.log('Admin logged in!');
      navigate('/');
      
      // Redirect to admin dashboard or appropriate page
      // (implement redirect logic using React Router or similar)
    } else if (formData.email === 'user@mail' && formData.password === '123') {
      console.log('User logged in!');
      alert('User logged in!');
      navigate('/')
      // Redirect to user home page or appropriate page
    } else if (formData.email ==='counseller@mail' && formData.password ==='123' ){
        navigate('/');
    }else {
      console.error('Invalid login credentials');
      // Display an error message to the user
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen">
      <div className="card">
        {/* Logo */}
        <div className="logo-container">
          <div className="logo-text">
            <span className="text-green">/</span>
            <h1>SLTMOBILE</h1>
          </div>
          <span className="subtext">The Connection</span>
        </div>

        {/* Login Form */}
        <div className="space-y-6">
          <h2>Log in</h2>
          <p className="text-sm">
            Log in with data that you entered during your registration
          </p>

          <form onSubmit={handleSubmit} className="form">
            <div className="space-y-2">
              <label>Your email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address..."
                required
              />
            </div>

            <div className="space-y-2">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password..."
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label className="ml-2 text-sm">Remember me</label>
            </div>

            <button type="submit">
              Log in
            </button>
          </form>

          <div className="footer-links">
            <p>
              Don't have an account?{' '}
              <a href="#" className="text-green">
                Sign up
              </a>
            </p>
            <a href="#" className="text-green">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;