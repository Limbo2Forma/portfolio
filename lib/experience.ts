export type Role = {
  company: string
  title: string
  period: string
  location?: string
  blurb: string
}

export const experience: Role[] = [
  {
    company: "NTT DATA VDS",
    title: "Data Engineer — UDE Central Monitoring",
    period: "Nov 2023 — Mar 2026",
    location: "Hanoi, working with Wolfsburg DE team",
    blurb:
      "Designed Azure-based ingestion, the LGTM stack and an Airflow + Azure Monitor anomaly detection pipeline. Migrated legacy PowerShell pipelines to Databricks.",
  },
  {
    company: "NTT DATA VDS",
    title: "Backend Developer — Licensight",
    period: "Feb 2023 — Oct 2023",
    location: "Hanoi",
    blurb:
      "Built a Quarkus backend with a hybrid MongoDB + PostgreSQL data layer for an enterprise licence intelligence product.",
  },
  {
    company: "VCCorp",
    title: "Data Engineer — Customer Data Platform",
    period: "Apr 2022 — Dec 2022",
    location: "Hanoi",
    blurb:
      "Designed HBase + Elasticsearch storage, Spring Boot APIs and Kafka queues. Wrote Scala Spark jobs for mass identity merging.",
  },
  {
    company: "VCCorp",
    title: "Data Analyst — Data Mining and Analysis",
    period: "Oct 2021 — Mar 2022",
    location: "Hanoi",
    blurb:
      "PySpark log analysis across Kenh14, Soha, Pega — handling 10TB/day. Set up Airflow DAGs for scheduled analyst workloads.",
  },
]

export type SkillGroup = {
  label: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "Scala", "JavaScript", "PowerShell"],
  },
  {
    label: "Frameworks",
    items: ["FastAPI", "Flask", "Quart", "Spring", "Quarkus", "Node.js", "React"],
  },
  {
    label: "Data & ML",
    items: [
      "Apache Spark",
      "Snowflake",
      "Airflow",
      "Databricks",
      "Kafka",
      "OpenCV",
      "Scikit-Learn",
      "TensorFlow",
      "Keras",
    ],
  },
  {
    label: "Storage",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "ElasticSearch",
      "HBase",
      "HDFS",
      "Firebase",
    ],
  },
  {
    label: "Cloud & Ops",
    items: ["Microsoft Azure", "AWS", "Docker", "Grafana", "LGTM Stack", "App Insights"],
  },
]
