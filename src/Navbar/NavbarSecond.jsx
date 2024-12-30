import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from '../assets/Rectangle 24.png'

export default function NavbarSecond() {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null); // Tracks the currently open submenu

  const toggleMainMenu = () => {
    setIsMainMenuOpen(!isMainMenuOpen);
    setOpenSubMenu(null); // Close any open submenu when main menu is toggled
  };

  const toggleSubMenu = (menuName) => {
    setOpenSubMenu((prevOpenSubMenu) => 
      prevOpenSubMenu === menuName ? null : menuName
    ); // Toggle submenu: close if already open, open if closed
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-logo"]}>
        <img
          src={logo}
          alt="SLTMobitel Logo"
          className={styles.logo}
        />
      </div>

      <ul className={styles["navbar-links"]}>
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* Main Dropdown for Categories */}
        <li className={styles.dropdown}>
          <button onClick={toggleMainMenu} className={styles.dropdownButton}>
            Categories
          </button>

          {/* Sub-dropdown Menu */}
          {isMainMenuOpen && (
            <ul className={styles.dropdownContent}>
              <li className={styles.subDropdown}>
                <button
                  onClick={() => toggleSubMenu(" Internet & Tv")}
                  className={styles.subDropdownButton}
                >
                  Internet & Tv
                </button>
                {openSubMenu === " Internet & Tv" && (
                  <ul className={styles.subDropdownContent}>
                    <li><Link to="/frontend">Internet & Wi-Fi</Link></li>
                    <li><Link to="/backend">PEO TV</Link></li>
                  </ul>
                )}
              </li>

              <li className={styles.subDropdown}>
                <button
                  onClick={() => toggleSubMenu("Cloud & Data Center")}
                  className={styles.subDropdownButton}
                >
                Cloud & Data Center
                </button>
                {openSubMenu === "Cloud & Data Center" && (
                  <ul className={styles.subDropdownContent}>
                    <li><Link to="/custom-logo">Share Hosting & VPS</Link></li>
                    <li><Link to="/iconic-logos">Data Hosting</Link></li>
                    <li><Link to="/typography-logos">Website Builder</Link></li>
                  </ul>
                )}
              </li>

              <li className={styles.subDropdown}>
                <button
                  onClick={() => toggleSubMenu("Networking")}
                  className={styles.subDropdownButton}
                >
                 Networking
                </button>
                {openSubMenu === "Networking" && (
                  <ul className={styles.subDropdownContent}>
                    <li><Link to="/social-media-strategy">Inter-branch Connectivity</Link></li>
                    <li><Link to="/content-creation">Nework Infastructure</Link></li>
                  </ul>
                )}
              </li>

              <li className={styles.subDropdown}>
                <button
                  onClick={() => toggleSubMenu(" Voice & Colloboration")}
                  className={styles.subDropdownButton}
                >
                  Voice & Colloboration
                </button>
                {openSubMenu === " Voice & Colloboration" && (
                  <ul className={styles.subDropdownContent}>
                    <li><Link to="/technical-seo">PBX</Link></li>
                    <li><Link to="/local-seo">Contact Center</Link></li>
                    <li><Link to="/seo-audits">Video Conferencing</Link></li>
                    <li><Link to="/keyword-research">Telephone</Link></li>
                   
                  </ul>
                )}
              </li>

              <li className={styles.subDropdown}>
                <button
                  onClick={() => toggleSubMenu("Managed Services")}
                  className={styles.subDropdownButton}
                >
                  Managed Services
                </button>
                {openSubMenu === "Managed Services" && (
                  <ul className={styles.subDropdownContent}>
                    <li><Link to="/photo-editing">Acess Managment</Link></li>
                    <li><Link to="/digital-illustration">POS System</Link></li>
                    <li><Link to="/vector-design">eLearning</Link></li>
                    
                  </ul>
                )}
              </li>

              <li className={styles.subDropdown}>
                <button
                  onClick={() => toggleSubMenu("Structure Cabaling & Power")}
                  className={styles.subDropdownButton}
                >
                  Structure Cabaling & Power
                </button>
                {openSubMenu === "Structure Cabaling & Power" && (
                  <ul className={styles.subDropdownContent}>
                    <li><Link to="/branding-identity">  Structure Cabaling & Power</Link></li>
                  </ul>
                )}
              </li>

              <li className={styles.subDropdown}>
                <button
                  onClick={() => toggleSubMenu("Other")}
                  className={styles.subDropdownButton}
                >
                  Other
                </button>
                {openSubMenu === "Other" && (
                  <ul className={styles.subDropdownContent}>
                    <li><Link to="/photo-editing">Acess Managment</Link></li>
                    <li><Link to="/digital-illustration">POS System</Link></li>
                    <li><Link to="/vector-design">eLearning</Link></li>
                    
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
      </ul>

      <div className={styles["navbar-icons"]}>
        <div className={styles["search-container"]}>
          <input
            type="text"
            placeholder="Search..."
            className={styles["search-input"]}
          />
          <i className={`fas fa-search ${styles["search-icon"]}`}></i>
        </div>
        <i className={`fas fa-bell ${styles.icon}`}></i>
        <i className={`fas fa-user ${styles.icon}`}></i>
      </div>
    </nav>
  );
}
