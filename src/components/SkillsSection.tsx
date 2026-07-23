import { motion } from "framer-motion";

const skills = [
  "Python", "C", "HTML", "CSS", "JavaScript", "SQL",
  "React.js", "Git", "GitHub", "VS Code", "Figma", "AWS (Trainee)"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-accent/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-2">Skills</h2>
          <p className="text-muted-foreground mb-10">Technologies & tools I work with</p>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="px-5 py-2.5 rounded-xl bg-card border border-border text-foreground font-medium text-sm shadow-sm cursor-default hover:border-primary/40 hover:shadow-md transition-all"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
