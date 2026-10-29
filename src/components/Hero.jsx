import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="home">
      {/* Background Ambient Lighting */}
      <div className="hero-ambient-glows">
        <div className="glow-sphere blue-glow"></div>
        <div className="glow-sphere purple-glow"></div>
        <div className="hero-grid-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-grid-layout">
          {/* Left Column: Copy & Conversions */}
          <motion.div 
            className="hero-text-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="hero-eyebrow">
              <span className="pulsing-indicator"></span>
              <span>Premier Software Engineering Agency</span>
            </div>

            <h1 className="hero-headline">
              Building Digital Experiences That <span className="text-gradient">Move Businesses Forward.</span>
            </h1>

            <p className="hero-lead">
              We design and develop modern websites, mobile applications, and digital products that help businesses turn ideas into reality.
            </p>

            <div className="hero-cta-wrapper">
              <button className="btn btn-primary btn-hero-cta" onClick={scrollToContact}>
                Start a Project <i className="fa-solid fa-arrow-right"></i>
              </button>
              <button className="btn btn-secondary" onClick={scrollToPortfolio}>
                Explore Our Work <i className="fa-regular fa-folder-open"></i>
              </button>
            </div>

            {/* Verified Business Trust Metrics */}
            <div className="hero-trust-bar">
              <div className="trust-item">
                <span className="trust-val">10+</span>
                <span className="trust-lbl">Shipped Projects</span>
              </div>
              <div className="trust-sep"></div>
              <div className="trust-item">
                <span className="trust-val">Multi-Platform</span>
                <span className="trust-lbl">Flutter & Web</span>
              </div>
              <div className="trust-sep"></div>
              <div className="trust-item">
                <span className="trust-val">100%</span>
                <span className="trust-lbl">Tailored Code</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Layered Product Visual Composition */}
          <motion.div 
            className="hero-visual-col"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <div className="hero-composition">
              {/* Main Desktop Web Console Panel */}
              <div className="composition-card main-preview-card">
                <div className="panel-chrome">
                  <div className="chrome-dots">
                    <span className="chrome-dot red"></span>
                    <span className="chrome-dot yellow"></span>
                    <span className="chrome-dot green"></span>
                  </div>
                  <div className="chrome-address-bar">
                    <i className="fa-solid fa-lock"></i> code-mentor-ai.vercel.app
                  </div>
                  <div className="chrome-badge">Live Platform</div>
                </div>

                <div className="panel-inner-content">
                  <div className="panel-banner-mock">
                    <div className="panel-tag">AI CODE MENTOR</div>
                    <h4>Next.js & Firebase Cloud Architecture</h4>
                    <p>Interactive real-time learning platform with integrated LLM mentors.</p>
                  </div>

                  <div className="panel-mini-metrics">
                    <div className="mini-metric">
                      <span className="metric-title">Performance</span>
                      <div className="metric-bar-bg">
                        <div className="metric-bar-fill" style={{ width: '96%' }}></div>
                      </div>
                      <span className="metric-num">96%</span>
                    </div>
                    <div className="mini-metric">
                      <span className="metric-title">Uptime</span>
                      <div className="metric-bar-bg">
                        <div className="metric-bar-fill purple" style={{ width: '99.9%' }}></div>
                      </div>
                      <span className="metric-num">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mobile App Screen Panel */}
              <motion.div 
                className="composition-card floating-mobile-card"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="phone-screen">
                  <div className="phone-notch"></div>
                  <div className="phone-header">
                    <span className="phone-app-title">Proofile.in</span>
                    <i className="fa-solid fa-signal"></i>
                  </div>
                  <div className="phone-body">
                    <div className="phone-avatar"></div>
                    <div className="phone-line title"></div>
                    <div className="phone-line short"></div>
                    <div className="phone-action-btn">
                      <i className="fa-brands fa-apple"></i> App Store & Play Store
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Engineering Badge */}
              <motion.div 
                className="floating-tech-chip chip-top"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <i className="fa-solid fa-bolt" style={{ color: '#F59E0B' }}></i>
                <span>Fast & SEO Ready</span>
              </motion.div>

              <motion.div 
                className="floating-tech-chip chip-bottom"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <i className="fa-brands fa-flutter" style={{ color: '#02569B' }}></i>
                <span>Cross-Platform Flutter</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
