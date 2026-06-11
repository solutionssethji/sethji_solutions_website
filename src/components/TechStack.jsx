import { motion } from 'framer-motion';

const TechStack = () => {
  const stack = [
    { name: 'React', icon: 'fa-brands fa-react' },
    { name: 'Next.js', icon: 'fa-solid fa-bolt' },
    { name: 'Flutter', icon: 'fa-solid fa-mobile-screen' },
    { name: 'Node.js', icon: 'fa-brands fa-node-js' },
    { name: 'Python', icon: 'fa-brands fa-python' },
    { name: 'AWS', icon: 'fa-brands fa-aws' },
    { name: 'Firebase', icon: 'fa-solid fa-fire' },
    { name: 'Docker', icon: 'fa-brands fa-docker' },
    { name: 'MongoDB', icon: 'fa-brands fa-envira' },
    { name: 'MySQL', icon: 'fa-solid fa-database' },
    { name: 'PostgreSQL', icon: 'fa-solid fa-server' },
    { name: 'GitHub', icon: 'fa-brands fa-github' }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container text-center">
        <h3 style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '2rem' }}>
          Technologies We Work With
        </h3>
        <motion.div 
          style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, staggerChildren: 0.1 }}
        >
          {stack.map((item, i) => (
            <motion.div 
              key={i} 
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s ease', opacity: 0.7 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onMouseOver={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--color-accent)' }}
              onMouseOut={(e) => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.color = 'inherit' }}
            >
              <i className={item.icon} style={{ fontSize: '2.5rem' }}></i>
              <span style={{ fontSize: '0.85rem', fontWeight: '500' }}>{item.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
