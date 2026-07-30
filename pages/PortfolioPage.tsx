import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  GraduationCap, Activity, Wallet, Wrench, CreditCard, 
  ChevronRight, Zap, ShieldCheck, Monitor, Radio, ExternalLink,
  Sparkles, Search, Filter, LayoutGrid, List, CheckCircle2,
  Server, Cpu, ArrowRight, FileText, Lock
} from 'lucide-react';
import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { useLanguage } from '../contexts/LanguageContext';

const PortfolioPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const flagshipIds = ['h365', 'safeteq', 'edudesk'];

  const products = [
    {
      id: 'h365',
      name: t.portfolio?.items?.h365?.name || 'H365 Digital Health Ecosystem',
      category: t.portfolio?.items?.h365?.category || 'National Digital Health Infrastructure',
      group: 'healthEd',
      description: t.portfolio?.items?.h365?.desc || 'Unified healthcare infrastructure uniting H365 SaaS, CHAEM 7-Step Occupational Health, and Patient Portal across 1,500+ facilities.',
      icon: Activity,
      color: 'rose',
      gradient: 'from-rose-500 via-pink-600 to-red-600',
      industries: [
        t.portfolio?.industries?.healthcare || 'Healthcare',
        t.portfolio?.industries?.gov || 'Government',
        t.portfolio?.industries?.clinical || 'Clinical'
      ],
      tags: ['H365 SaaS', 'CHAEM 7-Step', 'Gemini 2.5 AI', 'Patient Portal'],
      badgeLabel: t.portfolio?.labels?.flagship || 'Sovereign Flagship',
      stats: '1,500+ Health Facilities • MISAU DHIS2 & L-LAN Active',
      appUrl: 'https://h365-new.vercel.app/',
      isFlagship: true
    },
    {
      id: 'safeteq',
      name: t.portfolio?.items?.safeteq?.name || 'SAFETEQ Enterprise Risk Management',
      category: t.portfolio?.items?.safeteq?.category || 'Workforce Mobilization & Risk SaaS',
      group: 'industrial',
      description: t.portfolio?.items?.safeteq?.desc || 'All-in-one Risk Management and Workforce Mobilization SaaS unifying 7 core modules: Onboarding & Mobilization, Training & Certifications, SafeSite Incident Management, SSMA Ecosystem (ISO 45001), EPI & Asset Tracking, Master Strategy Risk Management, and Baseline Risk.',
      icon: ShieldCheck,
      color: 'blue',
      gradient: 'from-blue-600 via-indigo-600 to-cyan-600',
      industries: [
        t.portfolio?.industries?.mining || 'Mining',
        t.portfolio?.industries?.oilGas || 'Oil & Gas',
        t.portfolio?.industries?.ports || 'Ports',
        t.portfolio?.industries?.manufacturing || 'Manufacturing'
      ],
      tags: ['Workforce Mobilization', 'Gate Security QR', 'SafeSite SSMA', 'Multi-Tenant SaaS'],
      badgeLabel: t.portfolio?.labels?.flagship || 'Sovereign Flagship',
      stats: '6,000+ Workers • Gate Security • SafeSite SSMA',
      appUrl: 'https://rac-s.vercel.app',
      isFlagship: true
    },
    {
      id: 'edudesk',
      name: t.portfolio?.items?.edudesk?.name || 'EduDesk AI School Management',
      category: t.portfolio?.items?.edudesk?.category || 'AI Education Platform',
      group: 'healthEd',
      description: t.portfolio?.items?.edudesk?.desc || 'All-in-one AI school management platform integrating admissions, academics, automated lesson planning, test generator, parent & student portals, and fee orchestration.',
      icon: GraduationCap,
      color: 'indigo',
      gradient: 'from-indigo-500 via-blue-600 to-cyan-500',
      industries: [
        t.portfolio?.industries?.education || 'Education',
        t.portfolio?.industries?.gov || 'Public Institutions'
      ],
      tags: ['Lesson AI', 'Test Gen', 'Admissions', 'Parent Portal'],
      badgeLabel: t.portfolio?.labels?.flagship || 'Sovereign Flagship',
      stats: 'All-in-One AI • Lessons, Tests & Parent Portal',
      isFlagship: true
    },
    {
      id: 'minesite',
      name: t.portfolio?.items?.minesite?.name || 'Minesite Telemetry Daemon',
      category: t.portfolio?.items?.minesite?.category || 'IoT Fleet Telemetry',
      group: 'industrial',
      description: t.portfolio?.items?.minesite?.desc || 'Advanced IoT monitoring for heavy mining fleets. Tracks Fire Suppression Systems, Lincoln AutoLub performance, and critical ECM CAN-bus parameters.',
      icon: Radio,
      color: 'orange',
      gradient: 'from-orange-600 to-red-600',
      industries: [
        t.portfolio?.industries?.mining || 'Mining',
        t.portfolio?.industries?.industry || 'Heavy Industry'
      ],
      tags: ['CAN-bus', 'ECM Telemetry', 'AutoLub', 'Fire Suppression'],
      badgeLabel: t.portfolio?.labels?.iotSolution || 'IoT Telemetry'
    },
    {
      id: 'microfin',
      name: t.portfolio?.items?.microfin?.name || 'MicroFin Operations',
      category: t.portfolio?.items?.microfin?.category || 'Workforce Financial Control',
      group: 'enterprise',
      description: t.portfolio?.items?.microfin?.desc || 'Automated micro-lending, payroll orchestration, and compliance auditing for large-scale industrial contractor workforces.',
      icon: Wallet,
      color: 'amber',
      gradient: 'from-amber-500 to-orange-500',
      industries: [
        t.portfolio?.industries?.finance || 'Finance',
        t.portfolio?.industries?.banking || 'Corporate Banking'
      ],
      tags: ['Payroll Sync', 'Contractor Audit', 'Micro-Lending', 'Ledger'],
      badgeLabel: t.portfolio?.labels?.ready || 'Production Active'
    },
    {
      id: 'jactrac',
      name: t.portfolio?.items?.jactrac?.name || 'JacTrac Mini',
      category: t.portfolio?.items?.jactrac?.category || 'Hydraulic Asset Tracking',
      group: 'industrial',
      description: t.portfolio?.items?.jactrac?.desc || 'Specialized Industrial IoT for tracking hydraulic hose installation lifecycles and predicting catastrophic component failure before downtime.',
      icon: Wrench,
      color: 'orange',
      gradient: 'from-orange-600 to-red-500',
      industries: [
        t.portfolio?.industries?.logistics || 'Logistics',
        t.portfolio?.industries?.industry || 'Industrial Maintenance'
      ],
      tags: ['Hose Life IoT', 'Failure Prediction', 'Barcode Audit'],
      badgeLabel: t.portfolio?.labels?.ready || 'Production Active'
    },
    {
      id: 'swiftpos',
      name: t.portfolio?.items?.swiftpos?.name || 'SwiftPOS Retail',
      category: t.portfolio?.items?.swiftpos?.category || 'Inventory Security & POS',
      group: 'enterprise',
      description: t.portfolio?.items?.swiftpos?.desc || 'Point of Sale integrated with CCTV surveillance, multi-location inventory clearing, and warehouse security alarms.',
      icon: CreditCard,
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-500',
      industries: [
        t.portfolio?.industries?.retail || 'Retail',
        t.portfolio?.industries?.security || 'Warehouse Supply'
      ],
      tags: ['CCTV POS', 'Multi-Store', 'Real-time Clearing'],
      badgeLabel: t.portfolio?.labels?.ready || 'Production Active'
    },
    {
      id: 'amtecheng',
      name: t.portfolio?.items?.amtecheng?.name || 'Amtecheng Engineering Portal',
      category: t.portfolio?.items?.amtecheng?.category || 'Engineering Portal',
      group: 'enterprise',
      description: t.portfolio?.items?.amtecheng?.desc || 'A high-conversion corporate ecosystem for leading engineering firms. Focused on lead generation, bid management, and industrial project showcasing.',
      icon: Monitor,
      color: 'slate',
      gradient: 'from-slate-700 to-slate-900',
      industries: [
        t.portfolio?.industries?.engineering || 'Engineering',
        t.portfolio?.industries?.industry || 'Infrastructure'
      ],
      tags: ['Corporate Portal', 'Bid Management', 'Lead Engine'],
      badgeLabel: t.portfolio?.labels?.webSolution || 'Corporate Portal'
    },
    {
      id: 'smartres',
      name: t.portfolio?.items?.smartres?.name || 'HomeNexus Security',
      category: t.portfolio?.items?.smartres?.category || 'Residential Automation',
      group: 'industrial',
      description: t.portfolio?.items?.smartres?.desc || 'Custom smart home ecosystems for modern residences, unifying perimeter security, smart lighting, access control, and climate management.',
      icon: Monitor,
      color: 'cyan',
      gradient: 'from-cyan-500 to-blue-600',
      industries: [
        t.portfolio?.industries?.residential || 'Residential',
        t.portfolio?.industries?.security || 'Smart Access'
      ],
      tags: ['Smart Access', 'Perimeter IoT', 'Climate Control'],
      badgeLabel: t.portfolio?.labels?.ready || 'Production Active'
    }
  ];

  // Filter products by category tab and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = 
      activeCategory === 'all' ? true :
      activeCategory === 'flagship' ? product.isFlagship :
      product.group === activeCategory;

    const matchesSearch = searchQuery === '' ? true : (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return matchesCategory && matchesSearch;
  });

  const flagshipProducts = products.filter(p => p.isFlagship);

  return (
    <div className="font-sans text-slate-100 bg-slate-950 min-h-screen flex flex-col selection:bg-cyan-500/30 overflow-x-hidden">
      <PublicNavbar />
      
      {/* --- HERO HEADER --- */}
      <header className="pt-36 pb-20 border-b border-white/5 relative overflow-hidden bg-slate-950">
        {/* Dynamic Background Glows */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '36px 36px' }}></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/15 via-cyan-500/15 to-indigo-600/15 blur-[140px] pointer-events-none rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-black uppercase tracking-widest mb-6 backdrop-blur-md">
                <Sparkles size={14} /> 
                <span>{t.portfolio?.hero?.badge || 'Enterprise Sovereign Ecosystem'}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 tracking-tight uppercase leading-none">
                {t.portfolio?.hero?.title1 || 'Sovereign Systems &'}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                  {t.portfolio?.hero?.titleAccent || 'Industrial Portfolio'}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium max-w-2xl">
                {t.portfolio?.hero?.desc || 'Production-ready, cloud-native, and offline-first software engines designed for national healthcare networks, industrial giants, and education systems.'}
              </p>
            </div>
            
            {/* Telemetry Operational Metrics Bar */}
            <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              <div className="text-left lg:text-right">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center lg:justify-end gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>{t.portfolio?.hero?.statusLabel || 'Ecosystem Status'}</span>
                </div>
                <div className="text-2xl font-mono text-cyan-400 font-extrabold">{t.portfolio?.hero?.statusValue || '99.98% OPERATIONAL'}</div>
              </div>

              <div className="flex items-center gap-4 text-xs font-bold text-slate-300 bg-white/5 border border-white/10 px-4 py-2.5 rounded-2xl backdrop-blur-md">
                <div className="flex items-center gap-1.5">
                  <Cpu size={14} className="text-blue-400" />
                  <span>{t.portfolio?.hero?.activeDeployments || '8+ Platforms'}</span>
                </div>
                <div className="h-4 w-px bg-white/10"></div>
                <div className="flex items-center gap-1.5">
                  <Server size={14} className="text-emerald-400" />
                  <span>{t.portfolio?.hero?.totalFacilities || '1,500+ Facilities'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- FEATURED FLAGSHIP SPOTLIGHT SHOWCASE --- */}
      <section className="py-16 bg-slate-900/40 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              <h2 className="text-xs font-black uppercase tracking-widest text-cyan-400">
                Sovereign Flagship Platforms
              </h2>
            </div>
            <button
              onClick={() => navigate('/launchpad')}
              className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Access Client Hub Launchpad</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {flagshipProducts.map((app) => {
              const Icon = app.icon;
              return (
                <div 
                  key={app.id}
                  className="group relative bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-[2.5rem] p-8 transition-all duration-500 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${app.gradient}`}></div>
                  <div className={`absolute -right-16 -top-16 w-40 h-40 bg-gradient-to-br ${app.gradient} rounded-full blur-3xl opacity-15 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}></div>

                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center text-white shadow-lg shadow-black/50 transform group-hover:scale-105 transition-transform duration-500`}>
                        <Icon size={28} />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        {app.badgeLabel}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest mb-1">{app.category}</div>
                    <h3 className="text-2xl font-black text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">{app.name}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                      {app.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {app.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-bold px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <div className="text-[11px] font-mono font-bold text-slate-300 flex items-center gap-2 mb-6 bg-slate-900/80 p-2.5 rounded-xl border border-white/5">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                      <span className="truncate">{app.stats}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      {app.appUrl ? (
                        <a
                          href={app.appUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 py-3 px-4 rounded-xl bg-gradient-to-r ${app.gradient} hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95`}
                        >
                          <span>Launch App</span>
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <button
                          onClick={() => navigate('/launchpad')}
                          className={`flex-1 py-3 px-4 rounded-xl bg-gradient-to-r ${app.gradient} hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95`}
                        >
                          <span>Client Hub</span>
                          <ArrowRight size={14} />
                        </button>
                      )}

                      <button
                        onClick={() => navigate(`/portfolio/${app.id}`)}
                        className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider border border-white/10 flex items-center justify-center gap-1.5 transition-all"
                      >
                        <FileText size={14} />
                        <span>Specs</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- SEARCH, FILTER & VIEW CONTROLS --- */}
      <section className="py-10 bg-slate-950 sticky top-[72px] z-20 border-b border-white/10 backdrop-blur-xl bg-slate-950/90">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {[
              { id: 'all', label: t.portfolio?.filters?.all || 'All Systems' },
              { id: 'flagship', label: t.portfolio?.filters?.flagship || 'Flagship Sovereign' },
              { id: 'industrial', label: t.portfolio?.filters?.industrial || 'Industrial & Safety' },
              { id: 'healthEd', label: t.portfolio?.filters?.healthEd || 'Healthcare & EdTech' },
              { id: 'enterprise', label: t.portfolio?.filters?.enterprise || 'Enterprise & Finance' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveCategory(filter.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${
                  activeCategory === filter.id 
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/20 font-black' 
                    : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Search Bar & View Mode Switcher */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <div className="relative flex-1 md:w-72">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.portfolio?.searchPlaceholder || 'Search platforms...'}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                title="Grid View"
              >
                <LayoutGrid size={16} />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'table' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                title="Table View"
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- ALL PRODUCTS MAIN CONTAINER --- */}
      <main className="flex-grow py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-24 bg-slate-900/30 rounded-3xl border border-slate-800">
              <Filter size={48} className="mx-auto text-slate-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No systems match your filter criteria</h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">Try selecting a different category tab or clearing your search input query.</p>
              <button
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="px-6 py-2.5 bg-cyan-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-cyan-400 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            /* VISUAL GRID VIEW */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const Icon = product.icon;
                return (
                  <div
                    key={product.id}
                    className="group bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-500/5 hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div>
                      {/* Top Bar */}
                      <div className="flex justify-between items-start mb-6">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white shadow-lg shadow-black/30 group-hover:scale-105 transition-transform`}>
                          <Icon size={24} />
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-slate-800 text-slate-300 border border-slate-700">
                          {product.badgeLabel}
                        </span>
                      </div>

                      {/* Header */}
                      <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold mb-1">
                        {product.category}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed mb-6 line-clamp-3">
                        {product.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {product.tags.map((tag, tidx) => (
                          <span key={tidx} className="text-[9px] font-bold px-2 py-0.5 bg-white/5 border border-white/10 rounded text-slate-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-5 border-t border-slate-800 flex items-center gap-2">
                      {product.appUrl && (
                        <a
                          href={product.appUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 border border-cyan-500/30 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all"
                          title="Open Application"
                        >
                          <ExternalLink size={14} />
                          <span>App</span>
                        </a>
                      )}
                      <button
                        onClick={() => navigate(`/portfolio/${product.id}`)}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider border border-white/10 flex items-center justify-center gap-2 transition-all"
                      >
                        <span>{t.portfolio?.btnCaseStudy || 'View Specs'}</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* TECHNICAL TABLE VIEW */
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-950/60">
                <div className="col-span-1">{t.portfolio?.labels?.id || 'ID'}</div>
                <div className="col-span-4">{t.portfolio?.labels?.system || 'System Name'}</div>
                <div className="col-span-3">{t.portfolio?.labels?.industry || 'Sector'}</div>
                <div className="col-span-2">{t.portfolio?.labels?.status || 'Status'}</div>
                <div className="col-span-2 text-right">{t.portfolio?.labels?.action || 'Actions'}</div>
              </div>

              <div className="divide-y divide-slate-800/60">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="col-span-1 font-mono text-xs text-slate-500 font-bold">
                      #{product.id.substring(0, 3).toUpperCase()}-{100 + index}
                    </div>

                    <div className="col-span-1 md:col-span-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white shrink-0 shadow-md`}>
                          <product.icon size={20} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white hover:text-cyan-400 transition-colors cursor-pointer" onClick={() => navigate(`/portfolio/${product.id}`)}>
                            {product.name}
                          </h4>
                          <span className="text-xs text-slate-400 block font-mono">{product.category}</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                      <div className="flex flex-wrap gap-1">
                        {product.industries?.map(ind => (
                          <span key={ind} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] font-bold uppercase tracking-wider text-slate-400">
                            {ind}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">{product.badgeLabel}</span>
                    </div>

                    <div className="col-span-1 md:col-span-2 flex items-center justify-end gap-2">
                      {product.appUrl && (
                        <a
                          href={product.appUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-slate-950 transition-colors"
                          title="Launch Live App"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                      <button
                        onClick={() => navigate(`/portfolio/${product.id}`)}
                        className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-all"
                      >
                        <span>Specs</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* --- INDUSTRIAL ARCHITECTURE & SLA FOOTER CTA --- */}
      <section className="py-24 bg-gradient-to-r from-blue-950/60 via-slate-950 to-indigo-950/60 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-cyan-400 shadow-xl shadow-cyan-500/10">
            <Zap size={28} fill="currentColor" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase leading-none">
            Scale Your Operational <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Infrastructure</span>
          </h2>

          <p className="text-slate-300 text-base md:text-lg mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
            {t.portfolio?.footer?.desc || 'Digitec engineers bespoke enterprise software, offline-first L-LAN mesh systems, and dedicated SLA contracts for mining, healthcare, and education platforms.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 text-slate-950 font-black text-xs uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-cyan-500/20 active:scale-95 flex items-center justify-center gap-2"
            >
               <Zap size={16} fill="currentColor" />
               <span>{t.portfolio?.footer?.btn || 'Contact Solutions Architect'}</span>
            </button>
            <button 
              onClick={() => navigate('/launchpad')}
              className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all backdrop-blur-md flex items-center justify-center gap-2"
            >
               <span>Client Hub Launchpad</span>
               <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
};

export default PortfolioPage;
