import React from 'react';
import { Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-brand-teal/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl mb-4 text-brand-teal">Therapy by Hafsah</h3>
            <p className="text-sm text-brand-teal/60 leading-relaxed max-w-xs">
              Dedicated to creating a safe, empathetic, and non-judgmental space where you can feel accepted and heard.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 text-brand-rose">Location & Contact</h4>
            <ul className="space-y-4 text-sm text-brand-teal/70">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-rose shrink-0" />
                <span>Based in New Delhi | Serving Globally via Secure Video Platform</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-rose shrink-0" />
                <a href="mailto:therapy@hafsahmasroor.com" className="hover:text-brand-rose transition-colors">
                  therapy@hafsahmasroor.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 text-brand-rose">Connect</h4>
            <div className="flex space-x-6">
              <a 
                href="https://www.instagram.com/_fakefreud_?igsh=YTBrNzRpOTZ4MWQ2&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full border border-brand-rose/20 hover:bg-brand-rose hover:text-white transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-teal/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-brand-teal/40">
          <p>© {new Date().getFullYear()} Therapy by Hafsah. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Psychodynamic Psychotherapy</span>
            <span>Clinical Research</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
