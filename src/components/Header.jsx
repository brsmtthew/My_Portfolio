import React from "react";

export function Header({ profile, navItems, menuOpen, onMenuToggle, onNavClick }) {
  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label={`${profile.name} home`}>
          <span className="brand-word">{profile.name}</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={onMenuToggle}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        <div className={`nav-links ${menuOpen ? "is-open" : ""}`} id="primary-navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => onNavClick(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          className="hire-link"
          href="#contact"
          onClick={(event) => onNavClick(event, "#contact")}
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
