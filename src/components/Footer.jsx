import { useState } from 'react';
import LegalModal from './LegalModal';
import { privacyPolicyContent, termsContent } from '../utils/legalContent';

const Footer = () => {
  const [modalType, setModalType] = useState(null); // 'privacy' or 'terms'

  return (
    <footer style={{ backgroundColor: 'var(--color-bg)', padding: '4.5rem 0 3rem', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '3rem' }}>
          <div style={{ flex: '1', minWidth: '280px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
              <img src="/transparent-logo.png" alt="Sethji Solutions Logo" style={{ height: '44px', objectFit: 'contain' }} />
              <div>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.45rem', color: '#fff', letterSpacing: '-0.5px', display: 'block', lineHeight: 1 }}>Sethji</span>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '2.5px', textTransform: 'uppercase' }}>SOLUTIONS</span>
              </div>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', maxWidth: '400px', lineHeight: '1.65' }}>
              Building digital experiences that move businesses forward. Custom websites, cross-platform Flutter applications, and enterprise cloud software.
            </p>
          </div>
          
          <div>
            <h4 style={{ color: '#ffffff', marginBottom: '1.25rem', fontSize: '1.05rem', fontWeight: 700 }}>Legal & Policies</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li>
                <button 
                  onClick={() => setModalType('privacy')} 
                  style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', padding: 0, fontSize: '0.92rem', transition: 'color 0.25s ease' }}
                  onMouseOver={(e) => e.target.style.color = 'var(--color-primary)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--color-text-muted)'}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setModalType('terms')} 
                  style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', padding: 0, fontSize: '0.92rem', transition: 'color 0.25s ease' }}
                  onMouseOver={(e) => e.target.style.color = 'var(--color-primary)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--color-text-muted)'}
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          <div>
             <h4 style={{ color: '#ffffff', marginBottom: '1.25rem', fontSize: '1.05rem', fontWeight: 700 }}>Connect</h4>
             <div style={{ display: 'flex', gap: '0.85rem' }}>
              <a 
                href="https://www.linkedin.com/company/sethji-solutions/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', color: '#fff' }} 
                onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.color = 'var(--color-primary)' }} 
                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.color = '#fff' }}
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a 
                href="https://x.com/SethjiSolutions" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', color: '#fff' }} 
                onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.color = 'var(--color-primary)' }} 
                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.color = '#fff' }}
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', color: 'var(--color-text-dim)', fontSize: '0.88rem' }}>
          <p>&copy; {new Date().getFullYear()} Sethji Solutions Private Limited. All rights reserved.</p>
          <p>Garhakota, Madhya Pradesh, India</p>
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
