import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { Terminal, ExternalLink, Database, Activity } from 'lucide-react';

const icons = [Terminal, Database, Activity, ExternalLink];

const BentoGrid = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <span className="text-secondary tracking-[0.2em] uppercase font-display font-medium text-xs mb-4 block">
            {t('projects.section_subtitle')}
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-black uppercase text-white tracking-tighter flex flex-col">
            {t('projects.section_title_prefix') && <span>{t('projects.section_title_prefix')}</span>}
            <span className="text-primary">{t('projects.section_title_primary')}</span>
            {t('projects.section_title_suffix') && <span>{t('projects.section_title_suffix')}</span>}
          </h2>
        </div>
        <div className="text-[#adaaab] font-display text-sm uppercase tracking-widest max-w-xs">
          {t('projects.description')}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {PROJECTS.map((project, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`glass p-8 flex flex-col justify-between group cursor-pointer 
                ${index === 0 ? 'md:col-span-2 lg:col-span-3' : ''} 
                ${index === 1 ? 'md:col-span-2 lg:col-span-3' : ''}
                ${index === 2 ? 'md:col-span-2 lg:col-span-2' : ''}
                ${index === 3 ? 'md:col-span-2 lg:col-span-4' : ''}
              `}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-10 h-10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                  <Icon size={20} />
                </div>
                <span className="text-[10px] font-display uppercase text-[#484849] tracking-widest">
                  MODULE_{project.id.toUpperCase()}
                </span>
              </div>
              
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase group-hover:text-primary transition-colors">
                  {t(`projects.list.${project.id}.title`)}
                </h3>
                <p className="text-[#adaaab] text-sm leading-relaxed mb-6">
                  {t(`projects.list.${project.id}.content`)}
                </p>
                <div className="flex flex-wrap gap-2 group-hover:gap-3 transition-all duration-300">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="text-[10px] font-display uppercase tracking-widest text-white/50 border border-white/10 py-1.5 px-3 bg-white/[0.02] group-hover:text-primary group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <ExternalLink size={16} className="text-primary/40 group-hover:text-primary transition-colors" />
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};

export default BentoGrid;
