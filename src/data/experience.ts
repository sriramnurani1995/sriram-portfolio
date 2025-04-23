export interface ExperienceItem {
  title: string;
  company: string;
  logo: string;
  period: string;
  achievements: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "AI/ML Intern",
    company: "Tychons USA",
    logo: "/images/logos/tychons.png",
    period: "September 2024 - June 2025",
    achievements: [
      "Developed a chatbot backed by LLMs to automate business queries for a warehouse client — reducing manual SQL effort, speeding up decision-making, and enabling users to access insights through natural language.",
      "Benchmarked 10+ LLM agent configurations using RAG workflows with LangChain, Vanna, and Chroma — achieving a 2× improvement in SQL generation speed while balancing accuracy, latency, and cost.",
      "Engineered and containerized a ML pipeline using Docker to stage and validate LLM, retriever, and orchestration components — enabling automated SQL accuracy checks and latency benchmarking across model configurations.",
    ],
  },
  {
    title: "Backend Software Engineer – Onsite",
    company: "Tata Consultancy Services",
    logo: "/images/logos/tcs.png",
    period: "September 2019 - August 2023",
    achievements: [
      "Led cloud modernization for a Ground Operations platform composed of 25+ application modules and Oracle DB, moving to AWS EC2 and RDS — reducing infrastructure costs by 50% and improving scalability and availability.",
      "Designed event-driven systems with Kafka, AWS SQS, and IBM MQ to stream real-time data across airline operations — enabling automated handling of flight schedules and maintenance workforce assignments.",
      "Implemented Solr-based search indexing, improving query response times by 50%.",
      "Ensured system reliability with pre-prod testing, dry runs, and load testing using Neoload and RPA tools — delivering zero integration issues and fast post-deployment bug resolution.",
      "Served as Technical Lead managing 3 developer teams, unblocking delivery, and coordinating timelines — drove 10+ production deployments with over 95% on-time completion rate.",
    ],
  },
  {
    title: "Backend Software Engineer – Offshore",
    company: "Tata Consultancy Services",
    logo: "/images/logos/tcs.png",
    period: "June 2016 - August 2019",
    achievements: [
      "Created an Aircraft Planning System to plan maintenance and flight schedules — integrated with ops systems via MQ.",
      "Optimized Spring Boot logic and Oracle DB interactions — cut query latency by 40%.",
    ],
  },
];

export default experienceData;
