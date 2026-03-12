import { Automation } from "@/types";

export const automations: Automation[] = [
  {
    id: "slackbot",
    title: "Multi-Agent Slackbot",
    description:
      "An intelligent Slack integration featuring multiple specialized AI agents that handle channel bootstrapping, automated new user onboarding, and project-specific knowledge retrieval — all working in concert.",
    agents: [
      "Channel Bootstrap Agent",
      "Onboarding Agent",
      "Knowledge Retrieval Agent",
    ],
    techStack: ["Slack API", "LangChain", "n8n", "Vector DB", "Python"],
  },
  {
    id: "youtube-analytics",
    title: "YouTube Analytics Pipeline",
    description:
      "An automated analytics pipeline that monitors YouTube channel performance, extracts key metrics, generates insights, and delivers actionable reports on content performance trends.",
    agents: [
      "Data Collection Agent",
      "Analytics Processor",
      "Report Generator",
    ],
    techStack: ["YouTube API", "n8n", "Python", "Data Visualization"],
  },
];
