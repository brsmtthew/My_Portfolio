import React from "react";

export function ContactSection({
  profile,
  form,
  errors,
  status,
  onChange,
  onSubmit,
}) {
  return (
    <section className="light-section section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-shell">
        <div className="contact-panel">
          <div className="contact-head">
            <div>
              <p className="contact-eyebrow">Start a build</p>
              <h2 className="impact contact-title" id="contact-title">
                Contact
              </h2>
              <p className="contact-intro">
                Tell me what you want to build, improve, or automate. I will reply with a clear
                next step.
              </p>
            </div>
          </div>

          <div className="contact-layout">
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={onChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p className="field-error" id="name-error" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={onChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p className="field-error" id="email-error" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project, timeline, and what success should look like"
                  value={form.message}
                  onChange={onChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                ></textarea>
                {errors.message && (
                  <p className="field-error" id="message-error" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button className="transmit-button" type="submit">
                Send Message
              </button>
              <p className="form-status" aria-live="polite">
                {status}
              </p>
            </form>
          </div>

          <div className="contact-footer">
            <div className="profile-links" aria-label="Profile links">
              {profile.links.map((link) => (
                <a
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
      </div>
    </section>
  );
}
