import React, { useEffect } from 'react';
import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { useLanguage } from '../contexts/LanguageContext';

const PartnersPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partners = [
    { name: 'Vulcan Mining', industry: 'Mining & Resources', location: 'Tete, Mozambique' },
    { name: 'Global Logistics', industry: 'Supply Chain', location: 'Maputo, Mozambique' },
    { name: 'TechNova', industry: 'Startup Incubator', location: 'Nairobi, Kenya' },
    { name: 'Mota-Engil', industry: 'Construction', location: 'Beira, Mozambique' },
    { name: 'Amtecheng Engineering', industry: 'Engineering', location: 'Tete, Mozambique' },
    { name: 'Emerald Heights', industry: 'Residential', location: 'Maputo, Mozambique' }
  ];

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col">
      <PublicNavbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              {t.publicHome.partners.title}
            </h1>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mb-8 shadow-lg shadow-blue-500/50"></div>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              We are proud to support industry leaders, dynamic startups, and residential developers. Our partners rely on us for mission-critical operations across all scales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, i) => (
              <div 
                key={i} 
                className="bg-white/5 p-12 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center gap-6 group hover:bg-white/10 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center text-3xl font-black text-white border border-white/10 group-hover:border-blue-500 transition-colors">
                  {partner.name.charAt(0)}
                </div>
                <div>
                   <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
                     {partner.name}
                   </h3>
                   <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-4">
                     {partner.industry}
                   </div>
                   <p className="text-slate-500 text-sm font-medium">
                     {partner.location}
                   </p>
                </div>
              </div>
            ))}
          </div>

          <section className="mt-32 text-center bg-blue-600 p-16 md:p-24 rounded-[4rem] relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
             <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                  Join Our Ecosystem.
                </h2>
                <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12 font-medium">
                  Become part of a network that values precision, safety, and African excellence.
                </p>
                <button className="bg-white text-blue-600 px-12 py-5 rounded-full font-black text-lg hover:bg-blue-50 transition-all transform hover:scale-105 active:scale-95 shadow-2xl">
                  Become a Partner
                </button>
             </div>
          </section>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default PartnersPage;
