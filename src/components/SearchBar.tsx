import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Clock, Mic, Video } from "lucide-react";

const SUGGESTIONS = [
  { label: "avanish shukla resume",        path: "/resume" },
  { label: "avanish shukla education",     path: "/education" },
  { label: "avanish shukla experience",    path: "/experience" },
  { label: "avanish shukla skills",        path: "/skills" },
  { label: "avanish shukla certifications",path: "/certifications" },
  { label: "avanish shukla projects",      path: "/projects" },
  { label: "avanish shukla contact",       path: "/contact" },
  { label: "avanish shukla software engineer", path: "/experience" },
  { label: "avanish shukla compozent",     path: "/experience" },
];

interface SearchBarProps {
  initialValue?: string;
  compact?: boolean;
}

export default function SearchBar({ initialValue = "", compact = false }: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query.trim().length > 0
    ? SUGGESTIONS.filter((s) => s.label.includes(query.toLowerCase().trim()))
    : SUGGESTIONS;

  const navigateTo = (path: string, label: string) => {
    setQuery(label);
    setOpen(false);
    navigate(path);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter") {
      if (activeIdx >= 0 && filtered[activeIdx]) {
        navigateTo(filtered[activeIdx].path, filtered[activeIdx].label);
      } else {
        const match = SUGGESTIONS.find((s) => s.label.includes(query.toLowerCase().trim()));
        if (match) navigate(match.path);
        setOpen(false);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="search-wrapper"
      style={{ maxWidth: compact ? 600 : 584 }}
    >
      <div
        className="search-input-box"
        style={{ height: compact ? 40 : 46 }}
      >
        <Search size={18} style={{ flexShrink: 0, color: "var(--text-muted)" }} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          placeholder="Search About Avanish Shukla..."
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActiveIdx(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          aria-label="Search about Avanish"
          aria-autocomplete="list"
          autoComplete="off"
          spellCheck={false}
        />
        <div className="search-extra-icons" style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <Mic size={18} style={{ cursor: "pointer", color: "var(--text-secondary)" }} title="Search by voice" />
          <Video size={18} style={{ cursor: "pointer", color: "var(--text-secondary)" }} title="Search by camera" />
        </div>
      </div>

      {open && filtered.length > 0 && (
        <div className="autocomplete-dropdown">
          {filtered.map((item, idx) => (
            <div
              key={item.path + idx}
              className={`autocomplete-item ${idx === activeIdx ? "active" : ""}`}
              onMouseDown={() => navigateTo(item.path, item.label)}
              onMouseEnter={() => setActiveIdx(idx)}
            >
              <Clock size={14} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
