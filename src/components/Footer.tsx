"use client";

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <a href="#hero" className="footer-logo">
            MRI<span className="logo-dot">.</span>
          </a>
          
          <nav className="footer-nav">
            <a href="#hero" className="footer-link">Home</a>
            <a href="#experience" className="footer-link">Experience</a>
            <a href="#education" className="footer-link">Education</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#contact" className="footer-link">Contact</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Md. Redoyan Islam. All rights reserved.
          </p>
          <p className="credit">
            Designed & Built with Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
