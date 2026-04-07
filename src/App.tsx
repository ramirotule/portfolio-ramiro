import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BentoGrid from "./components/BentoGrid";
import InteractiveCV from "./components/InteractiveCV";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import { PROJECTS, PERSONAL_DATA } from "./constants";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Command,
  MapPin,
  Mail,
  Activity,
  Bot,
  Cpu,
  Zap,
  X,
} from "lucide-react";
const cvPdf = "/assets/Resume-Frontend-Ramiro_Toulemonde.pdf";

const GithubIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.5 5.5 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.15-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6 2.5 4.8 2.9 4.8 2.9A5.4 5.4 0 0 0 4.6 6.7 5.5 5.5 0 0 0 3 10.5c0 5.2 3 6.4 6 6.74-.8.7-1 2-1 2.8v4"></path>
    <path d="M9 20a3 3 0 0 1-5-1.5"></path>
  </svg>
);

const LinkedinIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

function App() {
  const { t } = useTranslation();
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only scroll to top when the main category changes
    window.scrollTo(0, 0);
  }, [location.pathname.split("/")[1]]);

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
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={t("command.placeholder")}
                  className="w-full bg-transparent border-none outline-none text-lg font-display uppercase tracking-widest text-white placeholder:text-[#484849]"
                />
                <div className="flex items-center gap-1 text-[10px] font-display text-[#484849]">
                  <kbd className="border border-white/10 px-1 rounded uppercase">
                    Esc
                  </kbd>
                </div>
              </div>

              <div className="p-4 max-h-[60vh] overflow-y-auto">
                {searchTerm.trim() ? (
                  <div className="px-4 py-2">
                    <span className="text-[10px] font-display uppercase tracking-widest text-primary mb-4 block">
                      {t("command.results")}
                    </span>
                    {(() => {
                      const expUs =
                        (t("experience.data.us", {
                          returnObjects: true,
                        }) as any[]) || [];
                      const expOwn =
                        (t("experience.data.own", {
                          returnObjects: true,
                        }) as any[]) || [];
                      const expGov =
                        (t("experience.data.government", {
                          returnObjects: true,
                        }) as any[]) || [];

                      const results = [
                        // Dynamic Languages
                        {
                          id: "lang-en",
                          title: t("experience.english_level"),
                          desc: t("command.lang_en_desc"),
                          path: "/experience",
                          type: t("command.type_lang"),
                        },
                        {
                          id: "lang-es",
                          title: t("experience.spanish_level"),
                          desc: t("command.lang_es_desc"),
                          path: "/about",
                          type: t("command.type_lang"),
                        },
                        // Projects
                        ...PROJECTS.map((p) => ({
                          id: `proj-${p.id}`,
                          title: p.title,
                          desc:
                            (t(`projects.list.${p.id}.content`) ||
                              p.description) +
                            " " +
                            (p.tech ? p.tech.join(" ") : ""),
                          tech: p.tech,
                          path: "/projects",
                          type: t("command.type_project"),
                        })),
                        // Experience USA (and its inner projects)
                        ...expUs.flatMap((e) => {
                          const mainExp = {
                            id: `exp-us-${e.id}`,
                            title: e.company,
                            desc:
                              e.role +
                              " " +
                              e.description.join(" ") +
                              " " +
                              (e.stack ? e.stack.join(", ") : ""),
                            path: "/experience",
                            type: t("command.type_exp_us"),
                          };
                          const innerProjs = Object.entries(
                            e.projects || {},
                          ).map(([key, p]: [string, any]) => ({
                            id: `exp-us-proj-${key}`,
                            title: `${p.title} (${e.company})`,
                            desc:
                              p.content +
                              " " +
                              (p.stack ? p.stack.join(", ") : ""),
                            path: "/experience",
                            type: t("command.type_exp_detail"),
                          }));
                          return [mainExp, ...innerProjs];
                        }),
                        // Experience Own Projects (and its inner projects)
                        ...expOwn.flatMap((e) => {
                          const mainExp = {
                            id: `exp-own-${e.id}`,
                            title: e.company,
                            desc:
                              e.role +
                              " " +
                              (e.description ? e.description.join(" ") : ""),
                            path: "/experience",
                            type: t("command.type_exp_own"),
                          };
                          const innerProjs = Object.entries(
                            e.projects || {},
                          ).map(([key, p]: [string, any]) => ({
                            id: `exp-own-proj-${key}`,
                            title: `${p.title} (${e.company})`,
                            desc:
                              p.content +
                              " " +
                              (p.stack ? p.stack.join(", ") : ""),
                            path: "/experience",
                            type: t("command.type_exp_detail"),
                          }));
                          return [mainExp, ...innerProjs];
                        }),
                        // Experience Government
                        ...expGov.map((e) => ({
                          id: `exp-gov-${e.id}`,
                          title: e.company,
                          desc:
                            e.role +
                            " " +
                            e.description.join(" ") +
                            " " +
                            (e.stack ? e.stack.join(", ") : ""),
                          path: "/experience",
                          type: t("command.type_exp_gov"),
                        })),
                        {
                          id: "about-profile",
                          title: t("about.profile_title"),
                          desc: t("about.profile_html"),
                          path: "/about",
                          type: t("nav.about"),
                        },
                        // Main Tech Stack
                        ...PERSONAL_DATA.stack.map((s) => ({
                          id: `skill-${s}`,
                          title: s,
                          desc: `Technology and skill proficiency: ${s}`,
                          path: "/experience",
                          type: "Tech Stack",
                        })),
                        // Workflow Tools
                        ...PERSONAL_DATA.workflowTools.map((w) => ({
                          id: `tool-${w}`,
                          title: w,
                          desc: `Professional workflow tool and methodology: ${w}`,
                          path: "/experience",
                          type: "Workflow Tools",
                        })),
                        {
                          id: "action-cv",
                          title: t("nav.download_cv"),
                          desc: "Ramiro Toulemonde CV - Resume - Curriculum - PDF Download",
                          path: "download",
                          type: t("command.actions"),
                          isDownload: true,
                        },
                      ].filter((item) => {
                        const query = searchTerm.toLowerCase().trim();
                        return (
                          item.title.toLowerCase().includes(query) ||
                          item.desc.toLowerCase().includes(query) ||
                          (item as any).tech?.some((t: string) =>
                            t.toLowerCase().includes(query),
                          )
                        );
                      });

                      if (results.length === 0) {
                        return (
                          <div className="py-8 text-center">
                            <p className="text-[#484849] font-display uppercase tracking-widest text-xs">
                              {t("command.no_results", { query: searchTerm })}
                            </p>
                          </div>
                        );
                      }

                      return results.map((result) => (
                        <div
                          key={result.id}
                          onClick={() => {
                            if ((result as any).isDownload) {
                              const link = document.createElement("a");
                              link.href = cvPdf;
                              link.download =
                                "Resume-Frontend-Ramiro_Toulemonde.pdf";
                              link.click();
                            } else {
                              navigate(result.path);
                            }
                            setIsCommandOpen(false);
                            setSearchTerm("");
                          }}
                          className="p-4 mb-2 hover:bg-white/5 border border-white/0 hover:border-white/5 group transition-all cursor-pointer"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-display uppercase tracking-widest text-white group-hover:text-primary transition-colors">
                              {result.title}
                            </h4>
                            <span className="text-[10px] font-display uppercase tracking-widest text-primary/40">
                              {result.type}
                            </span>
                          </div>
                          <p className="text-[#adaaab] text-[10px] leading-tight line-clamp-2 mb-2">
                            {result.desc.replace(/<\/?[^>]+(>|$)/g, "")}
                          </p>
                          <div className="flex items-center gap-2 text-[8px] font-display uppercase tracking-widest text-[#484849]">
                            <MapPin size={8} /> {result.path}
                          </div>
                        </div>
                      ));
                    })()}
                  </div>
                ) : (
                  <>
                    <div className="mb-6 px-4 py-2">
                      <span className="text-[10px] font-display uppercase tracking-widest text-[#484849] mb-4 block">
                        {t("command.navigation")}
                      </span>
                      {[
                        { label: t("nav.home"), path: "/" },
                        { label: t("nav.about"), path: "/about" },
                        { label: t("nav.projects"), path: "/projects" },
                        { label: t("nav.experience"), path: "/experience" },
                        { label: t("nav.interests"), path: "/interests" },
                        { label: t("nav.contact"), path: "/contact" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          onClick={() => {
                            setIsCommandOpen(false);
                            if (item.path.startsWith("#")) {
                              document
                                .querySelector(item.path)
                                ?.scrollIntoView({ behavior: "smooth" });
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
                        {t("command.actions")}
                      </span>
                      <a
                        href={cvPdf}
                        download="Resume-Frontend-Ramiro_Toulemonde.pdf"
                        className="flex items-center justify-between p-3 hover:bg-secondary/10 group transition-colors cursor-pointer"
                      >
                        <span className="font-display uppercase tracking-widest text-white group-hover:text-secondary transition-colors">
                          {t("nav.download_cv")}
                        </span>
                        <span className="text-[9px] font-display uppercase tracking-widest text-[#484849]">
                          CV.pdf
                        </span>
                      </a>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Sections */}
      <div className="pt-0">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Mission />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<BentoGrid />} />
          <Route path="/experience" element={<InteractiveCV />} />
          <Route
            path="/interests"
            element={
              <>
                <section
                  id="interests"
                  className="py-24 px-6 max-w-7xl mx-auto"
                >
                  <div className="glass p-12 relative overflow-hidden border-tertiary/20">
                    <div className="absolute top-0 right-0 p-4">
                      <Activity
                        size={24}
                        className="text-tertiary animate-pulse"
                      />
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                      <div className="w-16 h-16 border border-tertiary flex items-center justify-center text-tertiary group-hover:bg-tertiary/10 transition-colors shrink-0">
                        <Bot size={32} />
                      </div>
                      <div>
                        <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-white tracking-tighter">
                          {t("interests_section.title_prefix")}{" "}
                          <span className="text-tertiary italic">
                            {t("interests_section.title_highlight")}
                          </span>
                        </h2>
                        <p className="text-[#adaaab] text-sm uppercase tracking-widest mt-2">
                          {t("interests_section.subtitle")}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                      <div className="glass p-6 border-white/5">
                        <Cpu size={24} className="text-tertiary mb-6" />
                        <h4 className="text-white font-display uppercase tracking-widest text-sm mb-4">
                          {t("interests_section.python_title")}
                        </h4>
                        <p className="text-[#adaaab] text-xs leading-relaxed">
                          {t("interests_section.python_desc")}
                        </p>
                      </div>

                      <div className="glass p-6 border-white/5">
                        <Zap size={24} className="text-primary mb-6" />
                        <h4 className="text-white font-display uppercase tracking-widest text-sm mb-4">
                          {t("interests_section.nextjs_title")}
                        </h4>
                        <p className="text-[#adaaab] text-xs leading-relaxed">
                          {t("interests_section.nextjs_desc")}
                        </p>
                      </div>

                      <div className="glass p-6 border-white/5">
                        <Activity size={24} className="text-secondary mb-6" />
                        <h4 className="text-white font-display uppercase tracking-widest text-sm mb-4">
                          {t("interests_section.ai_title")}
                        </h4>
                        <p className="text-[#adaaab] text-xs leading-relaxed">
                          {t("interests_section.ai_desc")}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer / Contact */}
      <footer id="contact" className="py-24 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
      <motion.div
        animate={{
          scale: [1, 1.02, 1],
          borderColor: [
            "rgba(255,0,255,0.2)",
            "rgba(255,0,255,0.5)",
            "rgba(255,0,255,0.2)",
          ],
          boxShadow: [
            "0 0 20px rgba(255,0,255,0.1)",
            "0 0 30px rgba(255,0,255,0.3)",
            "0 0 20px rgba(255,0,255,0.1)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed bottom-4 right-4 hidden md:flex items-center gap-2 py-1.5 px-3 glass text-[9px] font-display uppercase tracking-widest text-white/50 shadow-[0_0_15px_rgba(255,0,255,0.05)] border-magenta/10 z-[50]"
      >
        <span className="opacity-40">Press</span>
        <kbd className="border border-[#ff00ff]/30 text-[#ff00ff] bg-[#ff00ff]/5 px-2 py-0.5 rounded mx-1 block font-black text-[10px]">
          CTRL + K
        </kbd>{" "}
        <span className="opacity-40">for Command Palette</span>
      </motion.div>

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
