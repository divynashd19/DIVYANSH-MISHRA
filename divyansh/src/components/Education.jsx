import React from 'react';
import '../styles/Education.css';

function Education() {
  return (
    <section className="education" id="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-content">
          <div className="edu-card">
            <div className="edu-rect">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <rect x="15" y="15" width="70" height="70" fill="#6366f1" rx="10"/>
              </svg>
            </div>
            <div className="edu-details">
              <h3>Bachelor of Technology (B.Tech)</h3>
              <p className="degree">Computer Science and Engineering</p>
              <p className="specialization">📚 Specialization: Data Analytics</p>
              <p className="college">🏫 Maharana Pratap Engineering College</p>
              <p className="duration">📅 Expected Graduation: July 2027</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
