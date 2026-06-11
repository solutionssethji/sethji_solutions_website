import React from 'react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  // Placeholder WhatsApp number
  const phoneNumber = "+918815148099";
  const message = "Hi Sethji Solutions, I am interested in your services.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default FloatingWhatsApp;
