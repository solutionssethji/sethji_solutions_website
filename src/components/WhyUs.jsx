import React from 'react';
import { motion } from 'framer-motion';
import './WhyUs.css';

const WhyUs = () => {
  const features = [
    {
      icon: "fa-solid fa-brain",
      title: "AI-First Development",
      description: "We don't just add AI as an afterthought. We architect intelligent systems from the ground up."
    },
    {
      icon: "fa-solid fa-server",
      title: "Scalable Architecture",
      description: "Built to handle thousands to millions of users seamlessly without breaking a sweat."
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Fast Delivery",
      description: "Agile methodologies ensure rapid deployment without compromising on enterprise quality."
    },
    {
      icon: "fa-solid fa-headset",
      title: "Long-Term Support",
      description: "We are your technology partners. We maintain, secure, and scale your product over time."
    },
    {
      icon: "fa-solid fa-rocket",
      title: "Startup Friendly",
      description: "Flexible models designed to help ambitious startups launch MVPs and scale quickly."
    },
    {
      icon: "fa-solid fa-building",
      title: "Enterprise Ready",
      description: "Robust security, compliance, and custom integrations tailored for large-scale operations."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="section why-us-section" id="why-us">
      <div className="container">
        <div className="section-header text-center mb-12">
          <motion.span 
            className="section-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Credibility & Trust
          </motion.span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Why Choose <span className="text-gradient">Sethji Solutions?</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We combine technical excellence with business acumen to deliver software that drives real growth.
          </motion.p>
        </div>

        <motion.div 
          className="why-us-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} className="why-us-card" variants={itemVariants}>
              <div className="card-icon-wrapper">
                <i className={feature.icon}></i>
              </div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
