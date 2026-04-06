import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BentoGrid from "./components/BentoGrid";
import InteractiveCV from "./components/InteractiveCV";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Command,
  MapPin,
  Mail,
  Coffee,
  Activity,
  Bot,
  Cpu,
  Zap,
  X,
} from "lucide-react";

const GithubIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.5 5.5 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.15-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6 2.5 4.8 2.9 4.8 2.9A5.4 5.4 0 0 0 4.6 6.7 5.5 5.5 0 0 0 3 10.5c0 5.2 3 6.4 6 6.74-.8.7-1 2-1 2.8v4"></path>
    <path d="M9 20a3 3 0 0 1-5-1.5"></path>
  </svg>
);

const LinkedinIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

function App() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsCommandOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="bg-background min-h-screen text-white font-body selection:bg-primary selection:text-background">
      <Navbar />

      {/* Dynamic Background Noise */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <AnimatePresence>
        {isCommandOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-6"
            onClick={() => setIsCommandOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-2xl glass p-1 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 px-6 py-4 border-b border-white/5">
                <Search size={20} className="text-primary" />
                <input
                  autoFocus
                  placeholder="Type a command or search..."
                  className="w-full bg-transparent border-none outline-none text-lg font-display uppercase tracking-widest text-white placeholder:text-[#484849]"
                />
                <div className="flex items-center gap-1 text-[10px] font-display text-[#484849]">
                  <kbd className="border border-white/10 px-1 rounded uppercase">
                    Esc
                  </kbd>
                </div>
              </div>

              <div className="p-4 max-h-[60vh] overflow-y-auto">
                <div className="mb-6 px-4 py-2">
                  <span className="text-[10px] font-display uppercase tracking-widest text-[#484849] mb-4 block">
                    Navigation
                  </span>
                  {[
                    { label: "Home", path: "/" },
                    { label: "About", path: "/about" },
                    { label: "Projects", path: "/projects" },
                    { label: "Experience", path: "/experience" },
                    { label: "Interests & AI", path: "/interests" },
                    { label: "Contact", path: "/contact" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      onClick={() => {
                        setIsCommandOpen(false);
                        if (item.path.startsWith("#")) {
                          document.querySelector(item.path)?.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          navigate(item.path);
                        }
                      }}
                      className="flex items-center justify-between p-3 hover:bg-primary/10 group transition-colors cursor-pointer"
                    >
                      <span className="font-display uppercase tracking-widest text-white group-hover:text-primary transition-colors">
                        {item.label}
                      </span>
                      <Command size={14} className="text-[#484849]" />
                    </div>
                  ))}
                </div>

                <div className="px-4 py-2">
                  <span className="text-[10px] font-display uppercase tracking-widest text-[#484849] mb-4 block">
                    Actions
                  </span>
                  <div className="flex items-center justify-between p-3 hover:bg-secondary/10 group transition-colors cursor-pointer">
                    <span className="font-display uppercase tracking-widest text-white group-hover:text-secondary transition-colors">
                      Download Resume PDF
                    </span>
                    <span className="text-[9px] font-display uppercase tracking-widest text-[#484849]">
                      CV.pdf
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Sections */}
      {/* Main Content Sections */}
      <div className="pt-0"> {/* Kept relative/pt handled by sections */}
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Mission />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<BentoGrid />} />
          <Route path="/experience" element={<InteractiveCV />} />
          <Route path="/interests" element={
            <>

      {/* Interests & Learning Section */}
      <section id="interests" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="glass p-12 relative overflow-hidden border-tertiary/20">
          <div className="absolute top-0 right-0 p-4">
            <Activity size={24} className="text-tertiary animate-pulse" />
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="w-16 h-16 border border-tertiary flex items-center justify-center text-tertiary group-hover:bg-tertiary/10 transition-colors shrink-0">
              <Bot size={32} />
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-white tracking-tighter">
                Continuous{" "}
                <span className="text-tertiary italic">Learning</span>
              </h2>
              <p className="text-[#adaaab] text-sm uppercase tracking-widest mt-2">
                Expanding my stack and exploring new frontiers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="glass p-6 border-white/5">
              <Cpu size={24} className="text-tertiary mb-6" />
              <h4 className="text-white font-display uppercase tracking-widest text-sm mb-4">
                Python & AI
              </h4>
              <p className="text-[#adaaab] text-xs leading-relaxed">
                Actively learning Python oriented towards Artificial Intelligence. I am exploring the foundations of machine learning, neural networks, and how to integrate AI directly into new and existing codebases.
              </p>
            </div>

            <div className="glass p-6 border-white/5">
              <Zap size={24} className="text-primary mb-6" />
              <h4 className="text-white font-display uppercase tracking-widest text-sm mb-4">
                Next.js Architecture
              </h4>
              <p className="text-[#adaaab] text-xs leading-relaxed">
                Currently diving deeper into Next.js 14/15, App Router, and React Server Components. Building full-stack implementations to maximize SEO and minimize time-to-interactive for end users.
              </p>
            </div>

            <div className="glass p-6 border-white/5">
              <Activity size={24} className="text-secondary mb-6" />
              <h4 className="text-white font-display uppercase tracking-widest text-sm mb-4">
                AI Workflows
              </h4>
              <p className="text-[#adaaab] text-xs leading-relaxed">
                Getting more involved with AI learning, understanding how LLMs reason, and using autonomous agents to accelerate development cycles and design systems.
              </p>
            </div>
          </div>
        </div>
      </section>
            </>
          } />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer / Contact */}
      <footer id="contact" className="py-24 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-primary font-display font-black text-4xl tracking-tighter hover:text-white transition-colors cursor-pointer text-left"
            >
              RAMIRO TOULEMONDE
            </button>
            <span className="font-display uppercase tracking-[0.4em] text-xs text-[#484849]">
              Santa Rosa, La Pampa
            </span>
          </div>

          <div className="flex gap-8 text-[10px] font-display uppercase tracking-widest text-[#adaaab] flex-wrap justify-center md:justify-end">
            <a
              href="mailto:ramiro.toulemonde@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={12} /> Email
            </a>

            <a
              href="https://www.linkedin.com/in/ramirotoulemonde"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <LinkedinIcon size={12} /> Linkedin
            </a>
            <a
              href="https://github.com/ramirotule"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <GithubIcon size={12} /> Github
            </a>
            <button
              onClick={() => setIsMapOpen(true)}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <MapPin size={12} /> Santa Rosa - La Pampa (Argentina)
            </button>
          </div>
        </div>
      </footer>

      {/* Keyboard Hint */}
      <div className="fixed bottom-6 right-6 hidden md:flex items-center gap-3 py-2 px-4 glass text-[10px] font-display uppercase tracking-widest text-[#adaaab] shadow-[0_0_20px_rgba(161,250,255,0.1)] border-primary/20">
        Press{" "}
        <kbd className="border border-primary/50 text-primary bg-primary/10 px-2 py-0.5 rounded mx-1 block font-black">⌘ K</kbd> for
        Command Palette
      </div>

      {/* Map Modal */}
      <AnimatePresence>
        {isMapOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-background/90 backdrop-blur-md p-6"
            onClick={() => setIsMapOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-4xl glass p-1 shadow-2xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                <div className="flex items-center gap-2 text-xs font-display uppercase tracking-widest text-[#adaaab]">
                  <MapPin size={14} className="text-secondary" />
                  Santa Rosa - La Pampa (Argentina)
                </div>
                <button
                  onClick={() => setIsMapOpen(false)}
                  className="text-[#484849] hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-2 h-[60vh] md:h-[70vh]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102047.458925232!2d-64.36437651033235!3d-36.619053890835016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c2cd1b9d4c264d%3A0xe549dc240a5015b6!2sSanta%20Rosa%2C%20La%20Pampa!5e0!3m2!1sen!2sar!4v1715456244672!5m2!1sen!2sar"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "invert(90%) hue-rotate(180deg) contrast(85%)",
                  }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
