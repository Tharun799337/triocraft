import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: "rag-pdf-assistant",
    title: "RAG PDF Assistant & Document Intelligence",
    category: "Generative AI",
    shortDescription: "Retrieval-Augmented Generation application enabling semantic Q&A and verified citation extraction across complex multi-page PDF documents.",
    overview: 
      "An intelligent document analysis platform built to eliminate manual skimming of 100+ page technical reports, legal contracts, and business manuals. It combines vector chunking, semantic similarity retrieval, and high-precision LLM reasoning with exact page-level source citations.",
    problemSolved: 
      "Knowledge workers spend up to 20% of their week searching for information locked inside large PDFs. Conventional keyword search misses semantic nuances and context, while generic LLMs hallucinate false information without source verification.",
    solutionImplemented: 
      "Engineered an automated ingestion pipeline that parses PDF text and tables, chunks content using recursive token splitters, generates high-dimensional embeddings, and indexes them in a vector database. Queries run through a similarity re-ranking step before feeding into an LLM with strict groundedness guardrails and clickable page citations.",
    keyFeatures: [
      "Multi-document simultaneous upload (PDF, DOCX, TXT)",
      "High-precision vector similarity search with ChromaDB & Pinecone",
      "Strict citation engine displaying exact page numbers and snippet highlights",
      "Streaming responses with low-latency conversational memory",
      "Custom temperature and strictness controls to prevent hallucinations"
    ],
    techStack: ["Python", "FastAPI", "LangChain", "OpenAI / Claude API", "ChromaDB", "React", "TypeScript", "Tailwind CSS"],
    architectureNote: "Client (React/TS) ➔ FastAPI REST Gateway ➔ Recursive Character Splitter ➔ Text Embeddings ➔ Vector Store Index ➔ Hybrid BM25/Cosine Re-ranker ➔ Guardrailed LLM Synthesis ➔ Streaming Client UI",
    challengesAndSolutions: [
      {
        challenge: "Handling complex multi-column tables and formatting inside dense technical PDFs without losing context.",
        solution: "Implemented layout-aware document loaders with structured markdown table parsing before embedding generation."
      },
      {
        challenge: "LLM hallucinations when answers were not present in the reference documents.",
        solution: "Added explicit system guardrails and confidence thresholds that guide the model to state information absence with citation fallback."
      }
    ],
    image: "/projects/rag-assistant.svg",
    imageAlt: "RAG PDF Assistant Architecture and Chat Interface Mockup",
    status: "Case Study & Architecture Breakdown",
    featured: true
  },
  {
    id: "oracle-ai-role-advisor",
    title: "Oracle AI Role Advisor Chrome Extension",
    category: "Chrome Extensions",
    shortDescription: "Manifest V3 browser copilot analyzing job descriptions, skill gaps, and career pathways with real-time AI role guidance.",
    overview: 
      "A Manifest V3 browser extension engineered to assist candidates and professionals browsing job descriptions and corporate career listings. It extracts role requirements in real time, benchmarks candidate skills, and delivers instant interview preparation briefs and tailored learning paths.",
    problemSolved: 
      "Job seekers waste hours manually comparing lengthy job specifications against their existing competencies, often missing critical keyword mismatches and unaddressed role prerequisites.",
    solutionImplemented: 
      "Developed a background service worker and content script that intelligently scans job postings directly on the page, passes the sanitized text to an AI analysis pipeline, and displays an unobtrusive floating copilot overlay with instant gap analysis and interview drills.",
    keyFeatures: [
      "Manifest V3 compliant with zero performance impact on browser tabs",
      "DOM content parsing tailored for major career portals and enterprise job boards",
      "Instant skill matrix comparison and percentage readiness score",
      "One-click tailored interview question generator based on job criteria",
      "Local encrypted storage for candidate profiles and resume snippets"
    ],
    techStack: ["TypeScript", "Chrome Manifest V3", "React", "Tailwind CSS", "OpenAI API", "Vite"],
    architectureNote: "Active Tab DOM ➔ Isolated Content Script ➔ Background Service Worker ➔ LLM Evaluation Pipeline ➔ Injected Floating React Portal UI",
    challengesAndSolutions: [
      {
        challenge: "Manifest V3 strict CSP limitations and background script lifetime constraints.",
        solution: "Decoupled persistent state into Chrome Storage API and implemented stateless message passing between content scripts and background workers."
      },
      {
        challenge: "Varying HTML layouts across different hiring platforms.",
        solution: "Built a resilient heuristic DOM selector engine with readability text-extraction fallbacks."
      }
    ],
    image: "/projects/oracle-advisor.svg",
    imageAlt: "Oracle AI Role Advisor Chrome Extension Interface",
    status: "Case Study & Architecture Breakdown",
    featured: true
  },
  {
    id: "hospital-management-system",
    title: "Hospital Management & Clinical Operations System",
    category: "Web Development",
    shortDescription: "Enterprise healthcare web platform streamlining patient onboarding, doctor scheduling, electronic medical records, and billing.",
    overview: 
      "A comprehensive clinical administration platform designed to centralize inpatient and outpatient operations. The system manages the complete lifecycle from patient registration and department queues to doctor consultation notes, prescription tracking, and automated billing generation.",
    problemSolved: 
      "Healthcare facilities suffered from delayed patient triage, lost paper records, doctor double-booking, and manual invoicing bottlenecks that increased patient wait times.",
    solutionImplemented: 
      "Built a secure full-stack web application featuring granular role-based access control (Admin, Physician, Nurse, Receptionist, Patient), interactive calendar appointment booking with clash detection, and digital prescription generation.",
    keyFeatures: [
      "Role-Based Access Control (RBAC) with protected route guards",
      "Interactive appointment scheduler with real-time doctor availability checks",
      "Electronic Health Record (EHR) timeline for lab reports and prescriptions",
      "Automated invoice and PDF billing receipt generation",
      "Responsive analytics dashboard for daily patient counts and bed occupancy"
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "JWT Auth"],
    architectureNote: "React SPA ➔ Node.js/Express REST API ➔ JWT Middleware ➔ PostgreSQL Relational Schema (Patients, Appointments, Invoices) ➔ PDF Export Engine",
    challengesAndSolutions: [
      {
        challenge: "Preventing concurrent double-booking of doctor appointment slots during peak registration hours.",
        solution: "Implemented database transaction row locks and pessimistic reservation timers at the API level."
      },
      {
        challenge: "Maintaining strict data privacy between different hospital personnel tiers.",
        solution: "Created centralized middleware enforcing permission scopes across all API endpoints and clinical records."
      }
    ],
    image: "/projects/hospital-system.svg",
    imageAlt: "Hospital Management Dashboard Preview",
    status: "Case Study & Architecture Breakdown",
    featured: true
  },
  {
    id: "face-recognition-attendance",
    title: "Face Recognition Automated Attendance System",
    category: "AI / Machine Learning",
    shortDescription: "Computer vision pipeline that captures real-time video frames, extracts 128D facial embeddings, and automates attendance logging.",
    overview: 
      "An automated biometric attendance platform using computer vision and deep metric learning. It captures multi-angle facial embeddings of registered personnel and instantly marks verified attendance as individuals pass through camera zones.",
    problemSolved: 
      "Traditional RFID card tapping and fingerprint scanners lead to long bottlenecks, proxy punching, and physical device wear in high-density facilities.",
    solutionImplemented: 
      "Constructed a high-throughput computer vision pipeline using OpenCV and deep residual network embeddings. Video streams are analyzed frame-by-frame, faces are localized, landmarks mapped, and feature vectors matched against an enrolled vector database in under 200ms.",
    keyFeatures: [
      "Real-time multi-face detection in dynamic lighting environments",
      "128-dimensional Euclidean distance facial embedding matching",
      "Anti-spoofing liveness checks to prevent static photograph fraud",
      "Automated timestamped logging with confidence percentage rating",
      "Exportable CSV/Excel reports and administrative dashboard"
    ],
    techStack: ["Python", "OpenCV", "Dlib / Face_Recognition", "NumPy", "SQLite", "Streamlit", "Flask"],
    architectureNote: "Video Camera Stream ➔ OpenCV Face Detection (HOG/CNN) ➔ 68 Facial Landmarks ➔ 128D Embedding Model ➔ Vector Distance Comparison ➔ Attendance Database Record",
    challengesAndSolutions: [
      {
        challenge: "Variable lighting and slight head tilts causing false negatives in recognition.",
        solution: "Implemented an affine transformation alignment step that normalizes eye and nose angles prior to embedding calculation."
      },
      {
        challenge: "Preventing proxy attendance using printed photos.",
        solution: "Added an eye-blink and micro-movement liveness verification threshold in the camera loop."
      }
    ],
    image: "/projects/face-attendance.svg",
    imageAlt: "Face Recognition Attendance Vision Pipeline Diagram",
    status: "Case Study & Architecture Breakdown",
    featured: true
  },
  {
    id: "stock-market-prediction",
    title: "Stock Market Quantitative Prediction & Analysis App",
    category: "AI / Machine Learning",
    shortDescription: "Financial analytics dashboard featuring predictive time-series models, technical momentum indicators, and interactive market charts.",
    overview: 
      "An end-to-end quantitative trading analysis platform designed for equity researchers and retail traders. The application retrieves historical stock price data, computes critical technical indicators (RSI, Moving Averages, MACD, Bollinger Bands), and trains predictive machine learning models to forecast short-term directional trends.",
    problemSolved: 
      "Retail traders often make emotional decisions without systematic quantitative data or backtested indicator modeling.",
    solutionImplemented: 
      "Created a data engineering and visualization suite that pulls financial data feeds, pre-processes OHLCV time-series metrics, feeds engineered features into recurrent neural networks (LSTM) and gradient boosting regressors, and displays interactive candlestick projections.",
    keyFeatures: [
      "Real-time historical ticker data retrieval via Yahoo Finance API",
      "Dynamic technical indicators (SMA, EMA, RSI, MACD, Volume analysis)",
      "LSTM and Random Forest predictive trend visualization",
      "Interactive zoomable candlestick and volume charting",
      "Risk metric calculation including Sharpe ratio and maximum historical drawdown"
    ],
    techStack: ["Python", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow / Keras", "Plotly", "Streamlit", "React"],
    architectureNote: "Market Feed API ➔ Pandas Time-Series Dataframe ➔ Feature Engineering Pipeline (Rolling Stats) ➔ Trained ML Regression Model ➔ Interactive Charting UI",
    challengesAndSolutions: [
      {
        challenge: "High noise-to-signal ratio and market non-stationarity causing standard regression overfitting.",
        solution: "Applied first-order log differencing, normalized rolling windows, and implemented dropout regularization in the neural network."
      },
      {
        challenge: "Rendering dense multi-year historical candlestick charts smoothly on client browsers.",
        solution: "Optimized time-series downsampling algorithms to load responsive data points dynamically based on zoom level."
      }
    ],
    image: "/projects/stock-prediction.svg",
    imageAlt: "Stock Market Prediction Chart and Indicator Dashboard",
    status: "Case Study & Architecture Breakdown",
    featured: false
  },
  {
    id: "ganesh-committee-management",
    title: "Ganesh Committee Community Management Portal",
    category: "Web Development",
    shortDescription: "Community festival portal managing donor records, instant digital receipt generation, volunteer coordination, and financial transparency.",
    overview: 
      "A responsive community coordination web application developed for festival committees. The platform digitizes donation collections, delivers instant SMS/PDF donor receipts, tracks volunteer assignments across festival days, and provides transparent financial reporting to community members.",
    problemSolved: 
      "Manual paper receipt books caused lost records, accounting discrepancies, delayed donor confirmations, and chaotic volunteer coordination during peak event days.",
    solutionImplemented: 
      "Architected a mobile-friendly web application with role-based member logins, a rapid donation entry form with automated receipt generation, real-time public collection tally boards, and task scheduling for committee volunteers.",
    keyFeatures: [
      "Instant donation logging with automated digital PDF receipt generation",
      "Public transparency dashboard displaying expenditure and collection summaries",
      "Volunteer shift scheduling with WhatsApp notification triggers",
      "Event schedule announcement board with interactive puja timings",
      "Optimized for low-bandwidth mobile devices during on-ground festival operations"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase / Firestore", "jsPDF", "Vite"],
    architectureNote: "Mobile Web App ➔ Firebase Authentication ➔ Firestore Realtime Database ➔ Client-Side PDF Generation Engine ➔ Community Dashboard",
    challengesAndSolutions: [
      {
        challenge: "Unstable mobile network connectivity on-ground during large community processions.",
        solution: "Implemented offline Firestore persistence allowing collection entries to be queued locally and synchronized automatically once network restored."
      },
      {
        challenge: "Need for rapid receipt generation on budget mobile smartphones.",
        solution: "Engineered a lightweight vector PDF generator that outputs receipt slips in under 1 second without server round-trips."
      }
    ],
    image: "/projects/ganesh-committee.svg",
    imageAlt: "Community Committee Management Dashboard Mockup",
    status: "Case Study & Architecture Breakdown",
    featured: false
  },
  {
    id: "couples-milestone-website",
    title: "Personalized Couple Celebration & Milestone Platform",
    category: "Web Development",
    shortDescription: "Bespoke interactive celebration website featuring custom relationship milestone timelines, digital guestbook, and RSVP management.",
    overview: 
      "A beautifully crafted, high-aesthetic web application designed for couples to celebrate relationship milestones, wedding events, or anniversaries. It features an interactive journey timeline, RSVP management with dietary preferences, digital guestbook with moderation, and responsive photo story galleries.",
    problemSolved: 
      "Couples seeking a meaningful, elegant digital keepsake often have to settle for rigid, ad-heavy wedding templates that lack personal aesthetics and bespoke storytelling.",
    solutionImplemented: 
      "Designed an emotional, modern dark/romantic themed responsive web experience with fluid Framer Motion animations, interactive milestone cards, music player integration, and an RSVP submission system with real-time guest tally.",
    keyFeatures: [
      "Interactive vertical milestone story timeline with photo memories",
      "Guest RSVP portal with companion counts, meal preferences, and song suggestions",
      "Live digital guestbook with moderation dashboard for warm wishes",
      "Interactive event schedule with calendar add buttons and Google Maps links",
      "Smooth ambient animations with customizable sound and aesthetic themes"
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase", "Vite"],
    architectureNote: "React UI ➔ Framer Motion Animation Controller ➔ Supabase Database (Wishes & RSVPs) ➔ Realtime Feed Updates",
    challengesAndSolutions: [
      {
        challenge: "Ensuring heavy high-resolution couple photographs loaded instantly on mobile devices.",
        solution: "Implemented progressive blur-up image placeholders, responsive WebP image sizing, and lazy loading."
      },
      {
        challenge: "Creating fluid, non-intrusive interactive animations across touch screens.",
        solution: "Tuned Framer Motion gestures with hardware-accelerated CSS transforms and spring physics."
      }
    ],
    image: "/projects/couples-website.svg",
    imageAlt: "Couple Milestone Journey Website Preview",
    status: "Case Study & Architecture Breakdown",
    featured: false
  }
];

export const CATEGORIES: Project['category'][] = [
  "Web Development",
  "AI / Machine Learning",
  "Generative AI",
  "Agentic AI",
  "Chrome Extensions",
  "Automation"
];
