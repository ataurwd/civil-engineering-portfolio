"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadCV = () => {
    // Open the print-friendly CV page in a new tab with print trigger
    window.open("/cv?print=true", "_blank");
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#hero" className="logo">
          MRI<span className="logo-dot">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="desktop-menu">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="nav-actions">
          <button onClick={handleDownloadCV} className="btn btn-download-cv">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </button>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
            <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
            <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          <a href="#hero" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#experience" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
          <a href="#education" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Education</a>
          <a href="#skills" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
          <a href="#projects" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <button
            onClick={() => {
              handleDownloadCV();
              setIsMobileMenuOpen(false);
            }}
            className="btn btn-download-cv mobile-btn"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </button>
        </nav>
      </div>
    </header>
  );
}
