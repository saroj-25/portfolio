import { publication, works } from "./redesign";

export type DetailPage = {
  path: string;
  title: string;
  description: string;
  category: string;
  role?: string;
  technology?: string;
  sections: { title: string; paragraphs: string[] }[];
  links: { label: string; href: string }[];
};
const chatbot = works.find(work => work.visual === "chatbot")!;
const guru = works.find(work => work.visual === "education")!;

export const detailPages: Record<string, DetailPage> = {
  chatbot: {
    path: "/projects/aadim-chatbot",
    title: "Aadim Chatbot — RAG for College Information",
    description: "Saroj Bhandari’s RAG chatbot project for Aadim National College: Python, LangChain and FAISS for questions about admissions, courses and policies.",
    category: "Project / Conversational AI",
    role: chatbot.role,
    technology: chatbot.technology ?? undefined,
    sections: [
      { title: "The problem", paragraphs: ["Students and visitors need information about admissions, courses, faculty and college policies. Aadim Chatbot brings those topics into a conversational interface backed by college documentation."] },
      { title: "My contribution", paragraphs: ["My role was AI development. The project uses Python, LangChain, FAISS, natural language processing and a large language model to connect student questions with relevant college information."] },
      { title: "How the system fits together", paragraphs: ["The knowledge base draws on college documentation, course catalogs, admission guidelines and faculty information. Vector embeddings and FAISS support document similarity search. A Python backend uses LangChain to orchestrate retrieval and LLM inference.", "Retrieval provides relevant material for the generation step. This is a different task from asking a language model to answer college-specific questions solely from its training knowledge."] },
      { title: "Scope and evidence", paragraphs: ["The documented scope covers admissions, courses, faculty and college policies. The college website is linked below as the project destination.", "No public benchmark, response-time measurement or source-code release is listed for this project. The results from my separate algorithm-learning research should not be treated as evaluation results for Aadim Chatbot."] },
    ],
    links: [
      { label: "Visit Aadim National College", href: chatbot.url! },
      { label: "Read the college RAG design note", href: "/writing/rag-college-chatbot-design" },
      { label: "Related RAG research", href: "/research/rag-nepali-algorithm-learning" },
    ],
  },
  guru: {
    path: "/projects/kritim-guru",
    title: "Kritim Guru — Entrance Preparation for Students in Nepal",
    description: "Explore Saroj Bhandari’s software development work on Kritim Guru, an MCQ entrance preparation platform for +2 students in Nepal.",
    category: "Project / Education technology",
    role: guru.role,
    technology: guru.technology ?? undefined,
    sections: [
      { title: "Who it serves", paragraphs: ["Kritim Guru / Preping Guru is an MCQ-based entrance preparation platform for +2 students in Nepal. It brings entrance preparation into a digital product available on web, Android and desktop."] },
      { title: "My contribution", paragraphs: ["My contribution is software development through Kritim Mind Technologies. The documented technology stack includes Flutter, React and REST APIs.", "My wider role as CEO of Kritim Mind Technologies involves leading work across software, education technology, AI and digital solutions. This page focuses specifically on the entrance preparation product."] },
      { title: "Product and implementation", paragraphs: ["The product centers on multiple-choice entrance preparation. Flutter, React and REST APIs are the technologies recorded in my portfolio; the public product is linked below for a closer look.", "Supporting web, Android and desktop makes platform consistency an important design consideration. A useful review looks at whether questions, answer choices and navigation remain understandable on a small phone as well as a larger screen."] },
      { title: "What this case study establishes", paragraphs: ["This overview records the audience, platform availability, technology stack and my software development role. It does not claim user counts, exam outcomes or performance improvements without supporting measurements."] },
    ],
    links: [
      { label: "Visit Kritim Guru", href: guru.url! },
      { label: "Kritim Mind Technologies", href: "https://kritimmind.com" },
      { label: "My teaching and training", href: "/#teaching" },
    ],
  },
  research: {
    path: "/research/rag-nepali-algorithm-learning",
    title: "RAG for Algorithm Learning in Romanized Nepali and English",
    description: "Saroj Bhandari’s co-authored research on retrieval-augmented algorithm learning, with reported P@5 of 0.79 and student satisfaction of 4.31/5.",
    category: "Research / NLP and education",
    role: "Researcher & co-author",
    technology: "BM25 · FAISS · HNSW · Hybrid retrieval · Re-ranking · GPT-4 · Llama 3",
    sections: [
      { title: "The research question", paragraphs: ["This research investigates retrieval-augmented generation for algorithm learning with English and Romanized Nepali code-mixed queries. It connects information retrieval, Nepali NLP and AI for education."] },
      { title: "Publication", paragraphs: [publication.title, `${publication.authors} — ${publication.venue}, ${publication.year}, ${publication.pages}. DOI: ${publication.doi}.`] },
      { title: "Technical scope", paragraphs: ["The project’s documented technology scope includes BM25, FAISS, HNSW, hybrid retrieval, re-ranking, GPT-4 and Llama 3. The paper is the authoritative source for the experimental configuration and comparisons."] },
      { title: "Reported results", paragraphs: ["The project evaluation reported Precision at 5 (P@5) of 0.79 and student satisfaction of 4.31 out of 5.", "These figures describe the reported evaluation. They are not a guarantee of answer accuracy for every question, nor evidence that the same performance transfers to other datasets, languages or applications. Consult the paper for its methodology and evaluation context."] },
      { title: "Related applied work", paragraphs: ["Aadim Chatbot is a separate college-information project using RAG. Both projects involve retrieval and educational information, but their audiences, questions and evaluation evidence should remain distinct."] },
    ],
    links: [
      { label: "Read the paper / DOI", href: publication.url },
      { label: "Aadim Chatbot case study", href: "/projects/aadim-chatbot" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=OGF4reEAAAAJ&hl=en" },
    ],
  },
  writing: {
    path: "/writing/rag-college-chatbot-design",
    title: "Designing a RAG Chatbot for College Questions",
    description: "A practical design note on college-information RAG: source documents, retrieval, unanswered questions and evaluation, alongside the Aadim Chatbot project.",
    category: "Technical note / Retrieval-augmented generation",
    sections: [
      { title: "Start with the information, not the model", paragraphs: ["A college chatbot has a narrow responsibility: help someone find reliable information about the institution. A fluent answer is not enough if it describes an old admission rule or the wrong course. Retrieval-augmented generation supplies external context to a language model, but the quality of that context still needs attention.", "Aadim Chatbot uses Python, LangChain and FAISS for college-information questions. This note describes design and evaluation considerations for that kind of system. It is not a report of unrecorded production incidents or benchmarks."] },
      { title: "Keep the source attached to the answer", paragraphs: ["For a new implementation, retain the source document, section heading and update date alongside each passage. Admissions guidance and faculty information can change. Keeping provenance makes a retrieved passage easier to check and replace.", "When splitting a document, preserve the context that gives a statement meaning. A fee amount without its course name or academic year can be misleading even when the retrieval system finds it correctly."] },
      { title: "Inspect retrieval before judging the final answer", paragraphs: ["A useful debugging sequence is to inspect the query, the retrieved passages and then the generated answer. If the right policy never reached the model, changing the wording of a generation prompt does not repair that retrieval failure.", "FAISS supports similarity search over vectors. Evaluate whether the retrieved passages actually answer the question; similarity alone is not evidence that a passage contains the required fact. When exact program names or abbreviations matter, compare retrieval approaches on representative questions rather than assuming one method will always win."] },
      { title: "Make missing information an expected outcome", paragraphs: ["Consider the illustrative question: “What is the application deadline for the next intake?” If the available documents only describe a previous intake, an answer should not silently reuse that date. A safer response explains that the current deadline is not established by the available source and directs the reader to the admissions office.", "This example is a proposed evaluation case, not a recorded Aadim Chatbot conversation. Similar tests can cover unsupported questions, conflicting documents and ambiguous course names."] },
      { title: "Evaluate retrieval and answers separately", paragraphs: ["Prepare a review set containing a question, an authoritative reference, the expected supporting passage and whether the system should answer or decline. Include paraphrases and questions that cannot be answered from the available material.", "Review retrieved evidence separately from answer correctness and source attribution. Track latency independently as well. A system can retrieve a relevant document and still generate an unsupported detail, or produce a plausible answer without finding the intended source."] },
      { title: "Keep the evidence specific to the project", paragraphs: ["My separate algorithm-learning research reports P@5 of 0.79 and student satisfaction of 4.31/5 for its evaluation. Those results do not establish the performance of a college admissions chatbot. Each application needs evidence matched to its own documents, audience and questions.", "For a college-information project, a useful next step is a small, reviewed question set with traceable source passages. That gives changes to retrieval and generation something concrete to be tested against."] },
    ],
    links: [
      { label: "Aadim Chatbot case study", href: "/projects/aadim-chatbot" },
      { label: "Algorithm-learning research and results", href: "/research/rag-nepali-algorithm-learning" },
      { label: "LangChain retrieval documentation", href: "https://docs.langchain.com/oss/python/deepagents/retrieval" },
      { label: "FAISS documentation", href: "https://faiss.ai/" },
    ],
  },
};
