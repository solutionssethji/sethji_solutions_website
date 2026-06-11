import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CaseStudyModal from './CaseStudyModal';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { 
      title: "AI Customer Agent", 
      category: "Generative AI", 
      overview: "An intelligent autonomous agent that handles tier-1 customer support, significantly reducing response times and support costs.",
      technologies: ["React", "Python", "OpenAI API", "AWS"],
      outcome: "Reduced support ticket resolution time by 60%",
      imageClass: "bg-ai-agent",
      caseStudyDetails: {
        challenge: "The client was overwhelmed by support tickets, leading to a 48-hour average response time and dropping customer satisfaction scores.",
        solution: "We engineered a fine-tuned LLM autonomous agent capable of resolving tier-1 issues, understanding context, and escalating complex tickets seamlessly.",
        techUsed: ["React", "Python", "OpenAI API", "LangChain", "AWS Lambda"],
        businessResult: "Decreased response times to under 2 minutes and reduced support operations costs by 35% in the first quarter."
      }
    },
    { 
      title: "E-Commerce Platform", 
      category: "Web Application", 
      overview: "A scalable, high-performance marketplace platform with real-time inventory management and predictive product recommendations.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      outcome: "Increased user conversion rate by 35%",
      imageClass: "bg-ecommerce",
      caseStudyDetails: {
        challenge: "A growing retail brand was losing sales due to slow page load times and an outdated checkout experience that couldn't handle traffic spikes.",
        solution: "We rebuilt their platform using Next.js for server-side rendering, ensuring sub-second load times, and integrated Stripe for seamless payments.",
        techUsed: ["Next.js", "Node.js", "MongoDB", "Redis", "Stripe API"],
        businessResult: "Achieved a 99.9% uptime during Black Friday sales and increased overall conversion rates by 35%."
      }
    },
    { 
      title: "Healthcare Dashboard", 
      category: "Enterprise Dashboard", 
      overview: "A secure, HIPAA-compliant patient management dashboard providing real-time analytics and predictive health risk assessments.",
      technologies: ["React", "TypeScript", "PostgreSQL", "Google Cloud"],
      outcome: "Saved medical staff 20 hours per week in data entry",
      imageClass: "bg-healthcare",
      caseStudyDetails: {
        challenge: "Medical staff were spending excessive hours manually entering patient data across multiple disconnected systems, causing severe inefficiencies.",
        solution: "We developed a centralized, HIPAA-compliant dashboard that aggregates patient data in real-time and provides predictive risk analytics.",
        techUsed: ["React", "TypeScript", "PostgreSQL", "Google Cloud", "Docker"],
        businessResult: "Reclaimed 20 hours per week for medical staff, allowing them to focus entirely on patient care rather than admin work."
      }
    },
    { 
      title: "Logistics Tracker", 
      category: "Mobile Application", 
      overview: "A real-time fleet tracking and route optimization mobile application designed for cross-country logistics operations.",
      technologies: ["Flutter", "Firebase", "Google Maps API"],
      outcome: "Reduced fuel consumption by 15% across the fleet",
      imageClass: "bg-logistics",
      caseStudyDetails: {
        challenge: "A logistics company lacked visibility into their fleet's real-time locations, resulting in inefficient routing and delayed deliveries.",
        solution: "We built a cross-platform Flutter app integrated with Google Maps and Firebase to provide live tracking and intelligent route optimization.",
        techUsed: ["Flutter", "Firebase", "Google Maps API", "Node.js"],
        businessResult: "Improved delivery time accuracy by 40% and reduced overall fleet fuel consumption by 15%."
      }
    }
  ];

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured <span className="text-gradient">Case Studies</span></h2>
          <p className="section-subtitle">Real-world solutions that delivered measurable enterprise impact.</p>
        </motion.div>
        
        <div className="portfolio-list">
          {projects.map((project, i) => (
            <motion.div 
              className={`portfolio-showcase-card ${i % 2 !== 0 ? 'reverse' : ''}`} 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className={`portfolio-image-section ${project.imageClass}`}>
                <div className="image-overlay">
                  <button className="btn btn-primary btn-glow" onClick={() => setSelectedProject(project)}>
                    View Case Study <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              
              <div className="portfolio-details-section">
                <span className="portfolio-category">{project.category}</span>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-overview">{project.overview}</p>
                
                <div className="portfolio-tech-stack">
                  <h4 className="tech-title">Technologies:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="portfolio-outcome">
                  <i className="fa-solid fa-chart-line text-gradient"></i>
                  <span className="outcome-text"><strong>Outcome:</strong> {project.outcome}</span>
                </div>
                
                <div className="mobile-only-btn mt-4">
                  <button className="btn btn-secondary" onClick={() => setSelectedProject(project)}>
                    Read Full Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CaseStudyModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </section>
  );
};

export default Portfolio;
