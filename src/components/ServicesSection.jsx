import React from "react";

export function ServicesSection({ services }) {
  return (
    <section className="light-section section" id="services" aria-labelledby="services-title">
      <div className="shell">
        <div className="split-heading">
          <h2 className="impact section-title" id="services-title">
            Services
          </h2>
          <p>
            Focused builds for people who need clean interfaces, reliable automation, and systems
            that feel easy to use.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="service-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p>{service.eyebrow}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
