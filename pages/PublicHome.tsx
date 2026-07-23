import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, Zap
} from 'lucide-react';
import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { useLanguage } from '../contexts/LanguageContext';

const PublicHome: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  // Typing simulation state
  const [typedCode, setTypedCode] = useState('');
  const [showSyncActive, setShowSyncActive] = useState(false);
  
  const codeSnippet = useMemo(() => `async function syncMiddleware() {
  const source = await HR_Database.fetch();
  const normalized = source.map(emp => ({
    ...emp,
    id: \`VUL-\${emp.id}\`,
    compliance: checkRAC01(emp)
  }));
  await EnterpriseVault.push(normalized);
}`, []);

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < codeSnippet.length) {
        setTypedCode(codeSnippet.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowSyncActive(true), 1000);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [codeSnippet]);

  return (
    <div className="font-sans text-slate-800 bg-[#020617] selection:bg-blue-500/30 overflow-x-hidden min-h-screen flex flex-col">
      <PublicNavbar />

      {/* --- HERO SECTION --- */}
      <header className="relative flex-grow flex items-center justify-center overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.08]" 
             style={{ 
               backgroundImage: `radial-gradient(circle, #4f46e5 1px, transparent 1px)`,
               backgroundSize: '30px 30px' 
             }}>
        </div>
        
        {/* Glow Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">
            {/* Left Content */}
            <div className="text-center lg:text-left">
                {/* Hero Badge */}
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 text-cyan-400 text-xs font-black uppercase tracking-[0.2em] mb-12 animate-fade-in-down shadow-xl">
                  <Zap size={14} fill="currentColor" /> {t.publicHome.hero.badge.toUpperCase()}
                </div>

                {/* Main Title */}
                <h1 className="text-6xl md:text-[5.5rem] font-black text-white leading-[1.05] mb-8 tracking-tight animate-fade-in-up">
                  {t.publicHome.hero.title1} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{t.publicHome.hero.title2}</span> <br/>
                  <span className="text-slate-300">{t.publicHome.hero.title3}</span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl leading-relaxed animate-fade-in-up font-medium" style={{ animationDelay: '0.1s' }}>
                  {t.publicHome.hero.desc}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <button onClick={() => navigate('/portfolio')} className="bg-white text-slate-900 px-10 py-4 rounded-full font-black hover:bg-cyan-50 transition-all flex items-center justify-center gap-2 group shadow-2xl hover:scale-105 active:scale-95 text-sm uppercase tracking-widest">
                    {t.publicHome.hero.btnExplore} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                  </button>
                  <button onClick={() => navigate('/about')} className="bg-transparent border-2 border-slate-800 text-white px-10 py-4 rounded-full font-black hover:bg-white/5 transition-all hover:border-slate-600 active:scale-95 text-sm uppercase tracking-widest">
                    {t.publicHome.about.title}
                  </button>
                </div>
            </div>

            {/* Right Side: Live Typing Code Simulation (macOS Style) */}
            <div className="hidden lg:block relative animate-float">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/50 to-cyan-500/50 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-[#0a0f1e]/80 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden min-h-[380px]">
                    {/* Mac OS Window Header */}
                    <div className="bg-[#1e293b]/50 px-5 py-3 flex items-center justify-between border-b border-white/5">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/20"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/20"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/20"></div>
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">middleware.node</div>
                    </div>
                    
                    {/* Code Content */}
                    <div className="p-8 font-mono text-sm leading-relaxed overflow-hidden">
                        <div className="flex gap-4 items-start mb-6">
                            <div className="flex flex-col text-slate-600 text-xs select-none pr-4 border-r border-white/5">
                                <span>01</span>
                                <span>02</span>
                                <span>03</span>
                                <span>04</span>
                                <span>05</span>
                                <span>06</span>
                                <span>07</span>
                                <span>08</span>
                                <span>09</span>
                            </div>
                            <pre className="text-blue-400 flex-1 whitespace-pre-wrap min-h-[160px]">
                                {typedCode}
                                <span className="w-2 h-4 bg-blue-500 inline-block align-middle ml-1 animate-pulse"></span>
                            </pre>
                        </div>
                        
                        {/* Terminal Success Message */}
                        {showSyncActive && (
                            <div className="mt-8 pt-6 border-t border-white/5 animate-fade-in flex items-center justify-center">
                                <div className="px-6 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                    <span className="text-blue-400 font-bold tracking-widest text-xs uppercase">[ System: Sync Active ]</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </header>

      {/* --- CAPABILITIES SECTION --- */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">
              {t.publicHome.capabilities.title} <br/><span className="text-blue-600">{t.publicHome.capabilities.titleAccent}</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              {t.publicHome.capabilities.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Heavy Industry */}
            <div className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform">
                <Zap size={32} fill="currentColor" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{t.publicHome.capabilities.industry.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium mb-8">
                {t.publicHome.capabilities.industry.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.publicHome.capabilities.industry.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded">{tag}</span>
                ))}
              </div>
            </div>

            {/* Dynamic Startups */}
            <div className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
              <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                <ArrowRight size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{t.publicHome.capabilities.startups.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium mb-8">
                {t.publicHome.capabilities.startups.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.publicHome.capabilities.startups.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3 py-1 rounded">{tag}</span>
                ))}
              </div>
            </div>

            {/* Modern Residence */}
            <div className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-slate-900/30 group-hover:scale-110 transition-transform">
                <Zap size={32} className="rotate-45" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{t.publicHome.capabilities.residence.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium mb-8">
                {t.publicHome.capabilities.residence.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.publicHome.capabilities.residence.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-slate-600 bg-slate-200 px-3 py-1 rounded">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
};

export default PublicHome;
