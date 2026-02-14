
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Send, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Connect</h2>
            <h3 className="text-4xl font-bold text-white mb-8">Let's Secure Your Digital Future</h3>
            <p className="text-slate-400 mb-10">
              Have a question about account security? Need a virtual card or ad strategy? Drop a message and let's get started.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center space-x-4 p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all">
                <div className="bg-blue-900/30 p-3 rounded-lg text-blue-500"><Mail size={24} /></div>
                <div>
                  <p className="text-slate-500 text-xs uppercase font-bold">Email Me</p>
                  <p className="text-white font-bold">{CONTACT_INFO.email}</p>
                </div>
              </a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center space-x-4 p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all">
                <div className="bg-cyan-900/30 p-3 rounded-lg text-cyan-500"><Phone size={24} /></div>
                <div>
                  <p className="text-slate-500 text-xs uppercase font-bold">Call / WhatsApp</p>
                  <p className="text-white font-bold">{CONTACT_INFO.phone}</p>
                </div>
              </a>
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="bg-indigo-900/30 p-3 rounded-lg text-indigo-500"><MapPin size={24} /></div>
                <div>
                  <p className="text-slate-500 text-xs uppercase font-bold">Location</p>
                  <p className="text-white font-bold">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Follow Me</p>
              <div className="flex space-x-4">
                <a href={CONTACT_INFO.facebook} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Facebook size={24} />
                </a>
                <a href={CONTACT_INFO.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-pink-600 hover:text-white transition-all">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="p-8 md:p-12 rounded-3xl bg-slate-950 border border-slate-800">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-400">Service Needed</label>
                  <select className="w-full bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all">
                    <option>Cyber Security Consultation</option>
                    <option>Virtual Card Solutions</option>
                    <option>Ads Management (FB/Google)</option>
                    <option>Other Services</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-400">Your Message</label>
                  <textarea 
                    rows={6} 
                    placeholder="How can I help you today?" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full md:w-fit px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center space-x-3">
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
