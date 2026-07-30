import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, CheckCircle2, ArrowRight, Activity, 
  GraduationCap, ShieldCheck, Cpu, Globe2, Layers, Compass
} from 'lucide-react';
import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { useLanguage } from '../contexts/LanguageContext';

const VisionPage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roadmapPhases = [
    {
      phase: 'Phase 01',
      title: 'Foundation & Core Ecosystem Deployment',
      timeline: 'Current Status (2026)',
      status: 'Active',
      color: 'rose',
      desc: 'Deploying H365 Digital Health Ecosystem (SaaS Command Center, CHAEM, Patient Portal) across 1,500+ health facilities, alongside EduDesk AI School Management and SAFETEQ Mining Safety.',
      milestones: [
        'H365 28+ Clinical Modules & CHAEM 7-Step AMA',
        'EduDesk AI Lesson Planner & Test Generator',
        'SAFETEQ RAC 01-11 Gate Lockout Verification',
        'Offline-First Local LAN (L-LAN) Infrastructure'
      ]
    },
    {
      phase: 'Phase 02',
      title: 'Federated Master Patient Index & Multi-School Governance',
      timeline: 'Q3 2026',
      status: 'In Progress',
      color: 'indigo',
      desc: 'Federating Master Patient Index (MPI) with National NID validation across 11 provinces, and scaling EduDesk AI to multi-school group management dashboards.',
      milestones: [
        'National Master Patient Index (MPI) Federation',
        'Multi-School Centralized Administrative Dashboard',
        'Real-time Telemetry Integration with CLN & Vulcan',
        'Enhanced Biometric Patient Verification'
      ]
    },
    {
      phase: 'Phase 03',
      title: 'National Federation & MISAU DHIS2 Integration',
      timeline: 'Q4 2026',
      status: 'Upcoming',
      color: 'cyan',
      desc: 'Real-time API integration with Mozambique Ministry of Health (MISAU) DHIS2 for automated epidemiological disease surveillance (Malaria, Cholera, Mpox).',
      milestones: [
        'Direct MISAU DHIS2 Epidemiological Sync',
        'Digital Medical Certificate NID Verification',
        'Automated Supply Chain & Pharmacy Restock Alerts',
        'Cross-Sector Occupational Health Analytics'
      ]
    },
    {
      phase: 'Phase 04',
      title: 'Predictive AI & Autonomous Governance',
      timeline: '2027+',
      status: 'Target',
      color: 'emerald',
      desc: 'Deploying Gemini-powered predictive models for early-warning disease outbreak detection, hospital beds/resource optimization, and AI personalized student tutoring.',
      milestones: [
        'Predictive Epidemic Outbreak Early Warning System',
        'Gemini-Driven Hospital Capacity Optimization',
        'Adaptive AI Student Tutoring Engine',
        'Zero-Latency Sovereign Cloud Sync'
      ]
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
              <Compass size={14} /> {t.publicHome.vision.title || 'Our Vision'}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight uppercase">
              Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">Sovereign Digital Infrastructure</span>
            </h1>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mb-8 shadow-lg shadow-blue-500/50"></div>
            <p className="text-xl text-slate-300 leading-relaxed font-medium">
              We are bridging physical operations with intelligent, offline-resilient, AI-empowered digital ecosystems tailored for healthcare networks, education systems, heavy industry, and enterprise logistics.
            </p>
          </div>

          {/* Strategic Goals Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="p-8 rounded-[2.5rem] bg-slate-900/60 border border-white/10 hover:border-blue-500/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-black mb-6 border border-blue-500/30">
                <Globe2 size={24} />
              </div>
              <h3 className="text-xl font-black text-white mb-3">01. Eliminate Operational Friction</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Unifying fragmented legacy data into single, immutable digital records across healthcare facilities, schools, and industrial sites.
              </p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-slate-900/60 border border-white/10 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center font-black mb-6 border border-cyan-500/30">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-black text-white mb-3">02. AI-Assistive Governance</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Empowering doctors with Gemini 2.5 Flash clinical assistance, teachers with AI lesson generators, and safety officers with automated RAC gate lockouts.
              </p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-slate-900/60 border border-white/10 hover:border-indigo-500/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-black mb-6 border border-indigo-500/30">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-black text-white mb-3">03. Homegrown Global Standards</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Delivering world-class software engineered in Mozambique to empower African enterprises and global industrial operators.
              </p>
            </div>
          </div>

          {/* Evolutionary Roadmap */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20 inline-block mb-3">
                Strategic Horizon
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                Technology Roadmap
              </h2>
            </div>

            <div className="space-y-8">
              {roadmapPhases.map((phase, idx) => (
                <div 
                  key={idx}
                  className="p-8 md:p-10 rounded-[2.5rem] bg-slate-900/80 border border-white/10 hover:border-blue-500/40 transition-all duration-500 relative overflow-hidden shadow-2xl"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-blue-600 text-white shadow-lg">
                        {phase.phase}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                        {phase.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-slate-400">{phase.timeline}</span>
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {phase.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-base leading-relaxed font-medium mb-8 max-w-4xl">
                    {phase.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {phase.milestones.map((m, mIdx) => (
                      <div key={mIdx} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300 font-medium leading-tight">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-blue-900/60 via-slate-900 to-indigo-900/60 p-12 md:p-20 rounded-[3.5rem] border border-blue-500/30 overflow-hidden shadow-2xl relative">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
                Shape the Future of African Engineering
              </h2>
              <p className="text-slate-300 text-lg mb-10 font-medium">
                Collaborate with Digitec to build sovereign digital systems for your institution.
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-blue-600 text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95"
              >
                Connect With Us
              </button>
            </div>
          </section>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default VisionPage;
