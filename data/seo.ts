import { PERSONAL_INFO } from "./portfolioData";
import { publication } from "./redesign";

// Keep the public production identity consistent across crawlers and previews.
export const SITE_URL = "https://sarojbhandari100.com.np";
export const SITE_TITLE = "Saroj Bhandari | Software Engineer & AI/ML Researcher in Nepal";
export const SITE_DESCRIPTION =
  "Saroj Bhandari is a software engineer, AI/ML researcher and educator in Nepal. Explore his projects, NLP and RAG research, teaching and work at Kritim Mind.";
export const SCHOLAR_URL =
  "https://scholar.google.com/citations?user=OGF4reEAAAAJ&hl=en";
export const SITE_KEYWORDS = [
  "Saroj Bhandari",
  "Saroj Bhandari Nepal",
  "Saroj Bhandari software engineer",
  "Saroj Bhandari AI researcher",
  "Saroj Bhandari Labs",
  "Saroj Bhandari Kritim Mind",
  "Kritim Mind Technologies",
  "KritimGuru",
  "AI/ML researcher Nepal",
  "RAG Nepali NLP",
];

export const profileStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: PERSONAL_INFO.name,
      alternateName: ["Saroj Bhandari Portfolio", "sarojbhandari100"],
      image: `${SITE_URL}/image/logo.webp`,
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
      givenName: "Saroj",
      familyName: "Bhandari",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/image/profile.webp`,
      description: SITE_DESCRIPTION,
      jobTitle: ["Software Engineer", "AI/ML Researcher", "Educator", "Entrepreneur"],
      sameAs: [
        PERSONAL_INFO.github,
        PERSONAL_INFO.lab,
        PERSONAL_INFO.linkedin,
        PERSONAL_INFO.twitter,
        SCHOLAR_URL,
      ],
      worksFor: [
        { "@id": `${SITE_URL}/#kritim-mind` },
        { "@type": "CollegeOrUniversity", name: "Texas International College" },
        { "@type": "CollegeOrUniversity", name: "Aadim National College" },
      ],
      knowsAbout: [
        "Software Engineering",
        "Retrieval-Augmented Generation",
        "Natural Language Processing",
        "Nepali NLP",
        "Large Language Models",
        "Machine Learning",
        "AI for Education",
      ],
      homeLocation: { "@type": "Place", name: "Kathmandu, Nepal" },
      nationality: { "@type": "Country", name: "Nepal" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Tribhuvan University" },
        { "@type": "CollegeOrUniversity", name: "Orchid International College" },
      ],
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#kritim-mind`,
      name: "Kritim Mind Technologies Pvt. Ltd.",
      url: PERSONAL_INFO.companyWebsite,
      founder: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ScholarlyArticle",
      "@id": `${SITE_URL}/#publication`,
      headline: publication.title,
      author: [{ "@id": `${SITE_URL}/#person` }, { "@type": "Person", name: "P. Dhital" }],
      datePublished: publication.year,
      isPartOf: { "@type": "Periodical", name: publication.venue },
      sameAs: publication.url,
    },
  ],
};
