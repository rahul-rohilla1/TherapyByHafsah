import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section A: The Clinical Foundation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-brand-rose font-bold mb-6">The Clinical Foundation</h2>
            <h1 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-brand-teal">
              Grounded in research, <br />driven by depth.
            </h1>
            <div className="space-y-6 text-brand-teal/80 leading-relaxed">
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
            <div className="aspect-square rounded-[60px] overflow-hidden shadow-xl">
              <img 
                src="https://picsum.photos/seed/clinical/800/800" 
                alt="Clinical Setting" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-lavender/10 rounded-full -z-10 blur-2xl"></div>
          </motion.div>
        </div>

        {/* Section B: The Philosophy */}
        <div className="bg-white rounded-[48px] p-8 md:p-16 mb-32 border border-brand-teal/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xs uppercase tracking-[0.3em] text-brand-rose font-bold mb-12 text-center">The Philosophy</h2>
            
            <div className="space-y-12 text-brand-teal/80 leading-relaxed">
              <p className="text-2xl md:text-3xl font-serif text-center text-brand-teal mb-16">
                Therapy is more than just a conversation; it is a specialized clinical process designed to explore and address the underlying causes of persistent emotional struggles and behaviours.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-3xl bg-brand-cream/50">
                  <h3 className="font-serif text-xl mb-3 text-brand-teal">Restored Relationships</h3>
                  <p className="text-sm">Resolving internal conflicts that often interfere with your connections to others.</p>
                </div>
                <div className="p-6 rounded-3xl bg-brand-cream/50">
                  <h3 className="font-serif text-xl mb-3 text-brand-teal">Professional Clarity</h3>
                  <p className="text-sm">Improving your focus and work performance by addressing mental weights.</p>
                </div>
                <div className="p-6 rounded-3xl bg-brand-cream/50">
                  <h3 className="font-serif text-xl mb-3 text-brand-teal">Profound Relief</h3>
                  <p className="text-sm">Achieving a significant, lasting reduction in emotional distress at the root.</p>
                </div>
              </div>

              <div className="pt-12 border-t border-brand-teal/10">
                <p className="mb-6">
                  I bring an insightful perspective backed by a robust academic foundation and a proven track record in clinical practice. As your therapist, I act as a supportive and knowledgeable companion, using professional rigor to help you navigate your most complex internal landscapes.
                </p>
                <p className="font-serif italic text-lg text-brand-rose">
                  You don't have to wait for a crisis to access therapy. It is a powerful tool for anyone navigating repetitive cycles, feelings of being "hidden", burnout, or identity transitions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section C: Education & Credentials */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.3em] text-brand-rose font-bold mb-12 text-center">Institutional Affiliations</h2>
          <div className="space-y-8">
            {[
              { school: "Ambedkar University Delhi" },
              { school: "Ambedkar University Delhi" },
              { school: "Lady Shri Ram College (LSR), Delhi University" }
            ].map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6 p-6 rounded-2xl border border-brand-teal/10 hover:bg-white transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-teal">{edu.school}</h4>
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
