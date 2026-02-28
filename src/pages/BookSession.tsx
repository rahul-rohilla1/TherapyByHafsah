import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const BookSession = () => {
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to therapy@hafsahmasroor.com
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Info & Fees */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-brand-olive font-bold mb-6">Connect</h2>
            <h1 className="text-4xl md:text-6xl font-serif mb-8">Book a Session</h1>
            <p className="text-lg text-brand-ink/70 mb-12 leading-relaxed">
              Take the first step toward understanding and healing. I offer a safe, empathetic space for you to explore your inner world.
            </p>

            <div className="bg-white rounded-[40px] p-10 border border-brand-olive/10 mb-12 shadow-sm">
              <h3 className="text-xs uppercase tracking-widest font-bold text-brand-olive mb-8">Fee Structure</h3>
              <div className="space-y-8">
                <div className="flex justify-between items-center pb-6 border-b border-brand-olive/5">
                  <div>
                    <h4 className="font-serif text-xl">Clients in India</h4>
                    <p className="text-xs text-brand-ink/40 uppercase tracking-widest mt-1">Per Session</p>
                  </div>
                  <span className="text-2xl font-serif">₹1500</span>
                </div>
                <div className="flex justify-between items-center pb-6 border-b border-brand-olive/5">
                  <div>
                    <h4 className="font-serif text-xl">International Clients</h4>
                    <p className="text-xs text-brand-ink/40 uppercase tracking-widest mt-1">Per Session</p>
                  </div>
                  <span className="text-2xl font-serif">₹3000</span>
                </div>
              </div>
              <p className="mt-8 text-sm text-brand-ink/60 leading-relaxed italic">
                * A sliding scale is available for marginalized communities to foster equitable access. These slots are limited. Please reach out to discuss availability.
              </p>
              <div className="mt-8 p-4 bg-brand-cream/50 rounded-2xl text-xs text-brand-olive font-medium text-center">
                Virtual Sessions Only • Secure & Confidential
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h3 className="font-serif text-2xl mb-8 flex items-center">
                <HelpCircle className="mr-3 text-brand-olive" size={24} />
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-brand-olive/10">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full py-4 flex justify-between items-center text-left hover:text-brand-olive transition-colors"
                    >
                      <span className="font-medium">{faq.q}</span>
                      {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {openFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="pb-4 text-sm text-brand-ink/60 leading-relaxed"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white p-8 md:p-12 rounded-[40px] border border-brand-teal/10 shadow-sm">
            {!submitted ? (
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-serif text-brand-teal mb-4">Initial Assessment Form</h3>
                  <p className="text-sm text-brand-teal/60 leading-relaxed">
                    To help me understand your needs and prepare for our first consultation, please fill out this brief assessment. All information provided is strictly confidential and will be reviewed only by me.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-brand-rose mb-4">Patient Information</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-semibold text-brand-teal/40 ml-1">Full Name</label>
                        <input type="text" className="w-full p-4 bg-brand-cream/20 rounded-2xl border border-brand-teal/5 outline-none focus:border-brand-rose/30 transition-all" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-semibold text-brand-teal/40 ml-1">Sex</label>
                        <input type="text" className="w-full p-4 bg-brand-cream/20 rounded-2xl border border-brand-teal/5 outline-none focus:border-brand-rose/30 transition-all" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-semibold text-brand-teal/40 ml-1">Age</label>
                        <input type="text" className="w-full p-4 bg-brand-cream/20 rounded-2xl border border-brand-teal/5 outline-none focus:border-brand-rose/30 transition-all" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-semibold text-brand-teal/40 ml-1">Date of Birth</label>
                        <input type="text" placeholder="dd/mm/yyyy" className="w-full p-4 bg-brand-cream/20 rounded-2xl border border-brand-teal/5 outline-none focus:border-brand-rose/30 transition-all" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-semibold text-brand-teal/40 ml-1">Phone Number</label>
                        <input type="tel" className="w-full p-4 bg-brand-cream/20 rounded-2xl border border-brand-teal/5 outline-none focus:border-brand-rose/30 transition-all" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-semibold text-brand-teal/40 ml-1">Email Address</label>
                        <input type="email" className="w-full p-4 bg-brand-cream/20 rounded-2xl border border-brand-teal/5 outline-none focus:border-brand-rose/30 transition-all" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-semibold text-brand-teal/40 ml-1">Occupation</label>
                        <input type="text" className="w-full p-4 bg-brand-cream/20 rounded-2xl border border-brand-teal/5 outline-none focus:border-brand-rose/30 transition-all" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-semibold text-brand-teal/40 ml-1">Relationship Status</label>
                        <input type="text" className="w-full p-4 bg-brand-cream/20 rounded-2xl border border-brand-teal/5 outline-none focus:border-brand-rose/30 transition-all" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-semibold text-brand-teal/40 ml-1">Emergency Contact Name</label>
                        <input type="text" className="w-full p-4 bg-brand-cream/20 rounded-2xl border border-brand-teal/5 outline-none focus:border-brand-rose/30 transition-all" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-semibold text-brand-teal/40 ml-1">Emergency Contact Number</label>
                        <input type="text" className="w-full p-4 bg-brand-cream/20 rounded-2xl border border-brand-teal/5 outline-none focus:border-brand-rose/30 transition-all" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-semibold text-brand-teal/40 ml-1">Relationship to Emergency Contact</label>
                      <textarea rows={2} className="w-full p-4 bg-brand-cream/20 rounded-2xl border border-brand-teal/5 outline-none focus:border-brand-rose/30 transition-all resize-none"></textarea>
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-semibold text-brand-teal/40 ml-1">Name of Referrer (if any)</label>
                      <input type="text" className="w-full p-4 bg-brand-cream/20 rounded-2xl border border-brand-teal/5 outline-none focus:border-brand-rose/30 transition-all" />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-semibold text-brand-teal/40 ml-1">Address</label>
                      <textarea rows={2} className="w-full p-4 bg-brand-cream/20 rounded-2xl border border-brand-teal/5 outline-none focus:border-brand-rose/30 transition-all resize-none"></textarea>
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-semibold text-brand-teal/40 ml-1">Reasons for seeking therapy</label>
                      <textarea rows={3} className="w-full p-4 bg-brand-cream/20 rounded-2xl border border-brand-teal/5 outline-none focus:border-brand-rose/30 transition-all resize-none"></textarea>
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-semibold text-brand-teal/40 ml-1">Previous therapy/psychiatrist consults?</label>
                      <textarea rows={3} className="w-full p-4 bg-brand-cream/20 rounded-2xl border border-brand-teal/5 outline-none focus:border-brand-rose/30 transition-all resize-none"></textarea>
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-semibold text-brand-teal/40 ml-1">Current medications for psychological difficulty?</label>
                      <textarea rows={3} className="w-full p-4 bg-brand-cream/20 rounded-2xl border border-brand-teal/5 outline-none focus:border-brand-rose/30 transition-all resize-none"></textarea>
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-semibold text-brand-teal/40 ml-1">Preferred days and times for consult</label>
                      <textarea rows={3} className="w-full p-4 bg-brand-cream/20 rounded-2xl border border-brand-teal/5 outline-none focus:border-brand-rose/30 transition-all resize-none"></textarea>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button 
                      type="submit"
                      className="w-full py-4 bg-brand-teal text-white rounded-2xl text-lg font-medium hover:bg-opacity-90 transition-all shadow-md active:scale-[0.98]"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>

                <div className="pt-12 space-y-6 text-brand-teal/70 text-sm leading-relaxed border-t border-brand-teal/5">
                  <p>
                    I usually respond within 48 hours. If you haven't heard from me after two days, please check your Spam folder, as my reply may occasionally be filtered there.
                  </p>
                  
                  <p>
                    If I am on leave, it may take up to a week for me to get back to you. I appreciate your patience.
                  </p>
                  
                  <div className="p-6 bg-brand-rose/5 rounded-3xl border border-brand-rose/10">
                    <p className="text-brand-rose font-medium">
                      <span className="font-bold">Note:</span> If you haven't received a response after one week, please assume that your form was not received, and feel free to reach out via email.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-brand-olive/10 rounded-full flex items-center justify-center text-brand-olive mx-auto mb-8">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-serif mb-4">Request Sent</h2>
                <p className="text-brand-ink/60 mb-8">
                  Thank you for reaching out. I will get back to you within 24-48 hours to discuss scheduling.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-brand-olive font-bold uppercase tracking-widest text-sm hover:underline"
                >
                  Send another request
                </button>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookSession;
