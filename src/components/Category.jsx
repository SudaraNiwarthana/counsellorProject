import React from 'react';
import './Category.css';
import banner from '../assets/c1.png';
import profile from '../assets/Group 61.png'

const ServiceCard = ({ icon, title, description, price }) => (
  <div className="service-card">
    <div className="service-card-content">
      <div className="service-icon">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <div className="service-info">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
      </div>
      <div className="service-price-action">
        <span className="service-price">${price}</span>
        <button className="request-call-button">Request a call</button>
      </div>
    </div>
  </div>
);

const CategoryButton = ({ label }) => (
  <button className="category-button">
    {label}
  </button>
);

const ServiceListingPage = () => {
  const categories = [
    "Custom Logo Design",
    "3D Logos",
    "Corporate Logo Design",
    "Typography-based Logos",
    "Minimalist Logos",
    "Animated Logos",
    "Iconic Logos",
    "Vintage Logos"
  ];

  const services = [
    {
      icon: profile,
      title: "Web Design (UI/UX)",
      description: "Web design (UI/UX) focuses on creating visually appealing, user-friendly, and functional websites that provide a seamless user experience. UI (User Interface) design involves crafting the layout, colors....",
      price: 10
    },
    {
      icon: profile,
      title: "API Integration",
      description: "API Integration involves connecting two or more software systems through an Application Programming Interface (API), enabling them to communicate and share data seamlessly....",
      price: 10
    }
  ];

  return (
    <div className="service-page-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img 
          src={banner} 
          alt="Logo Design Banner" 
          className="hero-image"
        />
        <h1 className="hero-title">Logo Design</h1>
      </div>

      {/* Categories Grid */}
      <div className="categories-grid">
        {categories.map((category, index) => (
          <CategoryButton key={index} label={category} />
        ))}
      </div>

      {/* Services List */}
      <div className="services-list">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            price={service.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceListingPage;