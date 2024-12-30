import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from '../assets/Rectangle 24.png'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles["navbar-logo"]}>
             <img src={logo} alt="SLTMobitel Logo" className={styles.logo} />
        </div>
        <ul className={styles["navbar-links"]}>
        {/* <li><a href="/"><br/>Home</a></li>
        <li><a href="/services"><br/>Services</a></li>
        <li><a href="/user-management">User<br/>Management</a></li>
        <li><a href="/counselling-management">Counselling<br/>Management</a></li> */}
          <Link to='/' className="">Home</Link>
          <Link to='/Services'>Services</Link>
          
          <Link to='/clients'>Clients</Link>
          <Link to='/test'>Test</Link>
          <Link to='/marketplace'>Marketplace</Link>
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
