import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Section A: The Clinical Foundation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="text-xs uppercase tracking-[0.4em] text-brand-coral font-bold">The Clinical Foundation</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-brand-ink">
              Grounded in research, <br />driven by depth.
            </h1>
            <div className="space-y-4 md:space-y-6 text-brand-ink/80 leading-relaxed text-base md:text-lg">
              <p>
                My practice is anchored in a high-standard clinical foundation and a commitment to depth-oriented healing. I bring four years of intensive psychotherapeutic experience to every session, specializing in psychoanalytic and psychodynamic modalities to help clients address the root causes of their distress providing insightful care that respects diverse socio-cultural backgrounds.
              </p>
              <p>
                Alongside my private practice, I serve as a full-time Psychologist and Researcher at AIIMS, New Delhi, one of India’s premier medical institutions. My work is never static; it is constantly sharpened by my ongoing research at AIIMS—specifically into the intersections of speech patterns and depression—allowing me to integrate advanced clinical insights into the deeply human process of therapy.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-48 md:w-64 h-48 md:h-64 bg-brand-coral/10 rounded-[60px] rotate-12 -z-10 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 md:w-48 h-32 md:h-48 bg-brand-peach/40 rounded-full -z-10 blur-xl"></div>
            
            <div className="aspect-square rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://picsum.photos/seed/clinical/800/800" 
                alt="Clinical Setting" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Section B: The Philosophy */}
        <div className="bg-white rounded-[32px] md:rounded-[48px] p-8 md:p-20 mb-20 md:mb-32 border border-brand-coral/10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-peach/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-xs uppercase tracking-[0.4em] text-brand-coral font-bold mb-8 md:mb-12 text-center">The Philosophy</h2>
            
            <div className="space-y-12 md:space-y-16 text-brand-ink/80 leading-relaxed">
              <p className="text-2xl md:text-5xl font-serif text-center text-brand-ink mb-12 md:text-center leading-tight">
                Therapy is more than just a conversation; it is a specialized clinical process designed to explore and address the underlying causes of persistent emotional struggles and behaviours.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                {[
                  { title: "Restored Relationships", desc: "Resolving internal conflicts that often interfere with your connections to others." },
                  { title: "Professional Clarity", desc: "Improving your focus and work performance by addressing mental weights." },
                  { title: "Profound Relief", desc: "Achieving a significant, lasting reduction in emotional distress at the root." }
                ].map((item, i) => (
                  <div key={i} className="p-6 md:p-8 rounded-3xl bg-brand-cream/30 border border-brand-coral/5 hover:shadow-lg transition-all duration-300">
                    <h3 className="font-serif text-xl md:text-2xl mb-3 md:mb-4 text-brand-ink">{item.title}</h3>
                    <p className="text-brand-ink/70 text-sm md:text-base">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-12 md:pt-16 border-t border-brand-coral/10 space-y-6 md:space-y-8">
                <p className="text-base md:text-lg">
                  I bring an insightful perspective backed by a robust academic foundation and a proven track record in clinical practice. As your therapist, I act as a supportive and knowledgeable companion, using professional rigor to help you navigate your most complex internal landscapes.
                </p>
                <p className="font-serif italic text-xl md:text-2xl text-brand-coral border-l-4 border-brand-coral pl-6 md:pl-8 py-2">
                  You don't have to wait for a crisis to access therapy. It is a powerful tool for anyone navigating repetitive cycles, feelings of being "hidden", burnout, or identity transitions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section C: Education & Credentials */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.4em] text-brand-coral font-bold mb-12 md:mb-16 text-center">Institutional Affiliations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { school: "Ambedkar University Delhi", degree: "M.Phil in Psychotherapy" },
              { school: "Ambedkar University Delhi", degree: "MA in Psychology" },
              { school: "Lady Shri Ram College (LSR)", degree: "BA (Hons) Psychology" }
            ].map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 md:space-x-6 p-6 md:p-8 rounded-3xl bg-white border border-brand-coral/10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-brand-peach flex items-center justify-center text-brand-coral shrink-0 shadow-inner">
                  <GraduationCap size={28} className="md:w-8 md:h-8" />
                </div>
                <div>
                  <h4 className="font-serif text-xl md:text-2xl text-brand-ink leading-tight">{edu.school}</h4>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-brand-coral mt-1 md:mt-2">{edu.degree}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
