import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "saas",
    title: "AI-Powered SaaS Applications",
    description:
      "End-to-end development of scalable SaaS products powered by large language models. From intelligent document processing to personalized recommendation engines.",
    icon: "Rocket",
    features: [
      "Custom LLM integration",
      "Scalable cloud architecture",
      "Real-time AI processing",
      "User analytics & dashboards",
    ],
    gradient: "from-neon-blue to-deep-blue",
  },
  {
    id: "agentic",
    title: "Agentic AI Workflows",
    description:
      "Design and implementation of multi-agent systems that collaborate, reason, and execute complex tasks autonomously with minimal human intervention.",
    icon: "Brain",
    features: [
      "Multi-agent orchestration",
      "Tool-use & function calling",
      "Memory & context management",
      "Human-in-the-loop patterns",
    ],
    gradient: "from-neon-purple to-deep-purple",
  },
  {
    id: "automation",
    title: "Automation Workflows",
    description:
      "Intelligent automation pipelines that connect your tools, APIs, and data sources — eliminating manual processes and accelerating your operations.",
    icon: "Workflow",
    features: [
      "API & webhook integrations",
      "Event-driven pipelines",
      "Slack, YouTube & more",
      "Error handling & monitoring",
    ],
    gradient: "from-neon-cyan to-deep-teal",
  },
  {
    id: "rag",
    title: "Agentic RAG Systems",
    description:
      "Advanced retrieval-augmented generation systems that intelligently search, reason over, and synthesize information from your knowledge bases.",
    icon: "Database",
    features: [
      "Vector store integration",
      "Hybrid search strategies",
      "Multi-document reasoning",
      "Citation & source tracking",
    ],
    gradient: "from-neon-pink to-neon-purple",
  },
];
