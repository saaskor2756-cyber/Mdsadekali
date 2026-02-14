
import React from 'react';
import { ShieldCheck, Zap, Globe, Clock, UserCheck } from 'lucide-react';

const WhyChooseMe: React.FC = () => {
  const points = [
    { title: 'Qatar Market Understanding', desc: 'Deep knowledge of local consumer behavior and regulations.', icon: <Globe size={32} /> },
    { title: 'Real Problem Solving', desc: 'Hands-on experience with payment and deposit issues.', icon: <Zap size={32} /> },
    { title: 'Fast Communication', desc: 'Responsive support via WhatsApp and Email.', icon: <Clock size={32} /> },
    { title: 'Trusted Personal Brand', desc: 'A reputation built on integrity and results.', icon: <UserCheck size={32} /> },
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-900/40 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px]"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold text-white mb-8">Why Partner With MD Sadek Ali?</h3>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                I don't just provide services; I provide solutions that are practical, secure, and specifically tailored for the Middle Eastern market challenges.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-blue-400 bg-blue-900/20 w-fit px-6 py-3 rounded-2xl border border-blue-800/30">
                  <ShieldCheck size={24} />
                  <span className="font-bold">Verified Cyber Security Expert</span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {points.map((point, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all">
                  <div className="text-blue-500 mb-4">{point.icon}</div>
                  <h4 className="text-white font-bold mb-2">{point.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
