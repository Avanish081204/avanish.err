import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import avatarImg from "@/assets/avatar.png";

export default function GoogleProfileCard() {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={cardRef} style={{ position: "relative" }}>
      {/* Avatar Button with Avanish's photo */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label="Avanish Shukla Google Profile"
        title="Google Account — Avanish Shukla"
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid var(--border)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={avatarImg}
            alt="Avanish Shukla"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </motion.button>

      {/* Profile Card Popover matching reference Screenshot 1 & 2 */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: -12 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="profile-card-popover"
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              width: "min(330px, 92vw)",
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: 24,
              boxShadow: "0 10px 32px rgba(0,0,0,0.25)",
              overflow: "hidden",
              zIndex: 1000,
              transformOrigin: "top right",
              fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
            }}
          >
            {/* Header Banner */}
            <div
              style={{
                height: 80,
                background: "linear-gradient(90deg, #3A86EF 0%, #2EC4B6 45%, #FF9F1C 100%)",
                position: "relative",
              }}
            />

            {/* Profile Content */}
            <div style={{ padding: "0 20px 20px" }}>
              {/* Centered layout matching Google Account profile card */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: -40,
                  marginBottom: 16,
                  position: "relative",
                }}
              >
                {/* Avatar Circle with Avanish's photo */}
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "4px solid var(--card-bg)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    background: "#fff",
                    flexShrink: 0,
                    marginBottom: 10,
                  }}
                >
                  <img
                    src={avatarImg}
                    alt="Avanish Shukla"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Name & Email centered below avatar */}
                <div style={{ textAlign: "center" }}>
                  <h3
                    style={{
                      fontSize: 19,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      lineHeight: 1.2,
                      marginBottom: 4,
                      fontFamily: "'Fredoka', 'Outfit', sans-serif",
                    }}
                  >
                    Avanish Shukla
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--text-muted)",
                      wordBreak: "break-all",
                    }}
                  >
                    avanishshukla234@gmail.com
                  </p>
                </div>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: 16 }} />

              {/* Key-Value Metadata List matching Screenshot 2 */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 13.5, marginBottom: 20 }}>
                <div>
                  <strong style={{ color: "var(--text-primary)", fontWeight: 700 }}>Role: </strong>
                  <span style={{ color: "var(--text-secondary)" }}>Software Engineer @ Compozent</span>
                </div>

                <div>
                  <strong style={{ color: "var(--text-primary)", fontWeight: 700 }}>Location: </strong>
                  <span style={{ color: "var(--text-secondary)" }}>Mumbai, India</span>
                </div>

                <div>
                  <strong style={{ color: "var(--text-primary)", fontWeight: 700 }}>Education: </strong>
                  <span style={{ color: "var(--text-secondary)" }}>B.E. ECS · 2023–2027</span>
                </div>

                <div>
                  <strong style={{ color: "var(--text-primary)", fontWeight: 700 }}>Languages: </strong>
                  <span style={{ color: "var(--text-secondary)" }}>English, Hindi, Marathi</span>
                </div>
              </div>

              {/* Action Buttons matching Screenshot 2 */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  <a
                    href="mailto:avanishshukla234@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px 14px",
                      background: "var(--pill-bg)",
                      borderRadius: 12,
                      fontSize: 14,
                      fontWeight: 700,
                      color: "var(--accent-blue)",
                      textDecoration: "none",
                      transition: "background 0.15s",
                    }}
                  >
                    Gmail
                  </a>

                  <a
                    href="https://www.linkedin.com/in/avanish-shukla0812"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px 14px",
                      background: "var(--pill-bg)",
                      borderRadius: 12,
                      fontSize: 14,
                      fontWeight: 700,
                      color: "var(--accent-blue)",
                      textDecoration: "none",
                      transition: "background 0.15s",
                    }}
                  >
                    LinkedIn
                  </a>
                </div>

                <motion.button
                  onClick={() => {
                    setOpen(false);
                    navigate("/contact");
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    background: "var(--accent-blue)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 14,
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(26,115,232,0.3)",
                  }}
                >
                  Hire Me / Contact
                </motion.button>

                <button
                  onClick={() => setOpen(false)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    background: "var(--pill-bg)",
                    border: "none",
                    borderRadius: 12,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
