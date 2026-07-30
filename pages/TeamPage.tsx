import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Award, Cpu, ShieldCheck, Database, Globe2, 
  ArrowRight, Linkedin, Mail, Sparkles, CheckCircle2, Terminal
} from 'lucide-react';
import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { useLanguage } from '../contexts/LanguageContext';

const TeamPage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const members = [
    {
      id: 'pita',
      name: t.team.members.pita.name || 'Pita Domingos',
      role: t.team.members.pita.role || 'Chief Executive Officer (CEO)',
      experience: t.team.members.pita.experience || '25+ years driving innovation',
      specialization: t.team.members.pita.specialization || 'Mining systems development',
      expertise: t.team.members.pita.expertise || 'Full-stack Data Scientist',
      bio: t.team.members.pita.bio || 'Pita brings over a quarter-century of deep industry expertise to our leadership team. He specializes in designing complex mining systems development frameworks. As a full-stack Data Scientist, he bridges advanced data analytics with operational strategies to scale corporate growth.',
      badge: 'Data Scientist & Executive',
      skills: ['Mining Systems', 'Enterprise Frameworks', 'Data Science', 'Operational Strategy'],
      color: 'blue'
    },
    {
      id: 'derco',
      name: t.team.members.derco.name || 'Dercio Nguenze',
      role: t.team.members.derco.role || 'Chief Technology Officer (CTO)',
      experience: t.team.members.derco.experience || '10+ years leading technical teams',
      specialization: t.team.members.derco.specialization || 'Enterprise infrastructure',
      expertise: t.team.members.derco.expertise || 'Advanced systems management',
      bio: t.team.members.derco.bio || 'Dercio oversees the company\'s technical vision, infrastructure, and engineering roadmap. With more than a decade of specialized experience in systems management, he ensures our architecture is secure, scalable, and built on cutting-edge framework standards.',
      badge: 'Systems Architect',
      skills: ['Cloud Infrastructure', 'Offline-First LAN', 'System Security', 'Full-Stack Engineering'],
      color: 'cyan'
    },
    {
      id: 'fernandell',
      name: t.team.members.fernandell.name || 'Fernandel Chambal',
      role: t.team.members.fernandell.role || 'Chief Commercial, Marketing & Business Development Officer (CCMB)',
      experience: t.team.members.fernandell.experience || '15+ years in strategic growth',
      specialization: t.team.members.fernandell.specialization || 'Business development & marketing',
      expertise: t.team.members.fernandell.expertise || 'Global trade & logistics',
      bio: t.team.members.fernandell.bio || 'Fernandell leads our commercial expansion and strategic partnerships. With extensive experience in global trade and marketing, he ensures our solutions reach the right markets while maintaining strong corporate relationships and sustainable growth.',
      badge: 'Commercial Strategy',
      skills: ['Global Trade', 'Strategic Partnerships', 'Market Expansion', 'Client Relations'],
      color: 'indigo'
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
              <Sparkles size={14} /> {t.team.hero.badge || 'Leadership & Vision'}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight uppercase">
              The Minds Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digitec</span>
            </h1>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mb-8 shadow-lg shadow-blue-500/50"></div>
            <p className="text-xl text-slate-300 leading-relaxed font-medium">
              {t.team.hero.desc || 'Our leadership team combines decades of specialized experience in mining systems, enterprise infrastructure, healthcare digitization, and global business development.'}
            </p>
          </div>

          {/* Executive Leadership Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {members.map((member) => (
              <div 
                key={member.id}
                className="bg-slate-900/80 rounded-[2.5rem] border border-white/10 p-8 md:p-10 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-500 group relative overflow-hidden shadow-2xl"
              >
                <div>
                  {/* Executive Avatar Header */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 p-0.5 shadow-xl group-hover:scale-105 transition-transform">
                      <div className="w-full h-full bg-slate-950 rounded-[0.9rem] flex items-center justify-center font-black text-2xl text-cyan-400">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <span className="px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {member.badge}
                    </span>
                  </div>

                  {/* Name & Title */}
                  <h2 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-cyan-400 transition-colors">
                    {member.name}
                  </h2>
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-4">
                    {member.role}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6 bg-white/5 p-3 rounded-xl border border-white/5">
                    <Award size={14} className="text-amber-400 shrink-0" />
                    <span>{member.experience}</span>
                  </div>

                  {/* Bio */}
                  <p className="text-slate-300 text-sm leading-relaxed font-medium mb-8">
                    {member.bio}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="text-[10px] font-black uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <CheckCircle2 size={14} /> VERIFIED LEAD
                  </span>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="text-cyan-400 hover:text-white flex items-center gap-1 font-sans font-bold transition-colors"
                  >
                    Contact <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Join Our Engineering Culture CTA */}
          <section className="text-center bg-gradient-to-r from-blue-900/60 via-slate-900 to-indigo-900/60 p-12 md:p-20 rounded-[3.5rem] border border-blue-500/30 overflow-hidden shadow-2xl relative">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
                Build Sovereign Systems With Us
              </h2>
              <p className="text-slate-300 text-lg mb-10 font-medium">
                Our multidisciplinary team combines data science, cloud architecture, and industrial domain knowledge to build Africa's next generation of digital tools.
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-blue-600 text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95"
              >
                Get In Touch
              </button>
            </div>
          </section>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default TeamPage;
