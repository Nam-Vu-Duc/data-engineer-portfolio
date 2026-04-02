import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Cloud, Zap, Users } from "lucide-react";
import data from "@/data/data.json";

const aboutData = data.summary;

export const SummarySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="summary" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left: Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-2"
          >
            {/* Profile Image Container */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-square rounded-2xl bg-gradient-card border border-border overflow-hidden relative">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-card to-transparent" />
                
                {/* Profile Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                    <span className="text-6xl font-bold text-gradient">NV</span>
                  </div>
                </div>

                {/* Floating Code Blocks */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-8 right-8 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-3 py-2 font-mono text-xs"
                >
                  <span className="text-primary">SELECT</span>
                  <span className="text-muted-foreground"> * FROM</span>
                  <span className="text-foreground"> data</span>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-16 left-8 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-3 py-2 font-mono text-xs"
                >
                  <span className="text-primary">spark</span>
                  <span className="text-muted-foreground">.read()</span>
                </motion.div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[
                  { icon: Database, label: "1+ Years", description: "Data Engineering" },
                  { icon: Cloud, label: "50+ Pipelines", description: "Built & Deployed" },
                  { icon: Zap, label: "10TB+", description: "Data Processed Daily" },
                  { icon: Users, label: "15+", description: "Cross-functional Teams" },
                ].map(({ icon: Icon, label, description }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-primary mb-2" />
                    <div className="text-xl font-bold text-foreground">{label}</div>
                    <div className="text-sm text-muted-foreground">{description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <span className="inline-block text-primary font-mono text-sm mb-4">
              {"<Summary />"}
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Architecting Data
              <br />
              <span className="text-gradient">Infrastructure at Scale</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm Nam – A Data Engineer with nearly 2 years of hands-on experience in designing and optimizing cloud-based data platforms on AWS, Microsoft Azure, and Fabric. Strong background in building scalable data pipelines with Apache Airflow and dbt, optimizing SQL performance, and implementing data governance for analytics and BI. Additionally, experienced in software development, low-code/no-code solutions, and Agile/Scrum project delivery. Also a former double major in Information Systems and Economics, I bring both technical and business perspectives to data engineering solutions.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {aboutData.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-secondary/50 border border-border rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
