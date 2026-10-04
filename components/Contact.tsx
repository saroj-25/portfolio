"use client";
import { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUpRight, Copy, Check, Mail, MapPin, MessageSquare } from "lucide-react";
export default function Contact() {
  const [subject, setSubject] = useState("");
  const [notice, setNotice] = useState("");
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setNotice("Email address copied.");
    } catch {
      setNotice(
        "Copy is unavailable. Select the email address above to copy it, or open an email draft.",
      );
    }
  }
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = String(data.get("subject") || "Portfolio enquiry");
    const body = `${data.get("message")}\n\nFrom: ${data.get("name")}\nReply to: ${data.get("email")}`;
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNotice(
      "Your email app has been requested. Review and send the draft there. If it did not open, email the address above directly.",
    );
  }
  return (
    <section id="contact" className="contact-band" data-reveal>
      <div className="container">
        <p className="eyebrow">LET’S CONNECT</p>
        <h2>
          Let’s build something
          <br />
          <em>meaningful.</em>
          <ArrowUpRight className="contact-arrow" aria-hidden="true" />
        </h2>
        <p className="contact-intro">
          I am open to research collaborations, software engineering
          opportunities, teaching, AI/ML projects, and interesting technology
          conversations.
        </p>
        <div className="contact-grid">
          <div className="contact-details">
            <span className="contact-symbol" aria-hidden="true"><Mail size={30} /></span>
            <p className="contact-kicker">A conversation can be a beginning.</p>
            <div className="email-row">
              <a href={`mailto:${PERSONAL_INFO.email}`}>
                {PERSONAL_INFO.email}
              </a>
              <button
                onClick={copyEmail}
                className="copy-button"
                aria-label="Copy email address"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
            <div className="social-links">
              <a href={PERSONAL_INFO.github}>
                GitHub <ArrowUpRight size={13} />
              </a>
              <a href={PERSONAL_INFO.linkedin}>
                LinkedIn <ArrowUpRight size={13} />
              </a>
              <a
                href="https://scholar.google.com/citations?user=OGF4reEAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar <ArrowUpRight size={13} />
              </a>
            </div>
            <p className="contact-location"><MapPin size={16} aria-hidden="true" /> Kathmandu, Nepal</p>
            <a className="phone" href="tel:+9779844266088">
              {PERSONAL_INFO.phone}
            </a>
            <p className="small-note">
              Prefer a message? This form prepares a draft in your email app.
            </p>
          </div>
          <form onSubmit={submit} className="contact-form">
            <h3><MessageSquare size={21} aria-hidden="true" /> What’s on your mind?</h3>
            <fieldset className="contact-topics">
              <legend>Choose a topic, or write your own subject</legend>
              {["Research collaboration", "Software project", "Teaching"].map(topic => (
                <button key={topic} type="button" aria-pressed={subject === topic} onClick={() => setSubject(topic)}>{topic}</button>
              ))}
            </fieldset>
            <div className="form-row">
              <label htmlFor="name">
                Name
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                />
              </label>
              <label htmlFor="email">
                Email
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                />
              </label>
            </div>
            <label htmlFor="subject">
              Subject
              <input id="subject" name="subject" value={subject} onChange={event => setSubject(event.target.value)} required maxLength={180} />
            </label>
            <label htmlFor="message">
              Message
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                maxLength={3000}
              />
            </label>
            <button type="submit" className="button primary">
              Open Email Draft <ArrowUpRight size={16} />
            </button>
          </form>
        </div>
        <p className="form-notice" role="status">
          {notice}
        </p>
      </div>
    </section>
  );
}
