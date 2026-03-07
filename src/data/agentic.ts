import type { AgenticCapability } from "@/types";

export const agenticCapabilities: AgenticCapability[] = [
  {
    id: "multi-agent-orchestration",
    title: "Multi-Agent Orchestration",
    description:
      "I design systems where specialized agents work together on complex tasks. An orchestrator breaks down the problem, delegates to debuggers, reviewers, and security auditors, then integrates the results.",
    icon: "\uD83C\uDFAF",
  },
  {
    id: "context-engineering",
    title: "Context Engineering",
    description:
      "Getting useful output from an agent depends on feeding it the right context. I build pipelines that pull in relevant files, memory, and instructions so agents have what they need without drowning in noise.",
    icon: "\uD83E\uDDE0",
  },
  {
    id: "tool-use-patterns",
    title: "Tool Use Patterns",
    description:
      "Agents are only useful if they can interact with real systems. I wire up tool integrations that let agents read files, run tests, query APIs, and take action safely.",
    icon: "\uD83D\uDD0C",
  },
  {
    id: "hooks-and-guardrails",
    title: "Hooks & Guardrails",
    description:
      "Autonomous agents need hard limits. I implement pre- and post-execution hooks, validation gates, and automated quality checks that enforce standards every single time.",
    icon: "\uD83D\uDEE1\uFE0F",
  },
  {
    id: "agent-skill-authoring",
    title: "Agent Skill Authoring",
    description:
      "I package expert workflows into reusable agent skills. Things like TDD cycles, security audits, and code review all become composable modules an agent can invoke on demand.",
    icon: "\uD83D\uDCDD",
  },
  {
    id: "rag-and-retrieval",
    title: "RAG & Retrieval",
    description:
      "I build retrieval-augmented generation pipelines that let agents search codebases, pull documentation, and synthesize information before acting on it.",
    icon: "\uD83D\uDD0D",
  },
];
