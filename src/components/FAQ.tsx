import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { trackFAQInteraction, trackCTAConversion } from '../services/analytics';

const faqs = [
  {
    question: "How soon can you start?",
    answer: "Typically next business day — or pick a date during booking. We keep our pipeline lean to ensure founder-focused attention."
  },
  {
    question: "What's the cost?",
    answer: "Founder-friendly rates starting at ₹10L for MVPs. After discovery we provide fixed quotes with transparent breakdowns. No hidden fees."
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes — NDA on request. We understand the sensitivity of early-stage ideas and protect your intellectual property."
  },
  {
    question: "What's included?",
    answer: "Full development, design, testing, deployment, and 1 month free support. We handle everything from wireframes to production launch."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes — based in India, serving clients globally. We work across time zones and have experience with international compliance."
  },
  {
    question: "What's your typical timeline?",
    answer: "MVPs in 5-8 weeks, complex projects in 8-12 weeks. We provide detailed timelines during discovery and stick to them."
  }
];

const FAQ: React.FC<{ onCTAClick?: () => void }> = ({ onCTAClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    const action = openIndex === index ? 'collapse' : 'expand';
    trackFAQInteraction(faqs[index].question, action);
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#0A0A0A] border-t border-primary-500/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10
                       border border-primary-500/20 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <HelpCircle className="w-4 h-4 text-primary-400" />
            <span className="text-primary-400 text-sm font-medium">FAQ</span>
          </motion.div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Common Questions
          </h2>
          <p className="text-white/60 text-lg">
            Everything you need to know before we start building together.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-black/20 backdrop-blur-xl border border-gray-700/50 rounded-xl overflow-hidden hover:border-primary-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-black/30 transition-colors duration-300"
              >
                <span className="text-white font-semibold text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-primary-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-white/60 mb-6">
            Still have questions? We'd love to chat.
          </p>
          <motion.button
            onClick={() => {
              trackCTAConversion('faq_schedule_call', 'Schedule a Free Call', 'faq_section');
              onCTAClick?.();
            }}
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Free Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;