import React from 'react';
import { motion } from 'motion/react';
import { Video, ShieldCheck, Sparkles, Quote, Brain, Globe } from 'lucide-react';

const Approach = () => {
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Heading Section */}
        <div className="max-w-4xl mb-16 md:mb-24 space-y-6 md:space-y-8">
          <h2 className="text-xs uppercase tracking-[0.4em] text-brand-coral font-bold">The Methodology</h2>
          <h1 className="text-4xl md:text-7xl font-serif mb-6 md:mb-8 leading-tight text-brand-ink">
            What is Psychodynamic Therapy?
          </h1>
          <p className="text-xl md:text-3xl text-brand-coral leading-relaxed font-serif italic border-l-4 border-brand-coral pl-6 md:pl-8 py-2">
            "It is a joy to be hidden, but a disaster not to be found."
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32 items-center">
          <div className="space-y-6 md:space-y-10 text-lg md:text-xl text-brand-ink/80 leading-relaxed">
            <p>
              Psychodynamic work is a specialized clinical approach that moves beyond temporary symptom relief to explore the unconscious—the hidden patterns, childhood narratives, and motivations that dictate our present lives.
            </p>
            <p>
              While surface-level therapies focus on immediate habits, my primary approach addresses the underlying causes of emotional struggles and behaviors to facilitate long-term healing.
            </p>
            <p>
              Our work creates a secure space where you are compassionately understood and found. We look at the "invisible scripts" that run your life, bringing them into the light so you can finally choose a different path.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-coral text-white p-10 md:p-16 rounded-[40px] md:rounded-[60px] flex flex-col justify-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <Quote size={48} className="md:w-16 md:h-16 mb-6 md:mb-10 opacity-30" />
            <p className="text-2xl md:text-3xl font-serif leading-relaxed mb-8 md:mb-12 relative z-10">
              "Therapy is an active commitment to understanding and caring for the parts of yourself that are in pain, ultimately guiding them toward true healing."
            </p>
            <div className="flex items-center space-x-4 md:space-x-6 relative z-10">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Sparkles size={24} className="md:w-7 md:h-7" />
              </div>
              <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold">Depth-Oriented Healing</span>
            </div>
          </motion.div>
        </div>

        {/* What to Expect */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-center text-xs uppercase tracking-[0.4em] text-brand-coral font-bold mb-12 md:mb-20">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              { 
                title: "Secure Space", 
                desc: "A HIPAA-compliant, confidential environment where you can speak your truth without judgment.",
                icon: ShieldCheck
              },
              { 
                title: "Global Reach", 
                desc: "All sessions are conducted via a secure video platform, allowing us to connect from anywhere in the world.",
                icon: Video
              },
              { 
                title: "Clinical Rigor", 
                desc: "Insights sharpened by ongoing research at AIIMS, ensuring your care is grounded in the latest clinical understanding.",
                icon: Brain
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 md:p-12 rounded-[32px] md:rounded-[40px] bg-white border border-brand-coral/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-brand-peach to-white rounded-2xl md:rounded-3xl flex items-center justify-center text-brand-coral mx-auto mb-6 md:mb-8 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={28} className="md:w-9 md:h-9" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 text-brand-ink">{item.title}</h3>
                <p className="text-brand-ink/60 leading-relaxed text-base md:text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Reach Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[40px] md:rounded-[60px] p-10 md:p-16 text-center border border-brand-coral/10 shadow-xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-brand-peach/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-peach rounded-full flex items-center justify-center text-brand-coral mx-auto mb-6 md:mb-8 shadow-inner">
              <Globe size={32} className="md:w-10 md:h-10" />
            </div>
            <h2 className="text-2xl md:text-4xl font-serif mb-4 md:mb-6 text-brand-ink">Serving the Global Indian Community</h2>
            <p className="text-lg md:text-xl text-brand-ink/70 max-w-3xl mx-auto leading-relaxed italic">
              "All sessions are conducted via a secure, HIPAA-compliant video platform, allowing us to connect from anywhere in the world."
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Approach;
