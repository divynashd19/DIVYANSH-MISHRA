import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Real-World Data Analysis Simulation',
      date: 'June 2025',
      achievements: [
        'Analyzed forensic datasets to identify fraud patterns and anomalies',
        'Extracted meaningful insights and presented findings through structured reports',
        'Designed visual summaries using Tableau to communicate insights effectively'
      ]
    },
    {
      title: 'Tata Data Visualization Project',
      date: 'Recent',
      achievements: [
        'Developed interactive dashboards using Power BI for operational data analysis',
        'Improved reporting efficiency by 30% through optimized visual reporting',
        'Collaborated with stakeholders to align dashboards with key business KPIs'
      ]
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-rect">
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <rect x="15" y="15" width="70" height="70" fill="#8b5cf6" rx="10"/>
                </svg>
              </div>
              <h3>{project.title}</h3>
              <p className="project-date">📅 {project.date}</p>
              <ul className="achievements">
                {project.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
