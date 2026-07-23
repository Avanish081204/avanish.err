import GoogleHeader from "@/components/GoogleHeader";
import ChatBot from "@/components/ChatBot";
import { Download, FileText } from "lucide-react";

export default function ResumeRedirect() {
  return (
    <>
      <GoogleHeader />
      <main className="sub-page-content">
        <p className="results-stats">Resume found (0.05 seconds)</p>
        <div className="result-card">
          <div className="result-url"><FileText size={14} /><span>avanish.dev › resume › pdf</span></div>
          <h3>Avanish Shukla — Full-Stack Developer Resume</h3>
          <p>Download or view Avanish Shukla's resume PDF. Covers education at SLRTCE Mumbai, cloud & devops internship at Compozents, full-stack projects, and technical skills.</p>
          <a
            href="/Avanish Shukla.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 14,
              padding: "8px 16px",
              background: "var(--accent-blue)",
              color: "#fff",
              borderRadius: 4,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            <Download size={14} /> Download Resume PDF
          </a>
        </div>
      </main>
      <ChatBot />
    </>
  );
}
