import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CaseStudyModal.css';

const CaseStudyModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  // Use dummy details if the project object doesn't have them yet
  const details = project.caseStudyDetails || {
    challenge: "The client was struggling with legacy systems that caused significant delays and high operational costs. They needed a modern solution to streamline their workflow.",
    solution: "We engineered a robust, scalable platform from the ground up, utilizing modern cloud infrastructure and intelligent automation to eliminate bottlenecks.",
    techUsed: project.technologies || ["React", "Node.js", "AWS"],
    businessResult: project.outcome || "Increased overall efficiency by 40% and reduced overhead costs.",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-backdrop" onClick={onClose}>
          <motion.div 
            className="modal-content"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={onClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            
            <div className={`modal-header-image ${project.imageClass}`}>
              <div className="modal-header-overlay">
                <span className="modal-category">{project.category}</span>
                <h2 className="modal-title">{project.title}</h2>
              </div>
            </div>

            <div className="modal-body">
              <div className="case-study-section">
                <h3><i className="fa-solid fa-circle-exclamation text-gradient"></i> The Challenge</h3>
                <p>{details.challenge}</p>
              </div>

              <div className="case-study-section">
                <h3><i className="fa-solid fa-lightbulb text-gradient"></i> Our Solution</h3>
                <p>{details.solution}</p>
              </div>

              <div className="case-study-grid">
                <div className="case-study-box">
                  <h4>Technologies Used</h4>
                  <div className="tech-tags">
                    {details.techUsed.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="case-study-box highlight-box">
                  <h4>Business Result</h4>
                  <p className="outcome-text">{details.businessResult}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;
