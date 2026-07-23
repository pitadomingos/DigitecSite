import React, { useEffect } from 'react';
import { Eye, Target, CheckCircle2 } from 'lucide-react';
import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { useLanguage } from '../contexts/LanguageContext';

const VisionPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col">
      <PublicNavbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
               <div className="inline-flex items-center gap-3 text-cyan-400 mb-6 bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
                 <Eye size={20} />
                 <span className="font-black uppercase tracking-widest text-xs">{t.publicHome.vision.title}</span>
               </div>
               <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                 {t.publicHome.vision.headline}
               </h1>
               <p className="text-slate-400 text-xl leading-relaxed font-medium mb-12">
                 {t.publicHome.vision.desc}
               </p>
               
               <div className="p-8 rounded-3xl bg-blue-600/10 border border-blue-600/20">
                  <p className="text-blue-300 italic text-lg">
                    "Our vision is to be the primary engine of digital transformation in Africa, empowering heavy industry, startups, and residences with homegrown world-class technology."
                  </p>
               </div>
            </div>

            <div className="relative">
               <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 blur-3xl rounded-[3rem]"></div>
               <div className="relative bg-white/5 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-3 text-yellow-400 mb-8 bg-yellow-400/10 w-fit px-4 py-2 rounded-full border border-yellow-400/20">
                    <Target size={20} />
                    <span className="font-black uppercase tracking-widest text-xs">{t.publicHome.vision.mission}</span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-10 tracking-tight">{t.publicHome.vision.missionHeadline}</h3>
                  <ul className="space-y-6">
                    {t.publicHome.vision.goals.map((item, i) => (
                      <li key={i} className="flex gap-4 items-start group">
                        <div className="mt-1 bg-green-400/20 p-1 rounded-full group-hover:bg-green-400 group-hover:text-slate-900 transition-colors">
                           <CheckCircle2 className="text-green-400 group-hover:text-inherit" size={20} />
                        </div>
                        <span className="text-slate-300 text-xl font-medium leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>

          <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-10 bg-slate-900 rounded-3xl border border-white/5">
                <div className="text-4xl font-black text-white mb-4">01</div>
                <h4 className="text-xl font-bold text-white mb-4">Innovation First</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Constantly pushing the boundaries of what is possible in bespoke software design across all sectors.</p>
             </div>
             <div className="p-10 bg-slate-900 rounded-3xl border border-white/5">
                <div className="text-4xl font-black text-white mb-4">02</div>
                <h4 className="text-xl font-bold text-white mb-4">African Talent</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Nurturing and showcasing local technical expertise on a global stage.</p>
             </div>
             <div className="p-10 bg-slate-900 rounded-3xl border border-white/5">
                <div className="text-4xl font-black text-white mb-4">03</div>
                <h4 className="text-xl font-bold text-white mb-4">Sustainable Tech</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Building systems that grow with our clients and last for decades, not months.</p>
             </div>
          </section>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default VisionPage;
