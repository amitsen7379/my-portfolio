import React from "react";
import "./Contact.css"; // Path check kar lijiyega
export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="home-bg-glow"></div>
      
      <div className="contact-container">
        
        {/* Left Column: Direct Info Cards */}
        <div className="contact-info-side">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-description">
            Have a project in mind or want to chat? Reach out to me directly or drop a message!
          </p>
          
          <div className="contact-details">
            <div className="contact-item-row">
              <div className="contact-icon-box">
                <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://w3.org">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div className="contact-text-box">
                <span className="contact-text-label">Name</span>
                <span className="contact-text-value">Amit Kumar</span>
              </div>
            </div>

            <div className="contact-item-row">
              <div className="contact-icon-box">
                <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://w3.org">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div className="contact-text-box">
                <span className="contact-text-label">Email</span>
                <a href="mailto:amitkumar.in53@gmail.com" className="contact-text-value" style={{ transition: 'color 0.3s' }}>
                  amitkumar.in53@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item-row">
              <div className="contact-icon-box">
                <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://w3.org">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div className="contact-text-box">
                <span className="contact-text-label">Phone No</span>
                <a href="tel:+917379261713" className="contact-text-value" style={{ transition: 'color 0.3s' }}>
                  +91 7379261713
                </a>
              </div>
            </div>

            <div className="contact-item-row">
              <div className="contact-icon-box">
                <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://w3.org">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div className="contact-text-box">
                <span className="contact-text-label">Address</span>
                <span className="contact-text-value">Lucknow, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Mail Formspree Integration Engine */}
        <div className="contact-form-side">
          <form className="contact-form" action="https://formspree.io" method="POST">
            
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input type="text" name="name" placeholder="Amit" className="form-input" required />
            </div>

            <div className="form-group">
              <label className="form-label">Your Email</label>
              <input type="email" name="email" placeholder="example@email.com" className="form-input" required />
            </div>

            <div className="form-group">
              <label className="form-label">Your Message</label>
              <textarea name="message" placeholder="Type your message here..." className="form-input form-textarea" required></textarea>
            </div>

            <button type="submit" className="form-submit-btn">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
