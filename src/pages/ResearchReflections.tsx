import React from 'react';
import { motion } from 'motion/react';
import { Search, BookOpen, Newspaper, Globe } from 'lucide-react';

const ResearchReflections = () => {
  const posts = [
    {
      title: "Decoding the Silence: How Speech Patterns Reveal Hidden Depression",
      category: "AIIMS Research",
      date: "Feb 2026",
      excerpt: "Translating complex linguistic data from our AIIMS study into actionable insights for emotional health.",
      image: "https://picsum.photos/seed/linguistics/600/400"
    },
    {
      title: "The Neurobiology of Attachment: Why We Repeat Relationship Patterns",
      category: "Neuroscience",
      date: "Jan 2026",
      excerpt: "Making the science of brain connectivity accessible to help you understand your 'invisible scripts'.",
      image: "https://picsum.photos/seed/brain/600/400"
    },
    {
      title: "Psychodynamics in the Modern Age: A Scientific Perspective",
      category: "Clinical Theory",
      date: "Dec 2025",
      excerpt: "Bridging the gap between traditional psychoanalytic thought and contemporary evidence-based practice.",
      image: "https://picsum.photos/seed/modern/600/400"
    }
  ];

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-8 md:gap-12">
          <div className="max-w-3xl space-y-4 md:space-y-6">
            <h2 className="text-xs uppercase tracking-[0.4em] text-brand-coral font-bold">The Lab & The Lounge</h2>
            <h1 className="text-4xl md:text-7xl font-serif text-brand-ink leading-tight">Research & Reflections</h1>
            <p className="text-brand-ink/60 text-lg md:text-xl leading-relaxed">
              Cutting-edge scientific findings, simplified. Making clinical research accessible for your personal growth.
            </p>
          </div>
          
          <div className="relative w-full lg:w-96 group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-coral/40 group-focus-within:text-brand-coral transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full pl-14 pr-6 py-4 rounded-full border border-brand-coral/10 focus:outline-none focus:ring-2 focus:ring-brand-coral/20 bg-white shadow-sm hover:shadow-md transition-all duration-300 h-12 md:h-14"
            />
          </div>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="aspect-[16/10] rounded-[32px] md:rounded-[40px] overflow-hidden mb-6 md:mb-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 border-[6px] md:border-8 border-white">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-brand-coral bg-brand-peach px-3 md:px-4 py-1 md:py-1.5 rounded-full">
                  {post.category}
                </span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-brand-ink/40 font-bold">{post.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif mb-4 md:mb-6 group-hover:text-brand-coral transition-colors duration-300 leading-tight text-brand-ink">
                {post.title}
              </h2>
              <p className="text-brand-ink/70 leading-relaxed mb-6 md:mb-8 text-base md:text-lg flex-grow">
                {post.excerpt}
              </p>
              <div className="flex items-center text-xs font-bold uppercase tracking-widest text-brand-coral group-hover:translate-x-4 transition-transform duration-300">
                Read Article <span className="ml-3 text-lg">→</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter / CTA */}
        <div className="mt-24 md:mt-40 bg-white rounded-[40px] md:rounded-[60px] p-10 md:p-24 text-center border border-brand-coral/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-peach/30 rounded-full blur-3xl -ml-32 -mt-32"></div>
          <div className="relative z-10 space-y-8 md:space-y-10">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-peach rounded-2xl md:rounded-3xl flex items-center justify-center text-brand-coral mx-auto shadow-inner">
              <BookOpen size={32} className="md:w-10 md:h-10" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-ink">Stay Informed</h2>
            <p className="text-brand-ink/60 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed italic">
              Subscribe to receive occasional insights on mental health, research updates from AIIMS, and resources for the Indian diaspora.
            </p>
            <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 md:pt-6">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-6 md:px-8 py-4 md:py-5 rounded-full border border-brand-coral/10 focus:outline-none focus:ring-2 focus:ring-brand-coral/20 bg-brand-cream/30 text-base md:text-lg h-12 md:h-14"
                required
              />
              <button className="px-8 md:px-10 py-3 md:py-5 bg-brand-coral text-white rounded-full font-bold shadow-lg transition-transform hover:scale-105 h-12 md:h-14">
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResearchReflections;
