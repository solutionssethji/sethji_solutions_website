import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/solutionssethji@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2 className="section-title">Let's Build Great Things <span className="text-gradient">Together!</span></h2>
            <p className="contact-subtitle">
              Ready to take your business to the next level? Contact us today for a free consultation and let's discuss how we can help you grow.
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><i className="fa-solid fa-user-tie"></i></div>
                <div>
                  <h4><a href="https://vipuljain8815.github.io/portfolio/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>Vipul Jain</a></h4>
                  <p>Founder & Owner</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><i className="fa-solid fa-phone"></i></div>
                <div>
                  <h4>Call Us</h4>
                  <p><a href="tel:+918815148099" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>+91-8815148099</a></p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><i className="fa-solid fa-envelope"></i></div>
                <div>
                  <h4>Email Us</h4>
                  <p><a href="mailto:solutionssethji@gmail.com" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>solutionssethji@gmail.com</a></p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><i className="fa-solid fa-location-dot"></i></div>
                <div>
                  <h4>Location</h4>
                  <p><a href="https://www.google.com/maps/place/Sethji+Solutions+Private+Limited/@23.7780478,79.140159,17z/data=!3m1!4b1!4m6!3m5!1s0x3978b3001b74df4f:0x4bf9c52ec4f40363!8m2!3d23.7780478!4d79.1427339!16s%2Fg%2F11np_f589g" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>Sethji Solutions Private Limited,<br/> Garhakota, Sagar, Madhya Pradesh, 470229</a></p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'var(--shadow-card)' }}>
              <iframe 
                width="100%" 
                height="220" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0" 
                src="https://maps.google.com/maps?q=23.7780478,79.1427339&hl=en&z=18&output=embed"
                title="Sethji Solutions Location"
                style={{ display: 'block', filter: 'contrast(1.2) opacity(0.9)' }}
              ></iframe>
            </div>

          </div>
          
          <div className="contact-form-wrapper">
            <h3 className="form-title">Send a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New Contact Form Lead - Sethji Solutions" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Your Phone" />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Tell us about your project" rows="5" required></textarea>
              </div>
              
              {status === 'success' && (
                <div style={{ color: '#4ade80', marginBottom: '1rem', textAlign: 'center', fontWeight: 'bold' }}>
                  <i className="fa-solid fa-circle-check"></i> Message sent successfully! We will get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div style={{ color: '#f87171', marginBottom: '1rem', textAlign: 'center' }}>
                  <i className="fa-solid fa-circle-exclamation"></i> Something went wrong. Please try again.
                </div>
              )}

              <button type="submit" className="btn btn-primary w-100" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : (
                  <>Send Message <i className="fa-solid fa-paper-plane"></i></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
