import React from 'react';
import styles from './ProfessionalGuidance.module.css';
import web from '../assets/Ellipse 18.png';
import logo from '../assets/Ellipse 23.png';
import social from '../assets/Ellipse 22.png';
import SEO from '../assets/Ellipse 21.png';
import photo from '../assets/Ellipse 20.png';
import graphic from '../assets/Ellipse 19.png';
import banner from '../assets/s4 1.png';

export default function ProfessionalGuidance() {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <img
          src={banner}
          alt="Business Meeting"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <h1>
            Guidance <span className={styles.subtitle}>from</span><br />
            <span className={styles.mainTitle}>top-tier startup professionals</span>
          </h1>
        </div>
      </div>

      <div className={styles.identifySection}>
        <button className={styles.identifyButton}>Identify your professional</button>
      </div>

      <div className={styles.servicesContainer}>
        <div className={styles.serviceBox}>
          <div className={styles.serviceText}>Website Development</div>
           <img
            src={web}
            alt="Website Development"
            className={styles.serviceImage}
          />
        </div>
        <div className={styles.serviceBox}>
          <div className={styles.serviceImagePlaceholder}>Logo Design</div>
          <img
            src={logo}
            alt="Website Development"
            className={styles.serviceImage}
          />
        </div>
        <div className={styles.serviceBox}>
          <div className={styles.serviceImagePlaceholder}>Social Media & Marketing</div>
          <img
            src={social}
            alt="Website Development"
            className={styles.serviceImage}
          />
        </div>
        <div className={styles.serviceBox}>
          <div className={styles.serviceImagePlaceholder}>SEO</div>
          <img
            src={SEO}
            alt="Website Development"
            className={styles.serviceImage}
          />
        </div>
        <div className={styles.serviceBox}>
          <div className={styles.serviceImagePlaceholder}>Photoshop & Illustrator</div>
          <img
            src={photo}
            alt="Website Development"
            className={styles.serviceImage}
          />
        </div>
        <div className={styles.serviceBox}>
          <div className={styles.serviceImagePlaceholder}>Graphic Design</div>
          <img
            src={graphic}
            alt="Website Development"
            className={styles.serviceImage}
          />
        </div>
      </div>
    </div>
  );
}
