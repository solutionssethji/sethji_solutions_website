import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      title: "Website Development",
      category: "Full-Stack Web",
      icon: "fa-laptop-code",
      accent: "#4F8CFF",
      description: "Custom, responsive web applications built with React, Next.js, and modern CSS architectures. Engineered for lightning-fast speeds and high conversions.",
      features: ["Next.js & React SPA/SSR", "Responsive Desktop-First Design", "SEO & Core Web Vitals Optimization", "Custom CMS & Admin Panels"]
    },
    {
      title: "Flutter Mobile App Development",
      category: "iOS & Android",
      icon: "fa-mobile-screen-button",
      accent: "#8B5CF6",
      description: "Enterprise-grade cross-platform mobile apps for iOS and Android with single codebase efficiency, smooth 60fps animations, and offline-first data support.",
      features: ["Riverpod / Bloc State Architecture", "App Store & Google Play Publishing", "Push Notifications & Deep Linking", "Clean Code & Automated Testing"]
    },
    {
      title: "Admin Dashboard Development",
      category: "Enterprise Analytics",
      icon: "fa-chart-pie",
      accent: "#06B6D4",
      description: "Intuitive, data-rich management portals, SaaS back-offices, and real-time analytical dashboards built to simplify complex business workflows.",
      features: ["Role-Based Access Control (RBAC)", "Real-time Metrics & Charts", "Multi-tenant SaaS Infrastructure", "Secure REST & GraphQL APIs"]
    },
    {
      title: "E-Commerce Solutions",
      category: "Digital Commerce",
      icon: "fa-cart-shopping",
      accent: "#10B981",
      description: "Scalable digital storefronts and retail platforms with fast search, categorized catalogs, cart flows, and direct WhatsApp or payment gateway checkouts.",
      features: ["Payment Gateway (Stripe/Razorpay)", "Instant WhatsApp Order Dispatch", "Inventory & Order Tracking", "High-conversion Checkout Flow"]
    },
    {
      title: "API & Backend Integration",
      category: "Cloud & Microservices",
      icon: "fa-server",
      accent: "#F59E0B",
      description: "Robust cloud backends, serverless functions, and microservices powered by Node.js, Python, Firebase, and PostgreSQL to scale with user demand.",
      features: ["Cloud Functions & Microservices", "Secure Authentication (Auth0/Firebase)", "Database Architecture & Optimization", "Third-Party API Integrations"]
    },
    {
      title: "Website Maintenance & Redesign",
      category: "Performance & SLA",
      icon: "fa-screwdriver-wrench",
      accent: "#EC4899",
      description: "Transform legacy, outdated websites into modern, high-converting digital assets with continuous security updates, bug fixes, and SLA support.",
      features: ["Modern UI/UX Overhaul", "Speed & Security Hardening", "Cross-Device Compatibility Checks", "Dedicated Monthly Support & Backups"]
    }
  ];

  return (
    <section className="section services-section section-alt" id="services">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <i className="fa-solid fa-code"></i> Real-World Capabilities
          </div>
          <h2 className="section-title">
            Engineering Solutions for <span className="text-gradient">Every Screen & Scale</span>
          </h2>
          <p className="section-subtitle">
            From high-converting web apps to multi-platform mobile architectures, we build software products that drive measurable business outcomes.
          </p>
        </motion.div>
        
        <div className="services-desktop-grid">
          {servicesList.map((service, index) => (
            <motion.div 
              className="service-card" 
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="service-card-top">
                <div className="service-icon-box" style={{ color: service.accent, background: `${service.accent}15`, borderColor: `${service.accent}30` }}>
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <span className="service-badge">{service.category}</span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>

              <div className="service-divider"></div>

              <ul className="service-checklist">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx}>
                    <i className="fa-solid fa-check" style={{ color: service.accent }}></i>
                    <span>{feature}</span>
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
