import React from "react";
import "./Home.css";

export function Home() {
  return (
    <section id="home" className="home-section">
    
      <div className="home-bg-glow"></div>

      <div className="home-container">
        
       
        <div className="home-content">
          <p className="home-badge">
            Available for Freelance
          </p>
          <h1 className="home-title">
            Hi, I'm <span className="home-title-name">Amit</span>
          </h1>
          <p className="home-description">
            Crafting high-performance digital experiences with code and aesthetic creative visuals.
          </p>

          {/* Action Buttons */}
          <div className="home-btn-group">
            <a href="#projects" className="home-btn">
              Explore Projects
              <svg className="home-btn-icon-right" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>

            <a href="resume.pdf" download="Amit_Resume.pdf" className="home-btn">
              <svg className="home-btn-icon-left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="home-social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="home-social-icon" title="GitHub">
              <svg style={{ width: '2rem', height: '2rem' }} fill="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>

            <a href="https://www.instagram.com/amit.x3043?igsh=dnVkYndnMDI3aTAy" target="_blank" rel="noopener noreferrer" className="home-social-icon-instagram" title="Instagram">
              <svg style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://w3.org">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            <a href="https://www.facebook.com/share/1VkLeJm8kL/" target="_blank" rel="noopener noreferrer" className="home-social-icon-facebook" title="Facebook">
              <svg style={{ width: '2rem', height: '2rem' }} fill="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </div>
        </div>

        
        <div className="home-media">
          <div className="home-image-wrapper">
            <div className="home-image-glow"></div>
            <img 
              src="amit.img.jpeg" 
              alt="Developer Illustration" 
              className="home-image" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}