import GoogleHeader from "@/components/GoogleHeader";
import ChatBot from "@/components/ChatBot";
import { Github, ExternalLink, Clock, Code, UtensilsCrossed, Building2, Database, Cpu, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    Icon: UtensilsCrossed,
    color: "#EA4335",
    title: "Canteen Grab & Go",
    subtitle: "Campus Food Ordering System",
    org: "canteen-grab-go.vercel.app",
    desc: "A digital campus canteen ordering system designed to reduce queue time and streamline food ordering for students. Features an interactive digital menu, add-to-cart functionality, dynamic price calculation, and order management workflow.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://canteen-grab-go.vercel.app/",
    github: "https://github.com/Avanish081204/Canteen-Grab-Go-",
  },
  {
    Icon: Building2,
    color: "#1A73E8",
    title: "Rentify Everything",
    subtitle: "Smart Rental Marketplace Platform",
    org: "github.com › Avanish081204 › rentify",
    desc: "A modern rental marketplace platform allowing users to list, browse, and manage rental products and properties with a user-friendly, responsive UI. Built with dynamic listing and search/filter capabilities.",
    tags: ["HTML", "CSS", "JavaScript"],
    comingSoon: true,
  },
  {
    Icon: Database,
    color: "#34A853",
    title: "Student Database Management",
    subtitle: "Backend CRUD System (Spring Boot)",
    org: "github.com › Avanish081204 › student-db",
    desc: "A full-stack student management system using Spring Boot and MySQL with RESTful APIs and proper MVC architecture. Implements CRUD operations, validation, exception handling, and database connectivity.",
    tags: ["Java", "Spring Boot", "MySQL", "REST API"],
    comingSoon: true,
  },
  {
    Icon: Cpu,
    color: "#FBBC05",
    title: "Smart Stick for Visually Impaired",
    subtitle: "Obstacle Detection & Alert System",
    org: "github.com › Avanish081204 › smart-stick",
    desc: "An assistive hardware device using ultrasonic sensors and vibration motor to provide real-time obstacle awareness for visually impaired users. Compact, portable, and designed for practical daily use.",
    tags: ["Arduino", "C++", "Ultrasonic Sensors", "IoT"],
    comingSoon: true,
  },
  {
    Icon: GraduationCap,
    color: "#61DAFB",
    title: "Student Portal System",
    subtitle: "Role-Based Access Web Portal",
    org: "github.com › Avanish081204 › student-portal",
    desc: "A web portal with admin/student role-based login, dashboards, and profiles. Admin can manage student records and send email notifications; students can track courses and enrollment. Built with Java, Spring, and JavaScript.",
    tags: ["Java", "Spring", "JavaScript", "HTML", "CSS"],
    comingSoon: true,
  },
];

export default function Projects() {
  return (
    <>
      <GoogleHeader />
      <main className="sub-page-content">
        <p className="results-stats">About 5 projects indexed (0.19 seconds)</p>

        {projects.map((project, i) => {
          const ProjectIcon = project.Icon;
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
            >
              <div className="result-card">
                <div className="result-url">
                  <Code size={14} />
                  <span>{project.org}</span>
                </div>
                <h3>
                  <ProjectIcon size={18} style={{ display: "inline", marginRight: 8, verticalAlign: "-3px", color: project.color }} />
                  {project.title} — {project.subtitle}
                </h3>
                <p style={{ marginBottom: 10 }}>{project.desc}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                  {project.tags.map((t) => <span className="tech-badge" key={t}>{t}</span>)}
                </div>

                <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                  {project.comingSoon ? (
                    <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--text-muted)" }}>
                      <Clock size={13} /> Coming Soon
                    </span>
                  ) : (
                    <>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--accent-blue)", fontWeight: 500 }}
                        >
                          <ExternalLink size={13} /> Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--text-secondary)" }}
                        >
                          <Github size={13} /> View Code
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
              {i < projects.length - 1 && <hr className="result-divider" />}
            </motion.div>
          );
        })}
      </main>
      <ChatBot />
    </>
  );
}
