import GoogleHeader from "@/components/GoogleHeader";
import ChatBot from "@/components/ChatBot";
import { FileText, Download, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <>
      <GoogleHeader />
      <main className="sub-page-content">
        <p className="results-stats">About 1,240,000,000 results (0.38 seconds)</p>

        {/* Dedicated Resume Hero Card matching reference screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: 24,
            padding: "54px 28px",
            textAlign: "center",
            boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
            marginBottom: 32,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 style={{ fontSize: 28, fontWeight: 700, color: "var(--text-primary)", marginBottom: 10 }}>
            Resume — Avanish Shukla
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", marginBottom: 28 }}>
            B.E. Electronic & Computer Science · Software Engineer @ Compozent · Full-Stack Developer
          </p>

          <a
            href="/Avanish_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "12px 36px",
              background: "var(--accent-blue)",
              color: "#ffffff",
              borderRadius: 24,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(26, 115, 232, 0.35)",
              transition: "transform 0.15s, boxShadow 0.15s",
            }}
          >
            View Resume
          </a>
        </motion.div>

        {/* Featured Snippet */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.35 }}
          className="knowledge-panel"
          style={{ marginBottom: 28 }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 6 }}>avanish.dev / resume</p>
              <h2 style={{ fontSize: 20, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>
                Avanish Shukla — Professional Summary
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14, color: "var(--text-secondary)" }}>
                <div><strong style={{ color: "var(--text-primary)" }}>Current Role:</strong> Software Engineer @ Compozent (June 2026 – Present)</div>
                <div><strong style={{ color: "var(--text-primary)" }}>Education:</strong> B.E. Electronic & Computer Science (2023–2027) | SLRTCE (University of Mumbai)</div>
                <div><strong style={{ color: "var(--text-primary)" }}>Location:</strong> Mumbai Metropolitan Region, India</div>
                <div><strong style={{ color: "var(--text-primary)" }}>Summary:</strong> Software Engineer at Compozent & B.E. student. Former Frontend Developer Intern at Cognifyz Technologies & DevOps Specialist at Compozent. IEEE research paper presenter & certified in MongoDB & AI.</div>
                <div><strong style={{ color: "var(--text-primary)" }}>Email:</strong> avanishshukla234@gmail.com</div>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "var(--accent-blue)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 28,
                  fontWeight: 700,
                  margin: "0 auto 8px",
                }}
              >
                A
              </div>
              <p style={{ fontSize: 12, color: "var(--text-muted)" }}>Avanish Shukla</p>
              <p style={{ fontSize: 11, color: "var(--accent-blue)", marginTop: 4, fontWeight: 500 }}>Software Engineer</p>
            </div>
          </div>
        </motion.div>

        {/* Search results */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.35 }}
          className="result-card"
        >
          <div className="result-url"><Sparkles size={14} /><span>avanish.dev › resume › experience</span></div>
          <h3>Professional Experience — Compozent & Cognifyz Technologies</h3>
          <p>• <strong>Software Engineer @ Compozent</strong> (June 2026 – Present): Selected as SDE Intern contributing to real-world software solutions and modern engineering practices.<br />
          • <strong>Frontend Developer @ Cognifyz Technologies</strong> (March 2026 – April 2026): Developed responsive web interfaces using HTML, CSS, JS and modern UI components.<br />
          • <strong>DevOps Specialist @ Compozent</strong> (Dec 2024 – Jan 2025): AWS infrastructure, cloud systems, and CI/CD pipelines.<br />
          • <strong>Deep Learning Specialist @ SLRTCE</strong> (Dec 2024 – Jan 2025): Information Retrieval and Knowledge Engineering with Python.</p>
        </motion.div>

        <hr className="result-divider" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.35 }}
          className="result-card"
        >
          <div className="result-url"><FileText size={14} /><span>avanish.dev › resume › skills</span></div>
          <h3>Top Skills & Technologies</h3>
          <p>Proficient in Software Deployment, Rental Management, Integrated Development Environments (IDEs), Python, React.js, JavaScript, HTML/CSS, SQL, MongoDB, AWS Cloud, Git, and Spring Boot.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
            {["Software Engineering","Software Deployment","Rental Management","MongoDB","React.js","JavaScript","Python","AWS Cloud","Git","Spring Boot"].map((s) => (
              <span className="tech-badge" key={s}>{s}</span>
            ))}
          </div>
        </motion.div>

        <hr className="result-divider" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.35 }}
          className="result-card"
        >
          <div className="result-url"><Award size={14} /><span>avanish.dev › resume › certifications</span></div>
          <h3>Certifications & Achievements</h3>
          <p>• <strong>IEEE TECHNICOKNOCKDOWN-2025 (TKD-26)</strong> — Paper Presentation<br />
          • <strong>MongoDB Overview:</strong> Core Concepts and Architecture<br />
          • <strong>Learning Microsoft 365 Copilot for Work</strong> — Microsoft & LinkedIn<br />
          • <strong>Everyday AI Concepts</strong> — AI Foundations<br />
          • <strong>QuizOff 2026 by CampusCrew</strong> — Main Quiz Certificate</p>
        </motion.div>
      </main>
      <ChatBot />
    </>
  );
}
