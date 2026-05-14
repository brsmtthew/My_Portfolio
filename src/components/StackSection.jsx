import React from "react";

export function StackSection({ coreStack, carouselStack }) {
  return (
    <section className="light-section section" id="skills" aria-labelledby="skills-title">
      <div className="shell">
        <div className="split-heading">
          <h2 className="impact section-title" id="skills-title">
            Skills
          </h2>
          <p>
            Tools I use to design interfaces, connect data, automate workflows, and ship reliable
            web systems.
          </p>
        </div>

        <div className="stack-layout">
          <ul className="stack-grid" aria-label="Core technology stack">
            {coreStack.map((item) => (
              <li key={item.label}>
                <span className="stack-icon" aria-hidden="true">
                  <img src={item.icon} alt="" loading="lazy" />
                </span>
                <strong>{item.label}</strong>
                <small>{item.group}</small>
              </li>
            ))}
          </ul>
        </div>

        <div className="stack-carousel" aria-label="More technologies">
          <div className="stack-track">
            {carouselStack.map((item, index) => (
              <div className="stack-pill" key={`${item.label}-${index}`}>
                <span aria-hidden="true">
                  <img src={item.icon} alt="" loading="lazy" />
                </span>
                <strong>{item.label}</strong>
                <small>{item.group}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
