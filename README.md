# TrioCraft // Design & Development

A cutting-edge, luxury 3D interactive portfolio engineered with **React 19**, **Three.js**, **WebGL**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. Featuring interactive 3D particle fields, real-time WebGL kinetic geometry, 3D tilt project showcases, and architectural blueprint modals.

---

## 🌟 Live Demo & Preview

- **Local Preview Server:** `http://localhost:5173/`
- **Target Deployment Platform:** Vercel (Free tier with instant global CDN and SSL)

---

## 🚀 Key Features

1. **High-Converting Landing Page (Home)**
   - Hero section with high-impact headline, portrait showcase, and dual CTAs (*Start a Project* / *View My Projects*).
   - Core stats banner highlighting AI + Full-Stack focus and production standards.
   - Selected featured projects and services matrix with direct enquiry links.
   - 5-step transparent development process breakdown.
   - Introductory freelance partnership invitation with honest client terms.

2. **About Me (`/about`)**
   - Professional background bridging cutting-edge AI (LLMs, vectors, embeddings) and resilient web applications.
   - Problem-first breakdown: Underperforming websites, fragmented documentation, and manual workflow bottlenecks.
   - Categorized skills matrix (AI & Machine Learning, Frontend, Backend & Systems, DevOps & Cloud).
   - Core professional values: Reliability, clear communication, and maintainable code.

3. **Specialized Services (`/services`)**
   - 8 individual service cards covering:
     1. High-Converting Business Landing Pages
     2. RAG Systems & Document AI Assistants
     3. Intelligent AI Chatbots & Customer Assistants
     4. Custom AI Tools & Workflow Automations
     5. Full-Stack React Web Applications
     6. Custom Chrome Extensions (Manifest V3)
     7. Portfolio & Agency Showcases
     8. REST API Integrations & Backend Services
   - Each card includes technical scope, business benefits, deliverables checklist, and pre-selected contact routing (`/contact?service=...`).

4. **Projects & Case Studies (`/projects` & `/projects/:id`)**
   - Responsive category filters: *All Projects*, *Web Development*, *AI / Machine Learning*, *Generative AI*, *Agentic AI*, *Chrome Extensions*, and *Automation*.
   - 7 verified initial projects:
     - **RAG PDF Assistant & Document Intelligence** (Generative AI / Python / ChromaDB)
     - **Oracle AI Role Advisor Chrome Extension** (Manifest V3 / LLM Copilot)
     - **Hospital Management & Clinical Operations System** (React / Node / PostgreSQL)
     - **Face Recognition Automated Attendance System** (OpenCV / 128D Embeddings)
     - **Stock Market Quantitative Prediction & Analysis App** (LSTM / Technical Indicators)
     - **Ganesh Committee Community Management Portal** (React / Firebase / Offline Sync)
     - **Personalized Couple Celebration & Milestone Platform** (React / Framer Motion / Supabase)
   - Reusable dynamic project details template: Problem statement, technical solution, architecture diagrams, key features, and engineering challenges.

5. **Contact & Hire Me (`/contact`)**
   - Client-side form validation with accessible error states and real-time service pre-selection.
   - Direct contact channels with one-click copy and instant chat:
     - **Email:** `tharunchundi799@gmail.com`
     - **WhatsApp / Phone:** `+91 7993376939`
     - **GitHub:** `https://github.com/Tharun799337`
     - **LinkedIn:** Configurable profile link
   - Flexible form delivery: Works immediately via Email/WhatsApp triggers or automated inbox integration via Web3Forms/Formspree.
   - Hiring FAQ covering pricing structures, turnaround times, IP ownership, and post-launch support.

6. **Technical Articles & Guides (`/blog`)**
   - Sample architectural walkthroughs covering production RAG systems, Manifest V3 extensions, and startup automation blueprints.
   - Interactive modal reader.

7. **SEO & Accessibility**
   - Dynamic page titles, meta descriptions, and Open Graph social cards on every route.
   - Custom high-tech SVG favicon and Open Graph metadata.
   - `robots.txt` and `sitemap.xml` included in `public/`.
   - Accessible ARIA labels, focus states, and reduced-motion media query support.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS v4 + Vanilla CSS Design System
- **Icons:** Lucide React + Custom SVG Brand Icons
- **Routing:** React Router v7 (SPA)
- **Effects & UI:** Framer Motion, Canvas Confetti

---

## 📁 Project Structure

