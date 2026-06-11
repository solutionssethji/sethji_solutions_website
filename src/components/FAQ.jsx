import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How long does it take to build a custom web or mobile app?",
      answer: "The timeline depends on the complexity of the project. A basic MVP typically takes 4-8 weeks, while complex enterprise solutions or AI integrations can take 3-6 months. We provide a detailed roadmap during the Discovery phase."
    },
    {
      question: "Do you provide post-launch maintenance and support?",
      answer: "Yes, we offer comprehensive post-launch support and SLA-driven maintenance packages. We ensure your application remains secure, up-to-date, and fully optimized as your user base grows."
    },
    {
      question: "Can your AI agents integrate with our existing software?",
      answer: "Absolutely. We build AI solutions designed to seamlessly integrate with your existing CRM, ERP, and internal databases via custom APIs, ensuring your workflows remain uninterrupted."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer both fixed-price contracts for clearly defined scopes and dedicated team retainers for ongoing development and R&D. We pride ourselves on transparent pricing with no hidden fees."
    },
    {
      question: "Will I own the source code?",
      answer: "Yes. Once the project is fully paid and delivered, you own 100% of the intellectual property and source code."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="faq-grid">
          <motion.div 
            className="faq-header"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge-glow">FAQ</div>
            <h2 className="section-title">Got Questions?<br/><span className="text-gradient">We Have Answers.</span></h2>
            <p className="section-subtitle">Common questions from our enterprise clients and startup partners.</p>
            <a href="#contact" className="btn btn-primary" style={{ marginTop: '2.5rem', display: 'inline-block' }}>Ask a Custom Question</a>
          </motion.div>

          <motion.div 
            className="faq-list"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {faqs.map((faq, index) => (
              <div 
                className={`faq-item ${openIndex === index ? 'open' : ''}`} 
                key={index}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <div className="faq-toggle">
                    <i className={`fa-solid ${openIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                  </div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      className="faq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="faq-answer">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
