import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Areas of Practice', path: '/practice' },
    { name: 'The Approach', path: '/approach' },
    { name: 'Research & Reflections', path: '/research' },
    { name: 'Voices from the Room', path: '/testimonials' },
    { name: 'Book a Session', path: '/book' },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-coral/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center">
          <Link to="/" className="flex flex-col group py-2">
            <span className="text-xl md:text-2xl font-serif font-medium tracking-tight text-brand-ink group-hover:text-brand-coral transition-colors duration-300">Therapy by Hafsah</span>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] opacity-60 -mt-1 text-brand-ink">Psychotherapist & Researcher</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  link.path === '/book'
                    ? 'px-8 py-3 bg-brand-coral text-white rounded-full hover:scale-105 shadow-md'
                    : location.pathname === link.path
                    ? 'text-brand-coral'
                    : 'text-brand-ink/70 hover:text-brand-coral'
                }`}
              >
                {link.name}
                {link.path !== '/book' && (
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-coral transform transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-3 -mr-2 text-brand-ink hover:text-brand-coral transition-colors duration-300 h-12 w-12 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-cream border-b border-brand-coral/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-8 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-lg font-serif border-b border-brand-coral/5 transition-colors duration-300 ${
                    link.path === '/book' ? 'text-brand-coral font-bold' : 'text-brand-ink hover:text-brand-coral'
                  } ${location.pathname === link.path ? 'text-brand-coral' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex space-x-6 pt-8 px-3">
                <a 
                  href="https://www.instagram.com/_fakefreud_?igsh=YTBrNzRpOTZ4MWQ2&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full bg-brand-peach/30 flex items-center justify-center text-brand-coral hover:bg-brand-coral hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
