// src/components/Footer/Footer.tsx
import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-layout">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Sriram Nurani Subramanyam</h3>
            <p>AI-Driven Backend Engineer & Cloud Architect</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Sriram Nurani Subramanyam. All Rights Reserved.
          </p>
          <p>
            <small>
              Backend Engineer with expertise in Java, Python, AWS, and LLMs
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
