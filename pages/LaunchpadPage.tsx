import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, GraduationCap, Activity, Wallet, Wrench, CreditCard, 
  Bell, ArrowRight, Star, Home, Globe, Lock, ExternalLink,
  Sparkles, CheckCircle2, Cpu, Server, FileText, Zap
} from 'lucide-react';
import DigitecLogo from '../components/DigitecLogo';
import { useLanguage } from '../contexts/LanguageContext';

interface LaunchpadPageProps {
    userRole: string;
    userName: string;
    isPreview?: boolean;
}

const LaunchpadPage: React.FC<LaunchpadPageProps> = ({ userRole, userName }) => {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  // Flagship Sovereign Platforms
  const flagshipApps = [
    {
      id: 'h365',
      name: t.portfolio?.items?.h365?.name || 'H365 Digital Health Ecosystem',
      category: t.portfolio?.items?.h365?.category || 'National Health Infrastructure',
      desc: t.portfolio?.items?.h365?.desc || 'Unified healthcare infrastructure uniting H365 SaaS, CHAEM 7-Step Occupational Health, and Patient Portal across 1,500+ facilities.',
      icon: Activity,
      color: 'rose',
      gradient: 'from-rose-500 via-pink-600 to-red-600',
      status: t.launchpad?.status?.active || 'Production Active',
      path: 'https://h365-new.vercel.app/',
      caseStudyPath: '/portfolio/h365',
      isExternal: true,
      stats: t.launchpad?.stats?.h365 || '1,500+ Facilities • MISAU DHIS2 & L-LAN Active',
      tags: t.launchpad?.tags?.h365 || ['H365 SaaS', 'CHAEM 7-Step', 'Gemini 2.5 AI', 'Patient Portal'],
      isAvailable: true
    },
    {
      id: 'safeteq',
      name: t.portfolio?.items?.safeteq?.name || 'SAFETEQ Enterprise Risk Management',
      category: t.portfolio?.items?.safeteq?.category || 'Industrial Risk & Safety Compliance',
      desc: t.portfolio?.items?.safeteq?.desc || 'Compliance & risk management engine automating Critical Activity Requirements (RAC 01-11), gate lockout daemons, alcohol IoT testing, and digital safety passports.',
      icon: ShieldCheck,
      color: 'blue',
      gradient: 'from-blue-600 via-indigo-600 to-cyan-600',
      status: t.launchpad?.status?.enterprise || 'Enterprise Active',
      path: '/dashboard',
      externalPath: 'https://rac-s.vercel.app',
      caseStudyPath: '/portfolio/safeteq',
      isExternal: false,
      stats: t.launchpad?.stats?.safeteq || '6,000+ Workers • RAC 01-11 & Gate Lockout Daemon',
      tags: t.launchpad?.tags?.safeteq || ['RAC 01-11', 'Gate Lockout', 'Alcohol IoT', 'ASO Sync'],
      isAvailable: true
    },
    {
      id: 'edudesk',
      name: t.portfolio?.items?.edudesk?.name || 'EduDesk AI School Management',
      category: t.portfolio?.items?.edudesk?.category || 'AI-Powered Education Platform',
      desc: t.portfolio?.items?.edudesk?.desc || 'All-in-one AI school management platform integrating admissions, academics, automated lesson planning, test generator, parent & student portals, and fee orchestration.',
      icon: GraduationCap,
      color: 'indigo',
      gradient: 'from-indigo-500 via-blue-600 to-cyan-500',
      status: t.launchpad?.status?.active || 'Production Active',
      path: '/portfolio/edudesk',
      caseStudyPath: '/portfolio/edudesk',
      isExternal: false,
      stats: t.launchpad?.stats?.edudesk || 'All-in-One AI • Lessons, Tests & Parent Portal',
      tags: t.launchpad?.tags?.edudesk || ['Lesson AI', 'Test Gen', 'Admissions', 'Parent Portal'],
      isAvailable: true
    }
  ];

  // Additional Enterprise Solutions
  const secondaryApps = [
    {
      id: 'microfin',
      name: t.portfolio?.items?.microfin?.name || 'MicroFin',
      category: t.portfolio?.items?.microfin?.category || 'Financial Controls',
      desc: t.portfolio?.items?.microfin?.desc || 'Automated lending and payroll orchestration for large-scale industrial contractor workforces.',
      icon: Wallet,
      color: 'amber',
      gradient: 'from-amber-500 to-orange-500',
      status: t.launchpad?.status?.trial || 'Beta Testing',
      path: '/portfolio/microfin',
      isAvailable: false
    },
    {
      id: 'jactrac',
      name: t.portfolio?.items?.jactrac?.name || 'JacTrac Mini',
      category: t.portfolio?.items?.jactrac?.category || 'Hydraulic Asset Tracking',
      desc: t.portfolio?.items?.jactrac?.desc || 'Specialized Industrial IoT for tracking hose installation lifecycles and predicting failure.',
      icon: Wrench,
      color: 'orange',
      gradient: 'from-orange-600 to-red-500',
      status: t.launchpad?.status?.trial || 'Beta Testing',
      path: '/portfolio/jactrac',
      isAvailable: false
    },
    {
      id: 'swiftpos',
      name: t.portfolio?.items?.swiftpos?.name || 'SwiftPOS',
      category: t.portfolio?.items?.swiftpos?.category || 'Inventory Control',
      desc: t.portfolio?.items?.swiftpos?.desc || 'Industrial inventory, supply chain clearing, and point-of-sale terminal management.',
      icon: CreditCard,
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-500',
      status: t.launchpad?.status?.access || 'Standard Access',
      path: '/portfolio/swiftpos',
      isAvailable: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30 overflow-x-hidden relative text-slate-100">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
          <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] bg-rose-900/15 rounded-full blur-[140px]"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Navigation Header */}
      <nav className="relative z-10 p-6 border-b border-white/5 bg-slate-950/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
              <button 
                onClick={() => navigate('/')} 
                className="p-2.5 text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                title="Back to Main Site"
              >
                  <Home size={18} />
                  <span className="hidden sm:inline">Website</span>
              </button>
              <DigitecLogo light />
              <div className="h-6 w-px bg-slate-800 hidden sm:block"></div>
              <span className="text-xs font-black text-cyan-400 uppercase tracking-widest hidden sm:inline-block px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                {t.launchpad?.hub || 'Client Hub'}
              </span>
          </div>
          
          <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <button 
                onClick={toggleLanguage} 
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-all font-black text-xs bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md uppercase tracking-widest shadow-lg"
              >
                  <Globe size={14} className="text-cyan-400" />
                  <span>{language === 'en' ? 'English (EN)' : 'Português (PT)'}</span>
              </button>

              <button className="text-slate-400 hover:text-white transition-colors relative p-2.5 bg-white/5 rounded-full border border-white/10 hidden md:block">
                  <Bell size={18} />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
              </button>
              <div className="h-6 w-px bg-slate-800 hidden md:block"></div>
              
              {/* User Profile Pill */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-xs shadow-md">
                      {userName.charAt(0)}
                  </div>
                  <div className="text-left">
                      <div className="text-xs font-bold text-white leading-none">{userName}</div>
                      <div className="text-[9px] text-slate-400 uppercase tracking-widest mt-0.5">{userRole}</div>
                  </div>
              </div>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          
          {/* Header Banner */}
          <div className="mb-14 text-left max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-widest mb-4">
                <Sparkles size={14} /> {t.launchpad?.flagshipBadge || 'Sovereign Flagship Platforms'}
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tight leading-tight">
                {t.launchpad?.title || 'Client Hub & Sovereign Systems'}
              </h1>
              <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
                {t.launchpad?.subtitle || 'Central command portal for national healthcare networks, industrial safety, and education platforms.'}
              </p>
          </div>

          {/* SECTION 1: FLAGSHIP PLATFORMS (H365, SAFETEQ, EduDesk) */}
          <div className="mb-20">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <Cpu size={16} className="text-blue-400" />
              <span>Core Operational Flagships</span>
              <div className="flex-1 h-px bg-slate-800/80 ml-2"></div>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {flagshipApps.map((app) => {
                    const Icon = app.icon;

                    return (
                        <div 
                          key={app.id}
                          className="group relative bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-[2.5rem] p-8 transition-all duration-500 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5 overflow-hidden"
                        >
                            {/* Accent Glow Header */}
                            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${app.gradient}`}></div>
                            <div className={`absolute -right-16 -top-16 w-40 h-40 bg-gradient-to-br ${app.gradient} rounded-full blur-3xl opacity-10 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none`}></div>

                            <div>
                                {/* App Icon & Status Badge */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${app.gradient} flex items-center justify-center text-white shadow-xl shadow-black/40 transform group-hover:scale-105 transition-transform duration-500`}>
                                        <Icon size={32} />
                                    </div>
                                    <div className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border bg-emerald-500/10 text-emerald-400 border-emerald-500/20 flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                                        {app.status}
                                    </div>
                                </div>

                                {/* Title & Category */}
                                <div className="mb-3">
                                    <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1 font-bold">{app.category}</div>
                                    <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-blue-300 transition-colors">{app.name}</h3>
                                </div>

                                {/* Description */}
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                                  {app.desc}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                  {app.tags.map((tag, tidx) => (
                                    <span key={tidx} className="text-[10px] font-bold px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-slate-300">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                            </div>

                            {/* Bottom Operational Metrics & Action Buttons */}
                            <div className="pt-6 border-t border-white/10">
                                {/* System Metric Badge */}
                                <div className="text-[11px] font-mono font-bold text-slate-400 flex items-center gap-2 mb-6 bg-slate-950/80 p-2.5 rounded-xl border border-white/5">
                                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                                  <span className="truncate">{app.stats}</span>
                                </div>

                                {/* Dual Action Buttons */}
                                <div className="flex flex-col sm:flex-row items-center gap-3">
                                  {/* Launch Primary App */}
                                  <button
                                    onClick={() => {
                                      if (app.isExternal && app.path.startsWith('http')) {
                                        window.open(app.path, '_blank');
                                      } else {
                                        navigate(app.path);
                                      }
                                    }}
                                    className={`w-full flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r ${app.gradient} hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95`}
                                  >
                                    <span>{t.launchpad?.btnLaunch || 'Launch Application'}</span>
                                    {app.isExternal ? <ExternalLink size={14} /> : <ArrowRight size={14} />}
                                  </button>

                                  {/* Secondary Specs / Vault Route */}
                                  {app.id === 'safeteq' && app.externalPath ? (
                                    <button
                                      onClick={() => window.open(app.externalPath, '_blank')}
                                      className="w-full sm:w-auto py-3 px-4 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider border border-white/10 flex items-center justify-center gap-1.5 transition-all"
                                      title="Open SAFETEQ External Cloud Vault"
                                    >
                                      <span>Cloud</span>
                                      <ExternalLink size={12} />
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() => navigate(app.caseStudyPath)}
                                      className="w-full sm:w-auto py-3 px-4 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider border border-white/10 flex items-center justify-center gap-1.5 transition-all"
                                    >
                                      <FileText size={14} />
                                      <span>{t.launchpad?.btnSpecs || 'Specs'}</span>
                                    </button>
                                  )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
          </div>

          {/* SECTION 2: ADDITIONAL ENTERPRISE MODULES */}
          <div className="mb-20">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <Server size={16} className="text-indigo-400" />
              <span>Specialized Enterprise Modules & Beta Extensions</span>
              <div className="flex-1 h-px bg-slate-800/80 ml-2"></div>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {secondaryApps.map((app) => {
                    const Icon = app.icon;

                    return (
                        <div 
                          key={app.id}
                          className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-6 opacity-75 hover:opacity-100 transition-all flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">
                                        <Icon size={24} />
                                    </div>
                                    <div className="px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-slate-800/80 text-slate-400 border border-slate-700 flex items-center gap-1">
                                        <Lock size={10} />
                                        {app.status}
                                    </div>
                                </div>

                                <div className="text-[10px] font-mono text-slate-500 uppercase font-bold tracking-widest mb-1">{app.category}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{app.name}</h3>
                                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                                  {app.desc}
                                </p>
                            </div>

                            <button
                              onClick={() => navigate(app.path)}
                              className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-bold text-xs uppercase tracking-wider border border-white/10 flex items-center justify-center gap-2 transition-all"
                            >
                                <span>{t.launchpad?.btnSpecs || 'View Details'}</span>
                                <ArrowRight size={14} />
                            </button>
                        </div>
                    );
                })}
            </div>
          </div>

          {/* SECTION 3: UNIFIED ECOSYSTEM SUPPORT & ARCHITECTURE FOOTER */}
          <div className="p-10 bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-slate-900/60 rounded-[3rem] border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-blue-500/30 transition-all duration-500 shadow-2xl">
              <div className="flex gap-6 items-center">
                  <div className="p-4 bg-yellow-500/10 rounded-2xl text-yellow-400 border border-yellow-500/20 group-hover:scale-110 transition-transform duration-500 shrink-0">
                      <Star size={32} fill="currentColor" />
                  </div>
                  <div className="text-left">
                      <h4 className="text-xl font-black text-white mb-1">{t.launchpad?.footer?.title || 'Unified Ecosystem & SLA Engineering'}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">{t.launchpad?.footer?.desc || 'Digitec provides cross-app data synchronization, offline L-LAN mesh, and dedicated SLA engineering for enterprise clients.'}</p>
                  </div>
              </div>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white hover:bg-slate-100 text-slate-950 px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105 active:scale-95 shrink-0 flex items-center gap-2"
              >
                  <Zap size={16} className="text-blue-600" />
                  <span>{t.launchpad?.footer?.btn || 'Contact Solutions Architect'}</span>
              </button>
          </div>
      </main>

      {/* Floating Status Bar */}
      <footer className="fixed bottom-6 right-6 z-50">
          <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 px-4 py-2 rounded-full shadow-2xl flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-black uppercase text-slate-300 tracking-widest">{t.launchpad?.globalStatus || 'Ecosystem Status: Operational'}</span>
          </div>
      </footer>
    </div>
  );
};

export default LaunchpadPage;