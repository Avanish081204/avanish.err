import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Download, ArrowDown } from "lucide-react";
import avatarImg from "@/assets/avatar.png";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-accent/30" />

      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
              <MapPin size={14} />
              <span>Mumbai, Maharashtra • Web Dev • Cloud (AWS Trainee)</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4">
              Hi, I'm{" "}
              <span className="gradient-text">Avanish</span>
              <br />
              I build clean web experiences.
            </h1>

            <p className="text-muted-foreground text-lg mb-6 max-w-lg">
              B.E. (ECS) 2023–2027 | Full-stack projects & DevOps basics.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="tech-badge">Open to internships</span>
              <span className="tech-badge">Frontend • Backend</span>
              <span className="tech-badge">React • JS • AWS</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:shadow-lg"
              >
                See Projects <ArrowDown size={16} />
              </a>
              <a
                href="/Avanish_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-all"
              >
                <Download size={16} /> Resume
              </a>
              <a
                href="mailto:avanishshukla234@gmail.com"
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://github.com/Avanish081204"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/avanish-shukla-5018142ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative floating">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
                style={{ boxShadow: "var(--glow)" }}>
                <img src={avatarImg} alt="Avanish Shukla" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary/5 blur-xl" />
            </div>
          </motion.div>
        </div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16"
        >
          {[
            { title: "Education", desc: "Shree L.R. Tiwari College of Engineering\nB.E. (ECS) 2023–2027" },
            { title: "Location", desc: "Mumbai, Maharashtra, India\n📞 9503658089" },
            { title: "Status", desc: "R&D Cell — Admin Co-Head (2025–26)" },
          ].map((card) => (
            <div key={card.title} className="glass-card p-5">
              <h3 className="font-heading font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-sm whitespace-pre-line">{card.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
