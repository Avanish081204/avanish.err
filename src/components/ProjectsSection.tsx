import { motion } from "framer-motion";
import { Github, ExternalLink, Clock } from "lucide-react";

interface Project {
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  comingSoon?: boolean;
}

const projects: Project[] = [
  {
    emoji: "🚀",
    title: "Rentify Everything",
    subtitle: "Smart Rental Marketplace Platform",
    description:
      "A modern rental marketplace platform that allows users to list, browse, and manage rental products/properties efficiently with a user-friendly UI.",
    features: [
      "Dynamic rental listings with search & filtering",
      "Responsive UI for mobile & desktop",
      "User-friendly listing management",
      "Clean modular frontend architecture",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    comingSoon: true,
  },
  {
    emoji: "🍽️",
    title: "Canteen Grab & Go",
    subtitle: "Campus Food Ordering System",
    description:
      "A digital campus canteen ordering system designed to reduce queue time and streamline food ordering for students.",
    features: [
      "Interactive digital menu",
      "Add-to-cart functionality",
      "Dynamic price calculation",
      "Order management workflow",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://canteen-grab-go.vercel.app/",
    githubLink: "https://github.com/Avanish081204/Canteen-Grab-Go-",
  },
  {
    emoji: "🎓",
    title: "Student Database Management",
    subtitle: "Backend CRUD System (Spring Boot)",
    description:
      "A full-stack student management system built using Spring Boot and MySQL with REST APIs and proper MVC architecture.",
    features: [
      "CRUD operations for student records",
      "RESTful API integration",
      "MySQL database connectivity",
      "Validation & exception handling",
    ],
    techStack: ["Java", "Spring Boot", "MySQL", "REST API"],
    comingSoon: true,
  },
  {
    emoji: "🦯",
    title: "Smart Stick for Visually Impaired",
    subtitle: "Obstacle Detection & Alert System",
    description:
      "An assistive device built with ultrasonic sensors and vibration motor to provide real-time obstacle awareness and enhanced mobility for visually impaired users.",
    features: [
      "Ultrasonic sensor obstacle detection",
      "Vibration motor real-time feedback",
      "Enhanced mobility assistance",
      "Compact & portable hardware design",
    ],
    techStack: ["Arduino", "Ultrasonic Sensors", "C++"],
    comingSoon: true,
  },
  {
    emoji: "🏫",
    title: "Student Portal System",
    subtitle: "Role-Based Access Web Portal",
    description:
      "A web portal with admin/student login, dashboards, and profiles. Admin can manage students and notify via email; students can track courses and enrollment.",
    features: [
      "Admin & student role-based dashboards",
      "Secure authentication system",
      "Course tracking & enrollment",
      "Email notification system",
    ],
    techStack: ["Java", "Spring", "JavaScript", "HTML", "CSS"],
    comingSoon: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-2">Projects</h2>
          <p className="text-muted-foreground mb-10">Things I've built & shipped</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-6 flex flex-col h-full group"
            >
              <div className="text-3xl mb-3">{project.emoji}</div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                {project.title}
              </h3>
              <p className="text-primary text-sm font-medium mb-3">{project.subtitle}</p>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>

              <ul className="space-y-1.5 mb-4">
                {project.features.map((f) => (
                  <li key={f} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span> {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-badge text-[11px]">{tech}</span>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-auto pt-3 border-t border-border/50">
                {project.comingSoon ? (
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground text-xs">
                    <Clock size={12} /> Coming Soon
                  </span>
                ) : (
                  <>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground font-medium"
                      >
                        <Github size={14} /> Code
                      </a>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
