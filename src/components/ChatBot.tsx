import { useState, useRef, useEffect } from "react";
import { Bot, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const QUESTIONS = [
  { q: "Who is Avanish?",               a: "Avanish Shukla is a Software Engineer @ Compozent and a B.E. (ECS) student at SLRTCE Mumbai (2023–2027) with a CGPA of 7.0/10. He specializes in MERN stack web development, cloud deployment, and AWS infrastructure." },
  { q: "What is his work experience?",  a: "Avanish is currently a Software Engineer at Compozent (June 2026–Present). Previously, he worked as a DevOps Specialist at Compozent (Dec 2024–Jan 2025), handling AWS architectures and CI/CD pipelines." },
  { q: "What certifications does he hold?", a: "IEEE TECHNICOKNOCKDOWN 2025 (Paper Presentation), MongoDB Overview (Core Concepts & Architecture), Learning Microsoft 365 Copilot for Work, Everyday AI Concepts, and QuizOff 2026." },
  { q: "What are his top skills?",      a: "Languages (Python, JavaScript, HTML/CSS), Web Development (React.js, Node.js, Express.js, MongoDB, JWT), Cloud & DevOps (AWS EC2, S3, IAM, CloudWatch, CodeBuild/Deploy, Lambda), Data & AI, and Git." },
  { q: "How can I hire or contact him?",a: "Avanish is open to software engineering opportunities! Email him at avanishshukla234@gmail.com, message on WhatsApp (+91 9503658089), or connect on LinkedIn (avanish-shukla0812)." },
];

function typewriter(text: string, setter: (v: string) => void, speed = 18) {
  let i = 0;
  setter("");
  const id = setInterval(() => {
    const char = text[i];
    setter((prev) => prev + char);
    i++;
    if (i >= text.length) clearInterval(id);
  }, speed);
  return id;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("Hello! I am Avanish's AI assistant. Ask me anything.");
  const [typing, setTyping] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleQuestion = (answer: string) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTyping(true);
    setMessage("");
    timerRef.current = typewriter(answer, setMessage, 16);
    setTimeout(() => setTyping(false), answer.length * 16 + 100);
  };

  useEffect(() => () => { if (timerRef.current) clearInterval(timerRef.current); }, []);

  return (
    <div className="chat-fab">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="chat-panel"
            role="dialog"
            aria-label="AI Chatbot"
          >
            <div className="chat-panel-header">
              <Bot size={18} />
              <span>Ask About Avanish</span>
              <button
                onClick={() => setOpen(false)}
                style={{ marginLeft: "auto", background: "none", border: "none", color: "#fff", cursor: "pointer", display: "flex" }}
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            <div className="chat-panel-body">
              {/* Message area */}
              <div className="chat-messages">
                <div className="chat-message">
                  {message}
                  {typing && (
                    <span style={{ display: "inline-block", width: 6, height: 14, background: "var(--accent-blue)", marginLeft: 2, verticalAlign: "middle", animation: "blink 0.8s infinite" }} />
                  )}
                </div>
              </div>

              {/* Quick questions */}
              <div>
                {QUESTIONS.map((item) => (
                  <motion.button
                    key={item.q}
                    className="chat-question-btn"
                    onClick={() => handleQuestion(item.a)}
                    whileHover={{ scale: 1.02, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ChevronRight size={12} style={{ marginRight: 4, display: "inline" }} />
                    {item.q}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="chat-fab-btn"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chatbot" : "Open chatbot"}
        title="Chat with Avanish's AI assistant"
      >
        {open ? <X size={22} /> : <Bot size={22} />}
      </motion.button>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </div>
  );
}
