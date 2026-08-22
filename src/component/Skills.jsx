import React from "react";
import "./Skills.css";

export function Skills() {
  const skills = [
    { name: 'HTML5 & CSS3', category: 'Frontend', level: 'Advanced', glowClass: 'glow-orange' },
    { name: 'Tailwind CSS', category: 'Design', level: 'Advanced', glowClass: 'glow-cyan' },
    { name: 'React.js', category: 'Frontend', level: 'Intermediate', glowClass: 'glow-blue' },
    { name: 'JavaScript', category: 'Language', level: 'Intermediate', glowClass: 'glow-yellow' },
    { name: 'Git & GitHub', category: 'Tools', level: 'Intermediate', glowClass: 'glow-emerald' }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills & Tech Stack</h2>
        <p className="skills-subtitle">
          The tools and technology workflow I use to bring ideas to reality.
        </p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className={`skill-card ${skill.glowClass}`}>
              <div className="skill-icon-wrapper">✓</div>
              <div className="skill-info">
                <p className="skill-name">{skill.name}</p>
                <p className="skill-category">
                  {skill.category}
                </p>
              </div>
              <span className="skill-level-badge">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

