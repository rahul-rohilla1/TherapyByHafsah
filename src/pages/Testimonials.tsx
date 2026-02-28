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
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.3em] text-brand-rose font-bold mb-6">Shared Experiences</h2>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 text-brand-teal">Voices from the Room</h1>
          <p className="text-brand-teal/60 max-w-2xl mx-auto text-lg">
            Reflections from those who have walked the path of depth-oriented healing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[40px] border border-brand-teal/5 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <Quote className="text-brand-rose mb-6" size={32} />
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <p className="text-brand-teal/80 leading-relaxed italic mb-8">"{t.text}"</p>
              <p className="text-xs uppercase tracking-widest font-bold text-brand-rose">— {t.author}</p>
            </motion.div>
          ))}
        </div>

        {/* Add Testimonial Form */}
        <div className="max-w-2xl mx-auto bg-brand-cream/50 rounded-[48px] p-8 md:p-12 border border-brand-teal/10">
          {!submitted ? (
            <form onSubmit={handleAddTestimonial} className="space-y-6">
              <h2 className="text-2xl font-serif text-center mb-8 text-brand-teal">Share Your Experience</h2>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-teal/40 ml-1">Your Reflection</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-teal/10 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 transition-all resize-none"
                  placeholder="How has therapy impacted your journey?"
                ></textarea>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-teal/40 ml-1">Name / Identifier (Optional)</label>
                <input 
                  type="text" 
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-teal/10 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 transition-all"
                  placeholder="e.g. Client, New Delhi"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-brand-teal text-white rounded-2xl font-bold hover:bg-opacity-90 transition-all flex items-center justify-center group"
              >
                Submit Reflection
                <Send className="ml-3 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle2 className="text-brand-rose mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-serif mb-2 text-brand-teal">Thank You</h3>
              <p className="text-brand-teal/60">Your reflection has been received with gratitude.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
