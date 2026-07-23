import GoogleHeader from "@/components/GoogleHeader";
import ChatBot from "@/components/ChatBot";
import { GraduationCap, BookOpen, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <>
      <GoogleHeader />
      <main className="sub-page-content">
        <p className="results-stats">About 847,000 results (0.52 seconds)</p>

        {/* Knowledge Panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="knowledge-panel"
          style={{ marginBottom: 28 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--badge-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <GraduationCap size={22} style={{ color: "var(--accent-blue)" }} />
            </div>
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)", fontFamily: "'Fredoka', 'Outfit', sans-serif" }}>
                Academic Background
              </h2>
              <p style={{ fontSize: 13, color: "var(--text-muted)" }}>avanish.dev › education</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { label: "Degree", value: "Bachelor of Engineering (B.E.)" },
              { label: "Branch", value: "Electronic & Computer Science" },
              { label: "Institution", value: "Shree L. R. Tiwari College of Engineering" },
              { label: "Affiliation", value: "University of Mumbai" },
              { label: "Timeline", value: "August 2023 – May 2027" },
              { label: "Location", value: "Mumbai Metropolitan Region" },
            ].map((item) => (
              <div key={item.label}>
                <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 2 }}>{item.label}</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Result cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.35 }}
          className="result-card"
        >
          <div className="result-url"><BookOpen size={14} /><span>slrtce.in › ecs › academics › avanish-shukla</span></div>
          <h3>Bachelor of Engineering — Electronic & Computer Science</h3>
          <p>Pursuing a Bachelor of Engineering in Electronic and Computer Science at Shree L. R. Tiwari College of Engineering, affiliated with the University of Mumbai (Anticipated graduation in May 2027). Academic focus encompasses software engineering, internet software, web technologies, database management, computer networks, and openFrameworks.</p>
        </motion.div>

        <hr className="result-divider" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.35 }}
          className="result-card"
        >
          <div className="result-url"><Award size={14} /><span>slrtce.in › rnd-cell › leadership</span></div>
          <h3>R&D Cell — Admin Co-Head (2025–26)</h3>
          <p>Serving as the Admin Co-Head of the college's Research & Development Cell, coordinating student-led technical initiatives, research paper presentations, hackathons, and innovation challenges. Actively building a culture of collaborative problem-solving across engineering departments.</p>
        </motion.div>

        <hr className="result-divider" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.35 }}
          className="result-card"
        >
          <div className="result-url"><Users size={14} /><span>avanish.dev › education › programs</span></div>
          <h3>Specialized Academic Programs & Certifications</h3>
          <p>Completed a mentored Web Development Specialist course at SLRTCE (July 2024), covering front-end and back-end full-stack practices. Undertook a Deep Learning & Knowledge Engineering research program (Dec 2024–Jan 2025) for Information Retrieval tasks alongside practical Cloud/DevOps training at Compozent.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
            {["Web Development","Deep Learning","Knowledge Engineering","AWS Cloud","CI/CD Pipelines","OpenFrameworks"].map((c) => (
              <span className="tech-badge" key={c}>{c}</span>
            ))}
          </div>
        </motion.div>
      </main>
      <ChatBot />
    </>
  );
}
