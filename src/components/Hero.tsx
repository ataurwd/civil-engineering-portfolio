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

        {/* Clean, Minimalist Stats Section without Icons */}
        <div className="hero-stats-card">
          <div className="stat-item-premium">
            <div className="stat-details">
              <span className="stat-num-premium">Banbeis</span>
              <span className="stat-label-premium">Key Government Project</span>
            </div>
          </div>
          
          <div className="stat-divider-premium"></div>
          
          <div className="stat-item-premium">
            <div className="stat-details">
              <span className="stat-num-premium">BTEB</span>
              <span className="stat-label-premium">Diploma in Civil Eng.</span>
            </div>
          </div>
          
          <div className="stat-divider-premium"></div>
          
          <div className="stat-item-premium">
            <div className="stat-details">
              <span className="stat-num-premium">RHD</span>
              <span className="stat-label-premium">Roads & Highway Intern</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
