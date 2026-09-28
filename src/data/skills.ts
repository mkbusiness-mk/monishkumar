export interface SkillItem {
  id: string;
  name: string;
  categories: string[]; // category IDs it belongs to
}

export interface SkillCategory {
  id: string;
  number: string;
  category: string;
  count: number;
}

export const skillCategories: SkillCategory[] = [
  { id: "ai-agentic", number: "01", category: "AI & Agentic Systems", count: 8 },
  { id: "fullstack", number: "02", category: "Full-Stack Web Dev", count: 7 },
  { id: "programming", number: "03", category: "Programming Languages", count: 5 },
  { id: "automation-infra", number: "04", category: "Automation & Infrastructure", count: 6 },
  { id: "tools-db", number: "05", category: "Databases & Tools", count: 6 },
];

export const allSkills: SkillItem[] = [
  // AI & Agentic Systems
  { id: "agentic-ai", name: "Agentic AI", categories: ["ai-agentic"] },
  { id: "llms", name: "LLMs & Prompting", categories: ["ai-agentic"] },
  { id: "rag", name: "RAG Pipelines", categories: ["ai-agentic"] },
  { id: "cag-mag", name: "CAG & MAG Systems", categories: ["ai-agentic"] },
  { id: "nlp", name: "NLP & Vector DBs", categories: ["ai-agentic"] },
  { id: "langchain", name: "LangChain", categories: ["ai-agentic"] },
  { id: "llamaindex", name: "LlamaIndex", categories: ["ai-agentic"] },
  { id: "ollama", name: "Ollama", categories: ["ai-agentic"] },

  // Full-Stack
  { id: "mern", name: "MERN Stack", categories: ["fullstack"] },
  { id: "react", name: "React.js", categories: ["fullstack"] },
  { id: "nextjs", name: "Next.js", categories: ["fullstack"] },
  { id: "nodejs", name: "Node.js", categories: ["fullstack"] },
  { id: "express", name: "Express.js", categories: ["fullstack"] },
  { id: "tailwind", name: "Tailwind CSS", categories: ["fullstack"] },
  { id: "rest-api", name: "REST APIs", categories: ["fullstack", "automation-infra"] },

  // Programming
  { id: "python", name: "Python", categories: ["programming", "ai-agentic"] },
  { id: "typescript", name: "TypeScript", categories: ["programming", "fullstack"] },
  { id: "javascript", name: "JavaScript (ES6+)", categories: ["programming", "fullstack"] },
  { id: "sql", name: "SQL", categories: ["programming", "tools-db"] },
  { id: "cpp", name: "C / C++", categories: ["programming"] },

  // Automation & Infra
  { id: "n8n", name: "n8n Automation", categories: ["automation-infra"] },
  { id: "docker", name: "Docker", categories: ["automation-infra"] },
  { id: "ai-auto", name: "AI Automation", categories: ["automation-infra", "ai-agentic"] },
  { id: "git", name: "Git & GitHub", categories: ["automation-infra", "tools-db"] },
  { id: "cicd", name: "CI / CD Pipelines", categories: ["automation-infra"] },
  { id: "webhooks", name: "Webhooks", categories: ["automation-infra"] },

  // Databases & Tools
  { id: "mongodb", name: "MongoDB", categories: ["tools-db", "fullstack"] },
  { id: "postgresql", name: "PostgreSQL", categories: ["tools-db"] },
  { id: "chromadb", name: "ChromaDB", categories: ["tools-db", "ai-agentic"] },
  { id: "postman", name: "Postman API", categories: ["tools-db", "automation-infra"] },
  { id: "vscode", name: "VS Code", categories: ["tools-db"] },
  { id: "linux", name: "Linux / CLI", categories: ["tools-db", "automation-infra"] },
];

export const professionalSkills: string[] = [
  "Leadership & Team Collaboration",
  "Problem Solving & Critical Thinking",
  "Communication & Presentation",
  "Project Planning & Coordination",
  "Team Management",
  "Adaptability & Continuous Learning",
  "Time Management",
  "Analytical Thinking",
  "Decision Making",
  "Creativity & Innovation",
];
