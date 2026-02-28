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
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs uppercase tracking-[0.3em] text-brand-rose font-bold mb-6">The Lab & The Lounge</h2>
            <h1 className="text-4xl md:text-6xl font-serif mb-6 text-brand-teal">Research & Reflections</h1>
            <p className="text-brand-teal/60 text-lg">
              Cutting-edge scientific findings, simplified. Making clinical research accessible for your personal growth.
            </p>
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-teal/30" size={18} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full pl-12 pr-4 py-3 rounded-full border border-brand-teal/10 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 bg-white"
            />
          </div>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-[32px] overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-rose bg-brand-rose/5 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-brand-teal/40">{post.date}</span>
              </div>
              <h2 className="text-2xl font-serif mb-4 group-hover:text-brand-rose transition-colors leading-tight text-brand-teal">
                {post.title}
              </h2>
              <p className="text-sm text-brand-teal/60 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center text-xs font-bold uppercase tracking-widest text-brand-rose group-hover:translate-x-2 transition-transform">
                Read Article <span className="ml-2">→</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter / CTA */}
        <div className="mt-32 bg-white rounded-[48px] p-12 md:p-20 text-center border border-brand-teal/5">
          <BookOpen size={40} className="mx-auto mb-8 text-brand-rose" />
          <h2 className="text-3xl font-serif mb-6 text-brand-teal">Stay Informed</h2>
          <p className="text-brand-teal/60 max-w-xl mx-auto mb-10">
            Subscribe to receive occasional insights on mental health, research updates from AIIMS, and resources for the Indian diaspora.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 rounded-full border border-brand-teal/10 focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
              required
            />
            <button className="px-8 py-4 bg-brand-teal text-white rounded-full font-medium hover:bg-opacity-90 transition-all">
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ResearchReflections;
