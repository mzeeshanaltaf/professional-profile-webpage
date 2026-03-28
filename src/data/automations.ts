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
    image: "/screenshots/multiagent-slackbot.png",
  },
  {
    id: "youtube-analytics",
    title: "YouTube Analytics",
    description:
      "A free, no-signup-required analytics platform for YouTube creators. Add any channel by URL to instantly track subscriber growth, view velocity, and video performance metrics — all visualized through interactive charts. Powered by n8n automation workflows and a Next.js frontend, delivering real-time insights within 30 seconds.",
    agents: [
      "Data Collection Agent",
      "Analytics Processor",
      "Report Generator",
    ],
    techStack: ["YouTube API", "n8n", "Next.js", "Data Visualization"],
    liveUrl: "https://yt-analytics.zeeshanai.cloud/",
    image: "/screenshots/yt-analytics.png",
  },
];
