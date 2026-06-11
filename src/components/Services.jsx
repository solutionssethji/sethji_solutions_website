import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const serviceCategories = [
    {
      category: "AI Solutions",
      icon: "fa-robot",
      services: [
        { name: "AI Agents", desc: "Autonomous virtual agents for support & sales." },
        { name: "Voice AI", desc: "Conversational voicebots for call centers." },
        { name: "Vision AI", desc: "Image recognition and computer vision models." },
        { name: "Automation", desc: "Intelligent workflow automation." }
      ]
    },
    {
      category: "Application Development",
      icon: "fa-mobile-screen",
      services: [
        { name: "Mobile Apps", desc: "Native & cross-platform apps (Flutter/React Native)." },
        { name: "Web Apps", desc: "Scalable, high-performance web applications." },
        { name: "SaaS Platforms", desc: "End-to-end multi-tenant software development." }
      ]
    },
    {
      category: "Enterprise Solutions",
      icon: "fa-building",
      services: [
        { name: "Dashboards", desc: "Real-time analytics and data visualization." },
        { name: "Cloud Infrastructure", desc: "Secure AWS, GCP, and Azure deployments." },
        { name: "Maintenance & Support", desc: "24/7 SLA-driven technical support." }
      ]
    }
  ];

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Enterprise <span className="text-gradient">Capabilities</span></h2>
          <p className="section-subtitle">End-to-end technology solutions tailored for scale and performance.</p>
        </motion.div>
        
        <div className="services-category-grid">
          {serviceCategories.map((cat, index) => (
            <motion.div 
              className="service-category-card" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="category-header">
                <div className="category-icon">
                  <i className={`fa-solid ${cat.icon}`}></i>
                </div>
                <h3 className="category-title">{cat.category}</h3>
              </div>
              
              <ul className="service-list">
                {cat.services.map((service, idx) => (
                  <li key={idx} className="service-list-item">
                    <i className="fa-solid fa-check text-gradient"></i>
                    <div className="service-info">
                      <h4 className="service-name">{service.name}</h4>
                      <p className="service-desc">{service.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
