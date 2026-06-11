import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './AIShowcase.css';

const AIShowcase = () => {
  const [activeTab, setActiveTab] = useState('agent');

  const showcaseData = {
    agent: {
      title: "Autonomous AI Agents",
      description: "Deploy fine-tuned LLMs that act as tier-1 support, sales representatives, and account managers. Capable of resolving 80% of routine inquiries instantly.",
      features: ["Contextual Memory", "Multi-language Support", "CRM Integration", "Sentiment Analysis"],
      visualClass: "visual-agent"
    },
    voice: {
      title: "Voice AI & Call Bots",
      description: "Next-generation conversational voice AI that handles inbound and outbound calls with human-like latency and natural intonation.",
      features: ["Sub-500ms Latency", "Emotion Recognition", "Dynamic Call Routing", "Live Transcript"],
      visualClass: "visual-voice"
    },
    vision: {
      title: "Computer Vision",
      description: "Advanced image and video analysis models for quality control, facial recognition, document parsing, and automated data extraction.",
      features: ["Real-time Object Detection", "OCR Processing", "Anomaly Detection", "Edge Deployment"],
      visualClass: "visual-vision"
    }
  };

  return (
    <section className="section ai-showcase-section" id="ai-showcase">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-glow">AI Innovation</div>
          <h2 className="section-title">Next-Gen <span className="text-gradient">AI Capabilities</span></h2>
          <p className="section-subtitle">Transform your enterprise with state-of-the-art artificial intelligence solutions.</p>
        </motion.div>

        <div className="ai-showcase-grid">
          {/* Controls Column */}
          <motion.div 
            className="ai-controls"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className={`ai-tab ${activeTab === 'agent' ? 'active' : ''}`}
              onClick={() => setActiveTab('agent')}
            >
              <div className="tab-icon"><i className="fa-solid fa-robot"></i></div>
              <div className="tab-info">
                <h3>Autonomous Agents</h3>
                <p>LLM-powered virtual assistants</p>
              </div>
            </div>

            <div 
              className={`ai-tab ${activeTab === 'voice' ? 'active' : ''}`}
              onClick={() => setActiveTab('voice')}
            >
              <div className="tab-icon"><i className="fa-solid fa-microphone-lines"></i></div>
              <div className="tab-info">
                <h3>Voice AI</h3>
                <p>Conversational phone bots</p>
              </div>
            </div>

            <div 
              className={`ai-tab ${activeTab === 'vision' ? 'active' : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              <div className="tab-icon"><i className="fa-solid fa-eye"></i></div>
              <div className="tab-info">
                <h3>Computer Vision</h3>
                <p>Image & video analytics</p>
              </div>
            </div>
          </motion.div>

          {/* Visual Showcase Column */}
          <motion.div 
            className="ai-visual-display"
            key={activeTab} // Forces re-animation on tab change
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`visual-container ${showcaseData[activeTab].visualClass}`}>
              <div className="visual-content">
                <h3 className="visual-title">{showcaseData[activeTab].title}</h3>
                <p className="visual-desc">{showcaseData[activeTab].description}</p>
                
                <div className="feature-grid">
                  {showcaseData[activeTab].features.map((feature, idx) => (
                    <div className="feature-item" key={idx}>
                      <i className="fa-solid fa-check text-gradient"></i> {feature}
                    </div>
                  ))}
                </div>

                <div className="visual-animation">
                  {activeTab === 'agent' && (
                    <div className="chat-animation">
                      <div className="chat-bubble user">How can I track my order?</div>
                      <div className="chat-bubble ai">I found your order! It's currently out for delivery and will arrive by 5 PM.</div>
                    </div>
                  )}
                  {activeTab === 'voice' && (
                    <div className="waveform-animation">
                      <div className="bar"></div><div className="bar"></div><div className="bar"></div>
                      <div className="bar"></div><div className="bar"></div><div className="bar"></div>
                    </div>
                  )}
                  {activeTab === 'vision' && (
                    <div className="vision-animation">
                      <div className="scan-box">
                        <div className="scan-line"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIShowcase;
