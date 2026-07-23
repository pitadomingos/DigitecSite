import React, { useEffect } from 'react';
import { ShieldCheck, GraduationCap, Activity, Wallet, Monitor } from 'lucide-react';
import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    { icon: ShieldCheck, title: 'SAFETEQ', desc: t.publicHome.about.cards.safeteq },
    { icon: GraduationCap, title: 'EduDesk', desc: t.publicHome.about.cards.edudesk },
    { icon: Activity, title: 'H365', desc: t.publicHome.about.cards.h365 },
    { icon: Wallet, title: 'MicroFin', desc: t.publicHome.about.cards.microfin },
    { icon: Monitor, title: 'SMB Web', desc: t.publicHome.about.cards.websites }
  ];

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col">
      <PublicNavbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              {t.publicHome.about.title}
            </h1>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mb-8 shadow-lg shadow-blue-500/50"></div>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              {t.publicHome.about.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, i) => (
              <div 
                key={i} 
                className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-[60px] group-hover:bg-blue-600/20 transition-all"></div>
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <solution.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{solution.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{solution.desc}</p>
              </div>
            ))}
          </div>

          <section className="mt-32 p-12 md:p-20 rounded-[3.5rem] bg-gradient-to-br from-blue-900/40 to-slate-900 border border-white/10 relative overflow-hidden">
             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                     Beyond Code. <br/>
                     <span className="text-blue-400 font-black">Digital Intelligence.</span>
                   </h2>
                   <p className="text-slate-300 text-lg leading-relaxed mb-8">
                     We don't just build apps; we build intelligent ecosystems tailored to the unique complexities of heavy industry, dynamic startups, and modern residential operations.
                   </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                      <div className="text-3xl font-black text-white mb-1">10+</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Years Experience</div>
                   </div>
                   <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                      <div className="text-3xl font-black text-white mb-1">50k+</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Users Managed</div>
                   </div>
                   <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                      <div className="text-3xl font-black text-white mb-1">99.9%</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">System Uptime</div>
                   </div>
                   <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                      <div className="text-3xl font-black text-white mb-1">24/7</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Expert Support</div>
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
