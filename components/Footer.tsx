import Image from "next/image";
import { Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GitHubIcon, LinkedInIcon, XIcon } from "./SocialIcons";
export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-brand">
        <Image src="/image/logo-mark.png" alt="" width={36} height={36} sizes="36px" />
        <div>
          <p>© 2026 Saroj Bhandari</p>
          <p>Software Engineer · AI/ML Researcher · Educator</p>
        </div>
      </div>
      <nav aria-label="Social links" className="footer-social">
        <a href={PERSONAL_INFO.github} aria-label="GitHub" title="GitHub"><GitHubIcon size={17} /></a>
        <a href={PERSONAL_INFO.twitter} aria-label="X / Twitter" title="X / Twitter"><XIcon size={16} /></a>
        <a href={PERSONAL_INFO.linkedin} aria-label="LinkedIn" title="LinkedIn"><LinkedInIcon size={16} /></a>
        <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email" title="Email"><Mail size={17} /></a>
        <a href="#home" aria-label="Back to top">
          ↑
        </a>
      </nav>
    </footer>
  );
}
