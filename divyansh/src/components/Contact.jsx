import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-rect">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <rect x="8" y="8" width="44" height="44" fill="#6366f1" rx="6"/>
                </svg>
              </div>
              <div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:divyanshmishra.d19@gmail.com">divyanshmishra.d19@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-rect">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <rect x="8" y="8" width="44" height="44" fill="#8b5cf6" rx="6"/>
                </svg>
              </div>
              <div>
                <h3>Phone</h3>
                <p>
                  <a href="tel:+917080715106">+91-7080715106</a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-rect">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <rect x="8" y="8" width="44" height="44" fill="#ec4899" rx="6"/>
                </svg>
              </div>
              <div>
                <h3>Location</h3>
                <p>Kanpur Nagar, Uttar Pradesh, India</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-rect">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <rect x="8" y="8" width="44" height="44" fill="#06b6d4" rx="6"/>
                </svg>
              </div>
              <div>
                <h3>LinkedIn</h3>
                <p><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
