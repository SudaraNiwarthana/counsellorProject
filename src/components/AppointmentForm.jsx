import React from 'react';
import styles from './AppointmentForm.module.css';

export default function AppointmentForm() {
  return (
    <div className={styles.container}>
      {/* Form Section */}
      <div className={styles.formSection}>
        <img
          src="https://placehold.co/1000x400"
          alt="Logo"
          className={styles.logo}
        />
        <h2>
          Meet with a <span className={styles.highlight}>counselor.</span>
        </h2>

        <form>
          <label>Your name (required)</label>
          <div className={styles.nameFields}>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>

          <label>Email (required)</label>
          <input type="email" placeholder="Email" required />

          <label>Phone</label>
          <div className={styles.phoneFields}>
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="Number" />
          </div>

          <label>Enter a reason for the call</label>
          <textarea placeholder="Enter a reason"></textarea>

          <label>Suggest Times When You’re Free to Talk</label>
          <div className={styles.timeFields}>
            <input type="text" placeholder="Date" />
            <input type="text" placeholder="Time" />
          </div>

          <button type="submit" className={styles.bookButton}>Book Now</button>
        </form>
      </div>

      {/* Contact Section */}
      <div className={styles.contactSection}>
        <img
          src="https://th.bing.com/th/id/OIP.mP1RB8xuQaHAvUkonYY6HwHaHK?w=202&h=194&c=7&r=0&o=5&pid=1.7"
          alt="Profile"
          className={styles.profilePic}
        />
        <div className={styles.contactInfo}>
          <p className={styles.jobTitle}>Full-stack Development</p>
          <p className={styles.name}>Mark Zuckerberg</p>

          <div className={styles.contactDetails}>
            <p>Contact Info</p>
            <p>+9471-1643570</p>
            <p>markzuckerberg@gmail.com</p>
          </div>

          <div className={styles.workingHours}>
            <p>Working Hours</p>
            <p>Monday - Friday</p>
            <p>9am - 4:30pm</p>
          </div>

          <div className={styles.officeLocation}>
            <p>Office Location</p>
            <p>1314 Jefferson St.</p>
            <p>Lynchburg, VA 24504</p>
          </div>

          <div className={styles.socialIcons}>
            {/* Replace with actual icons */}
            <span>📸</span> <span>📘</span> <span>✉️</span>
          </div>
        </div>
      </div>
    </div>
  );
}
