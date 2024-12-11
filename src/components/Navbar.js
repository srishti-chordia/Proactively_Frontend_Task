import React, { useState } from 'react';
import '../styles/Navbar.scss';
import logo from '../assets/images/logo.png'; // Replace with your logo path

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="ProVital Logo" />
        <span>ProVital</span>
      </div>
      <ul className="navbar-links">
        <li>List your practice</li>
        <div className="separator"></div>
        <li>For Employers</li>
        <div className="separator"></div>
        <li>Courses</li>
        <div className="separator"></div>
        <li>Books</li>
        <div className="separator"></div>
        <li>Speakers</li>
        <div className="separator"></div>
        <li>Doctors</li>
        <div className="separator"></div>
        <li
          className="dropdown"
          onClick={toggleDropdown}
          style={{ cursor: 'pointer' }}
        >
          Login / Signup <span className="dropdown-icon">▼</span>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <strong>Doctor</strong>
                <span>
                  <a href="#">Login</a> | <a href="#">Sign up</a>
                </span>
              </div>
              <div className="dropdown-item">
                <strong>Patients</strong>
                <span>
                  <a href="#">Login</a> | <a href="#">Sign up</a>
                </span>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;