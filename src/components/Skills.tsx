"use client";

import React from "react";

export default function Skills() {
  const engineeringSkills = [
    { name: "Site Supervision", level: "Expert" },
    { name: "Quality Checking", level: "Expert" },
    { name: "Concrete Technology", level: "Advanced" },
    { name: "Material Testing", level: "Advanced" },
    { name: "Daily Reporting", level: "Expert" },
    { name: "Contractor Handling", level: "Advanced" },
    { name: "Site Safety Management", level: "Advanced" }
  ];

  const softwareSkills = [
    { name: "AutoCAD (2D)", level: "Advanced" },
    { name: "MS Excel", level: "Advanced" },
    { name: "MS Word", level: "Expert" },
    { name: "MS PowerPoint", level: "Advanced" },
    { name: "Canva Design", level: "Intermediate" },
    { name: "E-mail Communication", level: "Expert" },
    { name: "Internet Browsing", level: "Expert" }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical & Professional Skills</h2>
        <p className="section-subtitle">
          Core engineering competencies and software proficiencies that enable precise execution of tasks on and off-site.
        </p>

        <div className="skills-grid">
          {/* Engineering Skills Card */}
          <div className="skills-card">
            <div className="skills-card-header">
              <div className="icon-wrapper">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3 className="card-title">Engineering & Field Expertise</h3>
            </div>
            
            <div className="skills-list">
              {engineeringSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width:
                          skill.level === "Expert"
                            ? "95%"
                            : skill.level === "Advanced"
                            ? "85%"
                            : "70%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software Skills Card */}
          <div className="skills-card">
            <div className="skills-card-header">
              <div className="icon-wrapper">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="card-title">Software & Digital Tools</h3>
            </div>

            <div className="skills-list">
              {softwareSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width:
                          skill.level === "Expert"
                            ? "95%"
                            : skill.level === "Advanced"
                            ? "85%"
                            : "70%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
