// src/data/projects.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "professional" | "academic" | "ai-ml";
  technologies: string[];
  highlights: string[];
  github: string | null;
  demo: string | null;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "LLM-powered Chatbot for SQL Generation",
    description:
      "Developed a chatbot backed by LLMs to automate business queries for a warehouse client — reducing manual SQL effort, speeding up decision-making, and enabling users to access insights through natural language.",
    image: "/images/projects/llm-chatbot.jpg",
    category: "professional",
    technologies: ["Python", "LangChain", "Vanna", "Chroma", "Docker", "SQL"],
    highlights: [
      "Benchmarked 10+ LLM agent configurations using RAG workflows",
      "Achieved a 2× improvement in SQL generation speed",
      "Balanced accuracy, latency, and cost across model configurations",
      "Engineered and containerized a ML pipeline using Docker",
      "Enabled automated SQL accuracy checks and latency benchmarking",
    ],
    github: null,
    demo: null,
  },
  {
    id: 2,
    title: "APIverse",
    description:
      "Built an API platform for PSU students to test and explore APIs — implemented a secure two-tier system with Flask and FastAPI, including OAuth login, domain restriction, API key issuance, and account recovery.",
    image: "/images/projects/apiverse.jpg",
    category: "academic",
    technologies: [
      "Python",
      "Flask",
      "FastAPI",
      "Google Cloud",
      "OAuth",
      "Docker",
    ],
    highlights: [
      "Implemented a secure two-tier system with Flask and FastAPI",
      "Incorporated OAuth login, domain restriction, and API key issuance",
      "Integrated Gemini LLM for AI-based utilities",
      "Deployed on Google Cloud for scalable, secure access",
    ],
    github: "https://github.com/sriramnurani1995/apiverse",
    demo: null,
  },
  {
    id: 3,
    title: "TriMet GPS Insights",
    description:
      "Built a pipeline to analyze Portland bus GPS data for transit optimization — processed 1.5M+ records using Python and PostgreSQL with validation, bulk inserts, and real-time streaming on Google Cloud.",
    image: "/images/projects/trimet.jpg",
    category: "academic",
    technologies: [
      "Python",
      "PostgreSQL",
      "Google Cloud",
      "Google Maps API",
      "MapboxGL",
    ],
    highlights: [
      "Processed 1.5M+ records using Python and PostgreSQL",
      "Implemented validation, bulk inserts, and real-time streaming on Google Cloud",
      "Added failover handling and encrypted storage to improve reliability and reduce costs",
      "Surfaced insights with geospatial dashboards to aid route planning",
    ],
    github: "https://github.com/sriramnurani1995/MetroMetricsMavericks",
    demo: "https://drive.google.com/file/d/1WIcvktMgJdk30fWTIVGbB-pFT9CvOBus/view?usp=sharing",
  },
  {
    id: 4,
    title: "Ground Operations Cloud Migration",
    description:
      "Led cloud modernization for a Ground Operations platform composed of 25+ application modules and Oracle DB, moving to AWS EC2 and RDS — reducing infrastructure costs by 50% and improving scalability and availability.",
    image: "/images/projects/cloud-migration.jpg",
    category: "professional",
    technologies: [
      "AWS EC2",
      "RDS",
      "Oracle DB",
      "Java",
      "Spring Boot",
      "Kafka",
      "AWS SQS",
    ],
    highlights: [
      "Migrated 25+ application modules and Oracle DB to AWS",
      "Reduced infrastructure costs by 50%",
      "Improved scalability and availability",
      "Designed event-driven systems with Kafka and AWS SQS",
      "Streamed real-time data across airline operations",
    ],
    github: null,
    demo: null,
  },
];

export default projectsData;
