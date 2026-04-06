import { motion } from "framer-motion";
import { User, Music, Wrench, Plane, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto text-white">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Side: Let me introduce myself */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-8"
        >
          <div>
            <span className="text-secondary font-display text-xs uppercase tracking-[0.3em] font-medium block mb-4">
              {t("about.profile_title")}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase text-white tracking-tighter mb-8 block">
              {t("about.frontend")} <span className="text-primary italic">{t("about.specialist")}</span>
            </h2>
          </div>
          
          <div className="glass p-8 relative border-l-2 border-l-primary group hover:border-l-secondary transition-colors duration-500 space-y-6">
            <p className="text-[#adaaab] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t("about.profile_html") }} />

            <div>
              <h3 className="text-white font-display text-sm uppercase tracking-widest mb-3">
                {t("about.qa_title")} <span className="text-secondary">{t("about.qa_mindset")}</span>
              </h3>
              <p className="text-[#adaaab] text-sm leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t("about.qa_html") }} />
              
              <ul className="space-y-3 pl-4 border-l border-white/10">
                {(t("about.qa_points", { returnObjects: true }) as string[]).map((point, i) => (
                  <li key={i} className="text-[#adaaab] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-display text-sm uppercase tracking-widest mb-3">
                {t("about.soft_skills_title")}
              </h3>
              <p className="text-[#adaaab] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t("about.soft_skills_html") }} />
            </div>
          </div>
        </motion.div>

        {/* Right Side: My Professional Journey */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 space-y-8"
        >
          <div>
            <span className="text-tertiary font-display text-xs uppercase tracking-[0.3em] font-medium block mb-4">
              {t("about.journey_title")}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase text-white tracking-tighter mb-8 block">
              {t("about.origin")} <span className="text-tertiary italic">{t("about.evolution")}</span>
            </h2>
          </div>
          
          <div className="glass p-8 group overflow-hidden relative">
            
            <div className="space-y-6 relative z-10">
              <p className="text-[#adaaab] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t("about.journey_p1_html") }} />

              <div>
                <h3 className="text-white font-display text-sm uppercase tracking-widest mb-2">
                  {t("about.ent_title")} <span className="text-tertiary">{t("about.ent_years")}</span>
                </h3>
                <p className="text-[#adaaab] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t("about.ent_html") }} />
              </div>

              <div>
                <h3 className="text-white font-display text-sm uppercase tracking-widest mb-2">
                  {t("about.dt_title")} <span className="text-tertiary">{t("about.dt_years")}</span>
                </h3>
                <p className="text-[#adaaab] text-sm leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: t("about.dt_p1_html") }} />
                <p className="text-[#adaaab] text-sm leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: t("about.dt_p2_html") }} />
                
                <ul className="space-y-2 pl-4 border-l border-white/10 mb-4">
                  {(t("about.dt_points", { returnObjects: true }) as string[]).map((point, i) => (
                    <li key={i} className="text-[#adaaab] text-sm"><span className="text-secondary">-</span> {point}</li>
                  ))}
                </ul>
                
                <p className="text-[#adaaab] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t("about.dt_p3_html") }} />
              </div>
            </div>


            
            <div className="absolute top-8 right-8 p-3 opacity-[0.03] group-hover:opacity-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 pointer-events-none">
              <User size={120} className="text-white" />
            </div>
          </div>
          
          <div className="bg-white/[0.02] border border-white/10 p-6 relative flex items-center justify-center hover:border-primary/40 transition-colors">
            <p className="font-display text-white/80 text-center text-sm md:text-base italic font-medium tracking-wide">
              "The only thing impossible is what you don't try!"
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section: What Drives Me */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 w-full space-y-8"
      >
        <div>
          <span className="text-primary font-display text-xs uppercase tracking-[0.3em] font-medium block mb-4">
            {t("about.beyond_coding")}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase text-white tracking-tighter mb-8 block">
            {t("about.drives_me_title")} <span className="text-primary italic">{t("about.drives_me_highlight")}</span>
          </h2>
        </div>
        
        <div className="glass p-8 group overflow-hidden relative border-t-2 border-t-primary hover:border-t-white transition-colors duration-500">
          <p className="text-[#adaaab] text-sm leading-relaxed mb-8 max-w-4xl">
            {t("about.drives_me_intro")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            <div>
              <h3 className="text-white font-display text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                <Heart size={16} className="text-primary" /> {t("about.family_title")}
              </h3>
              <p className="text-[#adaaab] text-sm leading-relaxed">
                {t("about.family_desc")}
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-display text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                <Wrench size={16} className="text-tertiary" /> {t("about.cars_title")}
              </h3>
              <p className="text-[#adaaab] text-sm leading-relaxed">
                {t("about.cars_desc")}
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-display text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                <Music size={16} className="text-secondary" /> {t("about.music_title")}
              </h3>
              <p className="text-[#adaaab] text-sm leading-relaxed">
                {t("about.music_desc")}
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-display text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                <Plane size={16} className="text-primary" /> {t("about.travel_title")}
              </h3>
              <p className="text-[#adaaab] text-sm leading-relaxed">
                {t("about.travel_desc")}
              </p>
            </div>
          </div>
          
          <div className="absolute top-8 right-8 p-3 opacity-[0.03] group-hover:opacity-10 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-700 pointer-events-none">
            <User size={120} className="text-white" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
