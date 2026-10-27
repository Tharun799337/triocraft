import type { SkillGroup, ValueItem, ProcessStep } from '../types';

export const PROFILE = {
  name: "TrioCraft",
  studio: "TrioCraft Design & Development",
  role: "Design & Development Studio // AI & Web Systems",
  status: "Available for Client Projects",
  headline: "I Build Modern Websites & AI-Powered Tools for Businesses.",
  subheadline: 
    "Helping startups, founders, and growing businesses turn ideas into high-performing web platforms, intelligent RAG systems, AI agents, and workflow automations that scale.",
  location: "India (Serving Global Clients)",
  email: import.meta.env.VITE_CONTACT_EMAIL || "trioocraaft@gmail.com",
  github: import.meta.env.VITE_GITHUB_URL || "https://github.com/Tharun799337",
  linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/in/tharun-dev",
  bioIntro: 
    "I am a full-stack engineer and AI developer focused on creating reliable digital products. From high-converting corporate web applications to custom generative AI pipelines and browser extensions, I build technology that solves operational bottlenecks.",
  bioDetailed: [
    "My engineering philosophy centers around solving real business problems. I don't just write code; I design systems that improve conversion rates, automate repetitive tasks, and empower users with intuitive AI capabilities.",
    "Over my projects, I have implemented scalable React/TypeScript web apps, LangChain & LlamaIndex RAG pipelines, computer vision models, time-series prediction systems, and custom Chrome extensions that supercharge user productivity.",
    "I specialize in bridging the gap between cutting-edge AI technologies (LLMs, embeddings, agents, vector databases) and polished, resilient full-stack web architectures."
  ],
  stats: [
    { label: "Core Focus", value: "AI + Full-Stack" },
    { label: "Turnaround", value: "Fast & Agile" },
    { label: "Code Standard", value: "Production-Grade" },
    { label: "Client Availability", value: "Accepting Projects" }
  ]
};

export const VALUES: ValueItem[] = [
  {
    title: "Reliability & Ownership",
    description: "I deliver on agreed milestones, respect deadlines, and take complete ownership of every component from UI design to production deployment.",
    iconName: "ShieldCheck"
  },
  {
    title: "Clear, Transparent Communication",
    description: "No technical jargon confusion. You get consistent updates, architecture walkthroughs, and clear answers at every stage of the build.",
    iconName: "MessageSquareCheck"
  },
  {
    title: "Maintainable, Modern Code",
    description: "Clean TypeScript, modular components, and well-documented logic so your team or future developers can easily extend the platform.",
    iconName: "Code2"
  },
  {
    title: "Business-First Architecture",
    description: "Every feature and AI integration is chosen for tangible ROI—saving hours of manual work or increasing customer conversions.",
    iconName: "TrendingUp"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Scope Definition",
    description: "We discuss your business objectives, target users, technical constraints, and define a clear, realistic deliverable roadmap with transparent pricing."
  },
  {
    step: "02",
    title: "Architecture & Interactive Design",
    description: "I outline the database schema, API contracts, AI prompt/RAG pipeline, and build clean responsive UI wireframes for your approval."
  },
  {
    step: "03",
    title: "Agile Build & Iteration",
    description: "Rapid, test-driven development using React, TypeScript, Tailwind, and robust backend/AI services with frequent demo checkpoints."
  },
  {
    step: "04",
    title: "Testing, Optimization & Launch",
    description: "Rigorous responsive testing, Core Web Vitals optimization, SEO preparation, and zero-downtime deployment to Vercel/Render/Cloud."
  },
  {
    step: "05",
    title: "Handoff & Post-Launch Support",
    description: "Complete source code transfer, video documentation walkthroughs, and post-launch guarantee to ensure smooth operations."
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Generative AI & LLMs", highlight: true },
      { name: "RAG (Retrieval-Augmented Generation)", highlight: true },
      { name: "LangChain / LlamaIndex", highlight: true },
      { name: "Vector Databases (Pinecone, Chroma)", highlight: true },
      { name: "AI Agentic Workflows", highlight: true },
      { name: "OpenAI / Claude / Gemini APIs", highlight: true },
      { name: "Computer Vision (OpenCV)", highlight: false },
      { name: "Time-Series & Predictive Models", highlight: false }
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React 19 & Next.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Framer Motion", highlight: false },
      { name: "Responsive UI/UX Design", highlight: true },
      { name: "Chrome Extensions (Manifest V3)", highlight: true },
      { name: "State Management (Zustand, Redux)", highlight: false },
      { name: "Web Performance & SEO", highlight: false }
    ]
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "Node.js / Express", highlight: true },
      { name: "Python / FastAPI", highlight: true },
      { name: "REST APIs & Webhooks", highlight: true },
      { name: "PostgreSQL & MongoDB", highlight: false },
      { name: "Authentication (JWT, OAuth)", highlight: false },
      { name: "Serverless Functions", highlight: false }
    ]
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Git & GitHub", highlight: true },
      { name: "Vercel & Render Deployment", highlight: true },
      { name: "Docker & Containerization", highlight: false },
      { name: "AWS Cloud Basics", highlight: false },
      { name: "CI/CD Workflows", highlight: false }
    ]
  }
];
