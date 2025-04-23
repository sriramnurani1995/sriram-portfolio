import React from "react";
import "./Metrics.css";

interface Metric {
  value: string;
  label: string;
}

const Metrics: React.FC = () => {
  const metrics: Metric[] = [
    { value: "99.9%", label: "System Uptime" },
    { value: "50%", label: "Cost Reduction" },
    { value: "2×", label: "Release Velocity" },
    { value: "20+", label: "Engineers Mentored" },
  ];

  return (
    <section className="metrics-section">
      <div className="metrics-container">
        {metrics.map((metric, index) => (
          <div className="metric-item" key={index}>
            <h2 className="metric-value">{metric.value}</h2>
            <p className="metric-label">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Metrics;
