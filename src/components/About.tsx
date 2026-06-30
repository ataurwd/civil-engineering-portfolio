"use client";

import React from "react";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        {/* Left Side: Content */}
        <div className="about-content">
          <span className="about-badge">About Me</span>
          <h2 className="about-title">Building Safe, Sustainable, and Precise Infrastructure</h2>
          <p className="about-text">
            I am a dedicated Civil Engineering professional with a passion for transforming blueprints into robust physical realities. With a solid academic background from Kurigram Polytechnic Institute and hands-on field experience, I specialize in the supervision of structural, architectural, and MEP (Mechanical, Electrical, Plumbing) systems.
          </p>
          <p className="about-text">
            My engineering philosophy centers on three core pillars: <strong>precision</strong>, <strong>safety</strong>, and <strong>quality control</strong>. Whether supervising concrete castings on high-impact government projects or analyzing highway pavement materials, I ensure every detail complies with design specifications and engineering standards.
          </p>

          <div className="about-highlights">
            <div className="highlight-item-about">
              <div className="highlight-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <div className="highlight-details">
                <h4>Technical Precision</h4>
                <p>Meticulous review of structural drawings and blueprint compliance on-site.</p>
              </div>
            </div>

            <div className="highlight-item-about">
              <div className="highlight-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div className="highlight-details">
                <h4>Site Safety & Ethics</h4>
                <p>Enforcing rigorous safety protocols to maintain a zero-incident work environment.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="about-image-wrapper">
          <div className="about-image-card">
            <img 
              src="https://i.ibb.co.com/5XSpLV3t/Whats-App-Image-2026-06-30-at-12-40-24.jpg" 
              alt="Md. Redoyan Islam" 
              className="about-image"
            />
            <div className="image-overlay-card">
              <span className="overlay-number">2026</span>
              <span className="overlay-label">Active Site Supervision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
