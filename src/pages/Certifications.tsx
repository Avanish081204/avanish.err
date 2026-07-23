import GoogleHeader from "@/components/GoogleHeader";
import ChatBot from "@/components/ChatBot";
import { Award, CheckCircle2, FileText, Sparkles, Database, Brain, Presentation } from "lucide-react";

const certifications = [
  {
    title: "IEEE TECHNICOKNOCKDOWN-2025 (TKD-26)",
    issuer: "IEEE",
    category: "Paper Presentation & Research",
    date: "2025",
    desc: "Presented technical research paper at the prestigious IEEE TECHNICOKNOCKDOWN 2025 conference. Demonstrated innovative concepts and technical communication skills.",
    icon: Presentation,
    url: "ieee.org › conferences › tkd-2025",
    tags: ["IEEE", "Paper Presentation", "Research", "Technical Writing"],
  },
  {
    title: "MongoDB Overview: Core Concepts and Architecture",
    issuer: "MongoDB University",
    category: "Database & Backend",
    date: "2025",
    desc: "Comprehensive understanding of MongoDB NoSQL architecture, document data modelling, indexing strategies, aggregation frameworks, and CRUD database operations.",
    icon: Database,
    url: "mongodb.com › academy › cert › core-concepts",
    tags: ["MongoDB", "NoSQL", "Database Design", "Backend"],
  },
  {
    title: "Learning Microsoft 365 Copilot for Work",
    issuer: "Microsoft / LinkedIn Learning",
    category: "AI & Productivity",
    date: "2025",
    desc: "Mastered practical workflows using Microsoft 365 Copilot to automate workspace tasks, generate intelligent insights, and streamline enterprise software engineering productivity.",
    icon: Sparkles,
    url: "linkedin.com › learning › m365-copilot-work",
    tags: ["Microsoft 365 Copilot", "Generative AI", "Productivity"],
  },
  {
    title: "Everyday AI Concepts",
    issuer: "AI Foundations",
    category: "Artificial Intelligence",
    date: "2025",
    desc: "Fundamental concepts of modern Artificial Intelligence, Machine Learning models, natural language processing applications, and ethical AI implementation.",
    icon: Brain,
    url: "coursera.org › learn › everyday-ai-concepts",
    tags: ["AI", "Machine Learning", "NLP", "Prompt Engineering"],
  },
  {
    title: "QuizOff 2026 by CampusCrew",
    issuer: "CampusCrew",
    category: "Competition & Assessment",
    date: "2026",
    desc: "Certificate of Participation in the Main Quiz (15 Questions) at QuizOff 2026, showcasing strong analytical thinking, problem-solving, and general computer science aptitude.",
    icon: Award,
    url: "campuscrew.in › quizoff2026 › certificate",
    tags: ["Competition", "Problem Solving", "QuizOff 2026"],
  },
];

export default function Certifications() {
  return (
    <>
      <GoogleHeader />
      <main className="sub-page-content">
        <p className="results-stats">About 5 verified certifications (0.17 seconds)</p>

        {/* Featured Card */}
        <div className="knowledge-panel" style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 8, background: "var(--badge-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Award size={22} style={{ color: "var(--accent-blue)" }} />
            </div>
            <div>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)" }}>Certifications & Honors</h2>
              <p style={{ fontSize: 13, color: "var(--text-muted)" }}>avanish.dev › certifications</p>
            </div>
          </div>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>
            Professional credentials in AI, Database Architecture, Software Engineering Productivity, 
            and IEEE Research Paper Presentations.
          </p>
        </div>

        {/* List of certifications */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div key={cert.title}>
                <div className="result-card">
                  <div className="result-url">
                    <FileText size={14} />
                    <span>{cert.url}</span>
                  </div>
                  <h3>
                    <Icon size={18} style={{ display: "inline", marginRight: 8, verticalAlign: "-3px", color: "var(--accent-blue)" }} />
                    {cert.title} — {cert.issuer}
                  </h3>
                  <p style={{ fontSize: 12, color: "var(--accent-blue)", fontWeight: 500, marginBottom: 6 }}>
                    {cert.category} • {cert.date}
                  </p>
                  <p style={{ marginBottom: 10 }}>{cert.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {cert.tags.map((t) => (
                      <span className="tech-badge" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                {i < certifications.length - 1 && <hr className="result-divider" />}
              </div>
            );
          })}
        </div>
      </main>
      <ChatBot />
    </>
  );
}
