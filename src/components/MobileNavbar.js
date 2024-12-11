import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import "../styles/NavbarMobile.scss"; // Make sure this path is correct
import logo from "../assets/images/logo.png"; // Replace with your logo path

function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar-mobile">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src={logo} alt="ProVital Logo" />
        <span>ProVital</span>
        <button className="hamburger-menu" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Menu Section */}
      {menuOpen && (
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          {/* Dropdown Section */}
          <div className="dropdown">
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

          {/* Navigation Links */}
          {["Doctors", "List your practice", "For Employers", "Courses", "Books", "Speakers"].map((item, index) => (
            <li key={index}>
              {item}
              <FaChevronRight />
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavbarMobile;
