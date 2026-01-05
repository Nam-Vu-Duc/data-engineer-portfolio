export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  metrics: string[];
  category: string;
  github: string | null;
  demo: string | null;
  challenges: string[];
  solutions: string[];
  architecture: string;
  impact: string[];
}

export const projects: Project[] = [
  {
    id: "real-time-event-pipeline",
    title: "Real-time Event Pipeline",
    description:
      "Designed and implemented a real-time ETL pipeline processing 10M+ events daily using Apache Kafka and Spark Streaming, reducing data latency from 2 hours to 5 minutes.",
    fullDescription:
      "This project involved building a highly scalable real-time data processing system to handle millions of events from various sources. The pipeline ingests data from multiple IoT devices and application logs, processes them in near real-time, and makes them available for analytics and monitoring dashboards.",
    technologies: ["Apache Kafka", "Spark Streaming", "AWS S3", "Python", "Docker", "Kubernetes", "Prometheus", "Grafana"],
    metrics: ["96% latency reduction", "10M+ events/day", "99.9% uptime"],
    category: "real-time",
    github: "https://github.com",
    demo: null,
    challenges: [
      "Handling data spikes during peak hours without losing events",
      "Ensuring exactly-once processing semantics across distributed systems",
      "Managing schema evolution without breaking downstream consumers",
      "Achieving sub-minute data freshness while maintaining data quality"
    ],
    solutions: [
      "Implemented auto-scaling Kafka consumer groups with dynamic partition rebalancing",
      "Used Kafka transactions combined with idempotent writes to achieve exactly-once delivery",
      "Adopted Schema Registry with backward/forward compatibility rules",
      "Built a multi-stage processing pipeline with quality gates at each stage"
    ],
    architecture: "The system uses a microservices architecture with Kafka as the central message bus. Data flows from producers through Kafka topics to Spark Streaming jobs, which perform transformations and aggregations before writing to S3 and downstream databases.",
    impact: [
      "Enabled real-time business dashboards for executive decision making",
      "Reduced incident detection time from hours to minutes",
      "Supported 3x business growth without infrastructure changes"
    ]
  },
  {
    id: "data-warehouse-modernization",
    title: "Data Warehouse Modernization",
    description:
      "Led migration of legacy data warehouse to cloud-native solution on AWS Redshift with dimensional modeling, improving query performance by 5x and reducing costs by 40%.",
    fullDescription:
      "This comprehensive modernization project involved migrating a 15-year-old on-premises Oracle data warehouse to a modern cloud-native architecture on AWS Redshift. The project included redesigning the data models, implementing modern ETL practices with dbt, and establishing new governance frameworks.",
    technologies: ["AWS Redshift", "dbt", "Airflow", "Python", "Terraform", "AWS Glue", "S3", "CloudFormation"],
    metrics: ["5x query speed", "40% cost reduction", "50+ tables migrated"],
    category: "warehouse",
    github: "https://github.com",
    demo: "https://example.com",
    challenges: [
      "Migrating 50+ tables with complex interdependencies without business disruption",
      "Maintaining data consistency during the transition period",
      "Retraining 200+ business users on new tools and query patterns",
      "Optimizing for both batch and ad-hoc analytical workloads"
    ],
    solutions: [
      "Implemented a phased migration strategy with parallel running systems and automated validation",
      "Built a CDC-based sync mechanism to keep both systems in sync during migration",
      "Created comprehensive documentation and conducted hands-on training workshops",
      "Used Redshift Spectrum for cold data and proper distribution/sort keys for hot data"
    ],
    architecture: "The new architecture follows a medallion pattern (bronze/silver/gold layers) implemented in dbt. Data lands in S3, is processed through Glue crawlers, transformed via dbt models, and stored in optimized Redshift tables with proper materialization strategies.",
    impact: [
      "Reduced annual infrastructure costs by $200K",
      "Enabled self-service analytics for business users",
      "Improved data freshness from daily to hourly updates"
    ]
  },
  {
    id: "ml-feature-store",
    title: "ML Feature Store",
    description:
      "Built a centralized feature store serving real-time and batch features to 15+ ML models, enabling consistent feature computation and reducing model deployment time by 60%.",
    fullDescription:
      "This project addressed the growing complexity of feature management across multiple ML teams. The feature store provides a single source of truth for feature definitions, ensures consistency between training and serving, and dramatically simplifies the model deployment process.",
    technologies: ["Feast", "Redis", "BigQuery", "Kubernetes", "Python", "Apache Beam", "Dataflow"],
    metrics: ["15+ ML models served", "60% faster deployment", "100K+ features"],
    category: "ml-ops",
    github: "https://github.com",
    demo: null,
    challenges: [
      "Ensuring feature consistency between offline training and online serving",
      "Managing feature freshness requirements ranging from minutes to days",
      "Handling high-throughput feature serving with low latency requirements",
      "Supporting diverse feature types across different ML use cases"
    ],
    solutions: [
      "Implemented dual-compute paths with shared feature definitions in Feast",
      "Built tiered storage with Redis for hot features and BigQuery for batch features",
      "Deployed feature servers on Kubernetes with horizontal pod autoscaling",
      "Created a feature SDK with standardized interfaces for all feature types"
    ],
    architecture: "The feature store uses Feast as the core framework, with BigQuery as the offline store and Redis as the online store. Features are computed via Apache Beam pipelines running on Dataflow, with materialization jobs orchestrated by Airflow.",
    impact: [
      "Reduced feature development time from weeks to days",
      "Eliminated training-serving skew issues across all models",
      "Enabled rapid experimentation with new feature combinations"
    ]
  },
  {
    id: "streaming-analytics-platform",
    title: "Streaming Analytics Platform",
    description:
      "Architected an end-to-end streaming analytics platform using Flink for real-time fraud detection, processing 500K transactions per minute with sub-second latency.",
    fullDescription:
      "This mission-critical platform processes financial transactions in real-time to detect and prevent fraudulent activities. The system combines rule-based detection with ML models and provides instant alerts to the fraud operations team.",
    technologies: ["Apache Flink", "Kafka", "Cassandra", "Grafana", "Java", "Scala", "ML models", "Kubernetes"],
    metrics: ["500K TPS", "<1s latency", "99.7% accuracy"],
    category: "real-time",
    github: "https://github.com",
    demo: "https://example.com",
    challenges: [
      "Achieving sub-second end-to-end latency for fraud detection",
      "Balancing fraud detection accuracy with false positive rates",
      "Scaling to handle 10x traffic spikes during peak shopping periods",
      "Integrating ML models with streaming infrastructure"
    ],
    solutions: [
      "Optimized Flink job with custom serializers and memory tuning",
      "Implemented ensemble approach combining rules engine with ML predictions",
      "Used Kubernetes HPA with custom metrics for intelligent auto-scaling",
      "Built a streaming feature computation layer for real-time ML inference"
    ],
    architecture: "Transactions flow from payment gateways through Kafka, processed by Flink jobs that apply business rules and ML models in parallel. Results are stored in Cassandra for historical analysis and pushed to alerting systems for immediate action.",
    impact: [
      "Prevented $15M+ in fraudulent transactions annually",
      "Reduced manual review queue by 70%",
      "Improved customer experience with instant transaction approvals"
    ]
  },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "real-time", label: "Real-time" },
  { id: "warehouse", label: "Data Warehouse" },
  { id: "ml-ops", label: "ML Ops" },
];