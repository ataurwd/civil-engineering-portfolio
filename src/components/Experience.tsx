"use client";

import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "Local Consultant Engineer",
      company: "Ark Consultant & Engineering Ltd.",
      period: "Feb 2026 – Present",
      type: "Full-Time",
      project: "Establishment of 160 Upazila ICT Training and Resource Centre for Education (UITRCE) Phase II (BANBEIS Project)",
      description: [
        "Perform integrated site supervision of Structural, Architectural, and Mechanical, Electrical, and Plumbing (MEP) systems.",
        "Maintain absolute technical precision by conducting rigorous material inspections (concrete strength, reinforcement grade, aggregate quality) and disciplined monitoring of blueprint compliance.",
        "Drive project progress through daily coordination with sub-contractors, project engineers, and stakeholders to resolve technical challenges and ensure adherence to timelines.",
        "Uphold safety standards by performing regular site audits, risk assessments, and enforcing safety protocols.",
        "Author comprehensive daily and weekly progress reports documenting milestones, materials consumed, labor force, and any issues encountered."
      ]
    },
    {
      role: "Civil Engineering Intern",
      company: "Roads & Highway Department",
      period: "3 Months (2024)",
      type: "Internship",
      project: "Pavement and Highway Infrastructure Maintenance & Construction",
      description: [
        "Assisted in road construction site supervision, ensuring correct grading, asphalt application, and sub-base compaction.",
        "Conducted laboratory and field material testing, including cement compressive strength, aggregate impact value, and bitumen penetration tests.",
        "Gained hands-on experience in project documentation, maintaining site diaries, and verifying quality assurance reports.",
        "Collaborated with senior engineers in reviewing road design drawings and checking alignment layouts."
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          A track record of technical supervision, quality control, and successful project execution in both building and highway sectors.
        </p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content-card">
                <div className="card-header">
                  <div className="title-group">
                    <span className="badge-type">{exp.type}</span>
                    <h3 className="role-title">{exp.role}</h3>
                    <h4 className="company-name">{exp.company}</h4>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                
                {exp.project && (
                  <div className="project-highlight">
                    <span className="project-label">Project:</span> {exp.project}
                  </div>
                )}

                <ul className="bullet-list">
                  {exp.description.map((bullet, idx) => (
                    <li key={idx} className="bullet-item">
                      <span className="bullet-bullet">•</span>
                      <span className="bullet-text">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
