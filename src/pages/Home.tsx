import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Globe, Brain, Users, Compass, ShieldCheck } from 'lucide-react';

const Home = () => {
  const practiceAreas = [
    { icon: Heart, title: "Holding Space for the Giver", desc: "Supporting those who care for others in finding their own room to breathe." },
    { icon: Globe, title: "Belonging Across Borders", desc: "Navigating identity and family for the global Indian community." },
    { icon: Brain, title: "The Interior Landscape", desc: "Moving beyond symptoms to understand deep emotional roots." },
    { icon: Users, title: "The Architecture of Connection", desc: "Breaking recurring patterns in relationships." },
    { icon: Compass, title: "The Journey Inward", desc: "Comprehensive deep-dives into your truest needs." },
    { icon: ShieldCheck, title: "Beyond the Hustle", desc: "Reclaiming well-being from high-stakes modern life." }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6 text-brand-teal">
              Welcome to a safe, compassionate environment.
            </h1>
            <p className="text-xl md:text-2xl font-serif italic text-brand-rose mb-8 leading-relaxed">
              Where your inner world is met with absolute acceptance and dedicated, non-judgmental care.
            </p>
            <p className="text-lg text-brand-teal/70 mb-10 max-w-lg">
              Psychotherapist, Clinical Psychologist, and Scientific Researcher at AIIMS, New Delhi, serving the global Indian community.
            </p>
            <Link 
              to="/book" 
              className="inline-flex items-center px-8 py-4 bg-brand-teal text-white rounded-full text-lg font-medium hover:bg-opacity-90 transition-all group"
            >
              Book a Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative p-8 md:p-12 flex justify-center items-center w-full max-w-[500px]">
              {/* Background Box - Centered behind photo */}
              <div className="absolute inset-0 bg-brand-teal/[0.03] rounded-[48px] -z-10 border border-brand-teal/5"></div>
              
              {/* Photo Container - Centered within the box */}
              <div className="w-full aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl border-[12px] border-white relative z-10">
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
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-brand-rose font-bold mb-8">The Mission</h2>
            <p className="text-3xl md:text-4xl font-serif leading-snug mb-8 text-brand-teal">
              I am dedicated to creating a safe, empathetic, and non-judgmental space where you can feel accepted and heard.
            </p>
            <p className="text-xl text-brand-teal/60 font-serif italic">
              In this therapeutic relationship I act as a supportive companion to help you address the underlying causes of your emotional struggles and behaviours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links / Areas of Practice Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-brand-teal">Areas of Practice</h2>
            <p className="text-brand-teal/60">Specialized support for your unique journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-brand-teal/5 hover:border-brand-teal/20 transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-brand-cream rounded-2xl flex items-center justify-center mb-6 text-brand-rose group-hover:bg-brand-rose group-hover:text-white transition-colors">
                  <area.icon size={24} />
                </div>
                <h3 className="text-xl font-serif mb-3 text-brand-teal">{area.title}</h3>
                <p className="text-sm text-brand-teal/60 leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/practice" className="text-brand-rose font-medium inline-flex items-center hover:underline underline-offset-4">
              View all categories <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
