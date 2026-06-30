"use client";

import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container animate-fade-in">
        <div className="badge">Civil Technology Professional</div>
        <h1 className="hero-title">
          MD. REDOYAN ISLAM
        </h1>
        <p className="hero-subtitle">
          Local Consultant Engineer specializing in the integrated supervision of 
          <strong> Structural</strong>, <strong>Architectural</strong>, and <strong>MEP</strong> systems.
        </p>
        <p className="hero-description">
          Dedicated to driving project success through technical precision, meticulous material inspections, 
          disciplined blueprint monitoring, and proactive contractor coordination. Expert in on-site safety, 
          quality control, and progress reporting.
        </p>
        <div className="hero-ctas">
          <a href="#experience" className="btn btn-primary">
            View Experience
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">Banbeis</span>
            <span className="stat-label">Key Government Project</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-num">BTEB</span>
            <span className="stat-label">Diploma in Civil Eng.</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-num">RHD</span>
            <span className="stat-label">Roads & Highway Intern</span>
          </div>
        </div>
      </div>
    </section>
  );
}
