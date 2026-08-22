import React, { useState } from 'react';
import "./Navbar.css";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Home', 'Skills', 'Education', 'Projects', 'Contact'];

  return (
    <nav className="navbar-nav">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          AMIT.
        </a>
        
        
        <div className="navbar-menu-desktop">
          {links.map((link) => (
            <a 
              key={link} 
              href={link === 'Home' ? '#' : `#${link.toLowerCase()}`} 
              className="navbar-link-desktop"
            >
              {link}
              <span className="navbar-link-underline"></span>
            </a>
          ))}
        </div>

      
        <button className="navbar-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      
      {isOpen && (
        <div className="navbar-menu-mobile">
          {links.map((link) => (
            <a 
              key={link} 
              href={link === 'Home' ? '#' : `#${link.toLowerCase()}`} 
              onClick={() => setIsOpen(false)} 
              className="navbar-link-mobile"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}