"use client";

import React from "react";

export default function Education() {
  const education = [
    {
      degree: "Diploma in Engineering",
      institution: "Kurigram Polytechnic Institute",
      department: "Civil Technology",
      board: "Bangladesh Technical Education Board (BTEB)",
      result: "3.25 (Scale: 4.00)",
      year: "2020 – 2024",
      details: "Four-year professional diploma covering structural analysis, surveying, concrete technology, estimation, and highway engineering. Developed strong fundamental engineering knowledge and practical site skills."
    },
    {
      degree: "Secondary School Certificate (S.S.C)",
      institution: "Afan Ullah High School",
      department: "Science Group",
      board: "Dinajpur Board",
      result: "4.72 (Scale: 5.00)",
      year: "2018 – 2020",
      details: "Secondary education with a focus on Physics, Chemistry, and Higher Mathematics, establishing a solid quantitative and scientific foundation."
    }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Academic foundations in engineering and science that underpin my practical field expertise.
        </p>

        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="card-top">
                <span className="edu-year">{edu.year}</span>
                <span className="edu-board">{edu.board}</span>
              </div>
              
              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>
              
              {edu.department && (
                <div className="edu-dept">
                  <span className="label">Department:</span> {edu.department}
                </div>
              )}

              <div className="edu-result">
                <span className="result-badge">Result: {edu.result}</span>
              </div>

              <p className="edu-details">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
