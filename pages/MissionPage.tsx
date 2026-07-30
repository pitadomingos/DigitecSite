import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, Activity, GraduationCap, Wallet, Terminal, 
  CheckCircle2, ArrowRight, Zap, Globe2, Lock, Cpu, Server, Sparkles
} from 'lucide-react';
import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { useLanguage } from '../contexts/LanguageContext';

const MissionPage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col font-sans selection:bg-blue-500/30">
      <PublicNavbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header / Hero */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-6">
              <Sparkles size={14} /> {t.publicMission.hero.badge || 'Strategic Mandate'}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight uppercase">
              Mission-Critical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                Digital Ecosystems
              </span>
            </h1>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mb-8 shadow-lg shadow-blue-500/50"></div>
            <p className="text-xl text-slate-300 leading-relaxed font-medium">
              {t.publicMission.hero.desc || 'To engineer resilient, mission-critical digital ecosystems that transform complex manual logic into precise, automated orchestration, safeguarding assets and empowering businesses of all scales.'}
            </p>
          </div>

          {/* Strategic Mission Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {/* Pillar 1: Healthcare */}
            <div className="p-8 rounded-[2.5rem] bg-slate-900/60 border border-white/10 hover:border-rose-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-rose-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-rose-600/30 group-hover:scale-110 transition-transform">
                <Activity size={28} />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20 inline-block mb-3">
                  Pillar 01
                </span>
                <h3 className="text-2xl font-black text-white mb-3">Healthcare Sovereignty</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium mb-6">
                  {t.publicMission.hero.desc || 'Digitizing Mozambique\'s national health infrastructure across 1,500+ facilities with H365 SaaS, CHAEM 7-step occupational health, and Gemini 2.5 Flash AI assistance.'}
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs text-rose-400 font-mono font-bold flex items-center gap-1.5">
                <CheckCircle2 size={14} /> H365 Health Triad
              </div>
            </div>

            {/* Pillar 2: Education */}
            <div className="p-8 rounded-[2.5rem] bg-slate-900/60 border border-white/10 hover:border-indigo-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-600/30 group-hover:scale-110 transition-transform">
                <GraduationCap size={28} />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 inline-block mb-3">
                  Pillar 02
                </span>
                <h3 className="text-2xl font-black text-white mb-3">Educational Empowerment</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium mb-6">
                  {t.publicHome.about.cards.edudesk || 'Empowering educators and engaging communities with EduDesk AI\'s automated lesson planning, test generation, admissions lifecycle, and parent portals.'}
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs text-indigo-400 font-mono font-bold flex items-center gap-1.5">
                <CheckCircle2 size={14} /> EduDesk AI Suite
              </div>
            </div>

            {/* Pillar 3: Industrial Safety */}
            <div className="p-8 rounded-[2.5rem] bg-slate-900/60 border border-white/10 hover:border-emerald-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-emerald-600/30 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-block mb-3">
                  Pillar 03
                </span>
                <h3 className="text-2xl font-black text-white mb-3">Industrial Zero-Harm</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium mb-6">
                  {t.publicHome.about.cards.safeteq || 'Automating Critical Activity Requirements (RAC 01-11) safety compliance, gate lockout daemons, and workforce health verification across heavy mining operations.'}
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs text-emerald-400 font-mono font-bold flex items-center gap-1.5">
                <CheckCircle2 size={14} /> SAFETEQ RAC Engine
              </div>
            </div>

            {/* Pillar 4: Financial Integrity */}
            <div className="p-8 rounded-[2.5rem] bg-slate-900/60 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-cyan-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-cyan-600/30 group-hover:scale-110 transition-transform">
                <Wallet size={28} />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 inline-block mb-3">
                  Pillar 04
                </span>
                <h3 className="text-2xl font-black text-white mb-3">Financial Transparency</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium mb-6">
                  {t.publicHome.about.cards.microfin || 'Streamlining contractor clearing, automated payroll, micro-disbursements, and audit logging for industrial supply chain networks.'}
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs text-cyan-400 font-mono font-bold flex items-center gap-1.5">
                <CheckCircle2 size={14} /> MicroFin Engine
              </div>
            </div>
          </div>

          {/* Manifesto & Telemetry Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-center">
             {/* Left Column: Manifesto Text */}
             <div className="lg:col-span-6 bg-slate-900/80 p-10 md:p-14 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                  {t.publicMission.manifesto.title || 'The Digital Manifesto'}
                </h2>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium mb-8">
                  {t.publicMission.manifesto.text || 'We believe that software must be as resilient as the operations it supports. From heavy industry to residential systems, we digitalize complex logic to ensure safety, efficiency, and empowerment for every user.'}
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3">
                    <Lock size={20} className="text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-black text-white mb-1">Offline-First L-LAN Resiliency</h4>
                      <p className="text-xs text-slate-400">Clinics and mining sites operate uninterrupted even without satellite connectivity.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3">
                    <Server size={20} className="text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-black text-white mb-1">MISAU DHIS2 & National MPI Federation</h4>
                      <p className="text-xs text-slate-400">Real-time epidemiological data sync and biometrically validated patient records.</p>
                    </div>
                  </div>
                </div>
             </div>

             {/* Right Column: Industrial Telemetry Simulator */}
             <div className="lg:col-span-6 bg-[#090d1a] p-8 md:p-10 rounded-[3rem] border border-white/15 font-mono shadow-2xl relative">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10 text-xs text-slate-400">
                  <span className="flex items-center gap-2 text-cyan-400 font-bold">
                    <Terminal size={16} /> telemetry_daemon.v1
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                    ACTIVE SENSOR NODE
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-cyan-400 font-bold mb-1">
                      {t.publicMission.telemetry.eomTitle || 'EOM Parameter Extraction'}
                    </div>
                    <div className="text-slate-400 text-[11px] mb-2">
                      {t.publicMission.telemetry.eomDesc || 'Real-time CAN-bus integration pulling critical temperature, pressure, and fuel data directly from the ECM.'}
                    </div>
                    <div className="text-slate-500 text-[10px] bg-black/40 p-2 rounded-lg">
                      CAN-ID: 0x18FEEE00 | ECM_TEMP: 88.4°C | OIL_PRESS: 420 kPa | STATUS: OK
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-amber-400 font-bold mb-1">
                      {t.publicMission.telemetry.fireTitle || 'Fire Suppression Systems'}
                    </div>
                    <div className="text-slate-400 text-[11px] mb-2">
                      {t.publicMission.telemetry.fireDesc || 'Automated health monitoring and trigger alerts for multi-million dollar asset protection.'}
                    </div>
                    <div className="text-slate-500 text-[10px] bg-black/40 p-2 rounded-lg">
                      ZONE_01: NOMINAL | PRESSURE_PSI: 360 | ACTUATOR_ARMED: TRUE
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-emerald-400 font-bold mb-1">
                      {t.publicMission.telemetry.lubTitle || 'Lincoln AutoLub Monitoring'}
                    </div>
                    <div className="text-slate-400 text-[11px] mb-2">
                      {t.publicMission.telemetry.lubDesc || 'Predictive lubrication tracking to prevent premature component failure and downtime.'}
                    </div>
                    <div className="text-slate-500 text-[10px] bg-black/40 p-2 rounded-lg">
                      PUMP_CYCLE: 120s | RESERVOIR_LEVEL: 92% | NEXT_SERVICE: 48h
                    </div>
                  </div>
                </div>
             </div>
          </div>

          {/* CTA */}
          <section className="text-center bg-blue-600 p-12 md:p-20 rounded-[3.5rem] relative overflow-hidden shadow-2xl">
             <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
                  Partner with Us for Precision Engineering
                </h2>
                <p className="text-white/90 text-lg mb-10 font-medium">
                  Let us design and deploy your custom enterprise software ecosystem.
                </p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-white text-blue-600 px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl hover:scale-105 active:scale-95"
                >
                  Schedule Consultation
                </button>
             </div>
          </section>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default MissionPage;
