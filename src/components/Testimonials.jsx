import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    { name: "Rahul S.", role: "CEO, TechStart", text: "Sethji Solutions delivered our mobile app ahead of schedule. The quality and modern design exceeded our expectations!" },
    { name: "Priya M.", role: "Marketing Director", text: "Vipul and his team built an incredibly fast and beautiful landing page that doubled our conversion rate in a month." },
    { name: "Amit K.", role: "Founder, DataFlow", text: "Their expertise in Cloud and AI is unmatched. Highly recommend Sethji Solutions for complex enterprise projects." }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Client <span className="text-gradient">Testimonials</span></h2>
          <p className="section-subtitle">Don't just take our word for it.</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {reviews.map((rev, i) => (
            <motion.div 
              key={i} 
              style={{
                background: 'var(--color-bg-card)',
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255,255,255,0.05)',
                position: 'relative'
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <i className="fa-solid fa-quote-left" style={{ position: 'absolute', top: '2rem', left: '2rem', fontSize: '2rem', color: 'rgba(138,43,226,0.1)' }}></i>
              <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic', marginBottom: '1.5rem', position: 'relative', zIndex: 1, marginTop: '1.5rem' }}>"{rev.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  {rev.name[0]}
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '2px' }}>{rev.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)' }}>{rev.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
