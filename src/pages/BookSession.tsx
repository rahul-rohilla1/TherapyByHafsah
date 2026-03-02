import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, HelpCircle, ChevronDown, ChevronUp, Sparkles, User } from 'lucide-react';

const BookSession = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the duration of each session?",
      a: "Each therapy session typically lasts for 50-60 minutes."
    },
    {
      q: "How many sessions will I need?",
      a: "The number of sessions varies depending on your individual needs and the complexity of the issues we are addressing. Psychodynamic therapy is often a longer-term commitment to achieve deep, lasting change."
    },
    {
      q: "Is my information confidential?",
      a: "Yes, absolute confidentiality is a cornerstone of the therapeutic relationship. All sessions are conducted via a secure, HIPAA-compliant platform."
    },
    {
      q: "Do you offer in-person sessions?",
      a: "Currently, I offer virtual sessions only. This allows me to serve the global Indian community regardless of their physical location."
    }
  ];

  // REPLACE 'YOUR_FORM_ID' with the ID from Formspree (e.g., 'xbjwpnre')
  // Using email directly often fails with AJAX unless verified in account
  const FORMSPREE_ID = "mlgwygan"; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        alert(data.error || "There was an error submitting your form. Please try again or email directly.");
      }
    } catch (error) {
      alert("There was a connection error. Please check your internet or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          
          {/* Left Side: Info & Fees */}
          <div className="space-y-10 md:space-y-12 order-1">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-xs uppercase tracking-[0.4em] text-brand-coral font-bold">Connect</h2>
              <h1 className="text-3xl md:text-7xl font-serif text-brand-ink leading-tight">Book a Session</h1>
              <p className="text-lg md:text-xl text-brand-ink/70 leading-relaxed italic border-l-4 border-brand-coral pl-6 md:pl-8 py-2">
                Take the first step toward understanding and healing. I offer a safe, empathetic space for you to explore your inner world.
              </p>
            </div>

            <div className="bg-white rounded-[32px] md:rounded-[48px] p-8 md:p-12 border border-brand-coral/10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-peach/20 rounded-full blur-3xl -mr-24 -mt-24"></div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-brand-coral mb-8 md:mb-10 relative z-10">Fee Structure</h3>
              <div className="space-y-8 md:space-y-10 relative z-10">
                <div className="flex justify-between items-end pb-6 md:pb-8 border-b border-brand-coral/10">
                  <div>
                    <h4 className="font-serif text-2xl md:text-3xl text-brand-ink">Clients in India</h4>
                    <p className="text-[10px] text-brand-ink/40 uppercase tracking-widest font-bold mt-2">Per Session (50-60 mins)</p>
                  </div>
                  <span className="text-3xl md:text-4xl font-serif text-brand-coral">₹1500</span>
                </div>
                <div className="flex justify-between items-end pb-6 md:pb-8 border-b border-brand-coral/10">
                  <div>
                    <h4 className="font-serif text-2xl md:text-3xl text-brand-ink">International Clients</h4>
                    <p className="text-[10px] text-brand-ink/40 uppercase tracking-widest font-bold mt-2">Per Session (50-60 mins)</p>
                  </div>
                  <span className="text-3xl md:text-4xl font-serif text-brand-coral">₹3000</span>
                </div>
              </div>
              <p className="mt-8 md:mt-10 text-sm text-brand-ink/60 leading-relaxed italic relative z-10">
                * A sliding scale is available for marginalized communities to foster equitable access. These slots are limited. Please reach out to discuss availability.
              </p>
              <div className="mt-8 md:mt-10 p-5 md:p-6 bg-brand-cream rounded-2xl md:rounded-3xl text-[10px] md:text-xs text-brand-coral font-bold text-center uppercase tracking-widest border border-brand-coral/5 shadow-inner">
                Virtual Sessions Only • Secure & Confidential
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white p-8 md:p-16 rounded-[32px] md:rounded-[60px] border border-brand-coral/10 shadow-2xl relative overflow-hidden order-2 md:row-span-2">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-peach/20 rounded-full blur-3xl -mr-32 -mb-32"></div>
            {!submitted ? (
              <div className="space-y-10 md:space-y-12 relative z-10">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-serif text-brand-ink">Initial Assessment Form</h3>
                  <p className="text-base md:text-lg text-brand-ink/60 leading-relaxed italic">
                    To help me understand your needs and prepare for our first consultation, please fill out this brief assessment. All information provided is strictly confidential and will be reviewed only by me.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                  <div className="space-y-6 md:space-y-8">
                    <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-coral border-b border-brand-coral/10 pb-4">Personal Details</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-coral/60 ml-2">Full Name</label>
                        <input type="text" name="full_name" required className="w-full p-4 md:p-5 bg-brand-cream/30 rounded-xl md:rounded-2xl border border-brand-coral/10 outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all h-12 md:h-14" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-coral/60 ml-2">Sex</label>
                        <input type="text" name="sex" required className="w-full p-4 md:p-5 bg-brand-cream/30 rounded-xl md:rounded-2xl border border-brand-coral/10 outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all h-12 md:h-14" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-coral/60 ml-2">Age</label>
                        <input type="text" name="age" required className="w-full p-4 md:p-5 bg-brand-cream/30 rounded-xl md:rounded-2xl border border-brand-coral/10 outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all h-12 md:h-14" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-coral/60 ml-2">Date of Birth</label>
                        <input type="text" name="dob" required placeholder="dd/mm/yyyy" className="w-full p-4 md:p-5 bg-brand-cream/30 rounded-xl md:rounded-2xl border border-brand-coral/10 outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all h-12 md:h-14" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-coral/60 ml-2">Phone Number</label>
                        <input type="tel" name="phone" required className="w-full p-4 md:p-5 bg-brand-cream/30 rounded-xl md:rounded-2xl border border-brand-coral/10 outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all h-12 md:h-14" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-coral/60 ml-2">Email Address</label>
                        <input type="email" name="email" required className="w-full p-4 md:p-5 bg-brand-cream/30 rounded-xl md:rounded-2xl border border-brand-coral/10 outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all h-12 md:h-14" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-coral/60 ml-2">Occupation</label>
                        <input type="text" name="occupation" required className="w-full p-4 md:p-5 bg-brand-cream/30 rounded-xl md:rounded-2xl border border-brand-coral/10 outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all h-12 md:h-14" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-coral/60 ml-2">Relationship Status</label>
                        <input type="text" name="relationship_status" required className="w-full p-4 md:p-5 bg-brand-cream/30 rounded-xl md:rounded-2xl border border-brand-coral/10 outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all h-12 md:h-14" />
                      </div>
                    </div>

                    <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-coral border-b border-brand-coral/10 pb-4 pt-6">Emergency Contact</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-coral/60 ml-2">Contact Name</label>
                        <input type="text" name="emergency_contact_name" required className="w-full p-4 md:p-5 bg-brand-cream/30 rounded-xl md:rounded-2xl border border-brand-coral/10 outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all h-12 md:h-14" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-coral/60 ml-2">Contact Number</label>
                        <input type="text" name="emergency_contact_phone" required className="w-full p-4 md:p-5 bg-brand-cream/30 rounded-xl md:rounded-2xl border border-brand-coral/10 outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all h-12 md:h-14" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-coral/60 ml-2">Relationship to Emergency Contact</label>
                      <input type="text" name="emergency_contact_relationship" required className="w-full p-4 md:p-5 bg-brand-cream/30 rounded-xl md:rounded-2xl border border-brand-coral/10 outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all h-12 md:h-14" />
                    </div>

                    <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-coral border-b border-brand-coral/10 pb-4 pt-6">Clinical Context</h4>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-coral/60 ml-2">Reasons for seeking therapy</label>
                      <textarea name="reasons_for_therapy" required rows={4} className="w-full p-4 md:p-5 bg-brand-cream/30 rounded-2xl md:rounded-3xl border border-brand-coral/10 outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all resize-none"></textarea>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-coral/60 ml-2">Previous therapy/psychiatrist consults?</label>
                      <textarea name="previous_therapy" required rows={3} className="w-full p-4 md:p-5 bg-brand-cream/30 rounded-2xl md:rounded-3xl border border-brand-coral/10 outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all resize-none"></textarea>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-coral/60 ml-2">Current medications (if any)</label>
                      <textarea name="current_medications" required rows={3} className="w-full p-4 md:p-5 bg-brand-cream/30 rounded-2xl md:rounded-3xl border border-brand-coral/10 outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all resize-none"></textarea>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-coral/60 ml-2">Preferred days and times for consult</label>
                      <textarea name="preferred_timing" required rows={3} className="w-full p-4 md:p-5 bg-brand-cream/30 rounded-2xl md:rounded-3xl border border-brand-coral/10 outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all resize-none"></textarea>
                    </div>
                  </div>

                  <div className="pt-6 md:pt-8">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full h-14 md:h-16 bg-brand-coral text-white rounded-full text-lg md:text-xl font-bold transition-all shadow-xl flex items-center justify-center group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Submit Application'}
                      {!isSubmitting && <Send className="ml-3 md:ml-4 group-hover:translate-x-2 transition-transform duration-300 w-5 h-5 md:w-6 md:h-6" />}
                    </button>
                  </div>
                </form>

                <div className="pt-12 md:pt-16 space-y-8 md:space-y-12 text-brand-ink/70 text-sm leading-relaxed border-t border-brand-coral/10">
                  <div className="space-y-6">
                    <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-coral">Meet Your Therapist</h4>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 bg-brand-cream/30 p-6 rounded-[24px] md:rounded-[32px] border border-brand-coral/5">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md shrink-0 border-2 border-white">
                        <img 
                          src="https://i.ibb.co/PvwGQsBq/dfff804d-5b16-4f1f-8d6c-35fc629c5f05.jpg" 
                          alt="Hafsah Masroor" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="text-center sm:text-left">
                        <h5 className="font-serif text-xl text-brand-ink">Hafsah Masroor</h5>
                        <p className="text-xs text-brand-coral font-bold uppercase tracking-widest mt-1">Psychotherapist, Clinical Psychologist and Scientific Researcher</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-peach rounded-xl flex items-center justify-center text-brand-coral shrink-0 shadow-inner">
                      <Sparkles size={20} />
                    </div>
                    <p className="italic text-sm md:text-base">
                      I usually respond within 48 hours. If you haven't heard from me after two days, please check your Spam folder, as my reply may occasionally be filtered there.
                    </p>
                  </div>
                  
                  <div className="p-6 md:p-8 bg-brand-peach/30 rounded-[24px] md:rounded-[32px] border border-brand-coral/10 shadow-inner">
                    <p className="text-brand-ink font-medium leading-relaxed text-sm md:text-base">
                      <span className="text-brand-coral font-bold uppercase tracking-widest text-[10px] block mb-2">Important Note</span>
                      If you haven't received a response after one week, please assume that your form was not received, and feel free to reach out directly via email at <a href="mailto:therapy@hafsahmasroor.com" className="text-brand-coral font-bold hover:underline">therapy@hafsahmasroor.com</a>.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 md:py-24 space-y-8 md:space-y-10 relative z-10"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-peach rounded-full flex items-center justify-center text-brand-coral mx-auto shadow-inner">
                  <CheckCircle2 size={40} className="md:w-12 md:h-12" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-5xl font-serif text-brand-ink">Request Sent</h2>
                  <p className="text-lg md:text-xl text-brand-ink/60 italic max-w-md mx-auto">
                    Thank you for reaching out. I will review your assessment and get back to you within 24-48 hours to discuss scheduling.
                  </p>
                </div>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-brand-coral font-bold uppercase tracking-[0.2em] text-sm hover:underline underline-offset-8 h-12 flex items-center justify-center mx-auto"
                >
                  Send another request
                </button>
              </motion.div>
            )}
          </div>

          {/* FAQ Section - Appears below Fees on desktop, below Form on mobile */}
          <div className="space-y-8 md:space-y-10 order-3">
            <h3 className="font-serif text-2xl md:text-3xl text-brand-ink flex items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-peach rounded-xl flex items-center justify-center text-brand-coral mr-4 shadow-inner">
                <HelpCircle size={20} className="md:w-6 md:h-6" />
              </div>
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl md:rounded-3xl border border-brand-coral/10 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-5 md:p-6 flex justify-between items-center text-left hover:text-brand-coral transition-colors"
                  >
                    <span className="font-serif text-lg md:text-xl text-brand-ink">{faq.q}</span>
                    <div className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                      <ChevronDown size={20} className="text-brand-coral md:w-6 md:h-6" />
                    </div>
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 md:p-6 pt-0 text-brand-ink/70 leading-relaxed text-base md:text-lg border-t border-brand-coral/5 bg-brand-cream/10">
                      {faq.a}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookSession;
