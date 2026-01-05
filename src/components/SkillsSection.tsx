import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["Python", "SQL", "Java", "Scala", "Go", "Bash"],
  },
  {
    title: "Big Data Technologies",
    icon: "⚡",
    skills: ["Apache Spark", "Apache Kafka", "Hadoop", "Apache Flink", "Presto"],
  },
  {
    title: "Cloud Platforms",
    icon: "☁️",
    skills: ["AWS (S3, EC2, Lambda, Glue, Athena, Redshift)", "GCP (BigQuery, Dataflow, Pub/Sub)", "Azure (Data Factory, Synapse)"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Cassandra", "DynamoDB", "Redis"],
  },
  {
    title: "Data Pipeline & Orchestration",
    icon: "🔄",
    skills: ["Apache Airflow", "Prefect", "Dagster", "dbt", "Luigi"],
  },
  {
    title: "DevOps & Tools",
    icon: "🛠️",
    skills: ["Git", "Docker", "Kubernetes", "Jenkins", "Terraform", "CI/CD"],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="inline-block text-primary font-mono text-sm mb-4"
          >
            {"<Skills />"}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="text-gradient">Arsenal</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A comprehensive toolkit for building and maintaining robust data infrastructure
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              className="bg-gradient-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 * categoryIndex + 0.05 * skillIndex,
                    }}
                    className="px-3 py-1.5 bg-secondary/50 border border-border rounded-lg text-sm text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Soft Skills & Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "ETL/ELT Pipeline Design",
              "Data Modeling",
              "System Architecture",
              "Performance Optimization",
              "Technical Communication",
              "Cross-functional Collaboration",
              "Agile Methodologies",
              "Documentation",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary hover:bg-primary/20 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
