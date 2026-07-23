import GoogleHeader from "@/components/GoogleHeader";
import ChatBot from "@/components/ChatBot";
import { Briefcase, Cloud, Code, BookOpen, Laptop, Sparkles } from "lucide-react";

const experiences = [
  {
    icon: Sparkles,
    org: "Compozent",
    title: "Software Engineer",
    date: "June 2026 – Present",
    bullets: [
      "Engineer and optimize production-ready software features, delivering 10+ enterprise-level software components in an Agile environment and improving feature release speed by 20%.",
      "Execute cross-functional technical specifications to deploy production modules, serving 5,000+ simulated end-user interactions with 99% uptime.",
      "Maintain structural engineering environments by upgrading web interfaces, resulting in a 15% improvement in performance."
    ],
    tags: ["Software Engineering", "Full-Stack Web Dev", "Agile Methods", "Performance Optimization"],
    url: "compozent.com › careers › software-engineer",
  },
  {
    icon: Cloud,
    org: "Compozent",
    title: "DevOps Specialist",
    date: "December 2024 – January 2025",
    bullets: [
      "Provisioned configuration management architectures on AWS EC2, AWS S3, AWS IAM, and AWS VPC to deploy 12 scalable web application instances.",
      "Streamlined deployment velocity by configuring automated CI/CD delivery pipelines using AWS CodePipeline, AWS CodeBuild, and AWS CodeDeploy, reducing build processing intervals by 25%.",
      "Monitored infrastructure health and application logs using AWS CloudWatch to ensure high availability across deployed instances."
    ],
    tags: ["AWS Cloud", "DevOps", "CI/CD Pipelines", "Configuration Management", "System Monitoring"],
    url: "compozent.com › cloud › devops-specialist",
  }
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
                    {exp.bullets ? (
                      <ul style={{ paddingLeft: 20, margin: "6px 0", listStyleType: "disc", color: "var(--text-secondary)", fontSize: "14px" }}>
                        {exp.bullets.map((b, idx) => (
                          <li key={idx} style={{ marginBottom: 4, lineHeight: 1.5 }}>{b}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{exp.desc}</p>
                    )}
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
          <ul style={{ paddingLeft: 20, margin: "6px 0 12px", listStyleType: "disc", color: "var(--text-secondary)", fontSize: "14px" }}>
            <li style={{ marginBottom: 4, lineHeight: 1.5 }}>Directed operational tasks and structural frameworks for 5 departmental technological presentation initiatives.</li>
            <li style={{ marginBottom: 4, lineHeight: 1.5 }}>Moderated communication channels between student researchers and senior faculty to oversee ongoing technical milestones.</li>
          </ul>
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
