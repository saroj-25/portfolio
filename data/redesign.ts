import { PROJECTS } from "./portfolioData";

// Content from the redesign brief and existing portfolio. Null links are deliberately
// rendered as visible placeholders; replace them only with confirmed destinations.
export const publication = {
  title:
    "Natural Language Processing-Driven Chatbot for Algorithm Learning: A Retrieval-Augmented Generation Approach using Romanized Nepali and English",
  authors: "Bhandari, S., & Dhital, P.",
  venue: "Aadim Journal of Multidisciplinary Research",
  year: "2026",
  pages: "2(1), 132–149",
  doi: "10.3126/ajmr.v2i1.97539",
  url: "https://doi.org/10.3126/ajmr.v2i1.97539",
};
const aadimChatbot = PROJECTS.find((project) => project.id === "aadim-college-ai-chatbot")!;

export const works = [
  {
    title: "Aadim Connect",
    kind: "MOBILE APPLICATION & SERVER ENGINEERING",
    visual: "connect",
    architecture: [
      { title: "Mobile application", detail: "Application development for the mobile experience." },
      { title: "Application architecture", detail: "Designing how the application and its supporting systems fit together." },
      { title: "Server-side engineering", detail: "A primary focus on the server implementation behind the application." },
    ],
    description: "Aadim Connect brings together a mobile application and its supporting server-side systems for Aadim National College. My work spans the application architecture and implementation, with a particular focus on the server.",
    technology: null,
    role: "Application architecture, mobile application & server-side development",
    url: "https://task.aadimcollege.edu.np",
    github: null,
    paper: null,
  },
  {
    title: "Aadim Chatbot",
    kind: "CONVERSATIONAL AI",
    visual: "chatbot",
    description: aadimChatbot.description,
    technology: aadimChatbot.tags.join(" · "),
    role: "AI development",
    url: aadimChatbot.liveUrl ?? null,
    github: null,
    paper: null,
  },
  {
    title: "MySchool",
    kind: "EDUCATION SAAS",
    visual: "builder",
    description: "A SaaS platform for schools with multiple drag-and-drop capabilities, designed to make building and arranging school experiences more flexible.",
    technology: null,
    role: "Software development",
    url: null,
    github: null,
    paper: null,
  },
  {
    title: "Kritim Guru / Preping Guru",
    visual: "education",
    kind: "EDUCATION TECHNOLOGY",
    description:
      "An MCQ-based entrance preparation platform for +2 students in Nepal, available on web, Android, and desktop. Developed through Kritim Mind Technologies.",
    technology: "Flutter · React · REST APIs",
    role: "Software development",
    url: "https://kritimguru.com",
    github: null,
    paper: null,
  },
  {
    title: "RAG Research for Data Structures & Algorithms",
    visual: "research",
    kind: "APPLIED AI RESEARCH",
    description:
      "Investigating retrieval-augmented generation for algorithm learning with English and Romanized Nepali code-mixed queries. The reported evaluation achieved P@5 = 0.79 and student satisfaction of 4.31/5.",
    technology:
      "BM25 · FAISS · HNSW · Hybrid retrieval · Re-ranking · GPT-4 · Llama 3",
    role: "Researcher & co-author",
    url: "#research",
    github: null,
    paper: publication.url,
  },
  {
    title: "Flight Fare Prediction System",
    visual: "prediction",
    kind: "MACHINE LEARNING",
    description:
      "A machine learning project for predicting flight fares from historical flight data, with preprocessing, feature engineering, and comparison of regression models.",
    technology: "Python · scikit-learn · Random Forest · Decision Trees",
    role: "ML development",
    url: null,
    github: "https://github.com/saroj-17/FlightFarePredectionSystem",

    paper: null,
  },
  {
    title: "KritimSMS",
    visual: "messaging",
    kind: "SOFTWARE ENGINEERING",
    description:
      "An SMS communication platform developed for business and system messaging.",
    technology: null,
    role: "Software development",
    url: "https://kritimsms.com",
    github: null,
    paper: null,
  },
];
export const experience = [
  {
    role: "CEO",
    company: "Kritim Mind Technologies Pvt. Ltd.",
    organizations: ["kritim-mind"] as const,
    location: "Nepal",
    period: "2025 – Present",
    points: [
      "Direct the company’s work in software, education technology, AI, and digital solutions.",
      "Lead technical teams and the development of educational and business platforms.",
    ],
  },
  {
    role: "Development Team Lead",
    company: "Mirai Design and Print LLC",
    organizations: ["mirai-design"] as const,
    location: "Remote",
    period: "2025 – Present",
    points: [
      "Lead the development team.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Pahadi Research LLC",
    organizations: ["pahadi-research"] as const,
    location: "Remote · Seattle",
    period: "2024 – Present",
    points: [
      "Develop software modules, REST APIs, and database-backed systems.",
      "Collaborate with remote engineering teams on data processing and software delivery.",
      "Work with Python, Java, .NET, React, and MySQL.",
    ],
  },
  {
    role: "Adjunct Lecturer",
    company: "Texas International College | Aadim National College",
    organizations: ["texas-college", "aadim-college"] as const,
    location: "Nepal",
    period: "2024-Present",
    points: [
      "Teach undergraduate computer science, including AI, algorithms, and database systems.",
      "Guide students through programming, machine learning projects, and research.",
       "Supervised more than 50 projects in software development and robotics.",
    ],
  },
];
export const skills = [
  ["Languages", "Java, Python, JavaScript, Dart, C"],
  ["Backend", "Spring Boot, REST APIs, Node.js"],
  ["Frontend", "React, Next.js, Flutter"],
  ["AI / ML", "Machine Learning, NLP, RAG, LLMs, Computer Vision"],
  ["Databases", "MySQL, PostgreSQL, MongoDB"],
  ["AI Tools", "LangChain, FAISS, Ollama"],
  ["DevOps", "Linux, Git, Nginx, Docker"],
];
export const subjects = [
  "Data Structures & Algorithms",
  "Design & Analysis of Algorithms",
  "Artificial Intelligence",
  "Machine Learning",
  "DBMS",
  "C Programming",
  "OOP with Java",
  ".NET",
  "Web Technologies",
  "Python",
  "Advance Java",
  "Computer Vision",
  "Agentic AI",
];
export const interests = [
  "Retrieval-Augmented Generation",
  "NLP",
  "Nepali NLP",
  "AI for Education",
  "Large Language Models",
  "Information Retrieval",
  "Machine Learning",
  "Data Science",
];
