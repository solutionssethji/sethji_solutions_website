import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-shapes">
        <div className="hero-glow primary-glow"></div>
        <div className="hero-glow secondary-glow"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content-wrapper">
          {/* Left Column: Copy & CTAs */}
          <motion.div 
            className="hero-text-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Enterprise-Grade Software & AI
            </motion.div>
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Scale Your Vision with <br/>
              <span className="text-gradient">Intelligent Solutions</span>
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              We engineer high-performance Mobile Apps, SaaS Platforms, and AI Automations that turn complex challenges into competitive advantages for modern enterprises.
            </motion.p>
            <motion.div 
              className="hero-cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <button className="btn btn-primary btn-glow" onClick={scrollToContact}>
                Schedule Discovery Call <i className="fa-solid fa-arrow-right"></i>
              </button>
              <button className="btn btn-secondary" onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}>
                View Our Work
              </button>
            </motion.div>
            
            <motion.div 
              className="trust-metrics"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <div className="metric-item">
                <span className="metric-value">100%</span>
                <span className="metric-label">Project Success</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <span className="metric-value">AI-First</span>
                <span className="metric-label">Architecture</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <span className="metric-value">Scalable</span>
                <span className="metric-label">Infrastructure</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Showcase */}
          <motion.div 
            className="hero-visual-showcase"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {/* These divs act as premium placeholders for the actual images */}
            <div className="showcase-element dashboard-mockup">
              <div className="mockup-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="mockup-body">
                 <div className="mockup-chart"></div>
                 <div className="mockup-bars">
                    <div className="bar" style={{height: '60%'}}></div>
                    <div className="bar" style={{height: '80%'}}></div>
                    <div className="bar" style={{height: '40%'}}></div>
                    <div className="bar" style={{height: '100%'}}></div>
                 </div>
              </div>
            </div>
            
            <div className="showcase-element mobile-mockup">
               <div className="mobile-notch"></div>
               <div className="mobile-content">
                  <div className="mobile-card"></div>
                  <div className="mobile-card"></div>
               </div>
            </div>

            <div className="showcase-element ai-floating-badge">
              <i className="fa-solid fa-robot"></i> AI Automation Active
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
