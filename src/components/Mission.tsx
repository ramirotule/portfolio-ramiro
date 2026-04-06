import { Smile, Zap, ShieldCheck, Target } from "lucide-react";
import { useTranslation } from "react-i18next";

const Mission = () => {
  const { t } = useTranslation();
  return (
    <section id="mission" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="glass p-12 relative overflow-hidden border-secondary/20 hover:border-secondary/40 transition-colors">
        
        <div className="absolute top-0 right-0 p-4 opacity-50">
          <Target size={120} className="text-secondary/5 -translate-y-1/4 translate-x-1/4" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-16 relative z-10">
          <div className="w-16 h-16 border border-secondary flex items-center justify-center text-secondary group-hover:bg-secondary/10 transition-colors shrink-0">
            <Smile size={32} />
          </div>
          <div>
            <span className="text-secondary tracking-[0.2em] uppercase font-display font-medium text-xs mb-2 block">
              {t("mission.protocol")}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase text-white tracking-tighter">
              {t("mission.winning")} <span className="text-secondary italic">{t("mission.formula")}</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div className="glass p-8 border-white/5 border-l-2 border-l-transparent hover:border-l-primary transition-all group">
            <Smile size={24} className="text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-display uppercase tracking-widest text-sm mb-4">
              {t("mission.humor_title")}
            </h4>
            <p className="text-[#adaaab] text-xs leading-relaxed">
              {t("mission.humor_desc")}
            </p>
          </div>

          <div className="glass p-8 border-white/5 border-l-2 border-l-transparent hover:border-l-secondary transition-all group">
            <Zap size={24} className="text-secondary mb-6 group-hover:-translate-y-1 transition-transform" />
            <h4 className="text-white font-display uppercase tracking-widest text-sm mb-4">
              {t("mission.proactivity_title")}
            </h4>
            <p className="text-[#adaaab] text-xs leading-relaxed">
              {t("mission.proactivity_desc")}
            </p>
          </div>

          <div className="glass p-8 border-white/5 border-l-2 border-l-transparent hover:border-l-white transition-all group">
            <ShieldCheck size={24} className="text-white mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-display uppercase tracking-widest text-sm mb-4">
              {t("mission.responsibility_title")}
            </h4>
            <p className="text-[#adaaab] text-xs leading-relaxed">
              {t("mission.responsibility_desc")}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 text-center md:text-left">
           <p className="font-display font-black tracking-widest uppercase text-[#484849] text-sm">
             {t("mission.result")} <span className="text-white">{t("mission.success")}</span>
           </p>
           <div className="flex gap-2">
             <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
             <div className="h-2 w-2 bg-secondary rounded-full animate-pulse delay-75" />
             <div className="h-2 w-2 bg-white rounded-full animate-pulse delay-150" />
           </div>
        </div>

      </div>
    </section>
  );
};

export default Mission;
