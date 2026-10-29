import { motion } from 'framer-motion';
import './Process.css';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We dive deep into your project vision, user requirements, and technical prerequisites to construct an actionable roadmap.",
      icon: "fa-compass"
    },
    {
      number: "02",
      title: "UI/UX Design",
      description: "Our design team crafts high-fidelity wireframes, responsive design systems, and seamless user interaction prototypes.",
      icon: "fa-pen-ruler"
    },
    {
      number: "03",
      title: "Development",
      description: "We engineer production-grade web and mobile applications using clean, maintainable architecture in React and Flutter.",
      icon: "fa-code"
    },
    {
      number: "04",
      title: "Testing",
      description: "End-to-end quality assurance, multi-device viewport tests, performance benchmarking, and security validations.",
      icon: "fa-vial-circle-check"
    },
    {
      number: "05",
      title: "Deployment & Support",
      description: "Production release to cloud infrastructure (AWS/GCP/Vercel) and stores, followed by ongoing updates and SLA monitoring.",
      icon: "fa-rocket"
    }
  ];

  return (
    <section className="section process-section section-alt" id="process">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <i className="fa-solid fa-timeline"></i> Development Lifecycle
          </div>
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
