import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PERSONAL_DATA } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import cvPdf from '../assets/cv.pdf';
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full z-50 glass px-6 py-4 flex justify-between items-center"
      >
        <div className="flex items-center gap-2">
          <Link 
            to="/" 
            onClick={() => setIsMenuOpen(false)}
            className="text-primary font-display font-bold text-xl tracking-tighter hover:text-white transition-colors cursor-pointer"
          >
            {PERSONAL_DATA.name.toUpperCase()}
          </Link>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6 text-sm font-display uppercase tracking-widest text-[#adaaab]">
            <Link to="/" className={`${isActive('/') ? 'text-primary' : 'hover:text-primary'} transition-colors`}>{t('nav.home')}</Link>
            <Link to="/about" className={`${isActive('/about') ? 'text-primary' : 'hover:text-primary'} transition-colors`}>{t('nav.about')}</Link>
            <Link to="/projects" className={`${isActive('/projects') ? 'text-primary' : 'hover:text-primary'} transition-colors`}>{t('nav.projects')}</Link>
            <Link to="/experience" className={`${isActive('/experience') ? 'text-primary' : 'hover:text-primary'} transition-colors`}>{t('nav.experience')}</Link>
            <Link to="/interests" className={`${isActive('/interests') ? 'text-primary' : 'hover:text-primary'} transition-colors`}>{t('nav.interests')}</Link>
            <Link to="/contact" className={`${isActive('/contact') ? 'text-primary' : 'hover:text-primary'} transition-colors`}>{t('nav.contact')}</Link>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href={cvPdf}
              download="Ramiro_Toulemonde_CV.pdf"
              className="hidden md:flex items-center gap-2 text-xs font-display uppercase tracking-widest bg-primary text-background px-4 py-1 hover:bg-white transition-colors cursor-pointer"
            >
              <Download size={14} />
              <span>{t('nav.download_cv')}</span>
            </a>
            <button 
              onClick={toggleLanguage}
              className="hidden md:block text-xs font-display uppercase tracking-widest text-primary border border-primary/20 px-2 py-1 hover:bg-primary/10 transition-colors"
            >
              {i18n.language.toUpperCase()}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-primary p-2 hover:bg-primary/10 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col gap-8 items-center text-center overflow-y-auto"
          >
            <div className="flex flex-col gap-6 w-full max-w-xs">
              {[
                { path: '/', label: t('nav.home') },
                { path: '/about', label: t('nav.about') },
                { path: '/projects', label: t('nav.projects') },
                { path: '/experience', label: t('nav.experience') },
                { path: '/interests', label: t('nav.interests') },
                { path: '/contact', label: t('nav.contact') },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-display uppercase tracking-[0.2em] py-4 border-b border-white/5 ${
                    isActive(link.path) ? 'text-primary' : 'text-[#adaaab]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-6 w-full max-w-xs mt-8">
              <a
                href={cvPdf}
                download="Ramiro_Toulemonde_CV.pdf"
                className="flex items-center justify-center gap-3 text-sm font-display uppercase tracking-[0.2em] bg-primary text-background px-6 py-4 hover:bg-white transition-colors w-full"
              >
                <Download size={20} />
                {t('nav.download_cv')}
              </a>
              <button 
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="text-sm font-display uppercase tracking-[0.2em] text-primary border border-primary/20 px-6 py-4 hover:bg-primary/10 transition-colors w-full"
              >
                {t('common.language') || 'Language'}: {i18n.language.toUpperCase()}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
