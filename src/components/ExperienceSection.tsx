import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Cloud & DevOps Internship — Compozents",
    desc: "AWS infra, CI/CD collaboration.",
    date: "Dec 15, 2024 – Jan 19, 2025",
  },
  {
    title: "IR & KE with Deep Learning — SLRTCE",
    desc: "Deep Learning & Knowledge Engineering.",
    date: "Dec 20, 2024 – Jan 1, 2025",
  },
  {
    title: "Web Dev Add-on Course — SLRTCE",
    desc: "Front & back-end full-stack practice.",
    date: "Jul 1 – Jul 5, 2024",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-accent/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-2">
            Experience & Programs
          </h2>
          <p className="text-muted-foreground mb-10">Professional growth & certifications</p>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Briefcase size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm">{exp.desc}</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{exp.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
