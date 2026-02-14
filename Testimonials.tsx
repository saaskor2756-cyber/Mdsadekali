
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Reviews</h2>
          <h3 className="text-4xl font-bold text-white mb-6">What My Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="p-8 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-900/40" />
              <p className="text-slate-400 mb-8 italic leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-4 mt-auto">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-blue-500 text-xs font-mono">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
