import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar, Trophy, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialUrl: "https://aws.amazon.com/certification",
    category: "Cloud",
  },
  {
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2023",
    credentialUrl: "https://cloud.google.com/certification",
    category: "Cloud",
  },
  {
    title: "Databricks Certified Associate Data Engineer",
    issuer: "Databricks",
    date: "2022",
    credentialUrl: "https://www.databricks.com/learn/certification",
    category: "Big Data",
  },
  {
    title: "Apache Spark Developer Certification",
    issuer: "Linux Academy",
    date: "2022",
    credentialUrl: "https://www.linuxacademy.com",
    category: "Big Data",
  },
  {
    title: "Apache Spark Developer Certification",
    issuer: "Linux Academy",
    date: "2022",
    credentialUrl: "https://www.linuxacademy.com",
    category: "Big Data",
  },
  {
    title: "Apache Spark Developer Certification",
    issuer: "Linux Academy",
    date: "2022",
    credentialUrl: "https://www.linuxacademy.com",
    category: "Big Data",
  },
  {
    title: "Apache Spark Developer Certification",
    issuer: "Linux Academy",
    date: "2022",
    credentialUrl: "https://www.linuxacademy.com",
    category: "Big Data",
  },
];

const awards = [
  {
    title: "Employee of the Year",
    organization: "TechCorp Inc.",
    year: "2023",
    description: "Recognized for outstanding contributions to data infrastructure and team leadership",
  }
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="inline-block text-primary font-mono text-sm mb-4"
          >
            {"<Certifications />"}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Certifications & Awards
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Professional credentials and recognition
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-2xl font-semibold mb-6 flex items-center gap-2"
            >
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </motion.h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="block bg-card/70 rounded-lg border border-border/50 p-5 hover:border-primary/50 hover:bg-card/100 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors flex-1">
                      {cert.title}
                    </h4>
                    <Badge variant="secondary" className="text-xs flex-shrink-0">
                      {cert.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <p className="text-xs text-primary/70 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-2xl font-semibold mb-6 flex items-center gap-2"
            >
              <Trophy className="w-6 h-6 text-primary" />
              Awards
            </motion.h3>

            <div className="space-y-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-card/70 rounded-lg border border-border/50 p-5 hover:border-primary/50 hover:bg-card/100 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {award.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2 ml-8">
                    {award.organization}
                  </p>
                  <p className="text-xs text-muted-foreground mb-2 ml-8">
                    {award.description}
                  </p>
                  <p className="text-xs text-primary/70 flex items-center gap-1 ml-8">
                    <Calendar className="w-3 h-3" />
                    {award.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
