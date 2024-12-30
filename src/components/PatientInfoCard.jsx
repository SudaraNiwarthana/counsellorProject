import React from 'react';
import { Search } from 'lucide-react';
// import { Card, CardContent } from '../components/ui/card';

const PatientInfoCard = () => {
  return (
    <div className="patient-info-card">
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search..." 
          className="search-input"
        />
        <Search className="search-icon" size={20} />
      </div>
      
      <div className="info-tags">
        <div className="notification-tag">
          <span className="notification-dot"></span>
          Notification
        </div>
        <div className="additional-info-tag">
          <span className="additional-info-dot"></span>
          Additional Information
        </div>
      </div>

      <Card className="card">
        <CardContent className="card-content">
          <div className="patient-details">
            <img 
              src="/api/placeholder/48/48" 
              alt="Patient"
              className="patient-avatar"
            />
            <div className="patient-info">
              <h2 className="patient-title">Patient Information</h2>
              <div className="info-details">
                <div className="info-item">
                  <span className="info-label">Name:</span>
                  <span className="info-value">Mark Zuckerberg</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Gender:</span>
                  <span className="info-value">Male</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Age:</span>
                  <span className="info-value">23</span>
                </div>
              </div>
            </div>
          </div>

          <div className="appointment-section">
            <h3 className="appointment-title">Schedule Appointment</h3>
            <div className="appointment-details">
              <div className="appointment-item">
                <span className="appointment-label">Date:</span>
                <span className="appointment-value">Oct 12, 2024</span>
              </div>
              <div className="appointment-item">
                <span className="appointment-label">Time:</span>
                <span className="appointment-value">14:00 - 14:30 PM</span>
              </div>
              <div className="appointment-item">
                <span className="appointment-label">Duration:</span>
                <span className="appointment-value">30 Minutes</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientInfoCard;
