import styles from "./Navbar.module.css";
import logo from '../assets/Rectangle 24.png'

export default function NavbarThird() {
  return (
    <nav className={styles.navbar}>
        <div className={styles["navbar-logo"]}>
             <img src={logo} alt="SLTMobitel Logo" className={styles.logo} />
        </div>
        <ul className={styles["navbar-links"]}>
        <li><a href="/">Home</a></li>
        <li><a href="/Session">Session</a></li>
        <li><a href="/Client">Client</a></li>
       
        </ul>
        <div className={styles["navbar-icons"]}>
        <div className={styles["search-container"]}>
            <input type="text" placeholder="Search..." className={styles["search-input"]} />
            <i className={`fas fa-search ${styles["search-icon"]}`}></i>
        </div>
        <i className={`fas fa-bell ${styles.icon}`}></i>
        <i className={`fas fa-user ${styles.icon}`}></i>
        <i className={`fas fa-user ${styles.icon}`}></i>
        
        </div>
    </nav>
  );
}
