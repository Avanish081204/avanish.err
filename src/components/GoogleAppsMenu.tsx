import { useState, useRef, useEffect } from "react";
import { Grid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Official Tech Brand SVG Badge components matching the reference site screenshots
const BRAND_ICONS: Record<string, JSX.Element> = {
  Python: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M11.87 2.05c-4.48 0-4.2.19-4.2 2.37v1.73h4.28v.58H6.12c-2.3 0-4.12.87-4.12 4.18 0 3.32 1.63 4.14 3.7 4.14h1.34v-1.92c0-2.35 2.01-4.27 4.36-4.27h4.28V7.07c0-2.28-.27-5.02-3.81-5.02z" fill="#3776AB"/>
      <path d="M12.13 21.95c4.48 0 4.2-.19 4.2-2.37v-1.73h-4.28v-.58h5.83c2.3 0 4.12-.87 4.12-4.18 0-3.32-1.63-4.14-3.7-4.14h-1.34v1.92c0 2.35-2.01 4.27-4.36 4.27H8.32v3.79c0 2.28.27 5.02 3.81 5.02z" fill="#FFD43B"/>
      <circle cx="9.2" cy="4.5" r="0.7" fill="#fff"/>
      <circle cx="14.8" cy="19.5" r="0.7" fill="#fff"/>
    </svg>
  ),
  "C++": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#00599C"/>
      <path d="M8.5 13.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5c.6 0 1.1.4 1.4.9h1.7C11.2 9.7 10 8.5 8.5 8.5 6.6 8.5 5 10.1 5 12s1.6 3.5 3.5 3.5c1.5 0 2.7-1.2 3.1-2.9h-1.7c-.3.5-.8.9-1.4.9zm6.5-2.5h-1v1h1v1h1v-1h1v-1h-1v-1h-1v1zm4 0h-1v1h1v1h1v-1h1v-1h-1v-1h-1v1z" fill="#fff"/>
    </svg>
  ),
  "HTML/CSS": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#00B4D8"/>
      <path d="M5 4h14l-1.3 14.5L12 20l-5.7-1.5L5 4z" fill="#0077B6"/>
      <path d="M12 5.5v13l4.3-1.1L17.3 5.5H12z" fill="#90E0EF"/>
      <path d="M8 8h8l-.3 3.5H9.5l.2 2.5 2.3.6 2.3-.6.2-2H16l-.4 3.5-3.6 1-3.6-1L8 8z" fill="#fff"/>
    </svg>
  ),
  "SQL (MySQL)": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#F8F9FA"/>
      <path d="M12 3c-4.4 0-8 1.8-8 4v10c0 2.2 3.6 4 8 4s8-1.8 8-4V7c0-2.2-3.6-4-8-4zm0 2c3.3 0 6 1.1 6 2s-2.7 2-6 2-6-1.1-6-2 2.7-2 6-2zm0 14c-3.3 0-6-1.1-6-2v-2.3c1.5 1 3.7 1.6 6 1.6s4.5-.6 6-1.6V17c0 .9-2.7 2-6 2zm0-5c-3.3 0-6-1.1-6-2V9.7c1.5 1 3.7 1.6 6 1.6s4.5-.6 6-1.6V12c0 .9-2.7 2-6 2z" fill="#00758F"/>
    </svg>
  ),
  Java: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M8.5 19.5c3.8 0 7-.5 7-2.5 0-1.8-2.5-2.2-4.5-2.2-1.5 0-3 .3-4.5.8 0 0 .5-1.2 2-2.5-3 .2-4.5 1.5-4.5 2.5 0 1.5 2.5 2.2 4.5 2.4-1.8.8-4.5.8-6.5 1.5 0 0 2 .5 6.5 0z" fill="#5382A1"/>
      <path d="M11 2c0 2.5-2 4-2 6 0 1.5 1 2.5 2 3.5-1.5-1-2.5-2-2.5-3.5 0-2.5 2.5-3.5 2.5-6z" fill="#E76F51"/>
      <path d="M14 4.5c0 2-1.5 3.5-1.5 5 0 1.2.8 2 1.5 2.8-1-1-1.8-1.8-1.8-3 0-2 1.8-3 1.8-4.8z" fill="#F4A261"/>
    </svg>
  ),
  JavaScript: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#F7DF1E"/>
      <path d="M13.5 17.5c.6.9 1.4 1.5 2.7 1.5 1.1 0 1.8-.5 1.8-1.3 0-.9-.7-1.2-1.9-1.7l-.6-.3c-1.8-.8-3-1.8-3-3.8 0-2.2 1.8-3.9 4.6-3.9 2 0 3.3.7 4.2 2.2l-2 1.3c-.5-.8-1.1-1.2-2.1-1.2-1 0-1.6.5-1.6 1.1 0 .7.5 1.1 1.6 1.5l.6.3c2.2.9 3.4 1.8 3.4 4 0 2.5-1.9 4.1-5.1 4.1-2.4 0-4-1-4.9-2.7l2.3-1.1zM6.5 17.7c.4.7.9 1.3 1.8 1.3.9 0 1.4-.4 1.4-1.8v-7.9h2.8v8c0 2.9-1.7 4.2-4.1 4.2-1.9 0-3.1-.9-3.7-2.3l1.8-1.5z" fill="#000"/>
    </svg>
  ),
  "React.js": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(0 12 12)"/>
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)"/>
    </svg>
  ),
  "Spring Boot": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#F8F9FA"/>
      <path d="M12 3C7 3 4 7 4 12c0 4.5 3 8 7.5 9 1.5.3 2.5-.5 2.5-1.5V17c-2 0-3.5-1-4-2.5 1 .3 2.5.2 3.5-.2C13 12.5 12 9 17 6c.5 2.5-.5 4.5-1.5 6 1.5-.5 3-2 3.5-4C20 5 16 3 12 3z" fill="#6DB33F"/>
    </svg>
  ),
  MongoDB: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 2s-6 6.5-6 11.5c0 3.3 2.7 6 6 6s6-2.7 6-6C18 8.5 12 2 12 2zm.5 15.4v-11s3.5 3.5 3.5 7.1c0 2.2-1.6 3.9-3.5 3.9z" fill="#47A248"/>
    </svg>
  ),
  "REST APIs": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#E8F0FE"/>
      <path d="M12 4v4m0 8v4M4 12h4m8 0h4" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="4" fill="#1A73E8"/>
    </svg>
  ),
  "AWS Cloud": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#232F3E"/>
      <path d="M6.5 14.5c3 2 8 2.5 11 0m.5-1c-.4.5-1.2.6-1.5.2" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M7 10.5l2.5-4 2.5 4M12 10.5l2.5-4 2.5 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "CI/CD Pipelines": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#E6F4EA"/>
      <path d="M12 5v14M5 12h14" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M8 8l4-4 4 4M16 16l-4 4-4-4" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "Software Deployment": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#FCE8E6"/>
      <path d="M12 3l6 6h-4v7h-4V9H6l6-6z" fill="#EA4335"/>
      <path d="M5 18h14v2H5v-2z" fill="#EA4335"/>
    </svg>
  ),
  "Git & GitHub": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.47 2 2 6.47 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" fill="#202124"/>
    </svg>
  ),
  "VS Code": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#007ACC"/>
      <path d="M17.5 3.5L12.5 8 8 5 4.5 8.5v7L8 19l4.5-3 5 4.5L20 18V6l-2.5-2.5zM7.5 14V10l3 2-3 2zm8 1.5L13 13.5l2.5-2 2.5 2-2.5 2z" fill="#fff"/>
    </svg>
  ),
  Figma: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83"/>
      <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF"/>
      <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#F24E1E"/>
      <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262"/>
      <circle cx="16" cy="12" r="4" fill="#1ABCFE"/>
    </svg>
  ),
  Jupyter: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#F8F9FA"/>
      <path d="M12 4c-4.4 0-8 1.8-8 4v8c0 2.2 3.6 4 8 4s8-1.8 8-4V8c0-2.2-3.6-4-8-4z" fill="none" stroke="#F37626" strokeWidth="2"/>
      <circle cx="12" cy="12" r="3" fill="#F37626"/>
    </svg>
  ),
  "M365 Copilot": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#0078D4"/>
      <path d="M12 5l1.5 3.5L17 10l-3.5 1.5L12 15l-1.5-3.5L7 10l3.5-1.5L12 5z" fill="#fff"/>
      <path d="M17 14l.8 1.7L19.5 16.5l-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8.8-1.7z" fill="#FFD43B"/>
    </svg>
  ),
  "Kaggle / Colab": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#202124"/>
      <path d="M7 6v12M17 6L11 12l6 6" stroke="#20BEFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "Speaking / Comms": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#2D3E50"/>
      <path d="M8 9c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4-4 1.8-4 4z" fill="#F4D03F"/>
      <path d="M16 14.5c.8.5 1.5 1.2 2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Teamwork: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#2D3E50"/>
      <circle cx="12" cy="9" r="2.5" fill="#F4D03F"/>
      <circle cx="8" cy="14" r="2" fill="#E76F51"/>
      <circle cx="16" cy="14" r="2" fill="#2A9D8F"/>
    </svg>
  ),
  "Problem Solving": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#F8F9FA"/>
      <circle cx="12" cy="10" r="4" fill="#202124"/>
      <path d="M10 16h4v2h-4v-2z" fill="#FBBC05"/>
    </svg>
  ),
  "Time Management": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#FFF3E0"/>
      <circle cx="12" cy="12" r="7" stroke="#E65100" strokeWidth="2"/>
      <path d="M12 8v4l3 2" stroke="#E65100" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

