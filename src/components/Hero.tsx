"use client";

import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container animate-fade-in">
        <div className="badge">WELCOME TO MY PORTFOLIO</div>
        
        <h1 className="hero-title">
          Building Strong Foundations with Precision & Excellence
        </h1>
        
        <p className="hero-description-large">
          I'm <strong>Md. Redoyan Islam</strong>, a Civil Engineering professional specializing in Structural, Architectural, and MEP project supervision. I help ensure construction projects are completed safely, efficiently, and according to the highest engineering standards through quality inspections, contractor coordination, and technical oversight.
        </p>
        
        <div className="hero-ctas">
          <a href="#experience" className="btn btn-primary">
            View Experience
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>

        {/* Clean, Minimalist Stats Section */}
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
