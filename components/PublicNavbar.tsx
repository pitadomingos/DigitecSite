import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import DigitecLogo from './DigitecLogo';
import { useLanguage } from '../contexts/LanguageContext';

const PublicNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  const navItems = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'mission', path: '/mission' },
    { name: 'vision', path: '/vision' },
    { name: 'partners', path: '/partners' },
    { name: 'portfolio', path: '/portfolio' },
    { name: 'contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-[#020617]/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <DigitecLogo light />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button 
              key={item.name}
              onClick={() => {
                navigate(item.path);
                window.scrollTo(0, 0);
              }}
              className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
                location.pathname === item.path 
                  ? 'text-blue-400' 
                  : 'text-slate-300 hover:text-blue-400'
              }`}
            >
              {t.publicHome.nav[item.name as keyof typeof t.publicHome.nav] || item.name}
            </button>
          ))}
          
          <div className="h-6 w-px bg-slate-700 mx-2"></div>

          <button onClick={toggleLanguage} className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all text-[10px] font-black uppercase tracking-widest">
              <Globe size={12} />
              {language}
          </button>

          <button 
            onClick={() => navigate('/launchpad')}
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-widest transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            {t.publicHome.nav.enterHub}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button className="text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#020617] shadow-xl border-t border-slate-800 p-6 flex flex-col gap-4 md:hidden">
          {navItems.map((item) => (
            <button 
              key={item.name}
              onClick={() => {
                navigate(item.path);
                setMobileMenuOpen(false);
                window.scrollTo(0, 0);
              }}
              className={`text-left font-black text-[10px] uppercase tracking-widest py-3 border-b border-slate-800 ${
                location.pathname === item.path ? 'text-blue-400' : 'text-slate-300'
              }`}
            >
              {t.publicHome.nav[item.name as keyof typeof t.publicHome.nav] || item.name}
            </button>
          ))}
          <button onClick={() => { navigate('/launchpad'); setMobileMenuOpen(false); }} className="bg-blue-600 text-white py-3 rounded-lg font-black text-[10px] uppercase tracking-widest">{t.publicHome.nav.enterHub}</button>
        </div>
      )}
    </nav>
  );
};

export default PublicNavbar;