const SKILLS_APP_GRID = [
  {
    category: "PROGRAMMING & SCRIPTING",
    items: [
      { name: "Python", key: "Python" },
      { name: "C++", key: "C++" },
      { name: "HTML/CSS", key: "HTML/CSS" },
      { name: "SQL (MySQL)", key: "SQL (MySQL)" },
      { name: "Java", key: "Java" },
      { name: "JavaScript", key: "JavaScript" },
    ],
  },
  {
    category: "FULL-STACK & BACKEND",
    items: [
      { name: "React.js", key: "React.js" },
      { name: "Spring Boot", key: "Spring Boot" },
      { name: "MongoDB", key: "MongoDB" },
      { name: "REST APIs", key: "REST APIs" },
    ],
  },
  {
    category: "CLOUD & DEVOPS",
    items: [
      { name: "AWS Cloud", key: "AWS Cloud" },
      { name: "CI/CD Pipelines", key: "CI/CD Pipelines" },
      { name: "Deployment", key: "Software Deployment" },
      { name: "GitHub", key: "Git & GitHub" },
    ],
  },
  {
    category: "TOOLS & IDEs",
    items: [
      { name: "VS Code", key: "VS Code" },
      { name: "Figma", key: "Figma" },
      { name: "Jupyter", key: "Jupyter" },
      { name: "Copilot", key: "M365 Copilot" },
      { name: "Colab/Kaggle", key: "Kaggle / Colab" },
    ],
  },
  {
    category: "SOFT SKILLS",
    items: [
      { name: "Speaking", key: "Speaking / Comms" },
      { name: "Teamwork", key: "Teamwork" },
      { name: "Thinking", key: "Problem Solving" },
      { name: "Time Management", key: "Time Management" },
    ],
  },
];

