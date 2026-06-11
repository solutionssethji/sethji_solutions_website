import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo" onClick={() => window.scrollTo(0, 0)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/transparent-logo.png" alt="Sethji Solutions Logo" style={{ height: '80px', objectFit: 'contain' }} />
          <div className="logo-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
            <span className="brand-name">Sethji</span>
            <span className="brand-sub">solutions</span>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#technologies">Technologies</a>
          <button className="btn btn-primary nav-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Let's Talk
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
