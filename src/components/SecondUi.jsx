import React, { useState } from 'react';
import styles from './SecondUi.module.css';
import banner from '../assets/c3 1.png'

export default function SecondUi() {
  const [projects] = useState([
    {
      id: '1001',
      name: 'Sudara',
      nic: '200133601113',
      status: 'completed',
      startDate: '2024-09-03',
      endDate: '2024-09-20'
    },
    {
      id: '1002',
      name: 'Sudara',
      nic: '200133601113',
      status: 'pending',
      startDate: '2024-09-05',
      endDate: '2024-09-17'
    },
    {
      id: '1003',
      name: 'Sudara',
      nic: '200133601113',
      status: 'pending',
      startDate: '2024-09-07',
      endDate: '2024-09-15'
    },
    {
      id: '1004',
      name: 'Sudara',
      nic: '200133601113',
      status: 'completed',
      startDate: '2024-09-10',
      endDate: '2024-09-15'
    }
  ]);

  const pendingCount = projects.filter(p => p.status === 'pending').length;
  const approvedCount = 2; // Hardcoded as per image
  const ongoingCount = 1; // Hardcoded as per image
  const completedCount = projects.filter(p => p.status === 'completed').length;

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <h3>Pending Request</h3>
            <span className={styles.statNumber}>{pendingCount}</span>
          </div>
          <div className={styles.statCard}>
            <h3>Approved Request</h3>
            <span className={styles.statNumber}>{approvedCount}</span>
          </div>
          <div className={styles.statCard}>
            <h3>Ongoing Projects</h3>
            <span className={styles.statNumber}>{ongoingCount}</span>
          </div>
          <div className={styles.statCard}>
            <h3>Completed Projects</h3>
            <span className={styles.statNumber}>{completedCount}</span>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img
            src={banner}
            alt="Office environment"
            className={styles.heroBgImage}
          />
        </div>
      </div>

      <div className={styles.projectsSection}>
        <h2>Projects</h2>
        <table className={styles.projectsTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>NIC</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>{project.nic}</td>
                <td>
                  <span className={`${styles.statusBadge} ${styles[project.status]}`}>
                    {project.status}
                  </span>
                </td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <br />
      </div>
    </div>
  );
}
