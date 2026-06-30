"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function CVPage() {
  useEffect(() => {
    // Check if ?print=true is in the URL and trigger print
    const params = new URLSearchParams(window.location.search);
    if (params.get("print") === "true") {
      // Small delay to allow styles to load fully
      const timer = setTimeout(() => {
        window.print();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-page-wrapper">
      {/* Navigation & Action Bar (Hidden when printing) */}
      <div className="action-bar no-print">
        <div className="action-bar-container">
          <Link href="/" className="back-btn">
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
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Portfolio
          </Link>
          
          <button onClick={handlePrint} className="btn btn-accent print-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            Print / Save as PDF
          </button>
        </div>
      </div>

      {/* CV Document Container */}
      <main className="cv-document">
        {/* Header */}
        <header className="cv-header">
          <div className="header-info">
            <h1 className="cv-name">MD. REDOYAN ISLAM</h1>
            <h2 className="cv-title">Civil Engineering Professional</h2>
            
            <div className="contact-details-grid">
              <div className="contact-item">
                <span className="icon">📞</span>
                <span>+8801890010726</span>
              </div>
              <div className="contact-item">
                <span className="icon">✉️</span>
                <span>redoyanmr@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>Baradargahat, Pirgacha, Rangpur</span>
              </div>
            </div>
          </div>
        </header>

        {/* Career Objective */}
        <section className="cv-section">
          <h3 className="cv-section-title">CAREER OBJECTIVE</h3>
          <p className="cv-text">
            A results-oriented Civil Engineering professional with a specialized focus on the integrated supervision of 
            Structural, Architectural, and MEP systems. Expert in maintaining technical precision through meticulous material 
            inspections and disciplined monitoring to ensure full compliance with engineering blueprints. Dedicated to driving 
            project success through proactive coordination with contractors and rigorous daily progress reporting to uphold the 
            highest standards of on-site safety, quality, and project timelines.
          </p>
        </section>

        {/* Experience */}
        <section className="cv-section">
          <h3 className="cv-section-title">EXPERIENCE</h3>
          <div className="cv-item">
            <div className="cv-item-header">
              <div>
                <h4 className="cv-item-title">Local Consultant Engineer</h4>
                <span className="cv-item-sub">Ark Consultant & Engineering Ltd.</span>
              </div>
              <span className="cv-item-date">February, 2026 – Present</span>
            </div>
            <p className="cv-item-project">
              <strong>Project:</strong> Establishment of 160 Upazila ICT Training and Resource Centre for Education (UITRCE) Phase II (BANBEIS Project)
            </p>
            <ul className="cv-bullets">
              <li>Supervised structural concrete castings, reinforcement bar placement, and architectural brickwork.</li>
              <li>Coordinated MEP (Mechanical, Electrical, Plumbing) system routing and installation.</li>
              <li>Conducted on-site material quality inspections and verified blueprint compliance.</li>
              <li>Prepared detailed daily progress reports and coordinated with contractors and government representatives.</li>
            </ul>
          </div>
        </section>

        {/* Internship */}
        <section className="cv-section">
          <h3 className="cv-section-title">INTERNSHIP</h3>
          <div className="cv-item">
            <div className="cv-item-header">
              <div>
                <h4 className="cv-item-title">Civil Engineering Intern</h4>
                <span className="cv-item-sub">Roads & Highway Department</span>
              </div>
              <span className="cv-item-date">03 Months (2024)</span>
            </div>
            <ul className="cv-bullets">
              <li>Assisted in road construction site supervision and pavement laying operations.</li>
              <li>Conducted material testing for concrete and aggregates (compressive strength, aggregate impact value).</li>
              <li>Maintained site diaries, project documentation, and supported quality assurance procedures.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="cv-section">
          <h3 className="cv-section-title">EDUCATION</h3>
          
          <div className="cv-item">
            <div className="cv-item-header">
              <div>
                <h4 className="cv-item-title">Diploma in Engineering (Civil Technology)</h4>
                <span className="cv-item-sub">Kurigram Polytechnic Institute (BTEB)</span>
              </div>
              <span className="cv-item-date">Passing Year: 2024</span>
            </div>
            <p className="cv-item-result"><strong>Result:</strong> 3.25 (Scale: 4.00)</p>
          </div>

          <div className="cv-item" style={{ marginTop: "1rem" }}>
            <div className="cv-item-header">
              <div>
                <h4 className="cv-item-title">Secondary School Certificate (S.S.C, Science)</h4>
                <span className="cv-item-sub">Afan Ullah High School (Dinajpur Board)</span>
              </div>
              <span className="cv-item-date">Passing Year: 2020</span>
            </div>
            <p className="cv-item-result"><strong>Result:</strong> 4.72 (Scale: 5.00)</p>
          </div>
        </section>

        {/* Skills */}
        <section className="cv-section">
          <h3 className="cv-section-title">TECHNICAL & PROFESSIONAL SKILLS</h3>
          <div className="skills-grid-cv">
            <div>
              <h4 className="skills-sub-title">Engineering Skills</h4>
              <p className="skills-text">
                Site Supervision, Quality Checking, Concrete Technology, Material Testing, Daily Reporting, Contractor Handling, Site Safety Management.
              </p>
            </div>
            <div>
              <h4 className="skills-sub-title">Software & Tools</h4>
              <p className="skills-text">
                AutoCAD (2D), MS Office (Excel, Word, PowerPoint), Canva Design, E-mail Communication, Internet Browsing.
              </p>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="cv-section">
          <h3 className="cv-section-title">LANGUAGE</h3>
          <ul className="cv-bullets">
            <li><strong>English</strong> – Good Proficiency</li>
            <li><strong>Bengali</strong> – Native</li>
          </ul>
        </section>

        {/* Personal Details */}
        <section className="cv-section">
          <h3 className="cv-section-title">PERSONAL DETAILS</h3>
          <table className="details-table">
            <tbody>
              <tr>
                <td className="detail-label">Father's Name</td>
                <td className="detail-value">: Md. Ruhul Amin</td>
                <td className="detail-label">Date of Birth</td>
                <td className="detail-value">: 01-11-2003</td>
              </tr>
              <tr>
                <td className="detail-label">Mother's Name</td>
                <td className="detail-value">: Mst. Rabeya Khatun</td>
                <td className="detail-label">Marital Status</td>
                <td className="detail-value">: Married</td>
              </tr>
              <tr>
                <td className="detail-label">NID No</td>
                <td className="detail-value">: 9172533441</td>
                <td className="detail-label">Permanent Address</td>
                <td className="detail-value">: Baradargahat, Pirgacha, Rangpur</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Declaration */}
        <section className="cv-section declaration-section">
          <h3 className="cv-section-title">DECLARATION</h3>
          <p className="cv-text italic">
            I hereby certify that the above statements are true and correct to the best of my knowledge.
          </p>
          <div className="signature-area">
            <div className="signature-line"></div>
            <p className="signature-name">MD. REDOYAN ISLAM</p>
          </div>
        </section>
      </main>
    </div>
  );
}
