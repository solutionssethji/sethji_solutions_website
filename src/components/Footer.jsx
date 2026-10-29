import { useState } from 'react';
import LegalModal from './LegalModal';
import { privacyPolicyContent, termsContent } from '../utils/legalContent';

const Footer = () => {
  const [modalType, setModalType] = useState(null); // 'privacy' or 'terms'

  return (
    <footer style={{ backgroundColor: '#05050a', padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '3rem' }}>
          <div style={{ flex: '1', minWidth: '280px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <img src="/transparent-logo.png" alt="Sethji Solutions Logo" style={{ height: '42px', objectFit: 'contain' }} />
              <div>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.4rem', color: '#fff', letterSpacing: '-0.5px', display: 'block', lineHeight: 1 }}>Sethji</span>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '2.5px', textTransform: 'uppercase' }}>SOLUTIONS</span>
              </div>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', maxWidth: '380px', lineHeight: '1.65' }}>
              Building digital experiences that move businesses forward. Custom websites, cross-platform Flutter applications, and enterprise cloud software.
            </p>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--color-text)', marginBottom: '1rem', fontSize: '1.1rem' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li>
                <button 
                  onClick={() => setModalType('privacy')} 
                  style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', padding: 0, fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                  onMouseOver={(e) => e.target.style.color = 'var(--color-primary)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--color-text-muted)'}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setModalType('terms')} 
                  style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', padding: 0, fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                  onMouseOver={(e) => e.target.style.color = 'var(--color-primary)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--color-text-muted)'}
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          <div>
             <h4 style={{ color: 'var(--color-text)', marginBottom: '1rem', fontSize: '1.1rem' }}>Connect</h4>
             <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://www.linkedin.com/company/sethji-solutions/" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', color: '#fff' }} onMouseOver={(e) => { e.currentTarget.style.background = 'var(--gradient-primary)'; e.currentTarget.style.transform = 'translateY(-3px)' }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://x.com/SethjiSolutions" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', color: '#fff' }} onMouseOver={(e) => { e.currentTarget.style.background = 'var(--gradient-primary)'; e.currentTarget.style.transform = 'translateY(-3px)' }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          <p>&copy; {new Date().getFullYear()} Sethji Solutions Private Limited. All rights reserved.</p>
          <p>Designed in Garhakota, India</p>
        </div>
      </div>

      <LegalModal 
        isOpen={modalType !== null} 
        onClose={() => setModalType(null)} 
        title={modalType === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
        content={modalType === 'privacy' ? privacyPolicyContent : termsContent}
      />
    </footer>
  );
};

export default Footer;
