import React from "react";
import { ThreeSystemScene } from "./ThreeSystemScene";

export function HistorySection({ history }) {
  return (
    <section className="dark-section section history-section" id="history" aria-labelledby="history-title">
      <div className="shell">
        <div className="history-stage">
          <div className="history-heading">
            <h2 className="impact muted-title" id="history-title">
              History
            </h2>
            <p>
              A focused path through interface design, automation, and system building for real
              operational workflows.
            </p>
          </div>
          <div className="history-visual" aria-hidden="true">
            <ThreeSystemScene variant="history" label="3D timeline system model" />
            <div className="history-axis">
              {history.map((item) => (
                <span key={item.title}></span>
              ))}
            </div>
          </div>
        </div>
        <div className="timeline">
          {history.map((item, index) => (
            <article className="timeline-row" key={item.title}>
              <div className="timeline-meta">
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                <p>{item.period}</p>
                <span>{item.focus}</span>
              </div>
              <div className="timeline-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <p className="timeline-note">{item.highlight}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
