import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col">
      <PublicNavbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
               <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">
                 {t.publicHome.contact.title}
               </h1>
               <p className="text-slate-400 text-xl leading-relaxed font-medium mb-12 max-w-lg">
                 {t.publicHome.contact.desc}
               </p>

               <div className="space-y-10">
                 <div className="flex items-center gap-6 group">
                   <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all border border-blue-600/20 shadow-lg shadow-blue-500/10">
                     <Mail size={28} />
                   </div>
                   <div>
                     <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">{t.publicHome.contact.emailLabel}</div>
                     <div className="font-black text-white text-xl">info@digitecinternational.com</div>
                   </div>
                 </div>
                 
                 <div className="flex items-center gap-6 group">
                   <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all border border-blue-600/20 shadow-lg shadow-blue-500/10">
                     <Phone size={28} />
                   </div>
                   <div>
                     <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">{t.publicHome.contact.callLabel}</div>
                     <div className="font-black text-white text-xl">+258 84 547 9481</div>
                   </div>
                 </div>

                 <div className="flex items-center gap-6 group">
                   <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all border border-blue-600/20 shadow-lg shadow-blue-500/10">
                     <MapPin size={28} />
                   </div>
                   <div>
                     <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Office</div>
                     <div className="font-black text-white text-xl">Moatize, Tete, Mozambique</div>
                   </div>
                 </div>
               </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl">
               <h3 className="text-3xl font-black text-white mb-8 tracking-tight">Send a message</h3>
               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                       <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 text-white font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder={t.publicHome.contact.form.name} />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                       <input type="email" className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 text-white font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder={t.publicHome.contact.form.email} />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Project Details</label>
                    <textarea className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 text-white h-40 resize-none font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder={t.publicHome.contact.form.details}></textarea>
                 </div>
                 <button className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-xl active:scale-95 uppercase tracking-[0.2em] flex items-center justify-center gap-3">
                   {t.publicHome.contact.form.btn} <Send size={18} />
                 </button>
               </form>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default ContactPage;
