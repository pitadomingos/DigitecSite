import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, GraduationCap, Activity, Wallet, Monitor, 
  Sparkles, CheckCircle2, ArrowRight, Globe2
} from 'lucide-react';
import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ap = t.publicHome?.aboutPage;

  const solutions = [
    { 
      icon: Activity, 
      title: ap?.solutions?.h365?.title || 'H365 Digital Health Ecosystem', 
      tag: ap?.solutions?.h365?.tag || 'National Health Infra',
      color: 'rose',
      desc: ap?.solutions?.h365?.desc || t.publicHome?.about?.cards?.h365 || 'H365 Digital Health Ecosystem — Sovereign healthcare infrastructure uniting H365 SaaS (Hospital Command Center), CHAEM (Occupational Health), and Patient Portal across 1,500+ facilities.',
      highlights: ap?.solutions?.h365?.highlights || ['28+ Clinical Modules', 'CHAEM 7-Step AMA', 'Master Patient Index (MPI)', 'Gemini 2.5 Flash AI Co-Pilot'],
      route: '/portfolio/h365'
    },
    { 
      icon: GraduationCap, 
      title: ap?.solutions?.edudesk?.title || 'EduDesk AI School Management', 
      tag: ap?.solutions?.edudesk?.tag || 'AI Education System',
      color: 'indigo',
      desc: ap?.solutions?.edudesk?.desc || t.publicHome?.about?.cards?.edudesk || 'EduDesk — All-in-one AI-powered School Management System empowering educators with AI lesson planning, test generation, admissions, and parent/student portals.',
      highlights: ap?.solutions?.edudesk?.highlights || ['AI Lesson Planner', 'AI Test Generator', 'Parent/Student Portal', 'Multi-School Governance'],
      route: '/portfolio/edudesk'
    },
    { 
      icon: ShieldCheck, 
      title: ap?.solutions?.safeteq?.title || 'SAFETEQ Enterprise Risk Management', 
      tag: ap?.solutions?.safeteq?.tag || 'Heavy Mining Safety',
      color: 'emerald',
      desc: ap?.solutions?.safeteq?.desc || t.publicHome?.about?.cards?.safeteq || 'SAFETEQ Enterprise Risk Management — Flagship compliance SaaS uniting 7 core modules: Onboarding & Mobilization, Training & Certifications, SafeSite, SSMA Ecosystem, EPI & Assets, Risk Strategy, and Baseline Risk.',
      highlights: ap?.solutions?.safeteq?.highlights || ['Critical Risk Standards (CRM/LSR)', 'Physical Gate Lockout', 'Zero-Harm Matrix', 'Contractor Verification'],
      route: '/portfolio/safeteq'
    },
    { 
      icon: Wallet, 
      title: ap?.solutions?.microfin?.title || 'MicroFin Financial Orchestration', 
      tag: ap?.solutions?.microfin?.tag || 'Contractor Fintech',
      color: 'cyan',
      desc: ap?.solutions?.microfin?.desc || t.publicHome?.about?.cards?.microfin || 'Automated financial orchestration for industrial contractor networks.',
      highlights: ap?.solutions?.microfin?.highlights || ['Contractor Payroll', 'Real-Time Clearing', 'Audit Logging', 'Tax & Compliance Sync'],
      route: '/portfolio/microfin'
    },
    { 
      icon: Monitor, 
      title: ap?.solutions?.bespoke?.title || 'Bespoke Enterprise Engineering', 
      tag: ap?.solutions?.bespoke?.tag || 'Custom Platforms',
      color: 'amber',
      desc: ap?.solutions?.bespoke?.desc || t.publicHome?.about?.cards?.websites || 'Precision-engineered portals for startups, residences, and individual companies.',
      highlights: ap?.solutions?.bespoke?.highlights || ['High-Fidelity Web/Mobile', 'API Microservices', 'Custom Analytics', 'Offline-First Sync'],
      route: '/portfolio'
    }
  ];

  const challenges = ap?.challenges || [
    {
      num: '01',
      title: 'Eliminating "O Atrito" (Clinical & Operational Friction)',
      desc: 'Replacing paper record fragmentation across 1,500+ healthcare facilities with H365 SaaS Command Center, 28+ clinical modules, Master Patient Index (MPI), and Gemini 2.5 Flash AI assistance.'
    },
    {
      num: '02',
      title: 'Eliminating "O Ponto Cego" (Workforce Blind Spots)',
      desc: 'Bridging industrial health & safety through CHAEM\'s 7-step digital AMA workflow across 6 key industrial sectors (Health, Mining, Construction, Transport, Food, Industry) and SAFETEQ RAC lockout matrices.'
    },
    {
      num: '03',
      title: 'Eliminating "A Desconexão" (Community Disconnection)',
      desc: 'Empowering citizens with direct Patient Portal access to medical records, and parents & students with EduDesk AI\'s unified engagement portal for fee tracking, gradebooks, and academic guidance.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col font-sans selection:bg-blue-500/30">
      <PublicNavbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-6">
              <Sparkles size={14} /> {ap?.badge || t.publicHome?.about?.title || 'Custom Software Engineering'}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight uppercase">
              {ap?.title || t.publicHome?.nav?.about || 'About'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digitec</span>
            </h1>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mb-8 shadow-lg shadow-blue-500/50"></div>
            <p className="text-xl text-slate-300 leading-relaxed font-medium">
              {ap?.subtitle || t.publicHome?.about?.subtitle || 'Digitec engineers bespoke digital ecosystems for national healthcare networks, educational institutions, heavy mining operators, and industrial contractor chains. We transform complex operational logic into mission-critical software.'}
            </p>
          </div>

          {/* Three Core Challenges We Eliminate */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {challenges.map((c: any, i: number) => {
              const borderColors = [
                'bg-rose-950/20 border-rose-500/20 bg-rose-500/20 text-rose-400 border-rose-500/30',
                'bg-indigo-950/20 border-indigo-500/20 bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
                'bg-cyan-950/20 border-cyan-500/20 bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
              ][i % 3].split(' ');
              
              return (
                <div key={i} className={`p-8 rounded-[2.5rem] ${borderColors[0]} border ${borderColors[1]} relative overflow-hidden`}>
                  <div className={`w-12 h-12 rounded-xl ${borderColors[2]} ${borderColors[3]} flex items-center justify-center font-black text-lg mb-6 border ${borderColors[4]}`}>
                    {c.num || `0${i+1}`}
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{c.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Solutions Inventory */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
                {ap?.suiteTitle || 'Our Sovereign'} <span className="text-cyan-400">{ap?.suiteHighlight || 'Software Suite'}</span>
              </h2>
              <p className="text-slate-400 text-base font-medium">
                {ap?.suiteDesc || t.publicHome?.capabilities?.desc || 'Tailored digital solutions built for Africa\'s most demanding enterprise environments.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, i) => (
                <div 
                  key={i} 
                  className="p-8 md:p-10 rounded-[2.5rem] bg-slate-900/60 border border-white/10 hover:bg-slate-900 hover:border-blue-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between shadow-2xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/30 group-hover:scale-110 transition-transform">
                        <solution.icon size={28} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                        {solution.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium mb-6">
                      {solution.desc}
                    </p>

                    <div className="space-y-2 mb-8">
                      {solution.highlights.map((item: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                          <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => navigate(solution.route)}
                    className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-600 hover:text-white text-slate-300 font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 group-hover:border-blue-500"
                  >
                    {ap?.viewSpecs || 'View Ecosystem Specs'} <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Core Philosophy Section & Stats */}
          <section className="p-10 md:p-20 rounded-[3.5rem] bg-gradient-to-br from-blue-950/60 via-slate-900 to-indigo-950/60 border border-white/15 relative overflow-hidden shadow-2xl">
             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-6">
                     <Globe2 size={12} /> {ap?.homegrown || 'Homegrown Excellence'}
                   </div>
                   <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                     {ap?.beyondCode || t.publicHome?.about?.beyondCode || 'Beyond Code.'} <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                       {ap?.digitalIntelligence || t.publicHome?.about?.digitalIntelligence || 'Digital Intelligence.'}
                     </span>
                   </h2>
                   <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 font-medium">
                     {ap?.beyondDesc || 'We don\'t just build software applications — we design resilient, sovereign digital infrastructure tailored to Mozambique\'s unique healthcare requirements, industrial workforce safety standards, educational goals, and enterprise supply chain demands.'}
                   </p>

                   <div className="flex flex-wrap gap-4">
                     <button 
                       onClick={() => navigate('/mission')}
                       className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-blue-600/30"
                     >
                       {ap?.strategicMission || 'Our Strategic Mission'}
                     </button>
                     <button 
                       onClick={() => navigate('/team')}
                       className="bg-white/5 border border-white/10 text-slate-200 px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
                     >
                       {ap?.leadershipTeam || 'Leadership Team'}
                     </button>
                   </div>
                </div>

                <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                   <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all">
                      <div className="text-4xl font-black text-cyan-400 mb-1">{ap?.stats?.expNum || '10+'}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{ap?.stats?.expLabel || 'Years Industry Expertise'}</div>
                   </div>
                   <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-rose-500/40 transition-all">
                      <div className="text-4xl font-black text-rose-400 mb-1">{ap?.stats?.facNum || '1,500+'}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{ap?.stats?.facLabel || 'Health Facilities Digitized'}</div>
                   </div>
                   <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all">
                      <div className="text-4xl font-black text-emerald-400 mb-1">{ap?.stats?.usersNum || '50k+'}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{ap?.stats?.usersLabel || 'Active System Users'}</div>
                   </div>
                   <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-indigo-500/40 transition-all">
                      <div className="text-4xl font-black text-indigo-400 mb-1">{ap?.stats?.uptimeNum || '99.99%'}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{ap?.stats?.uptimeLabel || 'System Availability'}</div>
                   </div>
                </div>
             </div>
          </section>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default AboutPage;
