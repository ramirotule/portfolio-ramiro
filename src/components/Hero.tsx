import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const Hero = () => {
  const { t } = useTranslation();

  const titleWords = t("hero.title").split(" ");
  const highlightedIndices = {
    primary: [titleWords.length - 3, titleWords.length - 2], // "to the" / "para el"
    secondary: [titleWords.length - 1], // "World" / "Mundo"
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-background"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-6 w-[2px] bg-primary" />
            <span className="text-secondary text-xs font-display uppercase tracking-[0.4em] font-semibold bg-secondary/5 px-2 py-1">
              Senior Frontend Developer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[1.1] text-white tracking-[-0.03em] uppercase mb-10">
            {titleWords.map((word, i) => {
              const isPrimary = highlightedIndices.primary.includes(i);
              const isSecondary = highlightedIndices.secondary.includes(i);

              return (
                <span
                  key={i}
                  className={`mr-3 inline-block ${isPrimary ? "text-primary" : isSecondary ? "text-secondary" : "text-white"}`}
                >
                  {word}
                </span>
              );
            })}
          </h1>

          <div className="flex flex-wrap gap-3 mb-16">
            {[
              "React.js",
              "React Native",
              "MobX State Tree",
              "Styled Components",
            ].map((tech) => (
              <span
                key={tech}
                className="text-[10px] md:text-xs font-display uppercase tracking-widest text-white/50 border border-white/10 py-2 px-4 bg-white/[0.03] hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          <motion.a
            href="#projects"
            whileHover={{ x: 10 }}
            className="group flex items-center gap-4 text-xs font-display uppercase tracking-[0.3em] text-white/60 hover:text-primary transition-colors"
          >
            <div className="w-12 h-[1px] bg-white/20 group-hover:bg-primary transition-colors" />
            Explore Work
          </motion.a>
        </motion.div>

        {/* Right Column: Code Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="glass p-1 rounded-sm overflow-hidden relative group">
            {/* Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="flex items-center gap-2 ml-auto text-[10px] font-display text-white/20 uppercase tracking-widest">
                <Terminal size={10} />
                mission.ts
              </div>
            </div>

            {/* Code Content */}
            <div className="p-8 font-mono text-[13px] leading-relaxed relative">
              <div className="space-y-1">
                <p>
                  <span className="text-secondary">const</span>{" "}
                  <span className="text-white">seniorDeveloper</span> = &#123;
                </p>
                <p className="pl-6">
                  <span className="text-primary/80">name</span>:{" "}
                  <span className="text-tertiary">'Ramiro Toulemonde'</span>,
                </p>
                <p className="pl-6">
                  <span className="text-primary/80">stack</span>: [
                  <span className="text-tertiary">'React'</span>,{" "}
                  <span className="text-tertiary">'React Native'</span>,{" "}
                  <span className="text-tertiary">'TypeScript'</span>],
                </p>
                <p className="pl-6">
                  <span className="text-primary/80">focus</span>: &#123;
                </p>
                <p className="pl-12">
                  <span className="text-primary/80">performance</span>:{" "}
                  <span className="text-tertiary">'100%'</span>,
                </p>
                <p className="pl-12">
                  <span className="text-primary/80">architecture</span>:{" "}
                  <span className="text-tertiary">'Fabric & TurboModules'</span>
                  ,
                </p>
                <p className="pl-12">
                  <span className="text-primary/80">automation</span>:{" "}
                  <span className="text-tertiary">'n8n + Supabase'</span>
                </p>
                <p className="pl-6">&#125;</p>
                <p>&#125;;</p>
                <br />
                <p className="text-[#adaaab]">// {t("hero.codeComment")}</p>
                <p>
                  <span className="text-secondary">const</span>{" "}
                  <span className="text-white">deliverValue</span> = (&#123;{" "}
                  <span className="text-primary/80">focus</span> &#125;) =&gt;{" "}
                  <span className="text-white">
                    Object.values(focus).forEach(optimize);
                  </span>
                </p>
                <br />
                <p className="flex justify-start items-center gap-1 mt-1">
                  <span>
                    <span className="text-white">deliverValue</span>(
                    <span className="text-white">seniorDeveloper</span>);
                  </span>
                  {/* Cursor Animation */}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-2.5 h-[1.2rem] bg-white/70"
                  />
                </p>
              </div>
            </div>

            {/* Visual Decoration */}
            <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none group-hover:bg-primary/20 transition-all" />
          </div>
        </motion.div>
      </div>

      {/* Background Grid Lines (Subtle) */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </section>
  );
};

export default Hero;
