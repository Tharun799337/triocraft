import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: "vinayaka-chaturthi-portal",
    title: "Vinayaka Chavithi Maha Utsav Festival & Puja Portal",
    category: "Festival & Community",
    shortDescription: "Interactive community and temple festival platform with online puja bookings, live aarti streaming, UPI digital hundi, laddu auction bidding, and volunteer schedules.",
    overview: 
      "A high-traffic festival web application custom-engineered for community pandals and temples during Ganesh Chaturthi. Enables thousands of devotees to book personalized puja sankalpams, view 4K low-latency live aarti broadcasts, contribute to the temple digital hundi with instant automated tax-exempt e-receipts, and participate in real-time interactive laddu auctions.",
    problemSolved: 
      "During Ganesh Chaturthi, massive crowds face congested queues for puja registrations, manual cash donations lack transparency, and non-resident devotees miss out on live aartis and sacred festival events.",
    solutionImplemented: 
      "Built a high-concurrency event portal using React, Node.js, WebSockets, and Razorpay/UPI gateway integration. Features instantaneous digital token generation for pandal visits, live WebRTC video broadcast with interactive live chat prayer requests, real-time WebSocket bidding for the prestigious Maha Laddu auction, and automated SMS/WhatsApp prasadam delivery tracking.",
    keyFeatures: [
      "Online Puja & Archana Slot Booking with digital QR pass",
      "Low-latency 4K Live Aarti & Cultural Event WebRTC Streaming",
      "Digital Hundi with Instant UPI/QR payments & automated receipts",
      "Real-time WebSocket Maha Laddu Live Bidding Auction Engine",
      "Pandal photo gallery & devotee prayer request message wall",
      "Volunteer duty roster & crowd safety density telemetry"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "WebSockets", "Razorpay / UPI", "Redis", "Cloudflare Stream"],
    architectureNote: "Devotee Client ➔ Cloudflare Edge / WAF ➔ Node.js WebSocket Cluster ➔ Redis Auction Pub/Sub ➔ PostgreSQL ACID Ledger ➔ WhatsApp/SMS Notification Engine",
    challengesAndSolutions: [
      {
        challenge: "Handling extreme sudden traffic spikes (50,000+ simultaneous viewers) during evening Maha Mangala Aarti.",
        solution: "Employed Cloudflare CDN video caching with geo-distributed edge distribution and WebSocket clustering across multi-core workers."
      },
      {
        challenge: "Ensuring zero latency and fraud prevention during high-stakes competitive Laddu auction bidding.",
        solution: "Engineered an in-memory Redis mutex bidding engine with OTP phone verification for authorized bidders."
      }
    ],
    image: "https://images.unsplash.com/photo-1613422954567-8eade6e47038?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Vinayaka Chavithi Maha Utsav Festival and Puja Portal",
    status: "Case Study & Architecture Breakdown",
    featured: true
  },
  {
    id: "saas-revenue-tracker",
    title: "Revenue Tracker — SaaS Financial Intelligence Platform",
    category: "Fintech & Analytics",
    shortDescription: "Real-time SaaS recurring revenue (MRR/ARR) analytics platform with Stripe & PayPal webhook sync, churn alerts, payout forecasting, and cohort retention charts.",
    overview: 
      "A mission-critical financial analytics platform designed for modern SaaS companies and digital agencies. Connects directly to payment gateways to compute real-time Monthly Recurring Revenue (MRR), Annual Run Rate (ARR), net revenue churn, Customer Lifetime Value (LTV), Customer Acquisition Cost (CAC), and cash flow forecasts with millisecond precision.",
    problemSolved: 
      "SaaS founders and financial teams waste hours reconciling spreadsheets across Stripe, PayPal, and bank accounts, often discovering customer churn and payment failures days after they occur.",
    solutionImplemented: 
      "Engineered an event-driven ingestion engine that listens to streaming payment webhooks, deduplicates event payloads, calculates rolling financial metrics, and renders interactive GPU-accelerated charts. Features automated smart dunning alerts that recover up to 45% of failed credit card renewals.",
    keyFeatures: [
      "Real-time Live MRR, ARR, ARPU, and LTV telemetry dashboard",
      "Automated Stripe, PayPal, and Razorpay webhook synchronization",
      "Cohort retention analysis and predictive churn risk scoring",
      "Cash flow forecasting with multi-currency conversion support",
      "Smart failed-payment recovery (Dunning) with automated email sequences",
      "Instant Slack and WhatsApp revenue notifications for new subscriptions"
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "FastAPI / Python", "PostgreSQL", "TimescaleDB", "Chart.js", "Redis"],
    architectureNote: "Stripe/PayPal Webhooks ➔ Event Ingress Queue ➔ TimescaleDB Financial Ledger ➔ Aggregation Worker ➔ Redis Cache ➔ Real-Time Web Client",
    challengesAndSolutions: [
      {
        challenge: "Reconciling multi-currency international subscriptions with fluctuating foreign exchange rates in real-time.",
        solution: "Integrated automated central bank currency sync with historical exchange rate snapshotting per transaction."
      },
      {
        challenge: "Calculating complex cohort retention graphs across hundreds of thousands of historical billing events without blocking queries.",
        solution: "Utilized TimescaleDB hypertable continuous aggregates for instantaneous query response under 40ms."
      }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Revenue Tracker SaaS Financial Intelligence Platform",
    status: "Case Study & Architecture Breakdown",
    featured: true
  },
  {
    id: "couple-surprise-portal",
    title: "ForeverAfter — Romantic Couple Surprise & Apology Web Portals",
    category: "Couple & Lifestyle",
    shortDescription: "Personalized couple web experiences featuring romantic interactive photo journeys, anniversary surprises, heartfelt apology letters, secret password unlocks, and dynamic music.",
    overview: 
      "A boutique digital craftsmanship service creating deeply memorable, emotionally resonant web experiences for couples. Built for anniversary midnight surprises, romantic marriage proposals, long-distance relationships, and heartfelt sincere apology letters with interactive forgiveness reveals, custom background songs, and hidden memory vaults.",
    problemSolved: 
      "Standard gifts like chocolates or flowers are forgotten quickly. Couples looking to express deep love, plan a grand surprise, or seek heartfelt forgiveness lack a modern, lasting, deeply personal digital way to celebrate their unique journey.",
    solutionImplemented: 
      "Designed and developed highly customizable, cinematic web portals featuring interactive milestone timelines, audio-synced photobooks, animated scratch-off surprise cards, interactive 'Will You Forgive Me?' / 'Will You Marry Me?' interactive choices, password-protected memory vaults, and automated midnight countdown timers that pop celebratory virtual balloons.",
    keyFeatures: [
      "Interactive Romance Timeline with custom milestone dates and photos",
      "Heartfelt Apology Letter module with interactive forgiveness acceptance actions",
      "Midnight Surprise Countdown with automated virtual balloon pops & music reveal",
      "Secret Password-protected Memory Vault with voice notes and video messages",
      "Custom floating audio player synced with couple's favorite romantic playlist",
      "Interactive Love Quiz and '100 Reasons Why I Love You' digital card deck"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Canvas Confetti", "Howler.js", "Vite", "Cloudinary"],
    architectureNote: "Couple Web Client ➔ Cloudinary Optimized Media CDN ➔ Framer Motion Animation Orchestrator ➔ Interactive Sound Engine ➔ Mobile Responsive UI",
    challengesAndSolutions: [
      {
        challenge: "Creating an emotionally touching, cinematic feel on mobile screens with fast loading of 100+ high-resolution couple photos.",
        solution: "Implemented progressive WebP image blur-up loading and client-side memory caching with smooth gesture swiping."
      },
      {
        challenge: "Handling midnight time-zone differences so the surprise reveals exactly at 12:00:00 AM in the recipient's local time.",
        solution: "Created client-side localized timestamp triggers with fallback countdown synchronizers."
      }
    ],
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "ForeverAfter Couple Surprise and Apology Web Portal",
    status: "Case Study & Architecture Breakdown",
    featured: true
  },
  {
    id: "caregrid-hospital-hms",
    title: "Hospital Management System (HMS)",
    category: "Healthcare & HMS",
    shortDescription: "Comprehensive enterprise hospital management system featuring live bed occupancy, inpatient/outpatient EHR, doctor schedules, pharmacy POS, and lab diagnostics.",
    overview: 
      "An enterprise-grade, cloud-native Hospital Information System (HIS/HMS) engineered for modern hospitals and healthcare chains. Streamlines all clinical and administrative operations into a single cohesive platform—from emergency patient triage and bed ward allocation to digital prescriptions, pharmacy inventory, laboratory reports, and insurance TPA billing.",
    problemSolved: 
      "Hospitals suffer from fragmented legacy software, manual paperwork errors, uncoordinated bed allocations, delayed patient handovers, and revenue leakages in pharmacy billing and diagnostic labs.",
    solutionImplemented: 
      "Delivered a centralized modular hospital ERP featuring interactive floor-by-floor bed ward maps, real-time doctor consultation queues, digital electronic health records (EHR) with ICD-10 coding, barcode-integrated pharmacy inventory dispensing, and automated insurance claim workflows with audit trails.",
    keyFeatures: [
      "Interactive Floor-by-Floor Live Bed Occupancy & Ward Transfer Telemetry",
      "Unified Electronic Health Records (EHR/EMR) with medical history tracking",
      "Digital Doctor Consultation Queue with e-Prescription & dosage calculators",
      "Pharmacy Point-of-Sale (POS) with automated batch expiry & reorder alerts",
      "Diagnostic Lab Information System (LIS) with direct PDF report generation",
      "NABH & HIPAA compliance with role-based access control and audit logs"
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Redis", "Docker", "Socket.io"],
    architectureNote: "Hospital Ward Terminals ➔ Reverse Proxy / SSL ➔ Node.js HMS API Cluster ➔ PostgreSQL Relational Clinical DB ➔ Redis State Cache ➔ Thermal Receipt & Lab Printers",
    challengesAndSolutions: [
      {
        challenge: "Zero-downtime requirement: medical staff must access patient records 24/7 without interruption.",
        solution: "Engineered database read-replicas, automatic failover clustering, and local offline-first browser sync for critical ward terminals."
      },
      {
        challenge: "Preventing medical prescription errors and medication drug-interaction conflicts.",
        solution: "Integrated automated clinical safety cross-checking rules that flag adverse drug interactions before pharmacy dispensing."
      }
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hospital Management System (HMS)",
    status: "Case Study & Architecture Breakdown",
    featured: true
  },
  {
    id: "hospital-website-portal",
    title: "Hospital Website — Patient Portal & Telehealth",
    category: "Web Development",
    shortDescription: "Next-generation healthcare web platform with live doctor rosters, specialty departments, real-time OPD booking, and patient portal.",
    overview: 
      "A flagship multi-specialty hospital web application engineered for maximum patient conversion and seamless clinical onboarding. Features instantaneous digital appointment booking, live physician duty schedules, automated emergency triage queues, and HIPAA/NABH-compliant patient record access.",
    problemSolved: 
      "Traditional hospital websites are static digital brochures with cumbersome phone-in appointment booking, causing high patient drop-off rates and overwhelming reception switchboards with routine queries.",
    solutionImplemented: 
      "Architected a responsive, accessible React 19 application backed by high-throughput REST APIs and WebSocket queues. Patients can filter 80+ doctors by specialty, check real-time OPD consultation slots, book telehealth video calls, and access laboratory diagnostic reports directly in an encrypted portal.",
    keyFeatures: [
      "Dynamic Doctor Directory & Calendar Slot Mutex Booking",
      "Multi-Specialty Department showcase (Cardiology, Neurology, Oncology, Orthopedics)",
      "24/7 Emergency Room wait-time telemetry and 1-tap ambulance dispatch",
      "Interactive Telehealth video consultation portal with WebRTC",
      "Instant WhatsApp & SMS appointment confirmation tickets with QR check-in"
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "WebSockets", "Vite"],
    architectureNote: "Client React Portal ➔ Cloudflare Edge CDN ➔ Node.js API Gateway ➔ Doctor Schedule Mutex Lock (Redis) ➔ PostgreSQL Relational Store ➔ Twilio/WhatsApp Notification Worker",
    challengesAndSolutions: [
      {
        challenge: "Managing surge appointment bookings when outpatient slots open at 8:00 AM without race conditions.",
        solution: "Implemented Redis distributed locks and pessimistic database transactions ensuring doctor time-slots cannot be double-booked."
      },
      {
        challenge: "Delivering sub-1s initial page loads for patients on slow mobile 3G/4G network connections.",
        solution: "Optimized modern asset pipelines with Brotli compression, lazy-loaded route chunks, and WebP responsive image sets scoring 98+ on Google Lighthouse."
      }
    ],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hospital Website and Patient Telehealth Portal",
    status: "Case Study & Architecture Breakdown",
    featured: true
  },
  {
    id: "realtime-hospital-chatbot",
    title: "Real-Time Chatbots — Clinical AI & Triage Assistant",
    category: "Generative AI",
    shortDescription: "Autonomous 24/7 clinical triage chatbot with streaming WebSocket conversational LLM, symptom checker, and instant doctor booking.",
    overview: 
      "An intelligent hospital intake copilot engineered to conduct patient pre-triage, parse symptom severity, match patients with optimal medical specialties, and handle hospital FAQ inquiries in over 12 languages with sub-20ms streaming latency.",
    problemSolved: 
      "Hospital call centers and emergency waiting rooms are clogged with non-critical inquiries, causing prolonged wait times for acute patients and delaying life-saving triage assessments.",
    solutionImplemented: 
      "Developed an event-driven conversational AI pipeline combining streaming WebSockets, clinical protocol RAG retrieval, and emergency guardrail classifiers. The bot guides patients through empathetic multi-turn symptom screening, assigns emergency triage severity scores, and routes them directly to doctor appointment scheduling.",
    keyFeatures: [
      "Sub-20ms streaming response generation via full-duplex WebSockets",
      "Clinical protocol RAG system grounded in NHS/CDC triage guidelines",
      "Automated red-flag emergency detection with instant ER hotline trigger",
      "Multi-lingual NLP supporting 12+ international and regional languages",
      "Direct integration with hospital EHR database for appointment booking and prescription refills"
    ],
    techStack: ["Python", "FastAPI", "LangChain", "WebSockets", "Llama-3", "OpenAI API", "Redis Streams", "React", "TypeScript"],
    architectureNote: "Patient Web Client ➔ WebSocket Ingress ➔ HIPAA Token Redactor ➔ Protocol RAG Index ➔ Guardrailed LLM Stream ➔ Clinical Triage Engine ➔ Hospital EHR API",
    challengesAndSolutions: [
      {
        challenge: "Strict medical safety: preventing AI hallucination or false medical advice during acute emergencies.",
        solution: "Built a dual-layer classifier that intercepts emergency keywords (chest pain, stroke signs) before LLM generation and presents immediate 911/ER dispatch alerts."
      },
      {
        challenge: "Maintaining low latency during peak multi-user conversational streaming.",
        solution: "Employed asynchronous FastAPI coroutines backed by Redis Streams for state caching and token buffering."
      }
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Real-Time Chatbots and Patient Triage",
    status: "Case Study & Architecture Breakdown",
    featured: true
  },
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
