import React from 'react';
import { motion } from 'motion/react';
import { Video, ShieldCheck, Sparkles, Quote, Brain, Globe } from 'lucide-react';

const Approach = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Section */}
        <div className="max-w-4xl mb-24">
          <h2 className="text-xs uppercase tracking-[0.3em] text-brand-rose font-bold mb-6">The Methodology</h2>
          <h1 className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-brand-teal">
            What is Psychodynamic Therapy?
          </h1>
          <p className="text-xl md:text-2xl text-brand-teal/80 leading-relaxed font-serif italic">
            "It is a joy to be hidden, but a disaster not to be found."
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div className="space-y-8 text-lg text-brand-teal/80 leading-relaxed">
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
          
          <div className="bg-brand-teal text-white p-12 rounded-[48px] flex flex-col justify-center">
            <Quote size={48} className="mb-8 opacity-20" />
            <p className="text-2xl font-serif leading-relaxed mb-8">
              "Therapy is an active commitment to understanding and caring for the parts of yourself that are in pain, ultimately guiding them toward true healing."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Sparkles size={20} />
              </div>
              <span className="text-sm uppercase tracking-widest font-medium">Depth-Oriented Healing</span>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="mb-32">
          <h2 className="text-center text-xs uppercase tracking-[0.3em] text-brand-rose font-bold mb-16">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={i} className="text-center p-8 rounded-3xl bg-white border border-brand-teal/5">
                <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center text-brand-rose mx-auto mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-serif mb-4 text-brand-teal">{item.title}</h3>
                <p className="text-sm text-brand-teal/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Reach Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-cream rounded-[40px] p-12 text-center border border-brand-teal/10"
        >
          <Globe size={40} className="mx-auto mb-6 text-brand-rose" />
          <h2 className="text-2xl font-serif mb-4 text-brand-teal">Serving the Global Indian Community</h2>
          <p className="text-brand-teal/70 max-w-2xl mx-auto">
            "All sessions are conducted via a secure, HIPAA-compliant video platform, allowing us to connect from anywhere in the world."
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Approach;
