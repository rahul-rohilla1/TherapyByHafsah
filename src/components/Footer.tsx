import React from 'react';
import { Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-peach py-12 md:py-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12 md:mb-16">
          <div className="space-y-4 md:space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl text-brand-ink">Therapy by Hafsah</h3>
            <p className="text-brand-ink/70 leading-relaxed max-w-xs text-sm md:text-base">
              Dedicated to creating a safe, empathetic, and non-judgmental space where you can feel accepted and heard.
            </p>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-brand-coral">Location & Contact</h4>
            <ul className="space-y-3 md:space-y-4 text-brand-ink/80 text-sm md:text-base">
              <li className="flex items-start space-x-3 group">
                <div className="p-2 rounded-full bg-white/50 group-hover:bg-brand-coral group-hover:text-white transition-all duration-300 shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="pt-1">Based in New Delhi | Serving Globally via Secure Video Platform</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="p-2 rounded-full bg-white/50 group-hover:bg-brand-coral group-hover:text-white transition-all duration-300 shrink-0">
                  <Mail size={18} />
                </div>
                <a href="mailto:therapy@hafsahmasroor.com" className="hover:text-brand-coral transition-colors duration-300 pt-1 break-all">
                  therapy@hafsahmasroor.com
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-brand-coral">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/_fakefreud_?igsh=YTBrNzRpOTZ4MWQ2&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/50 hover:bg-brand-coral hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 md:pt-10 border-t border-brand-ink/10 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-brand-ink/40 text-center md:text-left">
          <p>© {new Date().getFullYear()} Therapy by Hafsah. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-4 md:mt-0">
            <span className="hover:text-brand-coral transition-colors duration-300 cursor-default">Psychodynamic Psychotherapy</span>
            <span className="hover:text-brand-coral transition-colors duration-300 cursor-default">Clinical Research</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
