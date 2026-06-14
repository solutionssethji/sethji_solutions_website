import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const founders = [
    {
      name: "Vipul Jain",
      title: "Founder & CEO",
      link: "https://vipuljain8815.github.io/portfolio/",
      photo: "/founder-photo.jpg",
      tags: ["Flutter", "AI Automation", "SaaS Platforms", "Enterprise Software"]
    },
    /*
    {
      name: "Vishwas Jain",
      title: "Co-Founder & COO",
      link: "https://www.linkedin.com/in/vishwas-jain-bangalore/",
      photo: "/vishwas-photo.jpg",
      tags: ["Business Strategy", "Operations", "Scaling", "Leadership"]
    },
    {
      name: "Vijaya Jain",
      title: "Co-Founder & CPO",
      link: "https://www.linkedin.com/in/vijaya-jain06/",
      photo: "/vijaya-photo.jpg",
      tags: ["Client Success", "Product Management", "Growth", "Operations"]
    },
    {
      name: "Shivani Singhai",
      title: "Co-Founder & CMO",
      link: "https://www.linkedin.com/in/shivani-singhai-69bab7164/",
      photo: "/shivani-photo.jpg",
      tags: ["Marketing", "Brand Strategy", "Communications", "Partnerships"]
    }
    */
  ];

  const startYear = 2019;
  const startMonth = 5; // June (0-indexed)
  const currentDate = new Date();
  let yearsOfExperience = currentDate.getFullYear() - startYear;
  if (currentDate.getMonth() < startMonth) {
    yearsOfExperience--;
  }

  return (
    <section className="section about-section" id="about">
      <div className="container">
        {/* Top: Company Story & Mission */}
        <motion.div 
          className="about-intro text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge-glow">About Us</div>
          <h2 className="section-title">The Vision Behind <br/><span className="text-gradient">Sethji Solutions</span></h2>
          <p className="section-subtitle max-w-800 mx-auto">
            We don't just write code; we engineer scalable solutions that act as catalysts for enterprise growth. Our mission is to empower ambitious startups and established enterprises with modern digital tools—from intelligent AI integrations to robust mobile applications.
          </p>
          
          <div className="experience-badge mx-auto mt-4">
            <span className="exp-number text-gradient">{yearsOfExperience}+</span>
            <span className="exp-text">Years of Engineering Excellence</span>
          </div>
        </motion.div>

        {/* Bottom: Leadership Team */}
        <div className="mt-12">
          {founders.map((founder, index) => (
            <motion.div 
              className="portfolio-showcase-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              style={{ marginBottom: '3rem' }}
            >
              <div 
                className="portfolio-image-section" 
                style={{ 
                  backgroundImage: `url(${founder.photo})`, 
                  backgroundPosition: 'top center'
                }}
              >
              </div>
              
              <div className="portfolio-details-section">
                <span className="portfolio-category">{founder.title}</span>
                <h3 className="portfolio-title">{founder.name}</h3>
                <p className="portfolio-overview">
                  Leading Sethji Solutions with a focus on delivering high-performance, scalable engineering solutions. Dedicated to transforming business challenges into innovative digital experiences through modern technologies.
                </p>
                
                <div className="portfolio-tech-stack">
                  <h4 className="tech-title">Core Expertise:</h4>
                  <div className="tech-tags">
                    {founder.tags.map((tag, idx) => (
                      <span key={idx} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6" style={{ marginTop: '2.5rem' }}>
                  <a href={founder.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    View Portfolio <i className="fa-solid fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
