import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "resumatchai",
    title: "ResuMatchAI",
    tagline: "AI-Powered Resume Evaluator",
    description:
      "An intelligent resume evaluation tool that compares candidate documents against job descriptions using LLMs. Provides detailed scoring, gap analysis, and actionable improvement suggestions.",
    techStack: ["Python", "LangChain", "OpenAI", "Streamlit", "PDF Processing"],
    liveUrl: "https://resumatch.zeeshanai.cloud/",
    githubUrl: "https://github.com/mzeeshanaltaf/resume-match-ai",
    gradient: "from-neon-blue to-neon-purple",
  },
  {
    id: "invoiceextract",
    title: "InvoiceExtract",
    tagline: "Intelligent Document Processing",
    description:
      "Automated invoice data extraction system that processes PDFs and images, extracting structured JSON data with high accuracy. Handles diverse invoice formats and layouts.",
    techStack: ["Python", "GPT-4 Vision", "OCR", "FastAPI", "JSON Schema"],
    liveUrl: "https://invoicextract.zeeshanai.cloud/",
    githubUrl: "https://github.com/mzeeshanaltaf/invoice-extract",
    gradient: "from-neon-cyan to-deep-teal",
  },
  {
    id: "fitfusion",
    title: "FitFusion",
    tagline: "Personalized Fitness & Nutrition AI",
    description:
      "A personalized workout and nutrition planning system powered by AI. Generates custom fitness programs and meal plans based on individual goals, preferences, and constraints.",
    techStack: ["Python", "OpenAI", "Streamlit", "Nutritional APIs"],
    liveUrl: "https://fitfusion.zeeshanai.cloud/",
    githubUrl: "https://github.com/mzeeshanaltaf/fit-fusion",
    gradient: "from-neon-purple to-neon-pink",
  },
  {
    id: "docgenie",
    title: "DocGenie",
    tagline: "Multi-Format Document Q&A",
    description:
      "A comprehensive document Q&A platform supporting PDF, DOCX, TXT, and CSV formats. Leverages RAG to provide accurate, contextual answers with source citations.",
    techStack: ["Python", "LangChain", "ChromaDB", "Streamlit", "RAG"],
    liveUrl: "https://docgenie.zeeshanai.cloud/",
    githubUrl: "https://github.com/mzeeshanaltaf/docgenie-ai",
    gradient: "from-deep-blue to-neon-cyan",
  },
  {
    id: "chargemap-pk",
    title: "ChargeMap PK",
    tagline: "Pakistan's EV Charging Station Discovery Platform",
    description:
      "An interactive platform for discovering EV charging stations across Pakistan. Features interactive maps with real-time status, filtering by province/city/charger type, community engagement through comments and reactions, and charging infrastructure analytics.",
    techStack: ["Next.js", "React", "Leaflet", "TypeScript"],
    liveUrl: "https://chargemap-pk.zeeshanai.cloud/",
    githubUrl: "https://github.com/mzeeshanaltaf/ev-chargers-pk",
    gradient: "from-deep-teal to-neon-cyan",
  },
];
