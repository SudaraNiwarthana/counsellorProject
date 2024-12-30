import React from 'react';
import './Landingpage.css';
import { FaCheckCircle as CheckCircle, FaCalendar as Calendar, FaRocket as Rocket, FaFacebook, FaInstagramSquare, FaTiktok } from 'react-icons/fa';
import logo2 from "../assets/Rectangle 24.png"
import logo3 from "../assets/newg.jpg"
import logo4 from "../assets/Group 17.png"







const LandingPagenew = () => {
  return (
    
    <div className="min-h-screen bg-white">
      
      <div className='girl'>
            <img src={logo3} alt="" />
          </div>
          <div className='girl'>
            <img src={logo4} alt="" />
          </div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h2>
            Join the World's<br/> best  
            <span className="highlight"> Counsulting</span> service
          </h2>
         
          <div className="search-bar">
            <input type="text" placeholder="Search for Your Counsellor" />
            <button className="search-btn">Search</button>
          </div>
          <div className="popular-tags">
            <br/>
            <span>Popular:</span>
            <span>Business • E-Commerce • Website</span>
          </div>
        </div>
       
      </div>

      {/* How It Works Section */}
      <div className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="stepa">
            <CheckCircle size={48} className="icon" />
            <h3>Choose Your Service</h3>
            <p>Select the specific consultation service that aligns with your business or technical needs.</p>
          </div>
          <div className="stepb">
            <Calendar size={48} className="icon" />
            <h3>Schedule a Session</h3>
            <p>Choose a date and time that fits your schedule for a one-on-one consultation.</p>
          </div>
          <div className="stepc">
            <Rocket size={48} className="icon" />
            <h3>Get Expert Advice</h3>
            <p>Engage with our experts and receive tailored advice to drive your project or business forward.</p>
          </div>
        </div>
      </div>

      {/* Get Started Section */}
      <div className="get-started">
        <h2>Get Started Today</h2>
       
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
           <img src={logo2} alt="" />
          </div>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Become a Counselor</a>
          </div>
          <div className="footer-socials">
            
           
           <div className="step4">
            <FaFacebook size={24} className="icon" />
           </div>
           <div className="step5">
            <FaInstagramSquare size={24} className="icon" />
           </div>
           <div className="step6">
            <FaTiktok size={24} className="icon" />
           </div>
           

          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPagenew;
