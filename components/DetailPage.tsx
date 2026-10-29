import type { Metadata } from "next";
import Link from "next/link";
import type { DetailPage as PageData } from "@/data/caseStudies";
import { SITE_URL } from "@/data/seo";
import "./detail-page.css";

export function detailMetadata(page: PageData): Metadata {
  const title = `${page.title} | Saroj Bhandari`;
  return {
    title, description: page.description,
    alternates: { canonical: page.path },
    openGraph: { title, description: page.description, url: page.path, type: "article", siteName: "Saroj Bhandari", images: [{ url: "/image/profile.webp", alt: "Saroj Bhandari" }] },
    twitter: { card: "summary", title, description: page.description, creator: "@saroj_bhandari0", images: ["/image/profile.webp"] },
  };
}

export default function DetailPage({ page }: { page: PageData }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${SITE_URL}${page.path}#page`, url: `${SITE_URL}${page.path}`, name: page.title, description: page.description,
        author: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Saroj Bhandari", url: SITE_URL },
        breadcrumb: { "@id": `${SITE_URL}${page.path}#breadcrumb` } },
      { "@type": "BreadcrumbList", "@id": `${SITE_URL}${page.path}#breadcrumb`, itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: page.title, item: `${SITE_URL}${page.path}` },
      ] },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <a className="skip-link" href="#detail-main">Skip to content</a>
      <header className="detail-header">
        <Link href="/">Saroj Bhandari</Link>
        <nav aria-label="Portfolio"><Link href="/#work">Work</Link><Link href="/#research">Research</Link><Link href="/#contact">Contact</Link></nav>
      </header>
      <main id="detail-main" className="detail-page">
        <nav className="detail-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><span aria-current="page">{page.category}</span></nav>
        <article>
          <header className="detail-intro">
            <p className="eyebrow">{page.category}</p>
            <h1>{page.title}</h1>
            <p className="detail-description">{page.description}</p>
            <p className="detail-byline">By <Link href="/#about">Saroj Bhandari</Link></p>
            {page.role && <p><strong>My role:</strong> {page.role}</p>}
            {page.technology && <p><strong>Technologies:</strong> {page.technology}</p>}
          </header>
          <nav className="detail-contents" aria-label="On this page"><strong>On this page</strong>{page.sections.map((section, index) => <a key={section.title} href={`#section-${index + 1}`}>{section.title}</a>)}</nav>
          {page.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}
          <section className="detail-links"><h2>Explore further</h2><ul>{page.links.map(link => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul></section>
        </article>
        <footer className="detail-footer"><Link href="/#work">Back to selected work</Link><Link href="/#contact">Get in touch</Link></footer>
      </main>
    </>
  );
}
