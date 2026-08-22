import React from "react";
import "./Education.css";

export function Education() {
  const education = [
    {
      id: 1,
      degree: 'B.A-Bachelor of Arts(Appearing)',
      school: 'Shree Bajrang Singh Mahavidyalaya',
      duration: '2025 - 2028',
      description: 'I am focused on humanities, social sciences, and liberal arts.'
    },
    {
      id: 2,
      degree: 'Full Stack Software Developer Certificate',
      school: 'Hanumant technology Pvt. Ltd.',
      duration: '2026',
      description: 'Comprehensive study on JavaScript rendering mechanics and CSS modern grid engines.'
    },
    {
      id: 3,
      degree: 'Diploma in Financial Accounting Certificate',
      school: 'IITE Computer Institute',
      duration: '2025',
      description: 'I am studying basics of computers and tally.'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="education-title">Education Journey</h2>
        
        <div className="education-timeline">
          {education.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div 
                key={edu.id} 
                className={`education-item ${isLeft ? 'education-item-left' : 'education-item-right'}`}
              >
                <div className="education-dot"></div>

                <div className="education-card">
                  <span className="education-date">{edu.duration}</span>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <h4 className="education-institution">{edu.school}</h4>
                  <p className="education-desc">{edu.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}