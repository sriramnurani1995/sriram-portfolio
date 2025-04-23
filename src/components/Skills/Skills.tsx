import React, { useState } from "react";
import "./Skills.css";
import skillsData from "../../data/skills";

type SkillCategory =
  | "all"
  | "language"
  | "framework"
  | "database"
  | "cloud"
  | "tools";

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "language", label: "Languages" },
    { id: "framework", label: "Frameworks" },
    { id: "database", label: "Databases" },
    { id: "cloud", label: "Cloud & DevOps" },
    { id: "tools", label: "Tools" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-layout">
        <h2 className="section-title">Technical Skills</h2>
        <div className="section-underline"></div>

        <div className="skills-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-button ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id as SkillCategory)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-logo-container">
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="skill-logo"
                />
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
