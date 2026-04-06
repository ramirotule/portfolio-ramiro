import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Database } from "lucide-react";
import profilePic from "../assets/profile.jpeg";

import { useTranslation } from 'react-i18next';
import { PERSONAL_DATA } from "../constants";

interface ImpactItem {
  label: string;
  value: string;
}

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  status: string;
  description: string[];
  impact: ImpactItem[];
}

interface ExperienceCategories {
  us: ExperienceItem[];
  own: ExperienceItem[];
  government: ExperienceItem[];
  interests: ExperienceItem[];
}

const InteractiveCV = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"us" | "own" | "government" | "interests" | null>(
    "us",
  );

  const EXPERIENCE_DATA = t("experience.data", { returnObjects: true }) as ExperienceCategories;
  
  // Combine all items for the timeline view
  const allExperience: ExperienceItem[] = [
    ...EXPERIENCE_DATA.us,
    ...EXPERIENCE_DATA.own,
    ...EXPERIENCE_DATA.government,
  ].sort(() => {
    // Keeping original defined order for now
    return 0;
  });

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
        <aside className="w-full lg:w-72 flex flex-col gap-6">
          <div className="glass p-8 relative overflow-hidden">
            <h4 className="text-2xl font-display font-black text-white mb-1 uppercase tracking-tighter">
              CV_ARCHIVE
            </h4>
            <p className="text-[10px] text-[#484849] font-display uppercase tracking-widest mb-8">
              V2026.3.12 // SENIOR FRONTEND
            </p>

            <div className="w-full aspect-[4/5] bg-[#1a191b] mb-8 relative border border-white/5 grayscale saturate-50 hover:grayscale-0 transition-all duration-700">
              <img
                src={profilePic}
                alt="Ramiro Toulemonde"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-color" />
            </div>

            <div className="space-y-6">
              <div className="group">
                <p className="text-[10px] text-[#484849] font-display uppercase tracking-widest mb-4">
                  {t("experience.dataFiltering")}
                </p>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-[10px] text-white/60 font-display uppercase tracking-widest">
                    {t("experience.tabs.us")}
                  </span>
                  <button
                    onClick={() => toggleTab("us")}
                    className={`w-8 h-4 rounded-full transition-colors relative ${activeTab === "us" ? "bg-primary" : "bg-white/10"}`}
                  >
                    <motion.div
                      animate={{ x: activeTab === "us" ? 16 : 0 }}
                      className="absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full"
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-[10px] text-white/60 font-display uppercase tracking-widest">
                    {t("experience.tabs.own")}
                  </span>
                  <button
                    onClick={() => toggleTab("own")}
                    className={`w-8 h-4 rounded-full transition-colors relative ${activeTab === "own" ? "bg-secondary" : "bg-white/10"}`}
                  >
                    <motion.div
                      animate={{ x: activeTab === "own" ? 16 : 0 }}
                      className="absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full"
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-[10px] text-white/60 font-display uppercase tracking-widest">
                    {t("experience.tabs.government")}
                  </span>
                  <button
                    onClick={() => toggleTab("government")}
                    className={`w-8 h-4 rounded-full transition-colors relative ${activeTab === "government" ? "bg-[#e2b714]" : "bg-white/10"}`}
                  >
                    <motion.div
                      animate={{ x: activeTab === "government" ? 16 : 0 }}
                      className="absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full"
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-[10px] text-white/60 font-display uppercase tracking-widest">
                    {t("experience.tabs.interests")}
                  </span>
                  <button
                    onClick={() => toggleTab("interests")}
                    className={`w-8 h-4 rounded-full transition-colors relative ${activeTab === "interests" ? "bg-tertiary" : "bg-white/10"}`}
                  >
                    <motion.div
                      animate={{ x: activeTab === "interests" ? 16 : 0 }}
                      className="absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full"
                    />
                  </button>
                </div>
              </div>

              <button className="w-full py-4 border border-primary/20 text-white font-display text-[10px] uppercase tracking-[0.3em] hover:bg-primary hover:text-background transition-all flex items-center justify-center gap-3">
                <Download size={14} />
                {t("experience.downloadPdf")}
              </button>
            </div>
          </div>

          <div className="glass p-6">
            <p className="text-[10px] text-[#484849] font-display uppercase tracking-widest mb-6 flex items-center gap-2">
              <Database size={12} /> Tech_Stack
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
                /root/path/expericience_arculix
              </p>
            </div>
            <div className="hidden md:flex items-center gap-8 text-[10px] font-display uppercase tracking-widest text-[#484849]">
              <span>{activeTab ? t("experience.sorted") : "Master Timeline"}</span>
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
                  EXPERIENCE_DATA[activeTab as keyof ExperienceCategories].map((item: ExperienceItem) => (
                    <div
                      key={item.id}
                      className="glass p-12 relative group border-l-2 border-l-transparent hover:border-l-primary transition-all duration-500"
                    >
                      <div className="flex flex-col xl:flex-row gap-12">
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
                            {item.description.map((point: string, i: number) => (
                              <li
                                key={i}
                                className="flex gap-4 group/point items-start"
                              >
                                <ChevronRight
                                  size={14}
                                  className="text-primary mt-1 group-hover/point:translate-x-1 transition-transform"
                                />
                                <p className="text-[#adaaab] text-sm leading-relaxed max-w-2xl">
                                  {point}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* IMPACT PANEL */}
                        <div className="w-full xl:w-64 bg-white/[0.02] border border-white/5 p-8 flex flex-col justify-center">
                          <span className="text-[9px] text-white/20 font-display uppercase tracking-widest mb-8">
                            {t("experience.coreImpact")}
                          </span>
                          <div className="space-y-8">
                            {item.impact.map((stat: ImpactItem, i: number) => (
                              <div key={i}>
                                <h5 className="text-4xl font-display font-black text-white tracking-tighter mb-1">
                                  {stat.value}
                                </h5>
                                <p className="text-[9px] text-[#484849] font-display uppercase tracking-widest leading-tight">
                                  {stat.label}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="relative pl-8 border-l border-white/10 space-y-12">
                    {allExperience.map((item: ExperienceItem, idx: number) => (
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
                          <span className="text-[10px] font-mono text-primary/40 uppercase">
                            ID: {item.id}
                          </span>
                        </div>
                        
                        <h4 className="text-2xl font-display font-black text-white uppercase tracking-tight mb-2">
                          {item.company}
                        </h4>
                        <p className="text-sm font-display text-primary uppercase tracking-widest mb-4">
                          {item.role}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 mt-2">
                          {item.impact.map((stat: ImpactItem, i: number) => (
                            <div key={i} className="glass px-3 py-1 border-white/5">
                              <span className="text-[8px] font-display text-[#484849] uppercase tracking-widest block">
                                {stat.label}
                              </span>
                              <span className="text-[10px] font-display text-white uppercase font-bold">
                                {stat.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* FOOTER SNIPPET */}
          <div className="glass p-1 rounded-sm">
            <div className="bg-white/[0.02] px-4 py-2 border-b border-white/5 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
              </div>
              <span className="text-[9px] font-mono text-[#484849] uppercase tracking-widest">
                technical_profile.json
              </span>
            </div>
            <div className="p-8 font-mono text-[13px] leading-relaxed">
              <p>
                <span className="text-secondary">const</span>{" "}
                <span className="text-white">ramiro</span> = &#123;
              </p>
              <p className="pl-6">
                <span className="text-primary/80">philosophy</span>:{" "}
                <span className="text-tertiary">
                  'Performance as a Feature'
                </span>
                ,
              </p>
              <p className="pl-6">
                <span className="text-primary/80">methodology</span>: [
                <span className="text-tertiary">'Brutalism'</span>,{" "}
                <span className="text-tertiary">'Precision'</span>,{" "}
                <span className="text-tertiary">'Scale'</span>],
              </p>
              <p className="pl-6">
                <span className="text-primary/80">can_ship_robust_code</span>:{" "}
                <span className="text-primary/80">true</span>
              </p>
              <p>&#125;;</p>
            </div>
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
    </section>
  );
};

const ChevronRight = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default InteractiveCV;
