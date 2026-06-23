import React from 'react';
import '../styles/Certifications.css';

function Certifications() {
  const certs = [
    {
      title: 'Deloitte Data Analytics Certification',
      description: 'Trained in data analysis, visualization, and real-world business problem-solving.'
    },
    {
      title: 'Tata Data Analytics Certification',
      description: 'Focused on data-driven decision-making, business intelligence, and dashboard creation.'
    },
    {
      title: 'IBM Data Analytics Certification',
      description: 'Gained exposure to data analysis techniques, machine learning basics, and visualization tools.'
    }
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <h2>Certifications</h2>
        <div className="certs-grid">
          {certs.map((cert, idx) => (
            <div key={idx} className="cert-card">
              <div className="cert-rect">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <rect x="10" y="10" width="60" height="60" fill="#ec4899" rx="8"/>
                </svg>
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
