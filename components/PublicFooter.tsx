import React from 'react';
import { ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';
import DigitecLogo from './DigitecLogo';
import { useLanguage } from '../contexts/LanguageContext';

const PublicFooter: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#020617] text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <DigitecLogo light size="sm" />
          
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
                <span className="text-white font-black text-[10px] uppercase tracking-widest mb-2">{t.common.connect}</span>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
                    <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
                    <a href="https://github.com/digitec" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        <Github size={18} />
                    </a>
                </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-black uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Digitec Enterprise. {t.common.rights}
          </div>
          <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">{t.common.legal}</a>
            <a href="#" className="hover:text-white transition-colors">{t.common.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
