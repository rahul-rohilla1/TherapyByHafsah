import React from 'react';
import { motion } from 'motion/react';
import { Heart, Globe, Brain, Users, Compass, ShieldCheck } from 'lucide-react';

const PracticeAreas = () => {
  const categories = [
    {
      id: 1,
      title: "Holding Space for the Giver",
      subtitle: "Care for Caregivers",
      desc: "Supporting those who care for others in finding their own room to breathe, rest, and heal.",
      icon: Heart
    },
    {
      id: 2,
      title: "Belonging Across Borders",
      subtitle: "The Global Indian Experience",
      desc: "Navigating the unique emotional weight of identity, home, and family for the global Indian community.",
      icon: Globe
    },
    {
      id: 3,
      title: "The Interior Landscape",
      subtitle: "Deep Emotional Health",
      desc: "Moving beyond symptoms to understand the deep emotional roots of your persistent distress.",
      icon: Brain
    },
    {
      id: 4,
      title: "The Architecture of Connection",
      subtitle: "Relationships",
      desc: "Understanding and breaking the recurring patterns that keep you from authentic, fulfilling relationships.",
      icon: Users
    },
    {
      id: 5,
      title: "The Journey Inward",
      subtitle: "Comprehensive Self-Work",
      desc: "A dedicated space for comprehensive deep-dives into the self to align your life with your truest needs.",
      icon: Compass
    },
    {
      id: 6,
      title: "Beyond the Hustle",
      subtitle: "Work-Life Integration",
      desc: "Reclaiming your mental well-being and sense of self from the pressures of high-stakes modern life.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.3em] text-brand-rose font-bold mb-6">Specializations</h2>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 text-brand-teal">Areas of Practice</h1>
          <p className="text-brand-teal/60 max-w-2xl mx-auto text-lg">
            A specialized clinical approach tailored to the complexities of modern life and the unique experiences of the global Indian diaspora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white p-10 rounded-[40px] border border-brand-teal/5 hover:border-brand-teal/20 transition-all duration-500 hover:shadow-2xl flex flex-col h-full"
            >
              <div className="mb-8 relative">
                <div className="w-16 h-16 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-rose group-hover:scale-110 transition-transform duration-500">
                  <cat.icon size={32} />
                </div>
                <span className="absolute -top-2 -right-2 text-4xl font-serif opacity-5 text-brand-teal">0{cat.id}</span>
              </div>
              
              <h3 className="text-xs uppercase tracking-widest font-bold text-brand-rose mb-2">{cat.subtitle}</h3>
              <h2 className="text-2xl font-serif mb-4 group-hover:text-brand-rose transition-colors text-brand-teal">{cat.title}</h2>
              <p className="text-brand-teal/70 leading-relaxed flex-grow">
                {cat.desc}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
