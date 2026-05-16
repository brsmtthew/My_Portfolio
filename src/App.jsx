import React, { useEffect, useMemo, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HistorySection } from "./components/HistorySection";
import { StackSection } from "./components/StackSection";
import { WorkSection } from "./components/WorkSection";
import {
  carouselStack,
  coreStack,
  footerNavItems,
  heroCapabilities,
  heroInsights,
  heroSignals,
  history,
  metrics,
  navItems,
  profile,
  projects,
  socialLinks,
} from "./data/portfolio";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1100px)");
    const closeDesktopMenu = () => {
      if (desktopQuery.matches) {
        setMenuOpen(false);
      }
    };

    closeDesktopMenu();
    desktopQuery.addEventListener("change", closeDesktopMenu);

    return () => desktopQuery.removeEventListener("change", closeDesktopMenu);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll(
      ".section .shell, .contact-shell, .project-row, .timeline-row",
    );

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    revealItems.forEach((item) => item.classList.add("reveal-item"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const nextErrors = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Enter at least 2 characters.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (form.message.trim().length < 10) {
      nextErrors.message = "Write at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("");

    if (!validateForm()) {
      setStatus("Please review the highlighted fields.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email app.");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: "" }));
    }
  };

  const handleNavClick = (event, href) => {
    if (!href.startsWith("#")) return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    setMenuOpen(false);

    const headerHeight =
      document.querySelector(".site-header")?.getBoundingClientRect().height ?? 0;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const contentTarget =
      target.querySelector(":scope > .shell, :scope > .contact-shell") ?? target;
    const targetRect = contentTarget.getBoundingClientRect();
    const top = Math.max(targetRect.top + window.scrollY - headerHeight - 34, 0);

    window.history.pushState(null, "", href);
    window.scrollTo({
      top,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <>
      <div className="live-backdrop" aria-hidden="true"></div>
      <Header
        profile={profile}
        navItems={navItems}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onNavClick={handleNavClick}
      />

      <main id="main">
        <HeroSection
          profile={profile}
          heroSignals={heroSignals}
          heroInsights={heroInsights}
          heroCapabilities={heroCapabilities}
          onNavClick={handleNavClick}
        />
        <AboutSection metrics={metrics} />
        <WorkSection projects={projects} />
        <StackSection coreStack={coreStack} carouselStack={carouselStack} />
        <HistorySection history={history} />
        <ContactSection
          profile={profile}
          form={form}
          errors={errors}
          status={status}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </main>

      <Footer
        profile={profile}
        footerNavItems={footerNavItems}
        socialLinks={socialLinks}
        currentYear={currentYear}
      />
    </>
  );
}

export default App;
