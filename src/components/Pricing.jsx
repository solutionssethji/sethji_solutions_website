import { motion } from 'framer-motion';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: "MVP & Prototyping",
      price: "Starts at ₹99,999",
      description: "Perfect for early-stage startups needing a rapid, functional prototype to test the market.",
      features: [
        "UI/UX Design Concept",
        "Frontend Development (React/Flutter)",
        "Basic Backend API",
        "Firebase/Supabase Integration",
        "1 Month Bug Support"
      ],
      recommended: false,
      buttonText: "Get an Estimate"
    },
    {
      name: "AI & SaaS Growth",
      price: "Starts at ₹2,49,999",
      description: "Comprehensive software development with AI integrations for scaling businesses.",
      features: [
        "Full-stack Web/Mobile App",
        "LLM & AI Agent Integration",
        "Scalable Cloud Architecture",
        "Admin Dashboard & Analytics",
        "3 Months Maintenance Support"
      ],
      recommended: true,
      buttonText: "Discuss Your Project"
    },
    {
      name: "Enterprise Solutions",
      price: "Custom Pricing",
      description: "Dedicated engineering teams and robust, highly secure architecture for large enterprises.",
      features: [
        "Dedicated Lead Engineer",
        "HIPAA / SOC2 Compliance Ready",
        "Microservices Architecture",
        "Advanced CI/CD Pipelines",
        "24/7 SLA Priority Support"
      ],
      recommended: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-glow">Investment</div>
          <h2 className="section-title">Transparent <span className="text-gradient">Pricing</span></h2>
          <p className="section-subtitle">Scalable engineering solutions that match your business stage.</p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div 
              className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {plan.recommended && <div className="recommended-badge">Most Popular</div>}
              
              <div className="pricing-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">{plan.price}</div>
                <p className="plan-desc">{plan.description}</p>
              </div>

              <div className="pricing-features">
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fa-solid fa-check text-gradient"></i> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-footer">
                <a href="#contact" className={`btn ${plan.recommended ? 'btn-primary btn-glow' : 'btn-secondary'} w-100`}>
                  {plan.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
