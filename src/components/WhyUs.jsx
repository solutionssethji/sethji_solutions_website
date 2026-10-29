import { motion } from 'framer-motion';
import './WhyUs.css';

const WhyUs = () => {
  const features = [
    {
      icon: "fa-solid fa-mobile-screen-button",
      title: "Responsive & Accessible",
      description: "Pixel-perfect interfaces designed desktop-first and tested rigorously across laptops, tablets, and phones."
    },
    {
      icon: "fa-solid fa-code-branch",
      title: "Maintainable Architecture",
      description: "Clean, modular code built on battle-tested frameworks that your team can scale with confidence."
    },
    {
      icon: "fa-solid fa-gauge-high",
      title: "Performance Conscious",
      description: "Sub-second load speeds, lightweight bundles, and Core Web Vitals optimization for maximum search visibility."
    },
    {
      icon: "fa-solid fa-comments",
      title: "Clear Communication",
      description: "Transparent sprint milestones, direct developer access, and regular demo walkthroughs at every stage."
    },
    {
      icon: "fa-solid fa-shield-check",
      title: "Quality Assurance",
      description: "Automated unit tests, manual edge-case testing, cross-browser audits, and zero-compromise security checks."
    },
    {
      icon: "fa-solid fa-headset",
      title: "Ongoing Support & SLA",
      description: "Continuous version updates, server maintenance, fast-turnaround bug fixes, and cloud infrastructure management."
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
          <div className="section-eyebrow">
            <i className="fa-solid fa-award"></i> The Sethji Advantage
          </div>
          <h2 className="section-title">
            Why Partner with <span className="text-gradient">Sethji Solutions</span>
          </h2>
          <p className="section-subtitle">
            We operate as an extension of your product team, combining engineering rigor with design excellence to deliver reliable software.
          </p>
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
