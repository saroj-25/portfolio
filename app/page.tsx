import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioSections from "@/components/PortfolioSections";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { PERSONAL_INFO } from "@/data/portfolioData";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Saroj Bhandari",
  url: "https://sarojbhandari100.com.np",
  jobTitle: [
    "Software Engineer",
    "AI/ML Researcher",
    "Educator",
    "Entrepreneur",
  ],
  sameAs: [PERSONAL_INFO.github, PERSONAL_INFO.linkedin],
  knowsAbout: [
    "Software Engineering",
    "Retrieval-Augmented Generation",
    "Natural Language Processing",
    "Machine Learning",
    "AI for Education",
  ],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Tribhuvan University" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <section
          id="about"
          className="section about-section container"
          data-reveal
        >
          <div className="section-label">
            <span>01 / A LITTLE CONTEXT</span>
            <h2>
              Engineer.
              <br />
              Researcher.
              <br />
              <em>Always learning.</em>
            </h2>
            <figure className="about-photo">
              <Image
                src="/image/profile.webp"
                alt="Saroj Bhandari"
                width={96}
                height={96}
                sizes="96px"
              />
              <figcaption>
                Saroj Bhandari
                <br />
                <span>Based in Nepal</span>
              </figcaption>
            </figure>
          </div>
          <div className="section-body">
            <p className="lead">
              I’m interested in what happens when good engineering meets{" "}
              <em>curious thinking.</em>
            </p>
            <p>
              I am a software engineer and educator interested in building
              intelligent systems and exploring how AI can solve practical
              problems.
            </p>
            <p>
              My work spans software engineering, artificial intelligence,
              machine learning, NLP, RAG, data science, and education
              technology. Based in Nepal, I bring that work into the classroom,
              my research, and the products we build at Kritim Mind
              Technologies.
            </p>
          </div>
        </section>
        <PortfolioSections />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
