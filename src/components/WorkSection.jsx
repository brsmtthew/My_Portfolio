import React from "react";

export function WorkSection({ projects }) {
  return (
    <section className="dark-section section" id="work" aria-labelledby="work-title">
      <div className="shell">
        <div className="work-heading">
          <h2 className="impact section-title" id="work-title">
            Work
          </h2>
          <p>Selected systems with clear workflows, polished interfaces, and reliable data movement.</p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-row" key={project.title}>
              <div className={`project-visual visual-${index + 1}`} aria-hidden="true">
                <div className="visual-screen">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="project-copy">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stats" aria-label={`${project.title} highlights`}>
                  {project.stats.map((stat) => (
                    <span key={stat}>{stat}</span>
                  ))}
                </div>
                <ul aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
