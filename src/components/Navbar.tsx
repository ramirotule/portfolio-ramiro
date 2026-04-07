import { useTranslation } from 'react-i18next';
import { PERSONAL_DATA } from '../constants';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import cvPdf from '../assets/cv.pdf';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 glass px-6 py-4 flex justify-between items-center"
    >
      <div className="flex items-center gap-2">
        <Link to="/" className="text-primary font-display font-bold text-xl tracking-tighter hover:text-white transition-colors cursor-pointer">
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
            className="flex items-center gap-2 text-xs font-display uppercase tracking-widest bg-primary text-background px-4 py-1 hover:bg-white transition-colors cursor-pointer"
          >
            <Download size={14} />
            <span className="hidden md:inline">{t('nav.download_cv')}</span>
            <span className="md:hidden">CV</span>
          </a>
          <button 
            onClick={toggleLanguage}
            className="text-xs font-display uppercase tracking-widest text-primary border border-primary/20 px-2 py-1 hover:bg-primary/10 transition-colors"
          >
            {i18n.language.toUpperCase()}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
