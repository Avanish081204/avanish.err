import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";
import ThemeToggle from "@/components/ThemeToggle";
import GoogleAppsMenu from "@/components/GoogleAppsMenu";
import GoogleProfileCard from "@/components/GoogleProfileCard";
import ChatBot from "@/components/ChatBot";

const NAV_ITEMS = [
  { label: "Resume",         path: "/resume" },
  { label: "Education",      path: "/education" },
  { label: "Experience",     path: "/experience" },
  { label: "Skills",         path: "/skills" },
  { label: "Certifications", path: "/certifications" },
  { label: "Projects",       path: "/projects" },
  { label: "Contact",        path: "/contact" },
];

const LUCKY_PAGES = ["/resume", "/education", "/experience", "/skills", "/certifications", "/projects", "/contact"];

const LOGO_LETTERS = [
  { char: "A", color: "#4285f4" },
  { char: "v", color: "#ea4335" },
  { char: "a", color: "#fbbc05" },
  { char: "n", color: "#34a853" },
  { char: "i", color: "#4285f4" },
  { char: "s", color: "#ea4335" },
  { char: "h", color: "#fbbc05" },
];

export default function Home() {
  const navigate = useNavigate();

  const handleLucky = () => {
    const random = LUCKY_PAGES[Math.floor(Math.random() * LUCKY_PAGES.length)];
    navigate(random);
  };

  return (
    <div className="home-page">
      {/* Top-right header */}
      <motion.header
        className="home-header"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ display: "flex", alignItems: "center", gap: 14 }}
      >
        <a
          className="header-link"
          href="mailto:avanishshukla234@gmail.com"
          style={{ fontSize: 13, color: "var(--text-secondary)" }}
        >
          Gmail
        </a>
        <a
          className="header-link"
          href="https://www.linkedin.com/in/avanish-shukla0812"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 13, color: "var(--text-secondary)" }}
        >
          LinkedIn
        </a>
        <a
          className="header-link"
          href="https://github.com/Avanish081204"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 13, color: "var(--text-secondary)" }}
        >
          GitHub
        </a>
        <a
          className="header-link"
          onClick={() => navigate("/contact")}
          style={{ fontSize: 13, color: "var(--text-secondary)", cursor: "pointer" }}
        >
          Contact
        </a>
        <ThemeToggle />
        <GoogleAppsMenu />
        <GoogleProfileCard />
      </motion.header>

      {/* Main body */}
      <main className="home-body">
        {/* Animated Google-colored name logo */}
        <motion.h1
          className="home-logo"
          aria-label="Avanish"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.06 },
            },
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            whiteSpace: "nowrap",
            fontFamily: "'Outfit', 'Fredoka', sans-serif",
            fontSize: "clamp(72px, 13vw, 104px)",
            fontWeight: 700,
            letterSpacing: "-1.5px",
            lineHeight: 1,
          }}
        >
          {LOGO_LETTERS.map((item, idx) => (
            <motion.span
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 300, damping: 18 },
                },
              }}
              whileHover={{
                y: -10,
                scale: 1.12,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              style={{ color: item.color, display: "inline-block", cursor: "pointer" }}
            >
              {item.char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="home-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: "var(--text-secondary)",
            marginTop: -8,
            textAlign: "center",
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          Software Engineer @ Compozent · Full-Stack Developer & Cloud Specialist
        </motion.p>

        {/* Search */}
        <motion.div
          style={{ width: "100%" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <SearchBar />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="home-buttons"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <motion.button
            className="google-btn"
            onClick={() => navigate("/resume")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Search Avanish
          </motion.button>
          <motion.button
            className="google-btn"
            onClick={handleLucky}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            I'm Feeling Lucky
          </motion.button>
        </motion.div>

        {/* Footer nav pills */}
        <motion.div
          className="home-footer-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, maxWidth: 540 }}
        >
          {NAV_ITEMS.map((item, idx) => (
            <motion.button
              key={item.path}
              className="nav-pill"
              onClick={() => navigate(item.path)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.04 }}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid var(--border)",
        padding: "14px 24px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 8,
        fontSize: 13,
        color: "var(--text-muted)",
        fontFamily: "'Outfit', sans-serif",
      }}>
        <span>Mumbai Metropolitan Region, Maharashtra, India</span>
        <div style={{ display: "flex", gap: 20 }}>
          <a href="/Avanish_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)" }}>Resume PDF</a>
          <span
            onClick={() => navigate("/contact")}
            style={{ cursor: "pointer", color: "var(--text-muted)" }}
          >Contact</span>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
}