export default function GoogleAppsMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} style={{ position: "relative" }}>
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Google Apps Menu"
        title="Google Apps / Skills Grid"
        style={{
          width: 38,
          height: 38,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--text-secondary)",
          background: open ? "var(--btn-bg-hover)" : "none",
          border: "none",
          cursor: "pointer",
          transition: "background 0.15s",
        }}
      >
        <Grid size={20} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: -10 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="apps-menu-popover"
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              width: "min(330px, 92vw)",
              maxHeight: 480,
              overflowY: "auto",
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: 20,
              boxShadow: "0 10px 32px rgba(0,0,0,0.28)",
              padding: "20px 16px",
              zIndex: 1000,
              transformOrigin: "top right",
            }}
          >
            {SKILLS_APP_GRID.map((cat, idx) => (
              <div key={cat.category} style={{ marginBottom: idx < SKILLS_APP_GRID.length - 1 ? 20 : 0 }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.6px",
                    color: "var(--text-muted)",
                    marginBottom: 12,
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {cat.category}
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 10,
                  }}
                >
                  {cat.items.map((item) => {
                    const iconSvg = BRAND_ICONS[item.key] || BRAND_ICONS["Python"];
                    return (
                      <motion.div
                        key={item.name}
                        whileHover={{ scale: 1.06, background: "var(--btn-bg-hover)" }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "12px 6px",
                          borderRadius: 14,
                          cursor: "pointer",
                          textAlign: "center",
                          transition: "background 0.15s",
                        }}
                      >
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 12,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: 8,
                          }}
                        >
                          {iconSvg}
                        </div>
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: 500,
                            color: "var(--text-primary)",
                            lineHeight: 1.2,
                            fontFamily: "'Outfit', sans-serif",
                          }}
                        >
                          {item.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
