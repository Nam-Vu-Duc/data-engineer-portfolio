import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion } from "framer-motion";

export interface DetailItem {
  title: string;
  company?: string;
  description?: string;
  dateRange?: string;
  achievements?: string[];
  metrics?: string[];
  technologies?: string[];
}

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: DetailItem | null;
  type: "experience" | "project";
}

export const DetailModal = ({ isOpen, onClose, item, type }: DetailModalProps) => {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{item.title}</DialogTitle>
          {item.company && (
            <DialogDescription className="text-lg text-primary font-medium">
              {item.company}
            </DialogDescription>
          )}
          {item.dateRange && (
            <DialogDescription className="text-sm">
              {item.dateRange}
            </DialogDescription>
          )}
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* Description */}
          {item.description && (
            <div>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          )}

          {/* Achievements/Details */}
          {item.achievements && item.achievements.length > 0 && (
            <div>
              <h3 className="font-semibold text-foreground mb-3">
                {type === "experience" ? "Key Achievements" : "Details"}
              </h3>
              <ul className="space-y-2">
                {item.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm text-muted-foreground"
                  >
                    <span className="text-primary font-bold min-w-fit">→</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Metrics */}
          {item.metrics && item.metrics.length > 0 && (
            <div>
              <h3 className="font-semibold text-foreground mb-3">Impact Metrics</h3>
              <div className="grid grid-cols-2 gap-3">
                {item.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-secondary/50 rounded-lg p-3 text-sm border border-border/50"
                  >
                    <span className="text-primary font-semibold">✓</span>{" "}
                    <span className="text-muted-foreground">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          {item.technologies && item.technologies.length > 0 && (
            <div>
              <h3 className="font-semibold text-foreground mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
