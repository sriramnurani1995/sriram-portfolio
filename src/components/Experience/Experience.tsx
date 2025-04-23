import React from "react";
import "./Experience.css";
import experienceData from "../../data/experience";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-layout">
        <h2 className="section-title">Professional Experience</h2>
        <div className="section-underline"></div>

        <div className="timeline-container">
          {experienceData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="company-logo-container">
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="company-logo"
                  />
                </div>
                <div className="experience-details">
                  <h3 className="job-title">{item.title}</h3>
                  <h4 className="company-name">{item.company}</h4>
                  <p className="job-period">{item.period}</p>
                  <ul className="job-achievements">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
