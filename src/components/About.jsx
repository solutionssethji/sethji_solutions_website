import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const founders = [
    {
      name: "Vipul Jain",
      title: "Founder & CEO",
      link: "https://vipuljain8815.github.io/portfolio/",
      photo: "/founder-photo.jpg",
      tags: ["Flutter", "AI Automation", "SaaS Platforms", "Enterprise Software"]
    },
    {
      name: "Vishwas Jain",
      title: "Co-Founder & COO",
      link: "https://www.linkedin.com/in/vishwas-jain-bangalore/",
      photo: "/vishwas-photo.jpg",
      tags: ["Business Strategy", "Operations", "Scaling", "Leadership"]
    },
    {
      name: "Vijaya Jain",
      title: "Co-Founder & CPO",
      link: "https://www.linkedin.com/in/vijaya-jain06/",
      photo: "/vijaya-photo.jpg",
      tags: ["Client Success", "Product Management", "Growth", "Operations"]
    },
    {
      name: "Shivani Singhai",
      title: "Co-Founder & CMO",
      link: "https://www.linkedin.com/in/shivani-singhai-69bab7164/",
      photo: "/shivani-photo.jpg",
      tags: ["Marketing", "Brand Strategy", "Communications", "Partnerships"]
    }
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        {/* Top: Company Story & Mission */}
        <motion.div 
          className="about-intro text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge-glow">About Us</div>
          <h2 className="section-title">The Vision Behind <br/><span className="text-gradient">Sethji Solutions</span></h2>
          <p className="section-subtitle max-w-800 mx-auto">
            We don't just write code; we engineer scalable solutions that act as catalysts for enterprise growth. Our mission is to empower ambitious startups and established enterprises with modern digital tools—from intelligent AI integrations to robust mobile applications.
          </p>
          
          <div className="experience-badge mx-auto mt-4">
            <span className="exp-number text-gradient">10+</span>
            <span className="exp-text">Years of Engineering Excellence</span>
          </div>
        </motion.div>

        {/* Bottom: Leadership Team */}
        <div className="founders-grid">
          {founders.map((founder, index) => (
            <motion.div 
              className="founder-card-wrapper"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="founder-card">
                <div className="founder-image-wrapper">
                   <img 
                    src={founder.photo} 
                    alt={`${founder.name} - ${founder.title}`} 
                    className="founder-photo" 
                   />
                </div>
                <div className="founder-info">
                  <h3 className="founder-name">
                    <a href={founder.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--color-primary)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>
                      {founder.name}
                    </a>
                  </h3>
                  <p className="founder-title text-gradient">{founder.title}</p>
                  <div className="founder-tags">
                    {founder.tags.map((tag, i) => (
                      <span className="tag" key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
