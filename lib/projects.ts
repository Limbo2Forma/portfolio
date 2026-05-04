export type Project = {
  slug: string
  index: string
  title: string
  client: string
  role: string
  year: string
  category: string
  summary: string
  description: string[]
  highlights: string[]
  stack: string[]
  cover: string
  accent: "primary" | "accent"
}

export const projects: Project[] = [
  {
    slug: "ude-central-monitoring",
    index: "01",
    title: "UDE Central Monitoring",
    client: "NTT DATA VDS",
    role: "Data Engineer",
    year: "2023 — 2026",
    category: "Observability Platform",
    summary:
      "End-to-end observability platform unifying ingestion, anomaly detection and Grafana dashboards across customer environments.",
    description: [
      "Designed and implemented the full data ingestion architecture using Microsoft Azure services to centralise telemetry from dozens of customer applications into a single observability layer.",
      "Built the LGTM (Loki, Grafana, Tempo, Mimir) stack with custom dashboards that surface SLO health, latency budgets, and cost-per-tenant in a glance.",
      "Designed a metric anomaly detection pipeline using Airflow, GitHub Actions and Azure Monitor that proactively pages on regressions before customer impact.",
    ],
    highlights: [
      "Reduced incident detection time by surfacing anomalies before alerts triggered.",
      "Worked peer-to-peer with Germany-based developers and product managers.",
      "Migrated legacy PowerShell maintenance pipelines to fully automated Databricks notebooks.",
    ],
    stack: ["Azure", "Databricks", "Grafana", "Airflow", "GitHub Actions", "PowerShell"],
    cover: "/projects/ude-monitoring.jpg",
    accent: "primary",
  },
  {
    slug: "licensight-backend",
    index: "02",
    title: "Licensight",
    client: "NTT DATA VDS",
    role: "Backend Developer",
    year: "2023",
    category: "Backend API",
    summary:
      "Quarkus-powered backend for an enterprise license intelligence product, with a hybrid MongoDB + PostgreSQL data layer.",
    description: [
      "Developed the backend API surface using Quarkus, optimising for low cold-start times and a tight memory footprint.",
      "Designed a hybrid database schema combining MongoDB for flexible licence document storage and PostgreSQL for relational reporting.",
      "Owned the contract between backend and frontend teams, shipping documented endpoints with clear pagination and filtering primitives.",
    ],
    highlights: [
      "Reactive Quarkus stack with sub-second cold starts.",
      "Hybrid Mongo + Postgres design tailored to the workload.",
      "Clean API contract that unblocked the frontend team.",
    ],
    stack: ["Java", "Quarkus", "MongoDB", "PostgreSQL", "Docker"],
    cover: "/projects/licensight-api.jpg",
    accent: "accent",
  },
  {
    slug: "customer-data-platform",
    index: "03",
    title: "Customer Data Platform",
    client: "VCCorp",
    role: "Data Engineer",
    year: "2022",
    category: "Data Platform",
    summary:
      "A unified customer data platform combining HBase, Elasticsearch and Spark to merge identities and ad-spend telemetry at scale.",
    description: [
      "Designed HBase and Elasticsearch schemas to store and query enriched user profiles across multiple product surfaces.",
      "Built Spring Boot APIs and a Kafka-backed queue to expose user data to downstream consumers in near real-time.",
      "Wrote Scala Spark jobs that performed mass identity merging, deduplication and aggregations across billions of rows.",
      "Integrated the Google Ads and Facebook Ads APIs to sync daily campaign statistics into the platform.",
    ],
    highlights: [
      "Identity resolution at scale using Spark on Scala.",
      "Real-time ingestion via Kafka into HBase and Elasticsearch.",
      "First-party + ad-platform data unified into a single profile.",
    ],
    stack: ["Scala", "Apache Spark", "HBase", "Elasticsearch", "Kafka", "Spring Boot"],
    cover: "/projects/customer-data-platform.jpg",
    accent: "primary",
  },
  {
    slug: "log-analytics-pyspark",
    index: "04",
    title: "Log Analytics at 10TB/day",
    client: "VCCorp",
    role: "Data Analyst",
    year: "2021 — 2022",
    category: "Big Data Analytics",
    summary:
      "PySpark log analysis for major Vietnamese news sites, processing 10TB of daily traffic with Airflow-orchestrated workflows.",
    description: [
      "Used PySpark to analyse user notification logs across Kenh14, Soha, Pega and other VCCorp news properties.",
      "Built repeatable Airflow DAGs that gave analysts on-demand, scheduled access to reports without engineering involvement.",
      "Tuned Spark jobs to gracefully handle bursty 10TB/day workloads on shared cluster resources.",
    ],
    highlights: [
      "10TB of daily data traffic processed reliably.",
      "Self-serve Airflow DAGs unblocked the analytics team.",
      "Tuned PySpark jobs for cluster cost efficiency.",
    ],
    stack: ["PySpark", "Airflow", "Python", "Hadoop"],
    cover: "/projects/data-mining.jpg",
    accent: "accent",
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
