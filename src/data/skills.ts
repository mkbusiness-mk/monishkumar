export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "AI & LLM",
    skills: [
      "Large Language Models (LLMs)",
      "Natural Language Processing (NLP)",
      "RAG",
      "CAG",
      "MAG",
      "Prompt Engineering",
    ],
  },
  {
    category: "Development",
    skills: [
      "Python",
      "SQL",
      "API & Tool Integration",
      "AI Application Development",
    ],
  },
  {
    category: "Automation",
    skills: [
      "n8n",
      "AI Automation",
      "Workflow Automation",
      "Workflow Design & Optimization",
    ],
  },
  {
    category: "Infrastructure",
    skills: ["Docker"],
  },
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
