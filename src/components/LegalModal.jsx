import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LegalModal.css';

const LegalModal = ({ isOpen, onClose, title, content }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="legal-modal-backdrop" onClick={onClose}>
          <motion.div 
            className="legal-modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <button className="close-btn" onClick={onClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            
            <div className="legal-modal-body">
              <h2 className="legal-title">{title}</h2>
              <div className="legal-text" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;
