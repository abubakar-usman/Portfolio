export type Project = {
  name: string;
  tagline: string;
  points: string[];
  stack: string[];
  live?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const profile = {
  name: "Abubakar Usman",
  role: "Computer Science Student & Full-Stack SaaS Developer",
  location: "Islamabad, Pakistan",
  email: "abuxusman911@gmail.com",
  phone: "+92 309 0003841",
  phoneHref: "+923090003841",
  linkedin: "https://linkedin.com/in/abubakar-usman-654808400",
  github: "https://github.com/abubakar-usman",
  summary:
    "Dynamic Computer Science student at NUTECH, Islamabad, and Full-Stack Web Developer. Dedicated to learning by building real software under practical constraints rather than relying solely on lecture slides. Skilled across multi-tenant SaaS architectures, live production platforms, databases, security tooling, automata theory, and AI integrations (LLMs & Voice AI).",
  stats: [
    { value: "6+", label: "Shipped projects" },
    { value: "1", label: "Live AI SaaS" },
    { value: "7", label: "Languages" },
    { value: "2028", label: "BSCS at NUTECH" },
  ],
};

export const marqueeSkills = [
  "TypeScript",
  "Next.js 14",
  "React",
  "Node.js",
  "Prisma ORM",
  "PostgreSQL",
  "NextAuth",
  "Tailwind CSS",
  "Gemini API",
  "OpenAI API",
  "Eleven Labs",
  "Vapi",
  "Python",
  "C++",
  "Java",
  "SQL",
  "x86 Assembly",
  "shadcn/ui",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++", "Java", "SQL", "x86 Assembly"],
  },
  {
    title: "Frameworks & Tools",
    items: ["Next.js (14)", "React.js", "Node.js", "Prisma ORM", "NextAuth", "shadcn/ui", "Tailwind CSS"],
  },
  {
    title: "Data & Systems",
    items: ["PostgreSQL (Neon)", "Multi-tenant SaaS", "REST APIs", "Automata Theory"],
  },
  {
    title: "AI & Machine Learning",
    items: ["Gemini API", "OpenAI API", "Eleven Labs", "Vapi", "scikit-learn", "pandas"],
  },
  {
    title: "Security & Design",
    items: ["Malware Detection", "API Threat Scanning", "UI/UX", "Graphic Design"],
  },
  {
    title: "Currently Learning",
    items: ["LangChain", "dbt", "Apache Airflow", "Data Engineering"],
  },
];

export const experience = [
  {
    role: "Web Development Intern",
    company: "Elite Filing",
    period: "June 2026 — Present",
    points: [
      "Deliver production-ready landing pages for US-based dental and medical clinic clients, owning each project end-to-end from requirements synthesis to deployment.",
      "Built and actively maintain the official marketing platform for Operant Labs (an AI transformation advisory firm) using Next.js and Tailwind CSS, featuring capability showcases, case studies, and interactive contact systems.",
    ],
  },
  {
    role: "BS in Computer Science",
    company: "National University of Technology (NUTECH), Islamabad",
    period: "2024 — 2028",
    points: [
      "Coursework and applied work spanning data structures, automata theory, systems programming, databases, and applied machine learning.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Operant Labs",
    tagline: "Core data structures engine",
    points: [
      "Frontend-Ongong project",
      "Operant Labs is an AI transformation and engineering company that helps enterprises, investors, and growth stage organizations move from AI strategy to enterprise execution. It combines technical due diligence, AI solution architecture, automation, and forward deployed engineering to design, implement, and optimize scalable AI systems that deliver measurable business value while supporting long term governance and operational excellence.",
    ],
    stack: ["Next.js", "React", "Talwind CSS", "Framer Motion", "Stack CP"],
  },
  {
    name: "Elite-Filing",
    tagline: "Core data structures engine",
    points: [
       "Frontend-Ongong project",
      " Elite-Filing focuses on building a fully automated business formation and compliance platform for Elite Filing. It streamlines the entire client journey, from AI powered consultation and KYC verification to payment processing, government submissions, document delivery, and annual compliance reminders. The platform combines modern web technologies, workflow automation, and AI to reduce manual work, improve accuracy, and deliver a seamless experience for both clients and administrators.",
    ],
    stack: ["Next.js", "React", "Talwind CSS", "Framer Motion", "Stack CP"],
  },{
    name: "SolarPro Pakistan",
    tagline: "Flagship multi-tenant SaaS platform",
    points: [
      "Full-stack project management platform for solar installation companies with organization-scoped data isolation and role-based access control.",
      "Custom manual JWT callback system resolving OAuth/credentials conflicts, Google OAuth via NextAuth, dynamic survey forms and Cloudinary image workflows.",
    ],
    stack: ["Next.js 14", "TypeScript", "Prisma ORM", "PostgreSQL", "NextAuth", "shadcn/ui"],
  },
  {
    name: "CognivioAI",
    tagline: "Live AI-powered learning SaaS",
    points: [
      "Co-founded and engineered a live platform converting study PDFs into AI flashcards, quizzes, summaries and real-time voice study sessions.",
      "Gemini API for intelligence synthesis, Eleven Labs and Vapi for voice interactivity, serving live free-tier users.",
    ],
    stack: ["Next.js", "React", "Gemini API", "Eleven Labs", "Vapi"],
    live: "https://cognivioai.app",
  },
  {
    name: "ThreatScope",
    tagline: "Security & malware analysis system",
    points: [
      "Web threat detection app integrating the VirusTotal API with a heuristic offline fallback model for URL scanning and threat scoring.",
      "Real-time Java Swing GUI presenting severity levels, detailed scan logs and security verification output.",
    ],
    stack: ["Java", "VirusTotal API", "Java Swing", "Malware Detection"],
  },
  {
    name: "AI Learning App",
    tagline: "ICAT 2026 coursework project",
    points: [
      "Adaptive AI learning application exploring dynamic study interfaces on a modern Next.js and React architecture.",
    ],
    stack: ["Next.js", "React", "JavaScript", "AI Interface"],
  },
  {
    name: "Loan Approval System",
    tagline: "Automated decision engine",
    points: [
      "Python loan evaluation platform using automated rule-based logic to verify applicant financial parameters against credit eligibility standards.",
    ],
    stack: ["Python", "Rule-Based Logic", "Data Evaluation"],
  },
  {
    name: "Mini Amazon Marketplace",
    tagline: "Core data structures engine",
    points: [
      "High-performance C++ simulation using BSTs for search, hash tables for auth, stacks for cart LIFO, queues for order FIFO and heaps for priority sorting.",
    ],
    stack: ["C++", "Data Structures", "Algorithms"],
  },
];
