import React from "react";
import portraitImage from "../assets/image1.jpg";
import { ThreeSystemScene } from "./ThreeSystemScene";

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
            <ThreeSystemScene variant="hero" label="3D orbiting interface model" />
            <div className="hero-orbit hero-orbit-one" aria-hidden="true"></div>
            <div className="hero-orbit hero-orbit-two" aria-hidden="true"></div>
            <div className="hero-cube hero-cube-one" aria-hidden="true"></div>
            <div className="hero-cube hero-cube-two" aria-hidden="true"></div>
            <figure className="portrait-stage" aria-label="Portrait of Boris Matthew Dairo">
              <div className="portrait-depth portrait-depth-back" aria-hidden="true"></div>
              <div className="portrait-depth portrait-depth-mid" aria-hidden="true"></div>
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
            <div className="hero-badge hero-badge-design">
              <strong>AI Systems</strong>
              <span>Automation ready</span>
            </div>
            <div className="hero-badge hero-badge-stack">
              <strong>UI UX</strong>
              <span>React interfaces</span>
            </div>
            <div className="hero-badge hero-badge-code">
              <strong>3D Web</strong>
              <span>Glass interface</span>
            </div>
            <div className="hero-badge hero-badge-build">
              <strong>Clean Builds</strong>
              <span>Launch focused</span>
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
