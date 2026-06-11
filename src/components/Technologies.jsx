
const Technologies = () => {
  const techs = [
    "GenAI Applications", "Multi-Agent Systems", "Voice AI Solutions", 
    "Vision AI Solutions", "RAG & Vector Systems", "Cloud-Native Solutions", 
    "Automation & Workflow", "Data Analytics & Insights"
  ];

  return (
    <section className="section" id="technologies" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container text-center">
        <h2 className="section-title mb-8">Powered by <span className="text-gradient">Latest Technologies</span></h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
          {techs.map((tech, i) => (
            <div key={i} style={{
              padding: '1rem 1.5rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(138, 43, 226, 0.2)',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(138, 43, 226, 0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(138, 43, 226, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <i className="fa-solid fa-bolt" style={{ color: 'var(--color-accent)' }}></i>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
