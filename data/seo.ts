import { PERSONAL_INFO } from "./portfolioData";

// Keep the public production identity consistent across crawlers and previews.
export const SITE_URL = "https://sarojbhandari100.com.np";
export const SITE_TITLE = "Saroj Bhandari | Software Engineer & AI/ML Researcher in Nepal";
export const SITE_DESCRIPTION =
  "Saroj Bhandari is a software engineer, AI/ML researcher and educator in Nepal. Explore his projects, NLP and RAG research, teaching and work at Kritim Mind.";
export const SCHOLAR_URL =
  "https://scholar.google.com/citations?user=OGF4reEAAAAJ&hl=en";

export const profileStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: PERSONAL_INFO.name,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: `${SITE_URL}/`,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PERSONAL_INFO.name,
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/image/profile.webp`,
      description: SITE_DESCRIPTION,
      jobTitle: ["Software Engineer", "AI/ML Researcher", "Educator", "Entrepreneur"],
      sameAs: [PERSONAL_INFO.github, PERSONAL_INFO.linkedin, SCHOLAR_URL],
      knowsAbout: [
        "Software Engineering",
        "Retrieval-Augmented Generation",
        "Natural Language Processing",
        "Machine Learning",
        "AI for Education",
      ],
      homeLocation: { "@type": "Country", name: "Nepal" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Tribhuvan University" },
    },
  ],
};
