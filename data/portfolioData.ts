export interface Skill {
  name: string;
  category: 'Frontend & Apps' | 'Backend & Langs' | 'AI & ML' | 'Databases & Cloud' | 'Core Concepts';
  level: number; // percentage
  iconName: string;
  description: string;
  popular?: boolean;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  category: 'Web Apps' | 'AI & ML' | 'Full Stack' | 'Cross-Platform';
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: string;
  keyFeatures: string[];
  architecture?: string[];
  date: string;
}

export interface TimelineItem {
  id: string;
  type: 'experience' | 'teaching' | 'education';
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies?: string[];
  link?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  type: 'certification' | 'workshop';
  details?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const PERSONAL_INFO = {
  name: "Saroj Bhandari",
  roleTitle: "Founder & CEO | Software Developer & AI Specialist",
  taglines: [
    "Founder & CEO @ Kritim Mind Technology",
    "TU Topper B.Sc. CSIT (92.4% Final Sem / 85.57% Overall)",
    "Software Developer & AI/ML Engineer",
    "Adjunct CS Lecturer (AI, DSA, DBMS, Algorithms)"
  ],
  bio: "Software Developer, AI/ML Specialist, and Founder & CEO of Kritim Mind Technology Pvt. Ltd. Tribhuvan University CSIT Topper (85.57% overall, 92.4% final sem). Passionate about Agentic AI, RAG, full-stack systems, Flutter cross-platform apps, and educating the next generation of CS engineers.",
  location: "Melung-7, Dolakha / Kathmandu, Nepal",
  phone: "(+977) 9844266088",
  email: "sarosebhandari100@gmail.com",
  github: "https://github.com/saroj-25",
  linkedin: "https://linkedin.com/in/sarojbhandari17",
  twitter: "https://github.com/saroj-25",
  status: "Founder & CEO @ Kritim Mind Technology | Open for Technical Consultations",
  availability: "Available for Consultations, AI Architecture & Research",
  companyWebsite: "https://www.kritimmind.com"
};

export const STATS = [
  { label: "B.Sc. CSIT Score", value: "85.57%" },
  { label: "TU Topper (8th Sem)", value: "92.4%" },
  { label: "Tech & AI Stack", value: "15+" },
  { label: "High School GPA", value: "3.63" },
];

export const SKILLS: Skill[] = [
  // Programming Languages & Backend
  { name: "Python", category: "Backend & Langs", level: 95, iconName: "Terminal", description: "Scikit-Learn, PyTorch, Django, Data Science & AI Pipelines", popular: true },
  { name: "C & C++", category: "Backend & Langs", level: 92, iconName: "Code2", description: "Algorithms, Object-Oriented Programming, Data Structures", popular: true },
  { name: "Java", category: "Backend & Langs", level: 88, iconName: "FileCode", description: "Spring Framework, Enterprise Systems, OOP Principles" },
  { name: "C# & .NET Core", category: "Backend & Langs", level: 85, iconName: "Cpu", description: ".NET Framework, Web APIs, Desktop & Backend Architecture" },

  // AI & ML
  { name: "Artificial Intelligence & ML", category: "AI & ML", level: 95, iconName: "BrainCircuit", description: "Machine Learning, Model Evaluation, Regression & Classification", popular: true },
  { name: "Retrieval-Augmented Generation (RAG)", category: "AI & ML", level: 92, iconName: "Sparkles", description: "Vector Embeddings, FAISS, Document Intelligence & LLMs", popular: true },
  { name: "Agentic AI Systems", category: "AI & ML", level: 90, iconName: "Network", description: "LangChain, Autonomous Workflows, Tool Calling & Generative AI", popular: true },

  // Frontend & Mobile Apps
  { name: "Flutter", category: "Frontend & Apps", level: 90, iconName: "Layout", description: "Cross-platform Android, iOS, Web & Desktop applications", popular: true },
  { name: "React JS", category: "Frontend & Apps", level: 90, iconName: "Layers", description: "Broadway Infosys Certified, Modern Web UI & Admin Dashboards", popular: true },
  { name: "Django & Web Frameworks", category: "Frontend & Apps", level: 88, iconName: "Server", description: "RESTful Web APIs, Admin Dashboards, Authentication" },

  // Databases & Cloud
  { name: "Vector Database (FAISS)", category: "Databases & Cloud", level: 90, iconName: "Database", description: "High-speed similarity search for AI & RAG workflows", popular: true },
  { name: "MySQL & PostgreSQL", category: "Databases & Cloud", level: 92, iconName: "HardDrive", description: "Relational schema design, complex SQL queries, index optimization" },
  { name: "MongoDB & Oracle", category: "Databases & Cloud", level: 85, iconName: "Database", description: "NoSQL document stores & enterprise relational databases" },
  { name: "Docker & Git", category: "Databases & Cloud", level: 88, iconName: "Box", description: "Containerized environments, version control & team workflows" },

  // Core CS Concepts
  { name: "Data Structures & Algorithms", category: "Core Concepts", level: 98, iconName: "GitBranch", description: "Course Instructor & Specialist in DSA, Linear Algebra & Graph Theory", popular: true },
  { name: "Database Management Systems", category: "Core Concepts", level: 95, iconName: "Zap", description: "RDBMS architecture, normalization, ACID properties, transaction processing" },
  { name: "Object-Oriented Programming (OOP)", category: "Core Concepts", level: 95, iconName: "GitFork", description: "Inheritance, Polymorphism, Abstraction, Design Patterns" }
];

export const PROJECTS: Project[] = [
  {
    id: "kritim-mind-tech-platform",
    title: "Kritim Mind Tech Platform",
    tagline: "Official Company Platform, Internship & Event Management Suite",
    description: "Built the comprehensive company digital portal with team collaboration tools, internship portal, and event management. Implemented robust authentication and full admin management dashboard.",
    fullDescription: "Kritim Mind Tech Platform is the flagship system for Kritim Mind Technology Pvt. Ltd. It powers company operations, client showcases, intern program management, student event registrations, and role-based administrative workflows.",
    category: "Full Stack",
    tags: ["React JS", "Node.js", "Django", "PostgreSQL", "Docker", "REST APIs"],
    image: "/projects/kritimmind.png",
    liveUrl: "https://www.kritimmind.com",
    featured: true,
    metrics: "Powers core operations & client portals for Kritim Mind Technology",
    keyFeatures: [
      "Role-Based Authentication & Secure Admin Dashboard",
      "Internship Application & Candidate Review Portal",
      "Event Management & Registration Workflow System",
      "Clean high-performance design responsive across all devices"
    ],
    architecture: [
      "React JS frontend with modular component architecture",
      "Django / REST API backend microservices",
      "PostgreSQL database with secure JWT authentication"
    ],
    date: "2025"
  },
  {
    id: "flight-fare-prediction-system",
    title: "Flight Fare Prediction System",
    tagline: "Machine Learning Model to Predict Airline Ticket Prices",
    description: "Built an intelligent Machine Learning model to predict dynamic airline ticket prices using Python and scikit-learn. Evaluated multiple algorithms including Random Forest, Linear Regression, and Decision Trees.",
    fullDescription: "An end-to-end data science and machine learning application that analyzes historical flight parameters (airline, departure date, duration, stops, routes) to accurately forecast ticket costs, helping travelers optimize booking timing.",
    category: "AI & ML",
    tags: ["Python", "Scikit-Learn", "Machine Learning", "Random Forest", "Decision Tree", "Data Science"],
    image: "/projects/flightfare.png",
    githubUrl: "https://github.com/saroj-17/FlightFarePredectionSystem",
    featured: true,
    metrics: "High accuracy model comparison across Random Forest & Decision Tree algorithms",
    keyFeatures: [
      "Comprehensive Data Preprocessing & Feature Engineering",
      "Algorithm Evaluation across Random Forest, Decision Tree, and Linear Regression",
      "Interactive Prediction API endpoint for user queries",
      "Detailed metric evaluation (RMSE, MAE, R-squared score)"
    ],
    architecture: [
      "Python 3.x with Pandas, NumPy, and Scikit-Learn data science stack",
      "Random Forest Regressor as primary trained predictive model",
      "GitHub open-source repository"
    ],
    date: "2024"
  },
  {
    id: "cross-platform-entrance-app",
    title: "Kritimguru Cross-Platform App",
    tagline: "Entrance Preparation MCQ Platform for Bachelor Students in Nepal",
    description: "Developed a cross-platform entrance preparation MCQ app for bachelor-level students (Web, Android, Desktop) enabling practice quizzes with instant evaluation and teacher exam management modules.",
    fullDescription: "Kritimguru offers entrance preparation for B.Sc. CSIT, BCA, and engineering entrance aspirants in Nepal. Students can take practice quizzes with instant scores, while teachers can manage question banks, schedule exams, and evaluate student performance.",
    category: "Cross-Platform",
    tags: ["Flutter", "Cross-Platform", "React JS", "REST APIs", "Android & Desktop", "Quiz Engine"],
    image: "/projects/kritimguru.png",
    liveUrl: "https://kritimguru.com",
    featured: true,
    metrics: "Serves entrance aspirants across Nepal with instant MCQ quiz evaluations",
    keyFeatures: [
      "Cross-Platform compatibility (Web, Android APK, and Desktop)",
      "Instant MCQ Quiz Scoring & Performance Analytics",
      "Teacher Module for Creating Exams & Managing Question Banks",
      "Automated Student Evaluation & Leaderboard Rankings"
    ],
    architecture: [
      "Flutter framework for unified cross-platform client builds",
      "RESTful API server with database query optimizations for high-concurrency exams"
    ],
    date: "2024"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "exp-1",
    type: "experience",
    role: "Founder And CEO",
    organization: "Kritim Mind Technology Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    period: "Dec 2025 – Present",
    description: "Directing overall technology vision, leading AI/ML research initiatives, and building software solutions for enterprise clients and educational platforms.",
    achievements: [
      "Founded Kritim Mind Technology Pvt. Ltd. to deliver state-of-the-art software & AI applications.",
      "Architected the flagship Kritim Mind Tech Platform and internship management ecosystem.",
      "Leading technical teams in Agentic AI, RAG integrations, and mobile/web development."
    ],
    technologies: ["Python", "Agentic AI", "RAG", "React JS", "Django", "Flutter", "Docker"],
    link: "https://www.kritimmind.com"
  },
  {
    id: "exp-2",
    type: "experience",
    role: "Software Developer",
    organization: "PAHADI RESEARCH LLC (Seattle, WA, USA)",
    location: "Kathmandu, Nepal (Remote)",
    period: "June 2022 – Dec 2025",
    description: "Engaged in full-stack software development, database design, and cloud services for US-headquartered research and technology firm.",
    achievements: [
      "Developed high-reliability software modules and REST APIs for overseas clients.",
      "Collaborated remotely with cross-functional engineering teams in Seattle, USA.",
      "Implemented database query optimizations and automated data processing workflows."
    ],
    technologies: ["Python", "C# / .NET", "Java", "React JS", "MySQL", "Git"],
    link: "https://pahadi.net/"
  },
  {
    id: "teach-1",
    type: "teaching",
    role: "Adjunct Lecturer, Computer Science",
    organization: "Texas International College & Aadim National College",
    location: "Kathmandu, Nepal",
    period: "Aug 2024 – Present",
    description: "Teaching core undergraduate Computer Science courses for B.Sc. CSIT and BCA degree programs.",
    achievements: [
      "Instructing courses: Artificial Intelligence, Data Structures and Algorithms (DSA), Design & Analysis of Algorithms, Database Management Systems (DBMS), and C/C++ OOP.",
      "Guiding senior students on AI research, machine learning projects, and algorithmic problem solving.",
      "Participating in faculty development workshops on Generative AI in education."
    ],
    technologies: ["Artificial Intelligence", "DSA", "DBMS", "C++", "Python", "Linear Algebra"]
  },
  {
    id: "edu-1",
    type: "education",
    role: "B.Sc. in Computer Science & Information Technology (B.Sc. CSIT)",
    organization: "Tribhuvan University (Orchid International College)",
    location: "Kathmandu, Nepal",
    period: "Graduation: 2023",
    description: "Overall Percentage: 85.57% | Final Semester (8th): 92.4% (TU Topper & College Topper in multiple semesters).",
    achievements: [
      "Final Semester 92.4% — Tribhuvan University (TU) Topper.",
      "College Topper across multiple academic semesters.",
      "Relevant Coursework: Data Structures & Algorithms, C/C++, Java, Operating Systems, AI, DBMS, .NET Framework, Linear Algebra."
    ]
  },
  {
    id: "edu-2",
    type: "education",
    role: "School Leaving Certificate Examination (+2 Science)",
    organization: "VS Niketan College",
    location: "Kathmandu, Nepal",
    period: "Awarded 2019",
    description: "GPA: 3.63 / 4.0",
    achievements: [
      "Recipient of HISSAN Meritorious Student Award (2019)."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
    year: "2022",
    type: "certification",
    details: "Supervised ML algorithms, Linear/Logistic Regression, Model Evaluation & Optimization."
  },
  {
    title: "Unsupervised Machine Learning, Recommender Systems, & Reinforcement Learning",
    issuer: "Coursera",
    year: "2022",
    type: "certification",
    details: "Clustering, Dimensionality Reduction, Collaborative Filtering, and Reinforcement Learning algorithms."
  },
  {
    title: "Professional Training in React JS",
    issuer: "Broadway Infosys",
    year: "2022",
    type: "certification",
    details: "Comprehensive hands-on React framework, modern state management, Hooks, and Component design."
  },
  {
    title: "Faculty Development Program: Classroom as a Thinking Space",
    issuer: "Texas International College",
    year: "2026",
    type: "workshop",
    details: "Nurturing Higher Order Thinking Skills through Active Engagement, conducted by Prof. Dr. Ganga Ram Gautam."
  },
  {
    title: "Effective Literature Review using GEN AI Tools",
    issuer: "Aadim National College",
    year: "2025",
    type: "workshop",
    details: "Conducted by Prof. Dr. Bal Krishna Bal, Asst. Prof. Dr. Prakash Poudyal, and Prof. Dr. Subarna Shakya."
  },
  {
    title: "Research Methods in IT: Hands-on Workshop on Leveraging Generative AI",
    issuer: "Aadim National College",
    year: "2025",
    type: "workshop",
    details: "Conducted by Prof. Sudan Jha, PhD, and Dr. Sameer Kharel."
  }
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `Available commands:
  • help       : List available terminal commands
  • bio        : Brief profile of Saroj Bhandari
  • ceo        : Details on Kritim Mind Technology Pvt. Ltd.
  • skills     : Technical & Academic skill set
  • projects   : Key projects (Kritim Mind, Flight Fare ML, Kritimguru)
  • education  : Academic record (TU Topper 92.4%)
  • contact    : Email, Phone & Social links
  • clear      : Clear terminal display`,
  
  bio: `Saroj Bhandari
Founder & CEO @ Kritim Mind Technology Pvt. Ltd.
Adjunct Lecturer in Computer Science (Texas Int'l & Aadim National College)
TU B.Sc. CSIT Topper (85.57% Overall, 92.4% 8th Semester)
Contact: sarosebhandari100@gmail.com | (+977) 9844266088`,

  ceo: `Kritim Mind Technology Pvt. Ltd.
Founder & CEO: Saroj Bhandari
Location: Kathmandu, Nepal
Website : https://www.kritimmind.com
Focus   : AI/ML engineering, Agentic Systems, RAG workflows, and enterprise software products.`,
  
  skills: `Technical Stack:
  • Programming: Python, C, C++, Java, C#
  • Frameworks  : Flutter, .NET Core, Spring, Django, LangChain, React JS
  • AI & ML     : Artificial Intelligence, Machine Learning, RAG, Agentic AI
  • Databases   : FAISS Vector DB, MySQL, MongoDB, Oracle
  • Core CS     : Data Structures & Algorithms, DBMS, OOP, Linear Algebra`,
  
  projects: `Featured Projects:
  1. Kritim Mind Tech Platform (https://www.kritimmind.com)
  2. Flight Fare Prediction System (https://github.com/saroj-17/FlightFarePredectionSystem)
  3. Kritimguru MCQ Platform (https://kritimguru.com)`,
  
  education: `Academic Honors:
  • B.Sc. CSIT - Tribhuvan University (Orchid Int'l College): 85.57% Overall
  • 8th Semester TU Topper: 92.4%
  • +2 Science - VS Niketan College: GPA 3.63/4.0 (HISSAN Meritorious Award 2019)`,

  contact: `Contact Saroj Bhandari:
  • Email   : sarosebhandari100@gmail.com
  • Phone   : (+977) 9844266088
  • LinkedIn: https://linkedin.com/in/sarojbhandari17
  • GitHub  : https://github.com/saroj-25
  • Web     : https://www.kritimmind.com`
};
