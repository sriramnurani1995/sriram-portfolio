// src/data/skills.ts
export interface Skill {
  name: string;
  logo: string;
  category: "language" | "framework" | "database" | "cloud" | "tools";
}

const skillsData: Skill[] = [
  // Languages
  { name: "Python", logo: "/images/skills/python.png", category: "language" },
  { name: "Java", logo: "/images/skills/java.png", category: "language" },
  {
    name: "JavaScript",
    logo: "/images/skills/javascript.png",
    category: "language",
  },
  {
    name: "TypeScript",
    logo: "/images/skills/typescript.png",
    category: "language",
  },
  { name: "Bash", logo: "/images/skills/bash.png", category: "language" },

  // Frameworks & Libraries
  {
    name: "Spring Boot",
    logo: "/images/skills/spring-boot.png",
    category: "framework",
  },
  { name: "React", logo: "/images/skills/react.png", category: "framework" },
  { name: "Flask", logo: "/images/skills/flask.png", category: "framework" },
  {
    name: "FastAPI",
    logo: "/images/skills/fastapi.png",
    category: "framework",
  },
  {
    name: "LangChain",
    logo: "/images/skills/langchain.png",
    category: "framework",
  },
  {
    name: "REST APIs",
    logo: "/images/skills/rest-api.png",
    category: "framework",
  },
  {
    name: "GraphQL",
    logo: "/images/skills/graphql.png",
    category: "framework",
  },
  {
    name: "Microservices",
    logo: "/images/skills/microservices.png",
    category: "framework",
  },
  {
    name: "Serverless",
    logo: "/images/skills/serverless.png",
    category: "framework",
  },

  // Databases
  {
    name: "PostgreSQL",
    logo: "/images/skills/postgresql.png",
    category: "database",
  },
  { name: "MySQL", logo: "/images/skills/mysql.png", category: "database" },
  {
    name: "Oracle DB",
    logo: "/images/skills/oracle.png",
    category: "database",
  },
  {
    name: "Apache Kafka",
    logo: "/images/skills/kafka.png",
    category: "database",
  },
  {
    name: "BigQuery",
    logo: "/images/skills/bigquery.png",
    category: "database",
  },
  { name: "Tableau", logo: "/images/skills/tableau.png", category: "database" },

  // Cloud & DevOps
  {
    name: "AWS Lambda",
    logo: "/images/skills/aws-lambda.png",
    category: "cloud",
  },
  { name: "AWS EC2", logo: "/images/skills/aws-ec2.png", category: "cloud" },
  { name: "AWS RDS", logo: "/images/skills/aws-rds.png", category: "cloud" },
  { name: "AWS S3", logo: "/images/skills/aws-s3.png", category: "cloud" },
  { name: "GCP", logo: "/images/skills/gcp.png", category: "cloud" },
  { name: "Docker", logo: "/images/skills/docker.png", category: "cloud" },
  {
    name: "Kubernetes",
    logo: "/images/skills/kubernetes.png",
    category: "cloud",
  },
  {
    name: "Terraform",
    logo: "/images/skills/terraform.png",
    category: "cloud",
  },
  { name: "Agile/Scrum", logo: "/images/skills/agile.png", category: "tools" },
  { name: "TDD", logo: "/images/skills/tdd.png", category: "tools" },
  {
    name: "Code Reviews",
    logo: "/images/skills/code-review.png",
    category: "tools",
  },
];

export default skillsData;
