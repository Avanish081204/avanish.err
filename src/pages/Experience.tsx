import GoogleHeader from "@/components/GoogleHeader";
import ChatBot from "@/components/ChatBot";
import { Briefcase, Cloud, Code, BookOpen, Laptop, Sparkles } from "lucide-react";

const experiences = [
  {
    icon: Sparkles,
    org: "Compozent",
    title: "Software Engineer",
    date: "June 2026 – Present",
    desc: "Selected as Software Development Engineer Intern at Compozent, contributing to real-world software projects. Collaborating with a professional engineering team to enhance tech solutions, modern software engineering practices, and elevate user experience.",
    tags: ["Software Engineering", "Full-Stack", "User Experience", "Problem Solving"],
    url: "compozent.com › careers › software-engineer",
  },
  {
    icon: Laptop,
    org: "Cognifyz Technologies",
    title: "Frontend Developer & Development Intern",
    date: "March 2026 – April 2026",
    desc: "Worked on responsive web interfaces using HTML, CSS, and JavaScript. Developed modern UI components, improved website usability, and collaborated with the engineering team on production-level front-end tasks.",
    tags: ["Frontend Dev", "HTML5", "CSS3", "JavaScript", "UI Components", "Usability"],
    url: "cognifyz.com › internships › frontend-dev",
  },
  {
    icon: Cloud,
    org: "Compozent",
    title: "DevOps Specialist",
    date: "December 2024 – January 2025",
    desc: "Worked hands-on with AWS infrastructure and DevOps tools. Collaborated on cloud-based systems, environment provisioning, and automated CI/CD deployment pipelines.",
    tags: ["AWS", "DevOps", "CI/CD Pipelines", "Cloud Systems", "Software Deployment"],
    url: "compozent.com › cloud › devops-specialist",
  },
  {
    icon: BookOpen,
    org: "Shree L. R. Tiwari College of Engineering",
    title: "Deep Learning Specialist",
    date: "December 2024 – January 2025",
    desc: "Applied Deep Learning for Information Retrieval (IR) tasks using Python. Worked on IR concepts, knowledge graphs, and Knowledge Engineering research.",
    tags: ["Python", "Deep Learning", "Information Retrieval", "Knowledge Engineering"],
    url: "slrtce.in › research › deep-learning",
  },
  {
    icon: Code,
    org: "Shree L. R. Tiwari College of Engineering",
    title: "Web Development Specialist",
    date: "July 2024",
    desc: "Hands-on experience in front-end and back-end development under structured mentorship. Worked on real-world projects and mastered core full-stack software practices.",
    tags: ["HTML", "CSS", "JavaScript", "REST APIs", "Full-Stack Dev"],
    url: "slrtce.in › courses › web-dev-specialist",
  },
];

export default function Experience() {
  return (
    <>
      <GoogleHeader />
      <main className="sub-page-content">
        <p className="results-stats">About 5 verified career milestones (0.21 seconds)</p>

        {/* Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <div key={exp.title + i}>
                <div className="result-card" style={{ display: "flex", gap: 16 }}>
                  {/* Timeline dot */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 4 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: "50%",
                      background: "var(--badge-bg)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon size={16} style={{ color: "var(--accent-blue)" }} />
                    </div>
                    {i < experiences.length - 1 && (
                      <div style={{ width: 2, flex: 1, background: "var(--border)", marginTop: 8, minHeight: 32 }} />
                    )}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div className="result-url">
                      <Briefcase size={12} />
                      <span>{exp.url}</span>
                    </div>
                    <h3>{exp.title} — {exp.org}</h3>
                    <p style={{ fontSize: 12, color: "var(--accent-blue)", fontWeight: 500, marginBottom: 6 }}>{exp.date}</p>
                    <p>{exp.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                      {exp.tags.map((t) => (
                        <span className="tech-badge" key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                {i < experiences.length - 1 && <hr className="result-divider" />}
              </div>
            );
          })}
        </div>

        {/* Leadership */}
        <hr className="result-divider" />
        <div className="result-card">
          <div className="result-url"><Briefcase size={14} /><span>slrtce.in › rnd-cell › leadership</span></div>
          <h3>R&D Cell — Admin Co-Head (2025–26)</h3>
          <p>Leading administrative operations for the college's R&D Cell. Coordinates student research projects, manages events, and fosters a collaborative technical environment across all departments.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
            {["Leadership","Administration","Research","Coordination"].map((t) => (
              <span className="tech-badge" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </main>
      <ChatBot />
    </>
  );
}
