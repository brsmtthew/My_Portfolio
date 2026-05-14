import React from "react";

export function Footer({ profile, footerNavItems, socialLinks, currentYear }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div className="footer-top">
          <a className="brand footer-brand" href="#home" aria-label={`${profile.name} home`}>
            <span className="brand-mark" aria-hidden="true">
              {profile.mark}
            </span>
            <span className="brand-word">{profile.name}</span>
          </a>
          <a className="back-top" href="#home">
            Back to top
          </a>
        </div>

        <div className="footer-main">
          <div className="footer-block footer-summary">
            <h2>Overview</h2>
            <p>
              Clean web systems, AI automations, and polished interfaces for teams that need
              practical tools.
            </p>
          </div>

          <nav className="footer-block footer-nav" aria-label="Footer navigation">
            <h2>Navigate</h2>
            <div>
              {footerNavItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="footer-block footer-socials" aria-label="Social and contact links">
            <h2>Connect</h2>
            <div>
              {socialLinks.map((link) => (
                <a
                  className="social-link"
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-availability">
            <span aria-hidden="true"></span>
            Open to freelance and collaboration opportunities.
          </p>
          <small>
            &copy; {currentYear} {profile.name}. All rights reserved.
          </small>
          <p>Built by {profile.name} with React and Vite.</p>
        </div>
      </div>
    </footer>
  );
}
