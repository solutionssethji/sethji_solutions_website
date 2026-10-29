import { motion } from 'framer-motion';
import './TechStack.css';

const TechStack = () => {
  const stack = [
    { name: 'React', icon: 'fa-brands fa-react' },
    { name: 'Next.js', icon: 'fa-solid fa-bolt' },
    { name: 'Flutter', icon: 'fa-brands fa-flutter' },
    { name: 'Node.js', icon: 'fa-brands fa-node-js' },
    { name: 'Python', icon: 'fa-brands fa-python' },
    { name: 'AWS Cloud', icon: 'fa-brands fa-aws' },
    { name: 'Firebase', icon: 'fa-solid fa-fire' },
    { name: 'Docker', icon: 'fa-brands fa-docker' },
    { name: 'MongoDB', icon: 'fa-brands fa-envira' },
    { name: 'MySQL', icon: 'fa-solid fa-database' },
    { name: 'PostgreSQL', icon: 'fa-solid fa-server' },
    { name: 'Git & GitHub', icon: 'fa-brands fa-github' }
  ];

  return (
    <section className="section techstack-section" id="tech-stack">
      <div className="container text-center">
        <div className="section-eyebrow">
          <i className="fa-solid fa-layer-group"></i> Architecture & Tooling
        </div>
        <h3 className="techstack-eyebrow">
          Technologies & Frameworks We Work With
        </h3>
        
        <div className="techstack-grid">
          {stack.map((item, i) => (
            <motion.div 
              key={i} 
              className="techstack-pill"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
            >
              <i className={item.icon}></i>
              <span>{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
