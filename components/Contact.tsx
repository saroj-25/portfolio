"use client";
import Image from "next/image";
import { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SCHOLAR_URL } from "@/data/seo";
import { ArrowUpRight, BrainCircuit, Check, Code2, Copy, GraduationCap, Hand, MapPin, Phone, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "./SocialIcons";

const topics = [
  { title: "Research collaboration", hint: "NLP, RAG, AI for education", icon: BrainCircuit, prompt: "Hi Saroj, I'd like to explore a research collaboration on…" },
  { title: "Software project", hint: "Web, mobile, AI-powered apps", icon: Code2, prompt: "Hi Saroj, I have a software project in mind. Here's the idea…" },
  { title: "Teaching & training", hint: "Classes, workshops, mentoring", icon: GraduationCap, prompt: "Hi Saroj, we'd love you to run a class or workshop on…" },
  { title: "Just saying hi", hint: "Ideas, questions, conversations", icon: Hand, prompt: "Hi Saroj, I came across your work and wanted to say…" },
];
const MESSAGE_LIMIT = 3000;

export default function Contact() {
  const [topic, setTopic] = useState<string | null>(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");
  const [copied, setCopied] = useState(false);
  const activeTopic = topics.find((t) => t.title === topic);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setNotice("Email address copied.");
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setNotice(
        "Copy is unavailable. Select the email address above to copy it, or open an email draft.",
      );
    }
  }
  function chooseTopic(title: string) {
    const next = topics.find((t) => t.title === title)!;
    const previous = activeTopic?.prompt;
    setTopic(title);
    setSubject(title);
    // Only replace the message when it is empty or still the previous suggestion.
    if (!message.trim() || message === previous) setMessage(next.prompt);
    document.getElementById("message")?.focus({ preventScroll: true });
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
          {" "}
          <em>meaningful.</em>
        </h2>
        <p className="contact-intro">
          I am open to research collaborations, software engineering
          opportunities, teaching, AI/ML projects, and interesting technology
          conversations.
        </p>

        <fieldset className="contact-pick">
          <legend>What would you like to build together?</legend>
          <div className="contact-pick-grid">
            {topics.map(({ title, hint, icon: Icon }) => (
              <button
                key={title}
                type="button"
                className="contact-pick-card"
                aria-pressed={topic === title}
                onClick={() => chooseTopic(title)}
              >
                <span className="contact-pick-icon" aria-hidden="true"><Icon size={22} /></span>
                <strong>{title}</strong>
                <span>{hint}</span>
                <span className="contact-pick-check" aria-hidden="true"><Check size={14} /></span>
              </button>
            ))}
          </div>
        </fieldset>

        <div className="contact-grid">
          <aside className="contact-card">
            <div className="contact-person">
              <Image src="/image/profile.webp" alt="" width={64} height={64} sizes="64px" />
              <div>
                <strong>Saroj Bhandari</strong>
                <span><span className="contact-online" aria-hidden="true" /> {PERSONAL_INFO.availability}</span>
              </div>
            </div>
            <p className="contact-kicker">A conversation can be a beginning.</p>
            <div className="email-row">
              <a href={`mailto:${PERSONAL_INFO.email}`}>
                {PERSONAL_INFO.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className={`copy-button ${copied ? "is-copied" : ""}`}
                aria-label="Copy email address"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
            <div className="social-links">
              <a href={PERSONAL_INFO.github} data-brand="github"><GitHubIcon /> GitHub</a>
              <a href={PERSONAL_INFO.twitter} data-brand="x"><XIcon /> X / Twitter</a>
              <a href={PERSONAL_INFO.linkedin} data-brand="linkedin"><LinkedInIcon /> LinkedIn</a>
              <a href={SCHOLAR_URL} target="_blank" rel="noopener noreferrer">
                <GraduationCap size={16} aria-hidden="true" /> Google Scholar
              </a>
            </div>
            <ul className="contact-facts">
              <li><MapPin size={16} aria-hidden="true" /> Kathmandu, Nepal</li>
              <li>
                <Phone size={16} aria-hidden="true" />
                <a href="tel:+9779844266088">{PERSONAL_INFO.phone}</a>
              </li>
            </ul>
          </aside>

          <form onSubmit={submit} className="contact-form">
            <h3>
              <Send size={20} aria-hidden="true" />
              {activeTopic ? activeTopic.title : "What’s on your mind?"}
            </h3>
            <div className="form-row">
              <label htmlFor="name">
                Name
                <input id="name" name="name" autoComplete="name" required maxLength={100} placeholder="Your name" />
              </label>
              <label htmlFor="email">
                Email
                <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" />
              </label>
            </div>
            <label htmlFor="subject">
              Subject
              <input id="subject" name="subject" value={subject} onChange={(event) => setSubject(event.target.value)} required maxLength={180} placeholder="Pick a card above or write your own" />
            </label>
            <label htmlFor="message">
              <span className="message-label">
                Message
                <span className="message-count" aria-live="polite">{message.length} / {MESSAGE_LIMIT}</span>
              </span>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                maxLength={MESSAGE_LIMIT}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell me a little about your idea…"
              />
            </label>
            <button type="submit" className="button primary">
              Open Email Draft <ArrowUpRight size={16} />
            </button>
            <p className="small-note">This prepares a draft in your email app. Nothing is sent until you press send there.</p>
          </form>
        </div>
        <p className="form-notice" role="status">
          {notice}
        </p>
      </div>
    </section>
  );
}
