
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { User, Briefcase, Award, GraduationCap, Github, Linkedin, Twitter } from 'lucide-react';

const TeamPage: React.FC = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      id: 'pita',
      image: 'https://lh3.googleusercontent.com/d/1_1JHI2g9uApQDaEkv9NDpBZC0TPWqZI7', 
      data: t.team?.members?.pita
    },
    {
      id: 'derco',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
      data: t.team?.members?.derco
    },
    {
      id: 'fernandell',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      data: t.team?.members?.fernandell
    }
  ];

  if (!t.team) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
        <p className="font-mono tracking-widest animate-pulse">SYNCHRONIZING LEADERSHIP DATA...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
              <Award size={12} /> {t.team.hero.badge}
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
              {t.team.hero.title} <br />
              <span className="text-blue-500">{t.team.hero.titleAccent}</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              {t.team.hero.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 border-t border-white/5 bg-white/2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              member.data && (
                <div key={member.id} className="group">
                  {/* Member Card */}
                  <div className="relative mb-8 aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
                     <img 
                      src={member.image} 
                      alt={member.data.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
                     
                     {/* Role Badge Overlay */}
                     <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-blue-600 px-4 py-2 rounded-xl inline-block mb-3 shadow-xl">
                          <span className="text-[10px] font-black uppercase tracking-widest text-white">
                            {member.data.role}
                          </span>
                        </div>
                        <h3 className="text-3xl font-black text-white tracking-tight uppercase">{member.data.name}</h3>
                     </div>
                  </div>

                  {/* Details Section */}
                  <div className="space-y-6">
                    {/* Bio */}
                    <p className="text-slate-400 leading-relaxed text-sm font-medium h-24 overflow-y-auto scrollbar-hide">
                      {member.data.bio}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                        <div className="mt-1 text-blue-400"><Briefcase size={16} /></div>
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-0.5">Experience</div>
                          <div className="text-xs font-bold text-white">{member.data.experience}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                        <div className="mt-1 text-blue-400"><Award size={16} /></div>
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-0.5">Specialization</div>
                          <div className="text-xs font-bold text-white">{member.data.specialization}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                        <div className="mt-1 text-blue-400"><GraduationCap size={16} /></div>
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-0.5">Expertise</div>
                          <div className="text-xs font-bold text-white">{member.data.expertise}</div>
                        </div>
                      </div>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4 pt-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all border border-white/10">
                        <Linkedin size={18} />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-400 hover:text-white transition-all border border-white/10">
                        <Twitter size={18} />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all border border-white/10">
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/5 bg-[#020617] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">
            Architecting Your <span className="text-blue-500">Digital Future</span>
          </h2>
          <button 
            onClick={() => window.location.hash = '/contact'}
            className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-blue-500/20"
          >
            Connect with Leadership
          </button>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
};

export default TeamPage;
