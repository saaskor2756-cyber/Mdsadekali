
import React from 'react';
import { UserCheck, Shield, Zap, Target } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    { icon: <Shield size={24} className="text-blue-500" />, title: 'Cyber Specialist', desc: 'Focus on account security and recovery.' },
    { icon: <Zap size={24} className="text-yellow-500" />, title: 'Payment Expert', desc: 'Solving virtual card and deposit issues.' },
    { icon: <Target size={24} className="text-cyan-500" />, title: 'Ads Strategist', desc: 'Optimizing for the Qatar market.' },
    { icon: <UserCheck size={24} className="text-green-500" />, title: 'Trusted Advisor', desc: 'Personalized growth strategies.' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-blue-900/50 shadow-2xl shadow-blue-900/20">
              <img 
                src="https://picsum.photos/id/101/600/800" 
                alt="MD Sadek Ali" 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-10 -right-10 w-full h-full bg-blue-600/10 rounded-2xl -z-10"></div>
            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-blue-500/10 rounded-2xl -z-10"></div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">About Me</h2>
            <h3 className="text-4xl font-bold text-white mb-8">MD Sadek Ali: Your Security-First Digital Consultant</h3>
            
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Based in Qatar, I specialize in the intersection of cybersecurity and digital growth. My mission is to help businesses and individuals navigate the complex digital landscape safely while maximizing their online potential.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-slate-300 font-medium mb-10 italic border-l-4 border-blue-500 pl-6">
              "In a digital world, security isn't just a feature—it's the foundation of growth. I build that foundation for you."
            </p>

            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-blue-600 hover:bg-blue-600 text-white rounded-full font-bold transition-all"
            >
              Contact Me Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
