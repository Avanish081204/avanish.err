import { useState } from "react";
import GoogleHeader from "@/components/GoogleHeader";
import ChatBot from "@/components/ChatBot";
import { Mail, Github, Linkedin, Download, Send, MapPin, User, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppIcon = ({ size = 16, color = "#25D366" }: { size?: number; color?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    style={{ color }}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:avanishshukla234@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <GoogleHeader />
      <main className="sub-page-content">
        <p className="results-stats">About 5 contact options found (0.09 seconds)</p>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,320px)", gap: 32, flexWrap: "wrap" }} className="contact-grid">
          {/* Left: Contact form */}
          <div>
            <div className="result-card" style={{ maxWidth: "100%", padding: 28, borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
              <div className="result-url" style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8, fontSize: 13, color: "var(--text-muted)" }}>
                <Mail size={14} style={{ color: "var(--accent-blue)" }} />
                <span>avanish.dev › contact › message</span>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>Send Avanish a Message</h3>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 24, lineHeight: 1.5 }}>
                Open to software engineering roles, internships, collaborations, and projects. Drop a message and he'll respond promptly!
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", display: "block", marginBottom: 6 }}>Your Name</label>
                  <div style={{ position: "relative" }}>
                    <User size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
                    <input
                      className="contact-form-input"
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      style={{
                        width: "100%",
                        height: 46,
                        padding: "0 16px 0 42px",
                        borderRadius: 8,
                        border: "1px solid var(--border)",
                        backgroundColor: "var(--input-bg)",
                        color: "var(--text-primary)",
                        fontSize: 14,
                        transition: "all 0.2s ease-in-out",
                        outline: "none",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent-blue)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(26,115,232,0.15)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", display: "block", marginBottom: 6 }}>Your Email</label>
                  <div style={{ position: "relative" }}>
                    <Mail size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
                    <input
                      className="contact-form-input"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      style={{
                        width: "100%",
                        height: 46,
                        padding: "0 16px 0 42px",
                        borderRadius: 8,
                        border: "1px solid var(--border)",
                        backgroundColor: "var(--input-bg)",
                        color: "var(--text-primary)",
                        fontSize: 14,
                        transition: "all 0.2s ease-in-out",
                        outline: "none",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent-blue)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(26,115,232,0.15)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", display: "block", marginBottom: 6 }}>Message</label>
                  <div style={{ position: "relative" }}>
                    <MessageSquare size={16} style={{ position: "absolute", left: 14, top: 14, color: "var(--text-muted)" }} />
                    <textarea
                      className="contact-form-input"
                      rows={5}
                      placeholder="Hi Avanish, I'd like to connect regarding..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      style={{
                        width: "100%",
                        padding: "12px 16px 12px 42px",
                        borderRadius: 8,
                        border: "1px solid var(--border)",
                        backgroundColor: "var(--input-bg)",
                        color: "var(--text-primary)",
                        fontSize: 14,
                        transition: "all 0.2s ease-in-out",
                        outline: "none",
                        resize: "vertical",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent-blue)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(26,115,232,0.15)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, translateY: -1 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "12px 24px",
                    background: sent ? "var(--google-green)" : "var(--accent-blue)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: sent ? "0 4px 12px rgba(52,168,83,0.25)" : "0 4px 12px rgba(26,115,232,0.25)",
                    transition: "background 0.2s, box-shadow 0.2s",
                    alignSelf: "flex-start",
                    marginTop: 10,
                  }}
                >
                  <Send size={15} />
                  {sent ? "Opened in email client!" : "Send Message"}
                </motion.button>
              </form>
            </div>
          </div>

          {/* Right: Contact info Panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="knowledge-panel" style={{ display: "flex", flexDirection: "column", gap: 20, padding: 24, borderRadius: 16 }}>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>Contact Info</h3>
                <p style={{ fontSize: 13, color: "var(--text-muted)" }}>Get in touch with Avanish instantly</p>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: 0 }} />

              {/* Location */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(234, 67, 53, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={18} style={{ color: "var(--google-red)" }} />
                </div>
                <div>
                  <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 2 }}>Location</p>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>Mumbai Metropolitan Region, India</p>
                </div>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: 0 }} />

              {/* Socials & Links */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: Mail,         label: "Email",    href: "mailto:avanishshukla234@gmail.com", color: "#ea4335" },
                  { icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/919503658089",        color: "#25D366" },
                  { icon: Github,       label: "GitHub",   href: "https://github.com/Avanish081204",  color: "var(--text-primary)" },
                  { icon: Linkedin,     label: "LinkedIn", href: "https://www.linkedin.com/in/avanish-shukla0812", color: "#0077b5" },
                  { icon: Download,     label: "Resume",   href: "/Avanish Shukla.pdf",               color: "#1a73e8" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") || item.href.endsWith(".pdf") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        padding: "10px 14px",
                        borderRadius: "10px",
                        background: "var(--pill-bg)",
                        textDecoration: "none",
                        border: "1px solid var(--border)",
                        transition: "all 0.2s ease-in-out",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = item.color.startsWith("var") ? "var(--text-primary)" : item.color;
                        e.currentTarget.style.boxShadow = `0 4px 10px ${item.color.startsWith("var") ? "rgba(128,128,128,0.1)" : item.color + "1a"}`;
                        e.currentTarget.style.background = "var(--bg)";
                        e.currentTarget.style.transform = "translateX(2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.background = "var(--pill-bg)";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      <div style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "var(--bg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                        flexShrink: 0
                      }}>
                        <Icon size={15} style={{ color: item.color.startsWith("var") ? "var(--text-primary)" : item.color }} />
                      </div>
                      <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @media (max-width: 700px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <ChatBot />
    </>
  );
}
