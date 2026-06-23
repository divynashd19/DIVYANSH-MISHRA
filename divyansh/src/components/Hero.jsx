import React from 'react';
import '../styles/Hero.css';

function Hero() {
  const handleDownloadCV = () => {
    alert('CV Download feature - Ready for implementation');
  };

  const handleGetInTouch = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2>Hi, I'm Divyansh Mishra</h2>
          <p>Data Analytics Enthusiast | B.Tech CSE Specialized in Data Analytics</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleDownloadCV}>
              Download CV
            </button>
            <button className="btn btn-secondary" onClick={handleGetInTouch}>
              Get in Touch
            </button>
          </div>
        </div>
        <div className="hero-cards">
          <div className="card-rect">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <rect x="10" y="10" width="40" height="40" fill="#6366f1" rx="5"/>
            </svg>
            <h3>Data Analytics</h3>
          </div>
          <div className="card-rect">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <rect x="10" y="10" width="40" height="40" fill="#8b5cf6" rx="5"/>
            </svg>
            <h3>Visualization</h3>
          </div>
          <div className="card-rect">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <rect x="10" y="10" width="40" height="40" fill="#ec4899" rx="5"/>
            </svg>
            <h3>Problem Solving</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
