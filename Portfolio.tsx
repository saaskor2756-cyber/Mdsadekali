
import React from 'react';
import { PORTFOLIO } from '../constants';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Portfolio</h2>
          <h3 className="text-4xl font-bold text-white mb-6">Proven Success Cases</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A glimpse into the digital marketing campaigns, security recoveries, and payment solutions I have delivered for clients in Qatar and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-2xl aspect-video bg-slate-800"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-40"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-blue-400 font-mono text-sm mb-2 uppercase tracking-widest">{item.category}</span>
                <h4 className="text-3xl font-bold text-white mb-4">{item.title}</h4>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="flex items-center space-x-2 text-white bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-full font-bold">
                    <span>View Case Study</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