```
tharun-portfolio/
├── public/
│   ├── favicon.svg                   # Custom futuristic SVG favicon
│   ├── robots.txt                    # Search crawler rules
│   ├── sitemap.xml                   # SEO sitemap
│   ├── tharun-portrait-placeholder.svg # High-fidelity developer portrait
│   └── projects/                     # High-resolution vector diagrams
│       ├── rag-assistant.svg
│       ├── oracle-advisor.svg
│       ├── hospital-system.svg
│       ├── face-attendance.svg
│       ├── stock-prediction.svg
│       ├── ganesh-committee.svg
│       └── couples-website.svg
├── src/
│   ├── components/                   # Modular reusable UI components
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Icons.tsx                 # Clean GitHub & LinkedIn SVGs
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── SEO.tsx
│   │   └── ServiceCard.tsx
│   ├── data/                         # Centralized editable data
│   │   ├── blogs.ts                  # Technical articles & guides
│   │   ├── profile.ts                # Tharun's bio, contacts & skills
│   │   ├── projects.ts               # 7 verified projects & architecture
│   │   ├── services.ts               # 8 freelance service packages
│   │   └── testimonials.ts           # Testimonials & partnership invitation
│   ├── layouts/
│   │   └── RootLayout.tsx            # App shell with Navbar & Footer
│   ├── lib/
│   │   └── utils.ts                  # ClassName merger
│   ├── pages/                        # Route pages
│   │   ├── AboutPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── ProjectDetailPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   └── ServicesPage.tsx
│   ├── types/
│   │   └── index.ts                  # TypeScript data interfaces
│   ├── App.tsx                       # React Router configuration
│   ├── index.css                     # Tailwind v4 theme, neon glow & glassmorphism
│   └── main.tsx                      # Vite React entry point
├── .env.example                      # Environment variables documentation
├── vercel.json                       # Vercel SPA rewrite configuration
├── package.json
└── tsconfig.json
```

---

## 💻 Local Development Setup

### 1. Prerequisites
- **Node.js:** v18 or higher (v20+ recommended)
- **npm:** v9 or higher

### 2. Installation
```bash
# Clone the repository or navigate to the workspace
cd "Tharun portfolio"

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/`

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Customization Guide

### 1. Update Contact & Social Information
Open `src/data/profile.ts`:
```ts
export const PROFILE = {
  name: "Tharun",
  role: "AI Developer & Full-Stack Web Developer",
  email: "tharunchundi799@gmail.com",
  whatsapp: "+917993376939",
  github: "https://github.com/Tharun799337",
  linkedin: "https://linkedin.com/in/your-linkedin-username",
  ...
};
```

### 2. Replace the Portrait Image with Your Own Photo
1. Place your photo in the `public/` folder as `public/tharun-portrait.jpg` (or `.png`).
2. In `src/pages/HomePage.tsx` and `src/pages/AboutPage.tsx`, update the image `src`:
```tsx
<img src="/tharun-portrait.jpg" alt="Tharun Portrait" />
```

### 3. Add or Modify Projects
Open `src/data/projects.ts` to add new projects or update existing ones with live URLs and GitHub repository links when ready:
```ts
{
  id: "your-new-project-slug",
  title: "Project Name",
  category: "Web Development", // Or "Generative AI", "Chrome Extensions", etc.
  shortDescription: "...",
  overview: "...",
  problemSolved: "...",
  solutionImplemented: "...",
  keyFeatures: [...],
  techStack: ["React", "TypeScript", "Python"],
  image: "/projects/your-image.svg",
  imageAlt: "...",
  demoUrl: "https://your-demo-url.com", // Optional
  githubUrl: "https://github.com/Tharun799337/repo-name", // Optional
  status: "Live Demo Available",
  featured: true
}
```

### 4. Configure Contact Form Submissions (Optional)
The contact form works out of the box with direct email and WhatsApp shortcuts. If you wish to receive form submissions directly into your email without an email client:
1. Get a free access key from [Web3Forms](https://web3forms.com) (no signup required, free for 250 submissions/month).
2. Create a `.env` file in the root folder:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
3. Submissions will now be delivered straight to your email!

---

## 🚀 Free Deployment Guide

### Deploying to Vercel (Recommended - 100% Free)

`vercel.json` is already configured with SPA routing rules to prevent 404s on page refresh.

#### Method 1: Using GitHub + Vercel Dashboard (Easiest)
1. Push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial freelance portfolio build"
   git branch -M main
   git remote add origin https://github.com/Tharun799337/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New Project"** and import your `portfolio` repository.
4. Framework Preset will automatically detect **Vite**.
5. Under **Environment Variables**, add any optional keys from `.env.example` (such as `VITE_WEB3FORMS_ACCESS_KEY`).
6. Click **Deploy**. Your portfolio will be live in under 60 seconds with free HTTPS!

#### Method 2: Using Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 📄 License & Integrity Note

Designed and built specifically for Tharun's freelance business. All project representations, case studies, and contact options are implemented with complete transparency and verified details.
