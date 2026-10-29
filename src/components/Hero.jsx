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
                <span className="trust-val">20+</span>
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

            {/* Right Column: Layered 3D Digital Core & Floating Glass Ecosystem */}
          <motion.div 
            className="hero-visual-col"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          >
            <div className="hero-composition-3d">
              {/* Central 3D Glowing Core Visual */}
              <div className="core-3d-wrapper">
                <img 
                  src="/hero_3d_core.jpg" 
                  alt="Sethji Solutions 3D Digital Engine" 
                  className="core-3d-image" 
                />
                <div className="core-glow-halo"></div>
              </div>

              {/* Top Glass Node: Live Platform Telemetry */}
              <motion.div 
                className="floating-glass-card node-console"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="glass-card-header">
                  <div className="status-live-indicator">
                    <span className="live-pulse"></span>
                    <span>AI Engineering Engine</span>
                  </div>
                  <span className="live-metric-tag">Next.js & Firebase</span>
                </div>
                <div className="glass-card-title">CodeMentorAI Platform</div>
                <div className="glass-telemetry-row">
                  <div className="telem-item">
                    <span className="telem-label">Build Speed</span>
                    <span className="telem-val">120ms</span>
                  </div>
                  <div className="telem-item">
                    <span className="telem-label">Performance</span>
                    <span className="telem-val highlight">99.8%</span>
                  </div>
                  <div className="telem-item">
                    <span className="telem-label">Core Web Vitals</span>
                    <span className="telem-val green">100/100</span>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Glass Node: Mobile Native Ecosystem */}
              <motion.div 
                className="floating-glass-card node-mobile"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="glass-card-header">
                  <div className="status-live-indicator">
                    <i className="fa-brands fa-flutter" style={{ color: '#38BDF8' }}></i>
                    <span>Flutter Native</span>
                  </div>
                  <span className="live-metric-tag store">iOS & Android</span>
                </div>
                <div className="glass-card-title">Proofile.in & Revolve</div>
                <div className="glass-badges-row">
                  <span className="store-pill"><i className="fa-brands fa-apple"></i> App Store</span>
                  <span className="store-pill"><i className="fa-brands fa-google-play"></i> Google Play</span>
                  <span className="store-pill live-dot">60 FPS Native</span>
                </div>
              </motion.div>

              {/* Atmospheric Floating Badges */}
              <motion.div 
                className="orbit-pill orbit-pill-1"
                animate={{ x: [0, 6, 0], y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <i className="fa-solid fa-microchip" style={{ color: '#818CF8' }}></i>
                <span>Autonomous AI Agents</span>
              </motion.div>

              <motion.div 
                className="orbit-pill orbit-pill-2"
                animate={{ x: [0, -6, 0], y: [0, 6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <i className="fa-solid fa-shield-halved" style={{ color: '#34D399' }}></i>
                <span>Enterprise SOC2 & HIPAA Ready</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
