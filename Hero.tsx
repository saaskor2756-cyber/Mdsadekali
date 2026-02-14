
import React from 'react';
import { ArrowRight, ShieldCheck, Globe, Zap, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-cyber-grid">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8">
            <Zap size={14} />
            <span>Trusted in Qatar & Internationally</span>
          </div>
          
          {/* Owner Name Section - Significantly Enlarged */}
          <div className="mb-4">
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-none mb-4 uppercase">
              {CONTACT_INFO.name}
            </h2>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-slate-200">
            Cyber Security & <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent neon-glow">
              Digital Growth Expert
            </span> <br />
            in Qatar
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Helping Businesses & Individuals Secure, Grow & Monetize Online Safely. Expert guidance on payments, ads, and digital security.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <a
              href="#services"
              className="flex items-center justify-center space-x-2 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-black transition-all shadow-2xl shadow-blue-600/40 transform hover:scale-105 active:scale-95"
            >
              <span>Explore Services</span>
              <ArrowRight size={22} />
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              className="flex items-center justify-center space-x-2 px-10 py-5 border-2 border-slate-700 hover:border-blue-400 text-slate-300 hover:text-white rounded-full font-bold transition-all backdrop-blur-sm"
            >
              <span>Free Consultation</span>
            </a>
          </div>

          {/* New Social Media Links row directly under CTAs */}
          <div className="flex flex-wrap items-center gap-6 py-4">
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] w-full mb-2">Connect Directly:</p>
            <a 
              href={CONTACT_INFO.facebook} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center space-x-3 text-slate-400 hover:text-blue-500 transition-all group"
            >
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-blue-500/50 group-hover:bg-blue-500/10">
                <Facebook size={20} />
              </div>
              <span className="text-sm font-bold">Facebook</span>
            </a>
            
            <a 
              href={CONTACT_INFO.instagram} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center space-x-3 text-slate-400 hover:text-pink-500 transition-all group"
            >
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-pink-500/50 group-hover:bg-pink-500/10">
                <Instagram size={20} />
              </div>
              <span className="text-sm font-bold">Instagram</span>
            </a>

            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center space-x-3 text-slate-400 hover:text-green-500 transition-all group"
            >
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-green-500/50 group-hover:bg-green-500/10">
                <MessageCircle size={20} />
              </div>
              <span className="text-sm font-bold">WhatsApp</span>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="text-blue-500 w-10 h-10" />
              <div>
                <p className="text-xl font-bold text-white">100% Secure</p>
                <p className="text-sm text-slate-500">Security Solutions</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="text-cyan-500 w-10 h-10" />
              <div>
                <p className="text-xl font-bold text-white">Global Scale</p>
                <p className="text-sm text-slate-500">International Reach</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract Code Element */}
      <div className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-20 transform rotate-[-5deg]">
        <pre className="mono text-blue-500 text-xs p-10 border border-blue-900/30 rounded-2xl bg-slate-900/50">
{`
// Cyber Security Protocol
function protectAsset(asset) {
  const encryption = "AES-256";
  const mfa = "ENABLED";
  
  if (asset.threatLevel > threshold) {
    deployCountermeasures();
    notifySecurityExpert("${CONTACT_INFO.name}");
  }
}

// Digital Growth Logic
async function optimizeCampaign(client) {
  const target = "Qatar Market";
  const platform = ["Google", "Facebook"];
  
  await analyzeData(client.metrics);
  return deployStrategicGrowth(target);
}
`}
        </pre>
      </div>
    </section>
  );
};

export default Hero;
