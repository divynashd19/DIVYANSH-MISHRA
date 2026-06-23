import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a motivated and detail-oriented Data Analytics enthusiast currently pursuing B.Tech in 
              Computer Science and Engineering with a specialization in Data Analytics at Maharana Pratap 
              Engineering College. I am passionate about extracting actionable insights from complex datasets 
              and presenting them through compelling visualizations.
            </p>
            <p>
              With hands-on experience in data analysis, visualization tools, and business intelligence, 
              I aim to support informed decision-making and drive business growth through data-driven strategies. 
              I combine technical expertise with strong analytical thinking and communication skills to transform 
              raw data into meaningful business insights.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-rect">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <rect x="10" y="10" width="60" height="60" fill="#6366f1" rx="8"/>
                </svg>
              </div>
              <div className="stat-info">
                <h3>3</h3>
                <p>Certifications</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-rect">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <rect x="10" y="10" width="60" height="60" fill="#8b5cf6" rx="8"/>
                </svg>
              </div>
              <div className="stat-info">
                <h3>2+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-rect">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <rect x="10" y="10" width="60" height="60" fill="#ec4899" rx="8"/>
                </svg>
              </div>
              <div className="stat-info">
                <h3>30%</h3>
                <p>Efficiency Improvement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
