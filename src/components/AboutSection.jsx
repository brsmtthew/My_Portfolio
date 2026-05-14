import React from "react";

export function AboutSection({ metrics }) {
  return (
    <section className="dark-section section" id="about" aria-labelledby="about-title">
      <div className="shell">
        <h2 className="impact section-title" id="about-title">
          About
        </h2>
        <div className="about-grid">
          <div className="about-main">
            <p className="lead">
              I turn <span className="text-blue">complex workflows</span> into{" "}
              <span className="text-green">clear digital systems</span>.
            </p>
            <p>
              I build polished interfaces, practical automations, and connected tools that help
              people work faster with less manual effort.
            </p>
            <div className="metric-grid" aria-label="Portfolio metrics">
              {metrics.map((metric) => (
                <div className="metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="expertise-panel">
            <article>
              <h3>Web Interfaces</h3>
              <p>
                Clean React experiences with responsive layouts, strong visual hierarchy, and
                smooth interactions.
              </p>
            </article>
            <article>
              <h3>AI Automation</h3>
              <p>
                Workflow systems that reduce repetitive tasks, connect tools, and make handoffs
                easier.
              </p>
            </article>
            <article>
              <h3>System Integration</h3>
              <p>
                Reliable bridges between apps, databases, APIs, spreadsheets, and internal
                operations.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
