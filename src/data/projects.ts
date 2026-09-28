export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  link?: string; // Placeholder — add real URL when available
}

export const projects: Project[] = [
  {
    id: "jobintel",
    number: "01",
    title: "JOBINTEL",
    subtitle: "AI-Powered Job Intelligence Platform",
    description:
      "Developing an intelligent job platform focused on organizing and presenting job information clearly and consistently. Designing structured company branding and logo resolution to improve the consistency and quality of job-related data.",
    highlights: [
      "Job intelligence",
      "Structured job information",
      "Company branding",
      "Logo resolution",
      "Data consistency",
    ],
    link: undefined, // Replace with real URL
  },
  {
    id: "rag-doc-assistant",
    number: "02",
    title: "RAG-BASED DOCUMENT ASSISTANT",
    subtitle: "Retrieval-Augmented Question Answering",
    description:
      "Exploring a document question-answering application that enables users to upload documents for analysis and retrieve relevant content for context-aware answers.",
    highlights: [
      "Document analysis",
      "Retrieval",
      "Context-aware responses",
      "LLM application workflow",
    ],
    link: undefined,
  },
  {
    id: "ai-automation",
    number: "03",
    title: "AI AUTOMATION WORKFLOWS",
    subtitle: "Intelligent Process Automation",
    description:
      "Developing automated workflows using n8n combined with AI capabilities to streamline repetitive tasks and improve workflow efficiency.",
    highlights: [
      "n8n",
      "AI automation",
      "Workflow orchestration",
      "API integration",
    ],
    link: undefined,
  },
  {
    id: "3d-interior",
    number: "04",
    title: "3D INTERIOR VISUALIZATION PLATFORM",
    subtitle: "Interactive Web-Based 3D Design",
    description:
      "Contributed to an interactive 3D interior visualization platform featuring real-time model interaction and customization.",
    highlights: [
      "Interactive 3D visualization",
      "Real-time customization",
      "3D model interaction",
      "Web-based visualization",
    ],
    link: undefined,
  },
];
