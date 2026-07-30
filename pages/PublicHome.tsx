import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, Zap, Activity, GraduationCap, ShieldCheck, Wallet, 
  CheckCircle2, Sparkles, Building2, MapPin, Globe2, ChevronRight, HardHat, Train, Cpu
} from 'lucide-react';
import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { useLanguage } from '../contexts/LanguageContext';

const PublicHome: React.FC = () => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  
  // Terminal code simulation selector
  const [activeTab, setActiveTab] = useState<'h365' | 'edudesk' | 'safeteq'>('h365');
  const [typedCode, setTypedCode] = useState('');
  const [showSyncActive, setShowSyncActive] = useState(false);
  
  const codeSnippets = useMemo(() => {
    const isPt = language === 'pt';
    return {
      h365: isPt ? `// Ecossistema Digital de Saúde H365 — Índice Mestre de Pacientes (MPI)
async function sincronizarRegistroPaciente(nid: string) {
  const paciente = await MPI_Engine.buscarPorNID(nid);
  const diagnosticoIA = await Gemini25Flash.analisarTriagem({
    sinaisVitais: paciente.ultimosSinaisVitais,
    historico: paciente.historicoClinico
  });
  
  await LocalLAN_DB.persistirESincronizarBackground({
    unidadeId: "MISAU-MAPUTO-CENTRAL-01",
    pacienteId: paciente.uuid,
    sugestaoCoPiloto: diagnosticoIA
  });
}` : `// H365 Digital Health Ecosystem — Master Patient Index (MPI)
async function syncPatientClinicRecord(nid: string) {
  const patient = await MPI_Engine.lookupByNID(nid);
  const aiDiagnosis = await Gemini25Flash.analyzeTriage({
    vitals: patient.latestVitals,
    history: patient.clinicalTimeline
  });
  
  await LocalLAN_DB.persistAndSyncBackground({
    facilityId: "MISAU-MAPUTO-CENTRAL-01",
    patientId: patient.uuid,
    coPilotSuggestion: aiDiagnosis
  });
}`,
      edudesk: isPt ? `// EduDesk IA — Gerador Automatizado de Aulas e Avaliações
async function gerarPlanoAulaIA(cursoId: string, nivelEscolar: number) {
  const programa = await AcademicDB.obterProgramaEscolar(cursoId);
  const planoAula = await Gemini25Flash.gerarPlanoAula({
    topico: programa.proximoTopico,
    duracaoMinutos: 45,
    aprendizagemDiferenciada: true
  });
  
  await PortalEscolar.publicarNoPainelProfessor(planoAula);
}` : `// EduDesk AI — Automated Lesson & Assessment Generator
async function generateAILessonPlan(courseId: string, gradeLevel: number) {
  const syllabus = await AcademicDB.getCourseSyllabus(courseId);
  const lessonPlan = await Gemini25Flash.generateLesson({
    topic: syllabus.nextTopic,
    durationMinutes: 45,
    differentiatedLearning: true
  });
  
  await SchoolPortal.publishToTeacherDashboard(lessonPlan);
}`,
      safeteq: isPt ? `// SAFETEQ Gestão de Risco Empresarial — Bloqueio de Portaria RAC 01
async function verificarSegurancaTrabalhador(trabalhadorId: string) {
  const credencial = await SAFETEQ_Vault.obter(trabalhadorId);
  const rac01Valido = credencial.validadeRac01 > Date.now();
  const asoValido = await CHAEM_Ocupacional.verificarASO(trabalhadorId);

  if (!rac01Valido || !asoValido) {
    await PortariaFisica.ativarBloqueio(trabalhadorId, "RAC01_EXPIRADO");
  }
}` : `// SAFETEQ Enterprise Risk Management — RAC 01 Gate Lockout
async function verifyWorkforceSafetyGate(workerId: string) {
  const credential = await SAFETEQ_Vault.fetch(workerId);
  const rac01Valid = credential.rac01Expiry > Date.now();
  const asoValid = await CHAEM_Occupational.checkASO(workerId);

  if (!rac01Valid || !asoValid) {
    await PhysicalGate.triggerLockout(workerId, "RAC01_EXPIRED");
  }
}`
    };
  }, [language]);

  useEffect(() => {
    let charIndex = 0;
    setShowSyncActive(false);
    const snippet = codeSnippets[activeTab];
    setTypedCode('');

    const typingInterval = setInterval(() => {
      if (charIndex < snippet.length) {
        setTypedCode(snippet.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowSyncActive(true), 600);
      }
    }, 25);

    return () => clearInterval(typingInterval);
  }, [activeTab, codeSnippets]);

  return (
    <div className="font-sans text-slate-800 bg-[#020617] selection:bg-blue-500/30 overflow-x-hidden min-h-screen flex flex-col">
      <PublicNavbar />

      {/* --- HERO SECTION --- */}
      <header className="relative flex-grow flex items-center justify-center overflow-hidden pt-12 pb-20">
        {/* Background Radial Grid */}
        <div 
          className="absolute inset-0 opacity-[0.08]" 
          style={{ 
            backgroundImage: `radial-gradient(circle, #38bdf8 1px, transparent 1px)`,
            backgroundSize: '32px 32px' 
          }}
        ></div>
        
        {/* Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/15 rounded-full blur-[140px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/15 rounded-full blur-[140px] animate-pulse-slow delay-1000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16">
            {/* Left Column: Hero Copy */}
            <div className="lg:col-span-7 text-center lg:text-left">
                {/* Hero Badge */}
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 text-cyan-400 text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-2xl">
                  <Sparkles size={14} className="text-cyan-400" />
                  <span>{t.publicHome.hero.badge || 'Sovereign Digital Ecosystems'}</span>
                </div>

                {/* Main Title */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] mb-8 tracking-tight uppercase">
                  {t.publicHome.hero.title1 || 'Architecting'} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                    {t.publicHome.hero.title2 || 'Sovereign Enterprise'}
                  </span> <br/>
                  <span className="text-slate-300">{t.publicHome.hero.title3 || 'Infrastructure'}</span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed font-medium">
                  {t.publicHome.hero.desc}
                </p>

                {/* Core Products Quick Selector */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 text-left">
                  <div 
                    onClick={() => navigate('/portfolio/h365')}
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-500/50 hover:bg-rose-500/10 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-2 text-rose-400 font-black text-xs uppercase mb-1">
                      <Activity size={14} /> H365 Health
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium leading-tight">{t.publicHome.partners?.stats?.facilities || '1,500+ Facilities'}</div>
                  </div>

                  <div 
                    onClick={() => navigate('/portfolio/edudesk')}
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-2 text-indigo-400 font-black text-xs uppercase mb-1">
                      <GraduationCap size={14} /> EduDesk AI
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium leading-tight">{t.publicHome.capabilities?.startups?.title || 'AI Education Platform'}</div>
                  </div>

                  <div 
                    onClick={() => navigate('/portfolio/safeteq')}
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-2 text-emerald-400 font-black text-xs uppercase mb-1">
                      <ShieldCheck size={14} /> SAFETEQ
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium leading-tight">{t.publicHome.capabilities?.industry?.title || 'Mining Safety RAC'}</div>
                  </div>

                  <div 
                    onClick={() => navigate('/portfolio/microfin')}
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-2 text-cyan-400 font-black text-xs uppercase mb-1">
                      <Wallet size={14} /> MicroFin
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium leading-tight">{t.publicHome.about?.cards?.microfin || 'Contractor Payroll'}</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                  <button 
                    onClick={() => navigate('/portfolio')} 
                    className="bg-blue-600 hover:bg-blue-500 text-white px-9 py-4 rounded-full font-black transition-all flex items-center justify-center gap-2 group shadow-2xl hover:scale-105 active:scale-95 text-xs uppercase tracking-widest"
                  >
                    {t.publicHome.hero.btnExplore} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                  </button>
                  <button 
                    onClick={() => navigate('/partners')} 
                    className="bg-transparent border border-white/20 text-slate-200 px-9 py-4 rounded-full font-black hover:bg-white/5 transition-all hover:border-white/40 active:scale-95 text-xs uppercase tracking-widest"
                  >
                    {t.publicHome.nav.partners || 'Strategic Partners'}
                  </button>
                </div>
            </div>

            {/* Right Column: Dynamic Multi-Platform Terminal Code Simulator */}
            <div className="lg:col-span-5 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-3xl blur-xl opacity-30"></div>
                <div className="relative bg-[#090d1a] backdrop-blur-2xl rounded-3xl border border-white/15 shadow-2xl overflow-hidden">
                    {/* Tab Selection Header */}
                    <div className="bg-[#131b2e] px-4 py-3 flex items-center justify-between border-b border-white/10">
                        <div className="flex gap-1.5">
                            <button 
                              onClick={() => setActiveTab('h365')}
                              className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold uppercase transition-all ${
                                activeTab === 'h365' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              H365_MPI.ts
                            </button>
                            <button 
                              onClick={() => setActiveTab('edudesk')}
                              className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold uppercase transition-all ${
                                activeTab === 'edudesk' ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              EduDesk_AI.ts
                            </button>
                            <button 
                              onClick={() => setActiveTab('safeteq')}
                              className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold uppercase transition-all ${
                                activeTab === 'safeteq' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              RAC_Daemon.ts
                            </button>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                          <span className="text-[10px] font-mono text-slate-400">{t.publicHome.terminal?.online || (language === 'pt' ? 'EM LINHA' : 'ONLINE')}</span>
                        </div>
                    </div>
                    
                    {/* Terminal Body */}
                    <div className="p-6 font-mono text-xs leading-relaxed overflow-x-auto min-h-[300px]">
                        <pre className="text-cyan-300 whitespace-pre-wrap">
                            {typedCode}
                            <span className="w-2 h-4 bg-cyan-400 inline-block align-middle ml-1 animate-pulse"></span>
                        </pre>
                        
                        {/* Status Footer */}
                        {showSyncActive && (
                            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px]">
                                <span className="text-emerald-400 font-bold uppercase flex items-center gap-1.5">
                                  <CheckCircle2 size={14} /> {t.publicHome.terminal?.systemVerified || (language === 'pt' ? 'Sistema Verificado e Ativo' : 'System Verified & Active')}
                                </span>
                                <span className="text-slate-500 font-mono">2026-07-30 Tete/Maputo</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </header>

      {/* --- STATS COUNTER BAR --- */}
      <section className="border-y border-white/10 bg-slate-900/50 py-12 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center sm:text-left border-r border-white/5 last:border-r-0 pr-4">
            <div className="text-4xl md:text-5xl font-black text-rose-400 mb-1">1,500+</div>
            <div className="text-xs font-black uppercase tracking-widest text-slate-400">{t.publicHome.partners?.stats?.facilities || 'Health Facilities (H365)'}</div>
          </div>
          <div className="text-center sm:text-left border-r border-white/5 last:border-r-0 pr-4">
            <div className="text-4xl md:text-5xl font-black text-indigo-400 mb-1">28+</div>
            <div className="text-xs font-black uppercase tracking-widest text-slate-400">Clinical & Academic Modules</div>
          </div>
          <div className="text-center sm:text-left border-r border-white/5 last:border-r-0 pr-4">
            <div className="text-4xl md:text-5xl font-black text-emerald-400 mb-1">12,000+</div>
            <div className="text-xs font-black uppercase tracking-widest text-slate-400">{t.publicHome.partners?.stats?.records || 'Mining Safety Credentials'}</div>
          </div>
          <div className="text-center sm:text-left pr-4">
            <div className="text-4xl md:text-5xl font-black text-cyan-400 mb-1">70%</div>
            <div className="text-xs font-black uppercase tracking-widest text-slate-400">{t.publicHome.about?.stats?.uptime || 'Admin Workload Saved'}</div>
          </div>
        </div>
      </section>

      {/* --- FLAGSHIP PLATFORMS SHOWCASE --- */}
      <section className="py-28 bg-[#020617] relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-4">
              <Cpu size={14} /> {t.publicHome.capabilities?.title || 'Core Product Inventory'}
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
              Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digital Ecosystems</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed">
              {t.publicHome.capabilities?.desc || 'Every system is built from the ground up for high reliability, offline-first resilience, and domain-specific automation.'}
            </p>
          </div>

          {/* Grid of Platforms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: H365 Digital Health Ecosystem */}
            <div className="bg-slate-900/80 rounded-[2.5rem] border border-white/10 p-8 md:p-10 flex flex-col justify-between hover:border-rose-500/50 transition-all duration-500 group relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl group-hover:bg-rose-500/20 transition-all"></div>
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-rose-600 flex items-center justify-center text-white shadow-xl shadow-rose-600/30 group-hover:scale-110 transition-transform">
                    <Activity size={32} />
                  </div>
                  <span className="px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    National Health Infra
                  </span>
                </div>
                <h3 className="text-3xl font-black text-white mb-3 tracking-tight group-hover:text-rose-400 transition-colors">
                  H365 Digital Health Ecosystem
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium mb-6">
                  {t.publicHome.about?.cards?.h365}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">28+ Clinical Modules</span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">CHAEM 7-Step AMA</span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">MISAU DHIS2 Sync</span>
                </div>
              </div>
              <button 
                onClick={() => navigate('/portfolio/h365')}
                className="w-full py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-rose-600 hover:text-white text-rose-400 font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 group-hover:border-rose-500"
              >
                {t.publicHome.hero?.btnExplore || 'Explore H365 Ecosystem'} <ChevronRight size={16} />
              </button>
            </div>

            {/* Card 2: EduDesk AI School Management */}
            <div className="bg-slate-900/80 rounded-[2.5rem] border border-white/10 p-8 md:p-10 flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-500 group relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all"></div>
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-600/30 group-hover:scale-110 transition-transform">
                    <GraduationCap size={32} />
                  </div>
                  <span className="px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    AI Education Platform
                  </span>
                </div>
                <h3 className="text-3xl font-black text-white mb-3 tracking-tight group-hover:text-indigo-400 transition-colors">
                  EduDesk AI School Management
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium mb-6">
                  {t.publicHome.about?.cards?.edudesk}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">AI Lesson Planner</span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">AI Test Generator</span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">Multi-School Dashboard</span>
                </div>
              </div>
              <button 
                onClick={() => navigate('/portfolio/edudesk')}
                className="w-full py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-indigo-600 hover:text-white text-indigo-400 font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 group-hover:border-indigo-500"
              >
                {t.publicHome.hero?.btnExplore || 'Explore EduDesk AI'} <ChevronRight size={16} />
              </button>
            </div>

            {/* Card 3: SAFETEQ Enterprise Risk Management */}
            <div className="bg-slate-900/80 rounded-[2.5rem] border border-white/10 p-8 md:p-10 flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-500 group relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all"></div>
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-xl shadow-emerald-600/30 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={32} />
                  </div>
                  <span className="px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Industrial Safety & Risk
                  </span>
                </div>
                <h3 className="text-3xl font-black text-white mb-3 tracking-tight group-hover:text-emerald-400 transition-colors">
                  SAFETEQ Risk Management
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium mb-6">
                  {t.publicHome.about?.cards?.safeteq}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">RAC 01-11 Matrix</span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">Gate Lockout Daemon</span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">Contractor Verification</span>
                </div>
              </div>
              <button 
                onClick={() => navigate('/portfolio/safeteq')}
                className="w-full py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-emerald-600 hover:text-white text-emerald-400 font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 group-hover:border-emerald-500"
              >
                {t.publicHome.hero?.btnExplore || 'Explore SAFETEQ Specs'} <ChevronRight size={16} />
              </button>
            </div>

            {/* Card 4: MicroFin Financial Orchestration */}
            <div className="bg-slate-900/80 rounded-[2.5rem] border border-white/10 p-8 md:p-10 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-500 group relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-600 flex items-center justify-center text-white shadow-xl shadow-cyan-600/30 group-hover:scale-110 transition-transform">
                    <Wallet size={32} />
                  </div>
                  <span className="px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    Fintech & Payroll
                  </span>
                </div>
                <h3 className="text-3xl font-black text-white mb-3 tracking-tight group-hover:text-cyan-400 transition-colors">
                  MicroFin Contractor Orchestration
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium mb-6">
                  {t.publicHome.about?.cards?.microfin}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">Contractor Payroll</span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">Real-Time Clearance</span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">Audit Trails</span>
                </div>
              </div>
              <button 
                onClick={() => navigate('/portfolio/microfin')}
                className="w-full py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-cyan-600 hover:text-white text-cyan-400 font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 group-hover:border-cyan-500"
              >
                {t.publicHome.hero?.btnExplore || 'Explore MicroFin Specs'} <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED PARTNERS SECTION --- */}
      <section className="py-24 bg-slate-900/40 border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-black uppercase tracking-widest mb-3">
                <Building2 size={14} /> Ecosystem Trust
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                {t.publicHome.partners?.title || 'Our Strategic Partners'}
              </h2>
            </div>
            <button 
              onClick={() => navigate('/partners')}
              className="text-cyan-400 hover:text-white text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-colors"
            >
              View All Partners & Specs <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Vulcan Mining */}
            <div 
              onClick={() => navigate('/partners')}
              className="p-6 rounded-3xl bg-slate-900 border border-white/10 hover:border-orange-500/50 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl p-2 border border-white/10 flex items-center justify-center">
                  <img src="/assets/vulcan.png" alt="Vulcan Mining" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-white group-hover:text-orange-400 transition-colors">{t.publicHome.partners.items.vulcan.name}</h4>
                  <p className="text-xs text-slate-400 font-medium">{t.publicHome.partners.items.vulcan.location}</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {t.publicHome.partners.items.vulcan.desc}
              </p>
              <span className="text-[10px] font-black uppercase text-orange-400 bg-orange-500/10 px-3 py-1 rounded-lg w-fit border border-orange-500/20">
                {t.publicHome.partners.items.vulcan.metrics}
              </span>
            </div>

            {/* Testing */}
            <div 
              onClick={() => navigate('/partners')}
              className="p-6 rounded-3xl bg-slate-900 border border-white/10 hover:border-cyan-500/50 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-cyan-500/20 rounded-2xl border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-white group-hover:text-cyan-400 transition-colors">{t.publicHome.partners.items.testing.name}</h4>
                  <p className="text-xs text-slate-400 font-medium">{t.publicHome.partners.items.testing.location}</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {t.publicHome.partners.items.testing.desc}
              </p>
              <span className="text-[10px] font-black uppercase text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-lg w-fit border border-cyan-500/20">
                {t.publicHome.partners.items.testing.metrics}
              </span>
            </div>

            {/* Mina de Moatize */}
            <div 
              onClick={() => navigate('/partners')}
              className="p-6 rounded-3xl bg-slate-900 border border-white/10 hover:border-emerald-500/50 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <HardHat size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-white group-hover:text-emerald-400 transition-colors">{t.publicHome.partners.items.moatize.name}</h4>
                  <p className="text-xs text-slate-400 font-medium">{t.publicHome.partners.items.moatize.location}</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {t.publicHome.partners.items.moatize.desc}
              </p>
              <span className="text-[10px] font-black uppercase text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg w-fit border border-emerald-500/20">
                {t.publicHome.partners.items.moatize.metrics}
              </span>
            </div>

            {/* CLN (Corredor Logístico de Nacala) */}
            <div 
              onClick={() => navigate('/partners')}
              className="p-6 rounded-3xl bg-slate-900 border border-white/10 hover:border-indigo-500/50 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Train size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-white group-hover:text-indigo-400 transition-colors">{t.publicHome.partners.items.cln.name}</h4>
                  <p className="text-xs text-slate-400 font-medium">{t.publicHome.partners.items.cln.location}</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {t.publicHome.partners.items.cln.desc}
              </p>
              <span className="text-[10px] font-black uppercase text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-lg w-fit border border-indigo-500/20">
                {t.publicHome.partners.items.cln.metrics}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-24 bg-gradient-to-b from-[#020617] to-slate-950 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            {t.publicHome.contact?.title || 'Ready to Build Your Custom Ecosystem?'}
          </h2>
          <p className="text-slate-400 text-lg mb-10 font-medium">
            {t.publicHome.contact?.desc || 'Transform manual complexity into automated, resilient digital infrastructure.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95"
            >
              {t.publicHome.contact?.form?.btn || 'Schedule Consultation'}
            </button>
            <button 
              onClick={() => navigate('/portfolio')}
              className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95"
            >
              {t.publicHome.hero?.btnExplore || 'View Full Portfolio'}
            </button>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
};

export default PublicHome;
