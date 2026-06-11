import { motion } from 'framer-motion';
import './Process.css';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your business requirements, analyze your target audience, and formulate a strategic roadmap tailored to your specific goals.",
      icon: "fa-compass"
    },
    {
      number: "02",
      title: "Architecture & Design",
      description: "Our experts design the system architecture, UI/UX wireframes, and select the optimal technology stack (React, Flutter, AI integrations) to ensure scalability.",
      icon: "fa-pen-ruler"
    },
    {
      number: "03",
      title: "Agile Development",
      description: "We build your product using agile methodologies, providing you with regular updates and functioning prototypes to ensure we remain aligned with your vision.",
      icon: "fa-code"
    },
    {
      number: "04",
      title: "Deployment & Scaling",
      description: "Rigorous testing precedes deployment to cloud infrastructure (AWS/GCP). We ensure a smooth launch followed by ongoing maintenance and scalability support.",
      icon: "fa-rocket"
    }
  ];

  return (
    <section className="section process-section" id="process">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-glow">How We Work</div>
          <h2 className="section-title">Our Proven <span className="text-gradient">Process</span></h2>
          <p className="section-subtitle">A transparent, structured approach to turning complex ideas into powerful digital realities.</p>
        </motion.div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <motion.div 
              className="process-step" 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-icon">
                  <i className={`fa-solid ${step.icon}`}></i>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
