
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  GraduationCap, Activity, Wallet, Wrench, CreditCard, 
  ChevronRight, Zap, ShieldCheck, Monitor, Radio
} from 'lucide-react';
import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { useLanguage } from '../contexts/LanguageContext';

const PortfolioPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 'safeteq',
      name: t.portfolio.items.safeteq.name,
      category: t.portfolio.items.safeteq.category,
      description: t.portfolio.items.safeteq.desc,
      icon: ShieldCheck,
      color: 'blue',
      gradient: 'from-blue-600 to-indigo-700',
      industries: [
        t.portfolio.industries.mining,
        t.portfolio.industries.oilGas,
        t.portfolio.industries.ports,
        t.portfolio.industries.manufacturing
      ],
      tags: [t.portfolio.tags.iot, t.portfolio.tags.saas, t.portfolio.tags.security, t.portfolio.tags.offline],
      badgeLabel: t.portfolio.labels.flagship
    },
    {
        id: 'minesite',
        name: t.portfolio.items.minesite.name,
        category: t.portfolio.items.minesite.category,
        description: t.portfolio.items.minesite.desc,
        icon: Radio,
        color: 'orange',
        gradient: 'from-orange-600 to-red-700',
        industries: [t.portfolio.industries.mining, t.portfolio.industries.industry],
        tags: [t.portfolio.tags.iot, t.portfolio.tags.telemetry, t.portfolio.tags.security],
        badgeLabel: t.portfolio.labels.iotSolution
    },
    {
        id: 'amtecheng',
        name: t.portfolio.items.amtecheng.name,
        category: t.portfolio.items.amtecheng.category,
        description: t.portfolio.items.amtecheng.desc,
        icon: Monitor,
        color: 'slate',
        gradient: 'from-slate-700 to-slate-900',
        industries: [t.portfolio.industries.engineering, t.portfolio.industries.industry],
        tags: [t.portfolio.tags.smb, t.portfolio.tags.seo, t.portfolio.tags.cloud],
        badgeLabel: t.portfolio.labels.webSolution
    },
    {
      id: 'edudesk',
      name: t.portfolio.items.edudesk.name,
      category: t.portfolio.items.edudesk.category,
      description: t.portfolio.items.edudesk.desc,
      icon: GraduationCap,
      color: 'indigo',
      gradient: 'from-indigo-500 to-blue-500',
      industries: [t.portfolio.industries.education, t.portfolio.industries.gov],
      tags: [t.portfolio.tags.scalable, t.portfolio.tags.secure, t.portfolio.tags.cloud],
      badgeLabel: t.portfolio.labels.ready
    },
    {
      id: 'h365',
      name: t.portfolio.items.h365.name,
      category: t.portfolio.items.h365.category,
      description: t.portfolio.items.h365.desc,
      icon: Activity,
      color: 'rose',
      gradient: 'from-rose-500 to-pink-500',
      industries: [t.portfolio.industries.healthcare, t.portfolio.industries.clinical],
      tags: [t.portfolio.tags.scalable, t.portfolio.tags.secure, t.portfolio.tags.cloud],
      badgeLabel: t.portfolio.labels.ready
    },
    {
      id: 'microfin',
      name: t.portfolio.items.microfin.name,
      category: t.portfolio.items.microfin.category,
      description: t.portfolio.items.microfin.desc,
      icon: Wallet,
      color: 'amber',
      gradient: 'from-amber-500 to-orange-500',
      industries: [t.portfolio.industries.finance, t.portfolio.industries.banking],
      tags: [t.portfolio.tags.scalable, t.portfolio.tags.secure, t.portfolio.tags.cloud],
      badgeLabel: t.portfolio.labels.ready
    },
    {
      id: 'jactrac',
      name: t.portfolio.items.jactrac.name,
      category: t.portfolio.items.jactrac.category,
      description: t.portfolio.items.jactrac.desc,
      icon: Wrench,
      color: 'orange',
      gradient: 'from-orange-600 to-red-500',
      industries: [t.portfolio.industries.logistics, t.portfolio.industries.industry],
      tags: [t.portfolio.tags.scalable, t.portfolio.tags.secure, t.portfolio.tags.cloud],
      badgeLabel: t.portfolio.labels.ready
    },
    {
      id: 'swiftpos',
      name: t.portfolio.items.swiftpos.name,
      category: t.portfolio.items.swiftpos.category,
      description: t.portfolio.items.swiftpos.desc,
      icon: CreditCard,
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-500',
      industries: [t.portfolio.industries.retail, t.portfolio.industries.security],
      tags: [t.portfolio.tags.scalable, t.portfolio.tags.secure, t.portfolio.tags.cloud],
      badgeLabel: t.portfolio.labels.ready
    },
    {
      id: 'smartres',
      name: t.portfolio.items.smartres.name,
      category: t.portfolio.items.smartres.category,
      description: t.portfolio.items.smartres.desc,
      icon: Monitor,
      color: 'cyan',
      gradient: 'from-cyan-500 to-blue-600',
      industries: [t.portfolio.industries.residential, t.portfolio.industries.security],
      tags: [t.portfolio.tags.iot, t.portfolio.tags.scalable, t.portfolio.tags.secure],
      badgeLabel: t.portfolio.labels.ready
    }
  ];

  return (
    <div className="font-sans text-slate-300 bg-[#020617] min-h-screen flex flex-col selection:bg-cyan-500/30">
      <PublicNavbar />
      
      {/* --- INDUSTRIAL HEADER --- */}
      <header className="pt-40 pb-24 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/10 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <Zap size={12} fill="currentColor" /> {t.portfolio.hero.badge}
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
                Ecosystem <br/><span className="text-cyan-500">Inventory</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl font-medium">
                {t.portfolio.hero.desc}
              </p>
            </div>
            
            <div className="hidden lg:flex flex-col items-end text-right border-l border-white/10 pl-8">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Global Status</div>
              <div className="text-2xl font-mono text-cyan-400 font-bold">OPERATIONAL</div>
              <div className="flex gap-1 mt-2">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className={`w-1 h-4 ${i < 10 ? 'bg-cyan-500' : 'bg-white/10'}`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- PORTFOLIO INVENTORY LIST --- */}
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-1">
            {/* Table Header - Visible on MD+ */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500">
              <div className="col-span-1">ID</div>
              <div className="col-span-4">System Name / Specification</div>
              <div className="col-span-3">Target Industry</div>
              <div className="col-span-2">Deployment Status</div>
              <div className="col-span-2 text-right">Action</div>
            </div>

            {products.map((product, index) => (
              <div 
                key={product.id}
                className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-8 items-center border-b border-white/5 hover:bg-white/[0.02] transition-colors"
              >
                {/* Technical ID */}
                <div className="col-span-1 font-mono text-xs text-slate-600 group-hover:text-cyan-500 transition-colors">
                  #{product.id.substring(0, 3).toUpperCase()}-{index + 101}
                </div>

                {/* System Name & Description */}
                <div className="col-span-1 md:col-span-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white shrink-0 shadow-lg shadow-black/20`}>
                      <product.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{product.name}</h3>
                      <p className="text-sm text-slate-500 line-clamp-1 mt-0.5">{product.category}</p>
                    </div>
                  </div>
                </div>

                {/* Target Industry */}
                <div className="col-span-1 md:col-span-3">
                  <div className="flex flex-wrap gap-1.5">
                    {product.industries?.slice(0, 2).map(ind => (
                      <span key={ind} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] font-black uppercase tracking-wider text-slate-400">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="col-span-1 md:col-span-2 flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${product.id === 'safeteq' ? 'bg-cyan-500 animate-pulse' : 'bg-emerald-500'}`}></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{product.badgeLabel}</span>
                </div>

                {/* Technical Action */}
                <div className="col-span-1 md:col-span-2 text-right">
                  <button 
                    onClick={() => navigate(`/portfolio/${product.id}`)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded font-bold text-xs hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all group/btn"
                  >
                    {t.portfolio.btnCaseStudy}
                    <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* --- INDUSTRIAL FOOTER CTA --- */}
      <section className="py-32 bg-[#050a1f] border-t border-white/5 relative">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500/30 rounded flex items-center justify-center mx-auto mb-8">
            <Zap size={24} className="text-cyan-400" fill="currentColor" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight uppercase leading-none">
            Scale Your <br/><span className="text-cyan-500">Operation</span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">
            {t.portfolio.footer.desc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-cyan-900/20"
            >
               {t.portfolio.footer.btn}
            </button>
            <button 
              onClick={() => navigate('/mission')}
              className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded font-black text-sm uppercase tracking-widest transition-all"
            >
               Our Philosophy
            </button>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
};

export default PortfolioPage;
