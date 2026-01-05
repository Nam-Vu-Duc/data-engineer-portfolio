import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Real-time Event Pipeline",
    description:
      "Designed and implemented a real-time ETL pipeline processing 10M+ events daily using Apache Kafka and Spark Streaming, reducing data latency from 2 hours to 5 minutes.",
    technologies: ["Apache Kafka", "Spark Streaming", "AWS S3", "Python", "Docker"],
    metrics: ["96% latency reduction", "10M+ events/day", "99.9% uptime"],
    category: "real-time",
    github: "https://github.com",
    demo: null,
  },
  {
    title: "Data Warehouse Modernization",
    description:
      "Led migration of legacy data warehouse to cloud-native solution on AWS Redshift with dimensional modeling, improving query performance by 5x and reducing costs by 40%.",
    technologies: ["AWS Redshift", "dbt", "Airflow", "Python", "Terraform"],
    metrics: ["5x query speed", "40% cost reduction", "50+ tables migrated"],
    category: "warehouse",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "ML Feature Store",
    description:
      "Built a centralized feature store serving real-time and batch features to 15+ ML models, enabling consistent feature computation and reducing model deployment time by 60%.",
    technologies: ["Feast", "Redis", "BigQuery", "Kubernetes", "Python"],
    metrics: ["15+ ML models served", "60% faster deployment", "100K+ features"],
    category: "ml-ops",
    github: "https://github.com",
    demo: null,
  },
  {
    title: "Streaming Analytics Platform",
    description:
      "Architected an end-to-end streaming analytics platform using Flink for real-time fraud detection, processing 500K transactions per minute with sub-second latency.",
    technologies: ["Apache Flink", "Kafka", "Cassandra", "Grafana", "Java"],
    metrics: ["500K TPS", "<1s latency", "99.7% accuracy"],
    category: "real-time",
    github: "https://github.com",
    demo: "https://example.com",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "real-time", label: "Real-time" },
  { id: "warehouse", label: "Data Warehouse" },
  { id: "ml-ops", label: "ML Ops" },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute top-1/4 left-0 w-1/3 h-96 bg-primary/5 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="inline-block text-primary font-mono text-sm mb-4"
          >
            {"<Projects />"}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="text-gradient">Work</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8"
          >
            Data pipelines and infrastructure projects that drive real business impact
          </motion.p>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              layout
              className="group bg-gradient-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-card"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium text-primary"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-secondary/50 border border-border rounded-md text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Details Arrow */}
              <div className="mt-5 pt-5 border-t border-border">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link">
                  View Project Details
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-border hover:border-primary/50 hover:bg-secondary"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
