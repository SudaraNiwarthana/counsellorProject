import styles from './Dashboard.module.css';
import banner from '../assets/banner_1.png'

export default function Dashboard() {
  return (
    <div className={styles.full}>
      <div className={styles.dashboardContainer}>
        {/* Top Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.statsOverlay}>
              <div>
                <div className={styles.statBox}>
                  <h3>Total Users</h3>
                  <p>10</p>
                </div>
                <div className={styles.statBox1}>
                  <h3>Total Counselors</h3>
                  <p>10</p>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <img src={banner} alt="Office environment" className={styles.heroBgImage} />
              <div className={styles.bannerText}>
                <h1>Admin</h1>
                
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Table Section */}
        <div className={styles.tableSection}>
          <div className={styles.tableHeader}>
            <h2></h2>
            <button className={styles.addButton}>
              Add Users<br/> & Counselors
            </button>
          </div>
          <hr />
          <table className={styles.usersTable}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>NIC</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1001</td>
                <td>Sudara</td>
                <td>200133601113</td>
                <td>niwarthana@gmail.com</td>
                <td>0781643570</td>
                <td className={styles.actionButtons}>
                  <button className={styles.more}>More</button>
                  <button className={styles.editBtn}>Edit</button>
                  <button className={styles.deleteBtn}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}