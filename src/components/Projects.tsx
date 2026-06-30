"use client";

import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "BANBEIS ICT Training & Resource Centre (Phase II)",
      category: "Government Infrastructure",
      role: "Local Consultant Engineer",
      firm: "Ark Consultant & Engineering Ltd.",
      description:
        "Comprehensive site supervision of structural, architectural, and MEP systems for the establishment of upazila-level educational ICT centers. Overseeing compliance with rigorous public works standards.",
      highlights: [
        "Monitored reinforcement placement, formwork stability, and concrete casting (cylinder testing).",
        "Coordinated architectural finishes, brickwork, and plastering quality.",
        "Verified electrical conduit layouts, plumbing connections, and HVAC provision.",
        "Created daily engineering reports and managed subcontractor communications."
      ],
      tags: ["Site Supervision", "Concrete Testing", "MEP Coordination", "Government Project"]
    },
    {
      title: "Multi-Story Residential Building Design",
      category: "Structural Design & Drafting",
      role: "Lead Student Designer",
      firm: "Kurigram Polytechnic Institute (Academic)",
      description:
        "Detailed structural design and architectural drafting of a 5-story reinforced concrete residential building, including layout, sizing, and reinforcement detailing.",
      highlights: [
        "Drafted architectural floor plans, elevation views, and cross-sections using AutoCAD.",
        "Designed structural elements (isolated footings, columns, beams, and slabs) based on building codes.",
        "Prepared bill of quantities (BOQ) and cost estimation for concrete, steel, and brickwork.",
        "Successfully presented design calculations and blueprints to the academic board."
      ],
      tags: ["AutoCAD (2D)", "Structural Drafting", "Cost Estimation", "RC Design"]
    },
    {
      title: "Highway Pavement Quality Control & Rehabilitation",
      category: "Transportation Engineering",
      role: "Civil Engineering Intern",
      firm: "Roads & Highway Department",
      description:
        "Assisted senior sub-divisional engineers in supervising local highway overlay works and performing laboratory quality assurance testing for road building materials.",
      highlights: [
        "Supervised asphalt laying and compaction density on active road sections.",
        "Conducted laboratory material tests: Aggregate Impact Value (AIV), Aggregate Crushing Value (ACV), and Bitumen Penetration.",
        "Assisted in reviewing road alignment drawings and taking field measurements for pavement distress surveys.",
        "Maintained quality control logs and verified material delivery tickets."
      ],
      tags: ["Material Testing", "Highway Construction", "Quality Assurance", "Field Survey"]
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Key Projects</h2>
        <p className="section-subtitle">
          A selection of projects demonstrating hands-on site supervision, engineering design, and materials testing expertise.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span className="project-role"><strong>Role:</strong> {project.role}</span>
                  <span className="meta-separator">•</span>
                  <span className="project-firm">{project.firm}</span>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-highlights-box">
                <h4 className="highlights-title">Key Accomplishments:</h4>
                <ul className="highlights-list">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="highlight-item">
                      <svg
                        className="check-icon"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
