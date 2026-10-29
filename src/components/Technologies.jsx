
import { motion } from 'framer-motion';

const Technologies = () => {
  const techs = [
    { name: "GenAI Applications", icon: "fa-solid fa-brain" },
    { name: "Multi-Agent Systems", icon: "fa-solid fa-network-wired" },
    { name: "Voice AI Solutions", icon: "fa-solid fa-microphone" },
    { name: "Vision AI Solutions", icon: "fa-solid fa-eye" },
    { name: "RAG & Vector Search", icon: "fa-solid fa-database" },
    { name: "Cloud-Native Architecture", icon: "fa-solid fa-cloud" },
    { name: "Automated Workflows", icon: "fa-solid fa-gears" },
    { name: "Data Analytics & BI", icon: "fa-solid fa-chart-line" }
  ];

  return (
    <section className="section section-alt" id="technologies" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container text-center">
        <div className="section-eyebrow">
          <i className="fa-solid fa-microchip"></i> Next-Gen Tech
        </div>
        <h2 className="section-title mb-4">
          Powered by <span className="text-gradient">Modern Capabilities</span>
        </h2>
        <p className="section-subtitle">
          From multi-agent LLM systems to high-performance vector databases, we bring cutting-edge tech into your software stack.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: '960px', margin: '0 auto' }}>
          {techs.map((tech, i) => (
            <motion.div 
              key={i} 
              style={{
                padding: '0.85rem 1.6rem',
                background: 'var(--gradient-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.95rem',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'default',
                color: '#F8FAFC',
                boxShadow: 'var(--shadow-sm)'
              }}
              whileHover={{ 
                y: -3, 
                borderColor: 'rgba(59, 130, 246, 0.4)',
                boxShadow: '0 8px 20px rgba(59, 130, 246, 0.2)' 
              }}
            >
              <i className={tech.icon} style={{ color: 'var(--color-primary)', fontSize: '0.95rem' }}></i>
              {tech.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
