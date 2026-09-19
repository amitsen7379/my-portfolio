import React from "react";
import "./Projects.css";
// 1. इमेजेस सही तरीके से इम्पोर्ट हो रही हैं
import project1Img from "../assets/Project1.png";
import project2Img from "../assets/Project2.png";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AI Dashboard UI',
      description: 'A dark-themed user command panel for neural engine interactions with custom glassmorphism components.',
      tech: ['React', 'CSS Grid', 'Framer Logic'],
      image: project1Img // 2. यहाँ स्ट्रिंग हटाकर वेरिएबल का नाम लिखें
    },
    {
      id: 2,
      title: 'Crypto Wallet Manager',
      description: 'Highly reactive asset monitoring hub supporting multiple currency structures and local sync.',
      tech: ['React', 'Vanilla CSS'],
      image: project2Img // 2. यहाँ भी वेरिएबल का नाम लिखें
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>
        <p className="projects-subtitle">Some of my best work and side development ventures.</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                {/* यह अब सही लाइव पाथ रेंडर करेगा */}
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-image-overlay">
                  <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Interactive Module
                  </span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tag-container">
                  {project.tech.map((t, i) => (
                    <span key={i} className="project-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href="#" className="project-link-btn">
                    View Code Repository <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
