import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <p>&copy; 2025 Divyansh Mishra. All rights reserved.</p>
          </div>
          <div className="footer-section">
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#education">Education</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
