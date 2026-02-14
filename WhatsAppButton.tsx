
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-[100] group flex items-center"
    >
      <div className="mr-3 px-4 py-2 bg-slate-900/90 backdrop-blur-sm border border-slate-800 text-white rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none">
        Chat with Sadek
      </div>
      <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 hover:scale-110 transition-transform duration-300 animate-pulse">
        <MessageCircle size={32} />
      </div>
    </a>
  );
};

export default WhatsAppButton;
