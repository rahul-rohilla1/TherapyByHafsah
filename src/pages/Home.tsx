import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Globe, Brain, Users, Compass, ShieldCheck } from 'lucide-react';

const Home = () => {
  const practiceAreas = [
    { icon: Heart, title: "Holding Space for the Giver", desc: "Supporting those who care for others in finding their own room to breathe.", tags: ["Burnout", "Self-Care"] },
    { icon: Globe, title: "Belonging Across Borders", desc: "Navigating identity and family for the global Indian community.", tags: ["Identity", "Migration"] },
    { icon: Brain, title: "The Interior Landscape", desc: "Moving beyond symptoms to understand deep emotional roots.", tags: ["Depression", "Anxiety"] },
    { icon: Users, title: "The Architecture of Connection", desc: "Breaking recurring patterns in relationships.", tags: ["Relationships", "Conflict"] },
    { icon: Compass, title: "The Journey Inward", desc: "Comprehensive deep-dives into your truest needs.", tags: ["Self-Discovery", "Growth"] },
    { icon: ShieldCheck, title: "Beyond the Hustle", desc: "Reclaiming well-being from high-stakes modern life.", tags: ["Stress", "Balance"] }
  ];

  return (
    <div className="bg-brand-cream">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-brand-ink">
              Welcome to a safe, compassionate environment.
            </h1>
            <p className="text-xl md:text-2xl font-serif italic text-brand-coral leading-relaxed">
              Where your inner world is met with absolute acceptance and dedicated, non-judgmental care.
            </p>
            <p className="text-base md:text-lg text-brand-ink/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Psychotherapist, Clinical Psychologist, and Scientific Researcher at AIIMS, New Delhi, serving the global Indian community.
            </p>
            <div className="pt-4">
              <Link 
                to="/book" 
                className="inline-flex items-center px-8 md:px-10 py-3 md:py-4 bg-brand-coral text-white rounded-full text-base md:text-lg font-bold shadow-lg transition-transform hover:scale-105 group h-12 md:h-14"
              >
                Book a Consultation
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative background elements - simplified and straightened */}
            <div className="absolute -top-10 -right-10 w-48 md:w-64 h-48 md:h-64 bg-brand-coral/5 rounded-[40px] -z-10 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 md:w-48 h-32 md:h-48 bg-brand-peach/30 rounded-full -z-10 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border border-brand-coral/10 rounded-[40px] -z-20"></div>

            <div className="relative p-2 flex justify-center items-center">
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10 transition-all duration-500">
                <img 
                  src="https://i.ibb.co/PvwGQsBq/dfff804d-5b16-4f1f-8d6c-35fc629c5f05.jpg" 
                  alt="Hafsah Masroor" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Mission */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8 md:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="text-xs uppercase tracking-[0.4em] text-brand-coral font-bold">The Mission</h2>
            <p className="text-3xl md:text-5xl font-serif leading-tight text-brand-ink">
              I am dedicated to creating a safe, empathetic, and non-judgmental space where you can feel accepted and heard.
            </p>
            <div className="w-16 md:w-20 h-1 bg-brand-coral/20 mx-auto"></div>
            <p className="text-xl md:text-2xl text-brand-ink/60 font-serif italic leading-relaxed">
              In this therapeutic relationship I act as a supportive companion to help you address the underlying causes of your emotional struggles and behaviours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links / Areas of Practice Preview */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-ink">Areas of Practice</h2>
            <p className="text-brand-ink/60 text-base md:text-lg">Specialized support for your unique journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-brand-coral/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-brand-peach to-white rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 text-brand-coral shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <area.icon size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 text-brand-ink">{area.title}</h3>
                <p className="text-brand-ink/70 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">{area.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag, i) => (
                    <span key={i} className="px-3 md:px-4 py-1 md:py-1.5 bg-brand-cream text-brand-coral text-[9px] md:text-[10px] uppercase tracking-widest font-bold rounded-full border border-brand-coral/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12 md:mt-20">
            <Link to="/practice" className="inline-flex items-center px-8 py-3 border-2 border-brand-coral text-brand-coral rounded-full font-bold hover:bg-brand-coral hover:text-white transition-all duration-300 h-12 md:h-14">
              View all categories <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
