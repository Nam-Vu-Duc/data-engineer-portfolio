import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Cloud, Zap, Users } from "lucide-react";

const highlights = [
  { icon: Database, label: "5+ Years", description: "Data Engineering" },
  { icon: Cloud, label: "50+ Pipelines", description: "Built & Deployed" },
  { icon: Zap, label: "10TB+", description: "Data Processed Daily" },
  { icon: Users, label: "15+", description: "Cross-functional Teams" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Profile Image Container */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-square rounded-2xl bg-gradient-card border border-border overflow-hidden relative shadow-elevated">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                
                {/* Profile Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                    <span className="text-6xl font-bold text-gradient">AC</span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {highlights.map(({ icon: Icon, label, description }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors shadow-card"
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
          >
            <span className="inline-block text-primary font-medium text-sm mb-4 uppercase tracking-wide">
              About Me
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Architecting Data
              <br />
              <span className="text-gradient">Infrastructure at Scale</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a Data Engineer with over 5 years of experience designing and 
                implementing robust data pipelines that process terabytes of data daily. 
                My journey began with a curiosity for making sense of complex datasets, 
                and has evolved into a passion for building systems that empower 
                data-driven decisions.
              </p>
              
              <p>
                Specializing in cloud-native architectures on <span className="text-foreground font-medium">AWS</span> and{" "}
                <span className="text-foreground font-medium">GCP</span>, I've led initiatives that 
                reduced data latency by up to <span className="text-primary font-semibold">96%</span> and 
                cut processing costs by <span className="text-primary font-semibold">40%</span>. 
                I believe in writing clean, maintainable code and building systems 
                that scale gracefully.
              </p>

              <p>
                When I'm not optimizing Spark jobs or designing dimensional models, 
                you'll find me contributing to open-source projects, writing technical 
                articles, or exploring the latest in real-time streaming technologies.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["ETL/ELT", "Real-time Streaming", "Data Modeling", "Cloud Architecture", "Performance Optimization"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
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