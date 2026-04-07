import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ExternalLink, Database, Activity, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useState } from 'react';

const icons = [Terminal, Database, Activity, ExternalLink];

const BentoGrid = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentModalImageIndex, setCurrentModalImageIndex] = useState(0);

  const openModal = (project: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedProject(project);
    setCurrentModalImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject?.images) {
      setCurrentModalImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject?.images) {
      setCurrentModalImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
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
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass flex flex-col group overflow-hidden border-white/5 hover:border-primary/30 transition-all duration-500 md:col-span-2 lg:col-span-3"
            >
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-display uppercase text-[#484849] tracking-[0.2em]">
                        SYS_{project.id.toUpperCase()}
                      </span>
                      <h3 className="text-2xl font-display font-black text-white uppercase group-hover:text-primary transition-colors tracking-tighter">
                        {t(`projects.list.${project.id}.title`)}
                      </h3>
                    </div>
                    <div className="w-10 h-10 glass flex items-center justify-center text-primary border-primary/20">
                      <Icon size={16} />
                    </div>
                  </div>

                  {/* Shrunken Thumbnail Component */}
                  {project.images?.[0] && (
                    <div 
                      onClick={(e) => openModal(project, e)}
                      className="relative mb-6 rounded overflow-hidden aspect-video group/thumb cursor-pointer border border-white/5"
                    >
                      <img 
                        src={project.images[0]} 
                        alt={project.title}
                        className="w-full h-full object-contain transition-all duration-700 bg-black/20"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                         <div className="p-3 bg-background/80 glass rounded-full scale-50 group-hover/thumb:scale-100 transition-transform duration-500">
                           <Maximize2 size={18} className="text-primary" />
                         </div>
                      </div>
                      {project.images.length > 1 && (
                        <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded text-[8px] font-display uppercase tracking-widest text-white/70 border border-white/10">
                          +{project.images.length - 1} View Views
                        </div>
                      )}
                    </div>
                  )}

                  <p className="text-[#adaaab] text-xs leading-relaxed mb-6 font-medium">
                    {t(`projects.list.${project.id}.content`)}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span 
                        key={tech} 
                        className="text-[9px] font-display uppercase tracking-widest text-[#484849] border border-white/5 py-1.5 px-3 bg-white/[0.01] group-hover:text-primary group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between items-center">
                   <a 
                     href={project.link} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-[10px] font-display uppercase tracking-widest text-[#484849] hover:text-primary transition-colors flex items-center gap-2 group-hover:text-white"
                   >
                     View Launch Protocol <ExternalLink size={10} className="text-primary/40" />
                   </a>
                   <div className="h-[1px] flex-1 bg-white/5 mx-6" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Fullscreen Image Modal/Carousel */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-background/95 backdrop-blur-xl p-4 md:p-12"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header info */}
              <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-50">
                <div className="flex flex-col">
                  <span className="text-[10px] font-display uppercase text-primary tracking-[0.3em] font-black">
                    PROJECT_VIEWER
                  </span>
                  <h4 className="text-2xl font-display font-black text-white uppercase tracking-tighter">
                    {selectedProject.title}
                  </h4>
                </div>
                <button 
                  onClick={closeModal}
                  className="p-3 bg-white/5 hover:bg-white/10 glass rounded-full transition-colors group"
                >
                  <X size={24} className="text-white group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Main Image View */}
              <div className="relative w-full h-[70vh] flex items-center justify-center group/viewer">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentModalImageIndex}
                    src={selectedProject.images[currentModalImageIndex]}
                    alt={selectedProject.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="max-w-full max-h-full object-contain shadow-2xl border border-white/5"
                  />
                </AnimatePresence>

                {/* Navigation Buttons */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 p-4 glass bg-black/40 hover:bg-primary/20 text-white rounded-full transition-all opacity-0 group-hover/viewer:opacity-100 -translate-x-10 group-hover/viewer:translate-x-0"
                    >
                      <ChevronLeft size={32} />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 p-4 glass bg-black/40 hover:bg-primary/20 text-white rounded-full transition-all opacity-0 group-hover/viewer:opacity-100 translate-x-10 group-hover/viewer:translate-x-0"
                    >
                      <ChevronRight size={32} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail strip or status */}
              <div className="mt-8 flex flex-col items-center gap-4">
                <div className="flex gap-2">
                  {selectedProject.images.map((img: string, i: number) => (
                    <button 
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentModalImageIndex(i);
                      }}
                      className={`w-16 h-10 rounded overflow-hidden border-2 transition-all ${i === currentModalImageIndex ? 'border-primary scale-110' : 'border-white/10 opacity-40 hover:opacity-100'}`}
                    >
                      <img src={img} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
                <div className="text-[10px] font-display uppercase tracking-widest text-[#484849]">
                   IMAGE {currentModalImageIndex + 1} OF {selectedProject.images.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BentoGrid;
