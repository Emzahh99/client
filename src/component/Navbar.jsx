// src/Components/Navbar.js

import React from 'react';
import '../assets/css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          MyWebsite
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-links">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-links">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-links">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a href="/logout" className="nav-links">
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
