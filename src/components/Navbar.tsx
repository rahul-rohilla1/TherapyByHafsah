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
    <nav className="fixed w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-teal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-serif font-medium tracking-tight text-brand-teal">Therapy by Hafsah</span>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 -mt-1 text-brand-teal">Psychotherapist & Researcher</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 ${
                  link.path === '/book'
                    ? 'px-5 py-2.5 bg-brand-teal text-white rounded-full hover:bg-brand-rose shadow-sm'
                    : location.pathname === link.path
                    ? 'text-brand-teal underline underline-offset-8'
                    : 'text-brand-teal/70 hover:text-brand-rose'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-brand-ink">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-brand-cream border-b border-brand-olive/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-lg font-serif border-b border-brand-olive/5 ${
                    link.path === '/book' ? 'text-brand-rose font-bold' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex space-x-4 pt-6 px-3">
                <a 
                  href="https://www.instagram.com/_fakefreud_?igsh=YTBrNzRpOTZ4MWQ2&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-olive hover:text-brand-rose transition-colors"
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
