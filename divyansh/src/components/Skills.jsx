import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skillsData = {
    Programming: ['Python'],
    Visualization: ['Power BI', 'Tableau'],
    Analytics: ['Data Cleaning', 'Data Analysis', 'KPI Tracking'],
    'Machine Learning': ['Basic Concepts'],
    Soft: ['Analytical Thinking', 'Problem Solving', 'Communication', 'Team Collaboration']
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Technical & Soft Skills</h2>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills], idx) => (
            <div key={idx} className="skill-category">
              <div className="skill-rect">
                <svg width="70" height="70" viewBox="0 0 70 70">
                  <rect x="8" y="8" width="54" height="54" fill="#6366f1" rx="8"/>
                </svg>
              </div>
              <h3>{category}</h3>
              <div className="skill-tags">
                {skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
