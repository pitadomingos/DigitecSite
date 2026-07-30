import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Building2, ShieldCheck, Activity, Train, CheckCircle2, 
  ArrowRight, ExternalLink, Globe2, Cpu, HardHat, Award, Sparkles, MapPin, Zap
} from 'lucide-react';

const PartnersPage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<'all' | 'mining' | 'testing' | 'logistics'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnerItems = t.publicHome?.partners?.items;

  const partnerList = [
    {
      id: 'vulcan',
      name: partnerItems?.vulcan?.name || 'Vulcan Mining',
      industryKey: 'mining',
      category: partnerItems?.vulcan?.industry || 'Heavy Mining & Extraction',
      location: partnerItems?.vulcan?.location || 'Tete, Mozambique',
      desc: partnerItems?.vulcan?.desc || 'Enterprise risk management with SAFETEQ Critical Risk Management (CRM/LSR) compliance, automated safety lockouts, and CHAEM occupational health tracking for 6,000+ workers.',
      metrics: partnerItems?.vulcan?.metrics || '6,000+ Workers • Critical Risk Standards (CRM/LSR)',
      solutionUsed: 'SAFETEQ + CHAEM Occupational Health',
      logoType: 'image',
      logoUrl: '/assets/vulcan.png',
      badgeColor: 'border-orange-500/30 text-orange-400 bg-orange-500/10',
      accentColor: 'from-amber-500 to-orange-600',
      verified: true
    },
    {
      id: 'testing',
      name: partnerItems?.testing?.name || 'Testing',
      industryKey: 'testing',
      category: partnerItems?.testing?.industry || 'Technical & Medical Testing',
      location: partnerItems?.testing?.location || 'Maputo & Tete, Mozambique',
      desc: partnerItems?.testing?.desc || 'Industrial certification, laboratory workflow digitization, and real-time medical examination (ASO) sync integrated directly into H365 and SAFETEQ.',
      metrics: partnerItems?.testing?.metrics || 'Automated ASO Sync • Lab Workflow',
      solutionUsed: 'H365 CHAEM + SAFETEQ Sync',
      logoType: 'svg',
      logoIcon: ShieldCheck,
      badgeColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
      accentColor: 'from-cyan-500 to-blue-600',
      verified: true
    },
    {
      id: 'moatize',
      name: partnerItems?.moatize?.name || 'Mina de Moatize',
      industryKey: 'mining',
      category: partnerItems?.moatize?.industry || 'Coal Extraction & Mineral Operations',
      location: partnerItems?.moatize?.location || 'Moatize, Tete, Mozambique',
      desc: partnerItems?.moatize?.desc || 'Contractor safety matrix validation, workforce health tracking, and zero-harm operational compliance across critical mining pits.',
      metrics: partnerItems?.moatize?.metrics || 'Contractor Gate Lockout • Zero-Harm',
      solutionUsed: 'SAFETEQ Critical Risk Management (CRM/LSR) + MicroFin',
      logoType: 'svg',
      logoIcon: HardHat,
      badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
      accentColor: 'from-emerald-500 to-teal-600',
      verified: true
    },
    {
      id: 'cln',
      name: partnerItems?.cln?.name || 'CLN (Corredor Logístico de Nacala)',
      industryKey: 'logistics',
      category: partnerItems?.cln?.industry || 'Rail & Port Logistics',
      location: partnerItems?.cln?.location || 'Nacala & Moatize, Mozambique',
      desc: partnerItems?.cln?.desc || 'Logistics workforce health surveillance, heavy transport safety credentials, and corridor occupational risk monitoring across rail & deepwater port networks.',
      metrics: partnerItems?.cln?.metrics || 'Rail & Port Telemetry • Transit ASO',
      solutionUsed: 'H365 CHAEM + SAFETEQ Telemetry',
      logoType: 'svg',
      logoIcon: Train,
      badgeColor: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10',
      accentColor: 'from-indigo-500 to-purple-600',
      verified: true
    }
  ];

  const filteredPartners = activeFilter === 'all' 
    ? partnerList 
    : partnerList.filter(p => p.industryKey === activeFilter);

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col font-sans selection:bg-blue-500/30">
      <PublicNavbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-6">
              <Award size={14} /> {t.publicHome?.partners?.title || 'Strategic Industrial & Institutional Partners'}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight uppercase">
              Industrial <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Partners</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
              {t.publicHome?.partners?.subtitle || 'Our systems power mission-critical operations, health networks, safety protocols, and supply chains for industry leaders and public infrastructure.'}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center relative overflow-hidden group hover:border-blue-500/40 transition-all">
              <div className="text-4xl font-black text-blue-400 mb-2">12,000+</div>
              <div className="text-xs font-black uppercase tracking-widest text-slate-400">
                {t.publicHome?.partners?.stats?.records || 'Safety Credentials Managed'}
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center relative overflow-hidden group hover:border-cyan-500/40 transition-all">
              <div className="text-4xl font-black text-cyan-400 mb-2">1,500+</div>
              <div className="text-xs font-black uppercase tracking-widest text-slate-400">
                {t.publicHome?.partners?.stats?.facilities || 'Health Facilities Digitized'}
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center relative overflow-hidden group hover:border-emerald-500/40 transition-all">
              <div className="text-4xl font-black text-emerald-400 mb-2">99.99%</div>
              <div className="text-xs font-black uppercase tracking-widest text-slate-400">
                {t.publicHome?.partners?.stats?.reliability || 'Operational Uptime'}
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all border ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/30'
                  : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {t.publicHome?.partners?.filters?.all || 'All Partners'} ({partnerList.length})
            </button>
            <button
              onClick={() => setActiveFilter('mining')}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all border ${
                activeFilter === 'mining'
                  ? 'bg-orange-600 text-white border-orange-500 shadow-lg shadow-orange-600/30'
                  : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {t.publicHome?.partners?.filters?.mining || 'Mining & Energy'} (2)
            </button>
            <button
              onClick={() => setActiveFilter('testing')}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all border ${
                activeFilter === 'testing'
                  ? 'bg-cyan-600 text-white border-cyan-500 shadow-lg shadow-cyan-600/30'
                  : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {t.publicHome?.partners?.filters?.testing || 'Testing & Medical'} (1)
            </button>
            <button
              onClick={() => setActiveFilter('logistics')}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all border ${
                activeFilter === 'logistics'
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30'
                  : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {t.publicHome?.partners?.filters?.logistics || 'Rail & Port Logistics'} (1)
            </button>
          </div>

          {/* Partner Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {filteredPartners.map((partner) => {
              const LogoIcon = partner.logoIcon;
              return (
                <div 
                  key={partner.id}
                  className="bg-slate-900/60 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-8 md:p-10 flex flex-col justify-between hover:border-blue-500/50 hover:bg-slate-900/80 transition-all duration-500 group relative overflow-hidden shadow-2xl"
                >
                  {/* Background Glow Accent */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${partner.accentColor} opacity-5 rounded-full blur-3xl group-hover:opacity-15 transition-opacity`}></div>

                  <div>
                    {/* Header Row: Logo & Category Badge */}
                    <div className="flex items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
                      {/* Logo Container */}
                      <div className="flex items-center gap-4">
                        {partner.logoType === 'image' ? (
                          <div className="w-20 h-20 bg-slate-800 rounded-2xl p-3 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform bg-white/5">
                            <img 
                              src={partner.logoUrl} 
                              alt={partner.name}
                              className="max-h-full max-w-full object-contain filter drop-shadow"
                            />
                          </div>
                        ) : (
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${partner.accentColor} p-0.5 shadow-lg group-hover:scale-105 transition-transform`}>
                            <div className="w-full h-full bg-slate-950 rounded-[0.9rem] flex items-center justify-center">
                              {LogoIcon && <LogoIcon size={36} className="text-white" />}
                            </div>
                          </div>
                        )}

                        <div>
                          <div className="flex items-center gap-2">
                            <h2 className="text-2xl font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                              {partner.name}
                            </h2>
                            {partner.verified && (
                              <CheckCircle2 size={18} className="text-blue-400 shrink-0" />
                            )}
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mt-1">
                            <MapPin size={12} className="text-slate-500" />
                            {partner.location}
                          </div>
                        </div>
                      </div>

                      {/* Category Pill */}
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${partner.badgeColor}`}>
                        {partner.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium mb-8">
                      {partner.desc}
                    </p>
                  </div>

                  {/* Footer Stats & Solution Tag */}
                  <div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 mb-6 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                        <Zap size={14} className="text-yellow-400" />
                        <span>{t.publicHome?.partners?.labels?.integration || 'Integration:'} <strong className="text-white">{partner.solutionUsed}</strong></span>
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20">
                        {partner.metrics}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        {t.publicHome?.partners?.labels?.activePartner || 'Status: ACTIVE PARTNER'}
                      </span>
                      <button 
                        onClick={() => navigate('/portfolio')}
                        className="text-cyan-400 hover:text-white flex items-center gap-1 font-sans font-bold transition-colors group-hover:translate-x-1"
                      >
                        {t.publicHome?.partners?.labels?.viewSpecs || 'View Ecosystem Specs'} <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Join Ecosystem CTA */}
          <section className="relative text-center bg-gradient-to-r from-blue-900/60 via-slate-900 to-indigo-900/60 p-12 md:p-20 rounded-[3.5rem] border border-blue-500/30 overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-600/40">
                <Globe2 size={32} />
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
                {t.publicHome?.partners?.cta?.title || 'Join Our Strategic Ecosystem'}
              </h2>
              <p className="text-slate-300 text-lg md:text-xl font-medium mb-10 leading-relaxed">
                {t.publicHome?.partners?.cta?.desc || "Partner with Digitec to digitize your operations, enhance safety compliance, or connect to Mozambique's premier digital health and educational infrastructure."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-blue-600 text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95"
                >
                  {t.publicHome?.partners?.cta?.becomePartner || 'Become a Partner'}
                </button>
                <button 
                  onClick={() => navigate('/portfolio')}
                  className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all hover:border-white/20 active:scale-95"
                >
                  {t.publicHome?.partners?.cta?.exploreSolutions || 'Explore All Solutions'}
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default PartnersPage;
