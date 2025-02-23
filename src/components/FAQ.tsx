import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircleQuestion, ChevronDown, ChevronUp, Zap } from 'lucide-react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "POW! What's Catalysis?",
      answer: "Only the most EPIC technical extravaganza by Genesis Club! A 2-day power-packed event where tech heroes unite! 💥"
    },
    {
      question: "WHEN? WHERE? HOW?",
      answer: "March 7th & 8th, 2024! Join us at ISE Department for this legendary showdown! 🚀"
    },
    {
      question: "KA-CHING! What's the registration fee?",
      answer: "Early bird heroes get special powers (discounts)! Check our registration page for current rates! 💰"
    },
    // ...more FAQs
  ];

  const accordionVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          type: "spring",
          stiffness: 100,
          damping: 15
        },
        opacity: { duration: 0.2 }
      }
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.2 },
        opacity: { duration: 0.1 }
      }
    }
  };

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#00237a]">
        <div className="absolute inset-0 opacity-10 action-lines"></div>
        <div className="absolute inset-0 opacity-5 halftone"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="relative mb-16 text-center"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          <span className="inline-block bg-[#ff1f53] text-white px-6 py-2 rounded-full text-lg mb-4 font-bold">
            Got Questions?
          </span>
          <h2 className="text-6xl font-comic text-[#ffc247]">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-[#ffc247] transform rotate-1 rounded-xl"></div>
              <div className="relative bg-white rounded-xl border-4 border-black overflow-hidden shadow-comic">
                <button
                  className="w-full p-6 text-left flex items-center gap-4"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <MessageCircleQuestion className="w-8 h-8 text-[#ff1f53] flex-shrink-0" />
                  <span className="font-comic text-xl text-[#00237a] flex-grow">
                    {faq.question}
                  </span>
                  {activeIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#ff1f53]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#ff1f53]" />
                  )}
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      variants={accordionVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t-2 border-dashed border-gray-200">
                        <div className="flex items-start gap-2 pt-4">
                          <Zap className="w-6 h-6 text-[#ffc247] flex-shrink-0 mt-1" />
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;