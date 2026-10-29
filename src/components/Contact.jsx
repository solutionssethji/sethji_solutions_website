import { useState } from 'react';
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
    } catch {
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
                <label className="form-label">Full Name *</label>
                <input type="text" name="name" placeholder="John Doe" required />
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Work Email *</label>
                  <input type="email" name="email" placeholder="john@company.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" name="phone" placeholder="+91 9876543210" />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Project Type</label>
                  <select name="project_type" className="form-select" defaultValue="Website Development">
                    <option value="Website Development">Website Development</option>
                    <option value="Mobile App Development">Flutter Mobile App</option>
                    <option value="Admin Dashboard">Admin Dashboard</option>
                    <option value="E-Commerce Solutions">E-Commerce Store</option>
                    <option value="AI & Backend Automation">AI & Cloud Backend</option>
                    <option value="Redesign & Maintenance">Maintenance & Redesign</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Estimated Budget</label>
                  <select name="budget" className="form-select" defaultValue="₹25k - ₹50k">
                    <option value="Under ₹25,000">Under ₹25,000</option>
                    <option value="₹25k - ₹50k">₹25,000 – ₹50,000</option>
                    <option value="₹50k - ₹1.5 Lakh">₹50,000 – ₹1,50,000</option>
                    <option value="₹1.5 Lakh - ₹3 Lakh">₹1,50,000 – ₹3,00,000</option>
                    <option value="₹3 Lakh+">₹3,00,000+</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Project Details *</label>
                <textarea name="message" placeholder="Briefly describe your objectives, timeline, or reference links..." rows="4" required></textarea>
              </div>
              
              {status === 'success' && (
                <div className="form-status-alert success">
                  <i className="fa-solid fa-circle-check"></i> Thank you! Message sent successfully. We will reply within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="form-status-alert error">
                  <i className="fa-solid fa-circle-exclamation"></i> Something went wrong. Please reach out via WhatsApp or call us directly.
                </div>
              )}

              <button type="submit" className="btn btn-primary w-100" disabled={status === 'submitting'}>
                {status === 'submitting' ? (
                  <>Sending Enquiry... <i className="fa-solid fa-spinner fa-spin"></i></>
                ) : (
                  <>Send Project Brief <i className="fa-solid fa-paper-plane"></i></>
                )}
              </button>

              <div className="form-or-divider">
                <span>OR</span>
              </div>

              <a 
                href="https://wa.me/918815148099?text=Hello%20Sethji%20Solutions,%20I%20would%20like%20to%20discuss%20a%20new%20project." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp w-100"
              >
                <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp Instantly
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
