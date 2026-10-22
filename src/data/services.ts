import type { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: "business-landing-pages",
    title: "High-Converting Business Landing Pages",
    shortDescription: "Custom-designed, blazing-fast landing pages engineered to convert visitors into booked calls and paying customers.",
    businessBenefit: "Increases ad campaign ROI and establishes immediate brand credibility with responsive, modern design.",
    deliverables: [
      "Custom UI/UX designed for conversion",
      "Mobile-first responsive architecture",
      "Interactive product showcases & testimonials",
      "Lead capture forms & CRM integrations",
      "Sub-second load times & Core Web Vitals optimization"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO Best Practices"],
    iconName: "Globe",
    popular: true
  },
  {
    id: "rag-applications",
    title: "RAG Systems & Document AI Assistants",
    shortDescription: "Retrieval-Augmented Generation systems that allow your team or customers to query complex internal PDFs, manuals, and databases with verifiable citations.",
    businessBenefit: "Eliminates hours spent searching company docs, reduces customer support latency, and eliminates hallucinations.",
    deliverables: [
      "Vector search pipeline (Pinecone / Chroma / Qdrant)",
      "Document ingestion (PDF, DOCX, Markdown, Web)",
      "Context-aware prompt engineering with citation verification",
      "Interactive web chat interface with streaming responses",
      "Access control & security boundaries"
    ],
    techStack: ["Python", "FastAPI", "LangChain", "OpenAI / Claude", "Vector DBs", "React"],
    iconName: "FileText",
    popular: true
  },
  {
    id: "ai-chatbots-assistants",
    title: "Intelligent AI Chatbots & Customer Assistants",
    shortDescription: "24/7 autonomous virtual agents trained on your business rules to answer FAQs, qualify leads, and schedule client calls.",
    businessBenefit: "Captures leads while you sleep and cuts customer support overhead by up to 60%.",
    deliverables: [
      "Custom system persona and guardrail enforcement",
      "Lead qualification & appointment booking integration",
      "Multi-channel support (Website widget, WhatsApp, Slack)",
      "Conversation history & sentiment analysis dashboard",
      "Smooth fallback to human agents"
    ],
    techStack: ["React", "TypeScript", "OpenAI API", "Webhooks", "Tailwind CSS"],
    iconName: "Bot",
    popular: true
  },
  {
    id: "custom-ai-automation",
    title: "Custom AI Tools & Workflow Automations",
    shortDescription: "Tailored AI tools that automate tedious manual operations like summarization, data extraction, categorization, and content generation.",
    businessBenefit: "Saves your team 15+ hours weekly on administrative tasks so you can focus on high-value business growth.",
    deliverables: [
      "Automated data extraction & parsing pipelines",
      "Multi-step agentic workflows with error retry logic",
      "Automated report generation and email dispatch",
      "Integration with existing spreadsheets, CRMs, and Notion",
      "Admin control panel with audit logs"
    ],
    techStack: ["Python", "Node.js", "LangGraph", "Zapier / Make Webhooks", "REST APIs"],
    iconName: "Cpu"
  },
  {
    id: "react-web-applications",
    title: "Full-Stack React Web Applications",
    shortDescription: "Scalable SaaS dashboards, client portals, and internal tools crafted with robust component architectures.",
    businessBenefit: "Provides a reliable digital foundation for your digital product with zero technical debt.",
    deliverables: [
      "Role-based authentication & user permissions",
      "Real-time database integration & state management",
      "Analytics dashboards with interactive data charts",
      "Stripe / payment gateway integration",
      "Production-ready deployment on Vercel or Render"
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Node.js / Express", "PostgreSQL"],
    iconName: "LayoutDashboard"
  },
  {
    id: "chrome-extensions",
    title: "Custom Chrome Extensions (Manifest V3)",
    shortDescription: "Feature-rich browser extensions that automate web browsing tasks, extract page data, or embed AI copilots into existing SaaS tools.",
    businessBenefit: "Enables instant productivity directly inside your browser without switching between tabs or software.",
    deliverables: [
      "Manifest V3 compliant extension architecture",
      "DOM scraping & contextual web page analysis",
      "Popup UI and floating overlay widget",
      "Background service workers & secure storage",
      "Chrome Web Store submission preparation"
    ],
    techStack: ["TypeScript", "Chrome Extension APIs", "React", "Tailwind CSS", "Vite"],
    iconName: "Puzzle"
  },
  {
    id: "portfolio-company-websites",
    title: "Portfolio & Agency Showcases",
    shortDescription: "Distinctive, high-aesthetic showcase websites designed to highlight your work, win premium clients, and command higher fees.",
    businessBenefit: "Transforms your personal brand or agency into an authoritative, unforgettable market leader.",
    deliverables: [
      "Distinctive dark/light aesthetic matching your brand",
      "Interactive project filtering & case study breakdown",
      "Integrated contact enquiry flow & calendar booking",
      "Social proof and credentials showcase",
      "Lightning-fast SEO structure"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    iconName: "Sparkles"
  },
  {
    id: "api-integrations-backend",
    title: "REST API Integrations & Backend Services",
    shortDescription: "Connecting your software to third-party APIs, payment gateways, CRM systems, and building custom microservices.",
    businessBenefit: "Unifies fragmented tools into a synchronized, automated data ecosystem.",
    deliverables: [
      "Secure webhook handlers with idempotency checks",
      "Custom RESTful endpoints with OpenAPI documentation",
      "Third-party API connectors (Stripe, OpenAI, Google, Twilio)",
      "Database schema design and indexing",
      "Cloud deployment on Render / AWS"
    ],
    techStack: ["Node.js", "Python / FastAPI", "PostgreSQL", "Docker", "Render / AWS"],
    iconName: "Server"
  }
];
