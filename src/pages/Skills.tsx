import { useEffect, useRef, useState } from "react";
import GoogleHeader from "@/components/GoogleHeader";
import ChatBot from "@/components/ChatBot";
import { Lightbulb, Layers, Wrench, Database } from "lucide-react";

const TECH_SKILLS = [
  { name: "HTML & CSS",                pct: 94 },
  { name: "JavaScript (ES6+)",         pct: 90 },
  { name: "React.js",                  pct: 86 },
  { name: "Python",                    pct: 85 },
  { name: "Software Deployment",       pct: 88 },
  { name: "Rental Management Systems", pct: 85 },
  { name: "MongoDB & NoSQL",           pct: 80 },
  { name: "SQL & Relational DBs",      pct: 78 },
  { name: "Java & Spring Boot",        pct: 75 },
  { name: "C & C++",                   pct: 80 },
];

const TOOLS_SKILLS = [
  { name: "Git & GitHub",               pct: 88 },
  { name: "VS Code & IDEs",             pct: 92 },
  { name: "AWS Cloud & DevOps",         pct: 78 },
  { name: "Figma & UI Prototyping",     pct: 75 },
  { name: "Microsoft 365 Copilot & AI", pct: 82 },
];

function SkillBar({ name, pct }: { name: string; pct: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(pct), 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [pct]);

  return (
    <div className="skill-bar-container" ref={ref}>
      <div className="skill-bar-header">
        <span>{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <>
      <GoogleHeader />
      <main className="sub-page-content">
        <p className="results-stats">About 2,840,000 results (0.28 seconds)</p>

        {/* Featured snippet */}
        <div className="knowledge-panel" style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <Lightbulb size={18} style={{ color: "var(--google-yellow)" }} />
            <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }}>Technical & Professional Competencies</h2>
          </div>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>
            Specialized in Software Engineering, Software Deployment, Rental Management Systems, Full-Stack Web Development, 
            MongoDB, AWS Cloud, and Deep Learning Information Retrieval. Experienced with modern front-end frameworks, 
            CI/CD pipelines, and AI productivity tools.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="result-card" style={{ maxWidth: 652 }}>
          <div className="result-url"><Lightbulb size={14} /><span>avanish.dev › skills › technical</span></div>
          <h3>Technical Skills — Languages, DBs & Frameworks</h3>
          <p style={{ marginBottom: 20 }}>Core software development languages, database architecture, and web development technologies.</p>
          {TECH_SKILLS.map((s) => <SkillBar key={s.name} {...s} />)}
        </div>

        <hr className="result-divider" />

        {/* Tools */}
        <div className="result-card" style={{ maxWidth: 652 }}>
          <div className="result-url"><Wrench size={14} /><span>avanish.dev › skills › tools</span></div>
          <h3>IDEs, Tools & Cloud Platforms</h3>
          <p style={{ marginBottom: 20 }}>Integrated Development Environments, cloud platforms, version control, and AI copilot productivity tools.</p>
          {TOOLS_SKILLS.map((s) => <SkillBar key={s.name} {...s} />)}
        </div>

        <hr className="result-divider" />

        {/* Domain expertise */}
        <div className="result-card">
          <div className="result-url"><Layers size={14} /><span>avanish.dev › skills › domain-expertise</span></div>
          <h3>Domain Expertise & Certifications</h3>
          <p style={{ marginBottom: 12 }}>Specialized skills acquired through industry experience, academic research, and official certifications.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              "Software Engineering",
              "Software Deployment",
              "Rental Management",
              "MongoDB Architecture",
              "IEEE Paper Presentation",
              "CI/CD Pipelines",
              "Information Retrieval",
              "DevOps Practices",
              "UI Usability",
              "Microsoft 365 Copilot",
              "Agile Collaboration",
              "REST API Design"
            ].map((s) => (
              <span className="tech-badge" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </main>
      <ChatBot />
    </>
  );
}
