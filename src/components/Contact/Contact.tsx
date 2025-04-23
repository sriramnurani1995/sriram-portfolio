import React, { useState } from "react";
import "./Contact.css";
import Icon from "../common/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    error: boolean;
    message: string;
  }>({
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your message! I will get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
        message: "",
      });
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-layout">
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-underline"></div>

        <div className="contact-container">
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>

            <div className="contact-info-item">
              <div className="contact-icon">
                <Icon name="fa-solid fa-envelope" />
              </div>
              <div className="contact-detail">
                <h4>Email</h4>
                <a href="mailto:snuranisubramanyam@gmail.com">
                  snuranisubramanyam@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <Icon name="fa-solid fa-phone" />
              </div>
              <div className="contact-detail">
                <h4>Phone</h4>
                <a href="tel:+15103317061">+1 510 331 7061</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <Icon name="fa-solid fa-location-dot" />
              </div>
              <div className="contact-detail">
                <h4>Location</h4>
                <p>Portland, OR</p>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/sriramnurani1995"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://linkedin.com/in/sriramnurani"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <h3 className="form-title">Send Me a Message</h3>

            {formStatus.submitted && (
              <div
                className={`form-message ${
                  formStatus.error ? "error" : "success"
                }`}
              >
                {formStatus.message}
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
