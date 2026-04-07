import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Database,
  Settings as Tool,
  Activity,
  ChevronRight,
  X,
  Layout,
} from "lucide-react";

import { useTranslation } from "react-i18next";
import { PERSONAL_DATA } from "../constants";

const profilePic = "/assets/profile.jpeg";
const cvPdf = "/assets/cv.pdf";

interface ImpactItem {
  label: string;
  value: string;
}

interface ProjectDetail {
  title: string;
  content: string;
  stack: string[];
}

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  status: string;
  description: string[];
  impact: ImpactItem[];
  projects?: Record<string, ProjectDetail>;
  stack?: string[];
}

interface ExperienceCategories {
  us: ExperienceItem[];
  own: ExperienceItem[];
  government: ExperienceItem[];
  interests: ExperienceItem[];
}

const InteractiveCV = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<
    "us" | "own" | "government" | "interests" | null
  >(null);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(
    null,
  );

  const EXPERIENCE_DATA = t("experience.data", {
    returnObjects: true,
  }) as ExperienceCategories;

  const toggleTab = (tab: "us" | "own" | "government" | "interests") => {
    if (activeTab === tab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <section
      id="experience"
      className="py-24 px-6 max-w-7xl mx-auto bg-background min-h-screen"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* SIDEBAR */}
        <aside className="w-full lg:w-72 flex flex-col gap-6 lg:sticky lg:top-24 h-fit">
          <div className="glass p-6 relative overflow-hidden">
            <h4 className="text-2xl font-display font-black text-white mb-1 uppercase tracking-tighter">
              CV_ARCHIVE
            </h4>
            <p className="text-[10px] text-[#484849] font-display uppercase tracking-widest mb-2">
              V2026.3.12 // SENIOR FRONTEND
            </p>
            <div className="space-y-4 mb-8">
              <p className="text-[10px] text-white/30 font-display uppercase tracking-widest border-b border-white/5 pb-2">
                {t("experience.languages_title")}
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <span className="text-[14px] shrink-0">🇦🇷</span>
                  <p className="text-[11px] text-secondary/80 font-display uppercase tracking-widest leading-none">
                    {t("experience.spanish_level")}
                  </p>
                </div>
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <span className="text-[14px] shrink-0">🇬🇧</span>
                  <p className="text-[11px] text-primary/80 font-display uppercase tracking-widest leading-none">
                    {t("experience.english_level")}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full aspect-[4/5] bg-[#1a191b] mb-8 relative border border-white/5 grayscale saturate-50 hover:grayscale-0 transition-all duration-700">
              <img
                src={profilePic}
                alt="Ramiro Toulemonde"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-color" />
            </div>

            <div className="space-y-6">
              <div
                className="flex items-center justify-between mb-4 group cursor-pointer"
                onClick={() => toggleTab("us")}
              >
                <span
                  className={`text-[10px] font-display uppercase tracking-widest transition-colors ${activeTab === "us" ? "text-primary" : "text-[#484849] group-hover:text-primary"}`}
                >
                  {t("experience.tabs.us")}
                </span>
                <button
                  className={`w-8 h-4 rounded-full transition-colors relative cursor-pointer ${activeTab === "us" ? "bg-primary" : "bg-white/10"}`}
                >
                  <motion.div
                    animate={{ x: activeTab === "us" ? 16 : 0 }}
                    className="absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full"
                  />
                </button>
              </div>

              <div
                className="flex items-center justify-between mb-4 group cursor-pointer"
                onClick={() => toggleTab("own")}
              >
                <span
                  className={`text-[10px] font-display uppercase tracking-widest transition-colors ${activeTab === "own" ? "text-secondary" : "text-[#484849] group-hover:text-secondary"}`}
                >
                  {t("experience.tabs.own")}
                </span>
                <button
                  className={`w-8 h-4 rounded-full transition-colors relative cursor-pointer ${activeTab === "own" ? "bg-secondary" : "bg-white/10"}`}
                >
                  <motion.div
                    animate={{ x: activeTab === "own" ? 16 : 0 }}
                    className="absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full"
                  />
                </button>
              </div>

              <div
                className="flex items-center justify-between mb-4 group cursor-pointer"
                onClick={() => toggleTab("government")}
              >
                <span
                  className={`text-[10px] font-display uppercase tracking-widest transition-colors ${activeTab === "government" ? "text-tertiary" : "text-[#484849] group-hover:text-tertiary"}`}
                >
                  {t("experience.tabs.government")}
                </span>
                <button
                  className={`w-8 h-4 rounded-full transition-colors relative cursor-pointer ${activeTab === "government" ? "bg-tertiary" : "bg-white/10"}`}
                >
                  <motion.div
                    animate={{ x: activeTab === "government" ? 16 : 0 }}
                    className="absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full"
                  />
                </button>
              </div>

              <div
                className="flex items-center justify-between mb-4 group cursor-pointer"
                onClick={() => toggleTab("interests")}
              >
                <span
                  className={`text-[10px] font-display uppercase tracking-widest transition-colors ${activeTab === "interests" ? "text-emerald-500" : "text-[#484849] group-hover:text-emerald-500"}`}
                >
                  {t("experience.tabs.interests")}
                </span>
                <button
                  className={`w-8 h-4 rounded-full transition-colors relative cursor-pointer ${activeTab === "interests" ? "bg-emerald-500" : "bg-white/10"}`}
                >
                  <motion.div
                    animate={{ x: activeTab === "interests" ? 16 : 0 }}
                    className="absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full"
                  />
                </button>
              </div>
            </div>
          </div>

          <a
            href={cvPdf}
            download="Ramiro_Toulemonde_CV.pdf"
            className="w-full py-4 border border-primary/20 text-white font-display text-[10px] uppercase tracking-[0.3em] hover:bg-primary hover:text-background transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <Download size={14} />
            {t("experience.downloadPdf")}
          </a>

          <div className="glass p-6">
            <p className="text-[10px] text-[#484849] font-display uppercase tracking-widest mb-6 flex items-center gap-2">
              <Database size={12} /> Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {PERSONAL_DATA.stack.map((tag: string) => (
                <span
                  key={tag}
                  className="text-[8px] font-display uppercase tracking-widest border border-white/5 px-2 py-1 text-white/30 hover:text-primary transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="glass p-6">
            <p className="text-[10px] text-[#484849] font-display uppercase tracking-widest mb-6 flex items-center gap-2">
              <Tool size={12} /> {t("experience.tools_title")}
            </p>
            <div className="flex flex-wrap gap-2">
              {PERSONAL_DATA.workflowTools.map((tool: string) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-white/[0.03] border border-white/5 text-[8px] font-display uppercase tracking-widest text-white/40 hover:text-primary hover:border-primary/20 transition-all cursor-crosshair"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="glass p-6">
            <p className="text-[10px] text-[#484849] font-display uppercase tracking-widest mb-4 flex items-center gap-2">
              <Activity size={12} /> {t("experience.methodology_title")}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-display uppercase tracking-widest text-[#adaaab]">
                  SCRUM Framework
                </span>
              </div>
              <div className="pl-4 border-l border-white/5 space-y-3">
                {(
                  (t("experience.methodologies", {
                    returnObjects: true,
                  }) as string[]) || []
                ).map((m, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-[8px] font-display uppercase tracking-widest text-white/40"
                  >
                    <div className="w-1 h-[1px] bg-white/20" />
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="flex-1 flex flex-col gap-8">
          {/* HEADER */}
          <div className="flex items-end justify-between border-b border-white/5 pb-6">
            <div>
              <h2 className="text-5xl font-display font-black text-white uppercase tracking-tighter">
                {t("experience.title")}
              </h2>
              <p className="text-[10px] text-[#484849] font-display uppercase tracking-[0.4em] mt-2">
                /root/path/experience_catalogue
              </p>
            </div>
            <div className="hidden md:flex items-center gap-8 text-[10px] font-display uppercase tracking-widest text-[#484849]">
              <span>
                {activeTab ? t("experience.sorted") : "Master Timeline"}
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {activeTab ? t("experience.active") : "Full Catalog"}
              </span>
            </div>
          </div>

          {/* CARDS LIST */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {activeTab && activeTab !== "interests" ? (
                  [...EXPERIENCE_DATA[activeTab as keyof ExperienceCategories]]
                    .reverse()
                    .map((item: ExperienceItem) => (
                      <div
                        key={item.id}
                        className="glass p-12 relative group border-l-2 border-l-transparent hover:border-l-primary transition-all duration-500"
                      >
                        <div className="flex flex-col gap-12">
                          <div className="flex-1">
                            <span className="text-[10px] text-secondary font-display uppercase tracking-[0.4em] mb-4 block group-hover:translate-x-2 transition-transform">
                              {item.status}
                            </span>
                            <h3 className="text-4xl font-display font-black text-white uppercase tracking-tight mb-4">
                              {item.company}
                            </h3>

                            <div className="flex items-center gap-4 mb-8">
                              <span className="text-md font-display text-primary uppercase tracking-widest">
                                {item.role}
                              </span>
                              <span className="text-[10px] text-[#484849] font-display uppercase tracking-widest">
                                {item.period}
                              </span>
                            </div>

                            <ul className="space-y-4">
                              {item.description.map(
                                (point: string, i: number) => {
                                  return (
                                    <li
                                      key={i}
                                      className="flex flex-col gap-2 group/point"
                                    >
                                      <div className="flex gap-4 items-start">
                                        <ChevronRight
                                          size={14}
                                          className="text-primary mt-1 group-hover/point:translate-x-1 transition-transform"
                                        />
                                        <p className="text-[#adaaab] text-sm leading-relaxed max-w-4xl">
                                          {point}
                                        </p>
                                      </div>
                                      {item.projects &&
                                        Object.keys(item.projects)[i] && (
                                          <button
                                            onClick={() => {
                                              const keys = Object.keys(
                                                item.projects!,
                                              );
                                              setSelectedProject(
                                                item.projects![keys[i]],
                                              );
                                            }}
                                            className="ml-8 text-[9px] font-display uppercase tracking-widest text-primary/50 hover:text-primary transition-colors flex items-center gap-2 group/btn cursor-pointer"
                                          >
                                            <span>
                                              {t("experience.moreInfo")}
                                            </span>
                                            <div className="w-4 h-px bg-primary/20 group-hover/btn:w-8 transition-all" />
                                          </button>
                                        )}
                                    </li>
                                  );
                                },
                              )}
                            </ul>

                            {activeTab &&
                              (activeTab as string) !== "interests" &&
                              item.impact && (
                                <div className="grid grid-cols-2 gap-4 mt-12">
                                  {item.impact.map(
                                    (impact: ImpactItem, i: number) => (
                                      <div
                                        key={i}
                                        className="p-4 border border-white/5 bg-white/[0.02] group/impact hover:border-primary/20 transition-colors"
                                      >
                                        <p className="text-[10px] text-[#484849] font-display uppercase tracking-widest mb-1 group-hover/impact:text-primary/50 transition-colors">
                                          {impact.label}
                                        </p>
                                        <p className="text-xl font-display font-medium text-white">
                                          {impact.value}
                                        </p>
                                      </div>
                                    ),
                                  )}
                                </div>
                              )}

                            {item.stack && (
                              <div className="mt-12 pt-8 border-t border-white/5">
                                <p className="text-[10px] text-[#484849] font-display uppercase tracking-widest mb-6">
                                  Technology_Stack
                                </p>
                                <div className="flex flex-wrap gap-3">
                                  {item.stack.map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-3 py-1 border border-white/10 text-[10px] font-mono text-white/40 uppercase tracking-wider hover:border-primary/30 hover:text-primary transition-all"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                ) : activeTab === "interests" ? (
                  <div className="relative pl-8 border-l border-white/10 space-y-12">
                    {(
                      t("experience.data.interests", {
                        returnObjects: true,
                      }) as any[]
                    )
                      .slice()
                      .reverse()
                      .map((item: any, idx: number) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="relative"
                        >
                          {/* Timeline dot */}
                          <div className="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />

                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <span className="text-[10px] font-display uppercase tracking-widest text-[#484849]">
                              {item.period}
                            </span>
                          </div>

                          <h4
                            className={`text-2xl font-display font-black uppercase tracking-tight mb-2 ${item.isTemperies ? "text-secondary" : "text-white"}`}
                          >
                            {item.company}
                          </h4>
                          <p className="text-sm font-display text-primary uppercase tracking-widest mb-4">
                            {item.role}
                          </p>
                        </motion.div>
                      ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="glass p-12 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                      <Layout size={120} className="text-white" />
                    </div>

                    <div className="max-w-4xl relative z-10">
                      <span className="text-[10px] text-primary font-display uppercase tracking-[0.4em] mb-8 block">
                        System_Executive_Summary
                      </span>
                      <h3 className="text-4xl font-display font-black text-white uppercase tracking-tight mb-12 leading-tight">
                        {t("experience.summary_title")}
                      </h3>
                      <div className="space-y-8">
                        {(t("experience.summary_text") as string)
                          .split("\n\n")
                          .map((paragraph, i) => (
                            <p
                              key={i}
                              className="text-[#adaaab] text-lg leading-relaxed font-light"
                            >
                              {paragraph}
                            </p>
                          ))}
                      </div>

                      <div className="mt-16 flex items-center gap-6">
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className="w-8 h-8 rounded-full border-2 border-background bg-zinc-800 flex items-center justify-center text-[10px] text-white font-bold"
                            >
                              {i === 4 ? (
                                "+"
                              ) : (
                                <div className="w-1 h-1 bg-primary rounded-full" />
                              )}
                            </div>
                          ))}
                        </div>
                        <span className="text-[10px] font-display uppercase tracking-widest text-[#484849]">
                          Deployment_Success: 99.9%
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* STATUS MONITOR */}
          <div className="flex justify-end pr-4">
            <div className="glass p-4 inline-flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                <span className="text-[9px] font-display uppercase tracking-widest text-[#484849]">
                  System_Idle: 12ms
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-[9px] font-display uppercase tracking-widest text-[#484849]">
                  Region: LATAM_EST
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass max-w-2xl w-full relative overflow-hidden flex flex-col md:flex-row"
            >
              {/* Sidebar decoration */}
              <div className="w-full md:w-2 bg-primary h-2 md:h-auto" />

              <div className="p-12 flex-1">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] text-primary font-display uppercase tracking-[0.4em]">
                    Project Deep Dive
                  </span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-[#484849] hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <h3 className="text-4xl font-display font-black text-white uppercase tracking-tight mb-6">
                  {selectedProject.title}
                </h3>

                <div className="space-y-8">
                  <div>
                    <h5 className="text-[10px] text-[#484849] font-display uppercase tracking-widest mb-4">
                      Brief_Overview
                    </h5>
                    <p className="text-[#adaaab] text-sm leading-relaxed">
                      {selectedProject.content}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-[10px] text-[#484849] font-display uppercase tracking-widest mb-4">
                      Technical_Stack
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 border border-white/5 bg-white/[0.02] text-[9px] font-mono text-white/40 uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="mt-12 w-full py-4 bg-primary text-background font-display text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white transition-colors"
                >
                  {t("experience.close")}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InteractiveCV;
