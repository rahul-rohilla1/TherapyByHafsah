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
      icon: Heart,
      tags: ["Burnout", "Self-Care", "Compassion"]
    },
    {
      id: 2,
      title: "Belonging Across Borders",
      subtitle: "The Global Indian Experience",
      desc: "Navigating the unique emotional weight of identity, home, and family for the global Indian community.",
      icon: Globe,
      tags: ["Identity", "Migration", "Culture"]
    },
    {
      id: 3,
      title: "The Interior Landscape",
      subtitle: "Deep Emotional Health",
      desc: "Moving beyond symptoms to understand the deep emotional roots of your persistent distress.",
      icon: Brain,
      tags: ["Depression", "Anxiety", "Trauma"]
    },
    {
      id: 4,
      title: "The Architecture of Connection",
      subtitle: "Relationships",
      desc: "Understanding and breaking the recurring patterns that keep you from authentic, fulfilling relationships.",
      icon: Users,
      tags: ["Relationships", "Conflict", "Intimacy"]
    },
    {
      id: 5,
      title: "The Journey Inward",
      subtitle: "Comprehensive Self-Work",
      desc: "A dedicated space for comprehensive deep-dives into the self to align your life with your truest needs.",
      icon: Compass,
      tags: ["Self-Discovery", "Growth", "Purpose"]
    },
    {
      id: 6,
      title: "Beyond the Hustle",
      subtitle: "Work-Life Integration",
      desc: "Reclaiming your mental well-being and sense of self from the pressures of high-stakes modern life.",
      icon: ShieldCheck,
      tags: ["Stress", "Balance", "Career"]
    }
  ];

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6">
          <h2 className="text-xs uppercase tracking-[0.4em] text-brand-coral font-bold">Specializations</h2>
          <h1 className="text-4xl md:text-7xl font-serif text-brand-ink">Areas of Practice</h1>
          <p className="text-brand-ink/60 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            A specialized clinical approach tailored to the complexities of modern life and the unique experiences of the global Indian diaspora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-brand-coral/10 hover:border-brand-coral/20 transition-all duration-500 hover:shadow-2xl flex flex-col h-full shadow-lg"
            >
              <div className="mb-8 md:mb-10 relative flex justify-between items-start">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-brand-peach to-white rounded-2xl md:rounded-3xl flex items-center justify-center text-brand-coral shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <cat.icon size={32} className="md:w-10 md:h-10" />
                </div>
                <span className="text-4xl md:text-6xl font-serif opacity-5 text-brand-ink group-hover:opacity-10 transition-opacity">0{cat.id}</span>
              </div>
              
              <div className="space-y-3 md:space-y-4 flex-grow">
                <h3 className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-brand-coral">{cat.subtitle}</h3>
                <h2 className="text-2xl md:text-3xl font-serif text-brand-ink group-hover:text-brand-coral transition-colors duration-300 leading-tight">{cat.title}</h2>
                <p className="text-brand-ink/70 leading-relaxed text-base md:text-lg">
                  {cat.desc}
                </p>
              </div>

              <div className="mt-8 md:mt-10 flex flex-wrap gap-2">
                {cat.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 md:px-4 py-1 md:py-1.5 bg-brand-cream text-brand-coral text-[9px] md:text-[10px] uppercase tracking-widest font-bold rounded-full border border-brand-coral/5 group-hover:bg-brand-peach group-hover:text-brand-coral transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
