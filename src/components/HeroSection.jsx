import React from "react";
import portraitImage from "../assets/image1.jpg";

export function HeroSection({
  profile,
  heroSignals,
  heroInsights,
  heroCapabilities,
  onNavClick,
}) {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="shell hero-shell">
        <div className="hero-stage">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span>Freelance</span>
              <span>{profile.role}</span>
            </div>
            <h1 id="hero-title">Hi, I am Boris Matthew Dairo</h1>
            <p>{profile.summary}</p>
            <div className="hero-actions">
              <a
                className="hire-link hero-action"
                href="#contact"
                onClick={(event) => onNavClick(event, "#contact")}
              >
                Hire Me
              </a>
            </div>
            <ul className="hero-signals" aria-label="Portfolio highlights">
              {heroSignals.map((signal) => (
                <li key={signal}>
                  <span aria-hidden="true"></span>
                  {signal}
                </li>
              ))}
            </ul>
            <div className="hero-dashboard" aria-label="Build process highlights">
              {heroInsights.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="hero-capabilities" aria-label="Capabilities">
              {heroCapabilities.map((capability) => (
                <span key={capability}>{capability}</span>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <figure className="portrait-stage" aria-label="Portrait of Boris Matthew Dairo">
              <div className="portrait-frame">
                <img
                  src={portraitImage}
                  width="1364"
                  height="1536"
                  alt="Boris Matthew Dairo wearing graduation attire"
                  fetchPriority="high"
                />
                <div className="portrait-sheen" aria-hidden="true"></div>
              </div>
            </figure>
            <div className="hero-holograms" aria-hidden="true">
              <div className="hero-hologram-card hero-hologram-card-one">
                <strong>01</strong>
                <span>Interface</span>
              </div>
              <div className="hero-hologram-card hero-hologram-card-two">
                <strong>02</strong>
                <span>Automation</span>
              </div>
              <div className="hero-hologram-card hero-hologram-card-three">
                <strong>03</strong>
                <span>API Bridge</span>
              </div>
              <div className="hero-hologram-card hero-hologram-card-four">
                <strong>04</strong>
                <span>Launch</span>
              </div>
            </div>
            <div className="hero-status-card">
              <strong>AI Systems</strong>
              <span>Clean automation, full-stack interfaces, and launch-ready systems.</span>
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            Scroll Down
            <span aria-hidden="true">v</span>
          </a>
        </div>
      </div>
    </section>
  );
}
