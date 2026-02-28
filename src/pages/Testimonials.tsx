import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Quote, Star, Send, CheckCircle2 } from 'lucide-react';

const Testimonials = () => {
  const [submitted, setSubmitted] = useState(false);
  const [testimonials, setTestimonials] = useState([
    {
      text: "Hafsah's approach is deeply insightful. I felt truly 'found' in our sessions, navigating parts of myself I hadn't even named yet.",
      author: "Client, New Delhi",
      rating: 5
    },
    {
      text: "The focus on psychodynamic roots helped me break patterns I'd been stuck in for years. It's not just talk; it's healing.",
      author: "Client, London",
      rating: 5
    },
    {
      text: "As an Indian living abroad, finding a therapist who understands the cultural nuances was life-changing.",
      author: "Client, New York",
      rating: 5
    }
  ]);

  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-16 md:mb-24 space-y-4 md:space-y-6">
          <h2 className="text-xs uppercase tracking-[0.4em] text-brand-coral font-bold">Shared Experiences</h2>
          <h1 className="text-4xl md:text-7xl font-serif text-brand-ink leading-tight">Voices from the Room</h1>
          <p className="text-brand-ink/60 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Reflections from those who have walked the path of depth-oriented healing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20 md:mb-32">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 md:p-12 rounded-[32px] md:rounded-[48px] border border-brand-coral/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-peach/20 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-brand-peach/40 transition-colors"></div>
              <Quote className="text-brand-coral mb-6 md:mb-8 opacity-40 group-hover:opacity-100 transition-opacity duration-500 md:w-12 md:h-12" size={40} />
              <div className="flex mb-4 md:mb-6 space-x-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="md:w-4 md:h-4 text-brand-coral fill-brand-coral" />
                ))}
              </div>
              <p className="text-brand-ink/80 leading-relaxed italic mb-8 md:mb-10 text-base md:text-lg relative z-10">"{t.text}"</p>
              <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-brand-coral relative z-10">— {t.author}</p>
            </motion.div>
          ))}
        </div>

        {/* Add Testimonial Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-[40px] md:rounded-[60px] p-8 md:p-20 border border-brand-coral/10 shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-peach/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
          {!submitted ? (
            <form onSubmit={handleAddTestimonial} className="space-y-8 md:space-y-10 relative z-10">
              <div className="text-center space-y-3 md:space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif text-brand-ink">Share Your Experience</h2>
                <p className="text-brand-ink/60 italic text-sm md:text-base">Your reflection will be received with gratitude and handled with care.</p>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-brand-coral ml-2">Your Reflection</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full px-6 md:px-8 py-4 md:py-6 rounded-2xl md:rounded-3xl bg-brand-cream/30 border border-brand-coral/10 focus:outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all resize-none text-base md:text-lg"
                  placeholder="How has therapy impacted your journey?"
                ></textarea>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-brand-coral ml-2">Name / Identifier (Optional)</label>
                <input 
                  type="text" 
                  className="w-full px-6 md:px-8 py-4 md:py-6 rounded-2xl md:rounded-3xl bg-brand-cream/30 border border-brand-coral/10 focus:outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all text-base md:text-lg h-12 md:h-14"
                  placeholder="e.g. Client, New Delhi"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full py-4 md:py-6 bg-brand-coral text-white rounded-full font-bold shadow-lg hover:shadow-2xl transition-all flex items-center justify-center group text-base md:text-lg hover:scale-[1.02] h-12 md:h-16"
              >
                Submit Reflection
                <Send className="ml-3 md:ml-4 group-hover:translate-x-2 transition-transform duration-300 md:w-6 md:h-6" size={20} />
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 md:py-12 space-y-6 md:space-y-8 relative z-10"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-peach rounded-full flex items-center justify-center text-brand-coral mx-auto shadow-inner">
                <CheckCircle2 size={40} className="md:w-12 md:h-12" />
              </div>
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-3xl md:text-4xl font-serif text-brand-ink">Thank You</h3>
                <p className="text-lg md:text-xl text-brand-ink/60 italic">Your reflection has been received with gratitude.</p>
              </div>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-brand-coral font-bold uppercase tracking-widest text-xs md:text-sm hover:underline underline-offset-8"
              >
                Submit another reflection
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
