import type { AgenticCapability } from "@/types";

export const agenticCapabilities: AgenticCapability[] = [
  {
    id: "multi-agent-orchestration",
    title: "Multi-Agent Orchestration",
    description:
      "Designing specialized agents that collaborate on complex tasks — orchestrators, debuggers, reviewers, and security auditors working in concert.",
    icon: "\uD83C\uDFAF",
  },
  {
    id: "context-engineering",
    title: "Context Engineering",
    description:
      "Engineering pipelines that deliver the right context at the right time — CLAUDE.md files, memory systems, and semantic retrieval for agent effectiveness.",
    icon: "\uD83E\uDDE0",
  },
  {
    id: "mcp-server-development",
    title: "MCP Server Development",
    description:
      "Building Model Context Protocol servers that give AI agents secure, structured access to external tools, APIs, and data sources.",
    icon: "\uD83D\uDD0C",
  },
  {
    id: "hooks-and-guardrails",
    title: "Hooks & Guardrails",
    description:
      "Implementing deterministic safety layers — pre/post tool-use hooks, validation gates, and automated quality checks that enforce standards 100% of the time.",
    icon: "\uD83D\uDEE1\uFE0F",
  },
  {
    id: "agent-skill-authoring",
    title: "Agent Skill Authoring",
    description:
      "Creating reusable agent skills that encode expert workflows — from TDD cycles to security audits — as composable, version-controlled modules.",
    icon: "\uD83D\uDCDD",
  },
  {
    id: "rag-and-tool-use",
    title: "RAG & Tool Use Patterns",
    description:
      "Designing retrieval-augmented generation pipelines and tool-use patterns that let agents search, synthesize, and act on information autonomously.",
    icon: "\uD83D\uDD0D",
  },
];
