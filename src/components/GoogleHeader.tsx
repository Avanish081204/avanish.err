import { useLocation, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import GoogleAppsMenu from "./GoogleAppsMenu";
import GoogleProfileCard from "./GoogleProfileCard";

const NAV_ITEMS = [
  { label: "Resume",          path: "/resume" },
  { label: "Education",       path: "/education" },
  { label: "Experience",      path: "/experience" },
  { label: "Skills",          path: "/skills" },
  { label: "Certifications",  path: "/certifications" },
  { label: "Projects",        path: "/projects" },
  { label: "Contact",         path: "/contact" },
];

export default function GoogleHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="site-header" style={{ background: "var(--bg)", borderBottom: "none", padding: "16px 20px 0" }}>
      {/* Floating rounded top container matching reference screenshot */}
      <div className="header-top-box">
        {/* Mini Logo */}
        <button
          onClick={() => navigate("/")}
          className="header-logo"
          style={{
            fontFamily: "'Fredoka', 'Outfit', sans-serif",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "-0.5px",
            lineHeight: 1,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0 4px",
            flexShrink: 0,
          }}
          aria-label="Home"
        >
          <span style={{ color: "var(--google-blue)" }}>A</span>
          <span className="logo-letter-rest" style={{ color: "var(--google-red)" }}>v</span>
          <span className="logo-letter-rest" style={{ color: "var(--google-yellow)" }}>a</span>
          <span className="logo-letter-rest" style={{ color: "var(--google-green)" }}>n</span>
          <span className="logo-letter-rest" style={{ color: "var(--google-blue)" }}>i</span>
          <span className="logo-letter-rest" style={{ color: "var(--google-red)" }}>s</span>
          <span className="logo-letter-rest" style={{ color: "var(--google-yellow)" }}>h</span>
        </button>

        {/* Compact Search bar */}
        <div className="header-search-container" style={{ flex: 1 }}>
          <SearchBar
            initialValue={
              NAV_ITEMS.find((n) => location.pathname === n.path)
                ? `avanish shukla ${NAV_ITEMS.find((n) => location.pathname === n.path)?.label.toLowerCase()} download`
                : "avanish shukla"
            }
            compact
          />
        </div>

        {/* Right links */}
        <div className="header-links" style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a
            className="header-link"
            href="mailto:avanishshukla234@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gmail
          </a>
          <a
            className="header-link"
            href="https://www.linkedin.com/in/avanish-shukla0812"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="header-link"
            href="https://github.com/Avanish081204"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="header-link"
            onClick={() => navigate("/contact")}
            style={{ cursor: "pointer" }}
          >
            Contact
          </a>
          <ThemeToggle />
          <GoogleAppsMenu />
          <GoogleProfileCard />
        </div>
      </div>

      {/* Nav pills */}
      <div style={{ paddingLeft: 4, marginBottom: 12 }}>
        <nav className="nav-pills" aria-label="Sections">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.path}
              className={`nav-pill ${location.pathname === item.path ? "active" : ""}`}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
