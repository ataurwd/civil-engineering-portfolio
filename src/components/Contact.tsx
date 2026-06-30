"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mocking form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind, need site supervision, or want to discuss a civil engineering opportunity? Drop me a message.
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="info-title">Contact Information</h3>
            <p className="info-description">
              Feel free to reach out via phone, email, or visit my mailing address. I am available for consultations and site visits.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="icon-box">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Call Me</span>
                  <a href="tel:+8801890010726" className="info-value">
                    +880 1890 010726
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Email Me</span>
                  <a href="mailto:redoyanmr@gmail.com" className="info-value">
                    redoyanmr@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Address</span>
                  <span className="info-value">
                    Baradargahat, Pirgacha, Rangpur, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Consultation"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-accent btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="status-message success">
                  Thank you! Your message has been sent successfully. I will get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="status-message error">
                  Oops! Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
