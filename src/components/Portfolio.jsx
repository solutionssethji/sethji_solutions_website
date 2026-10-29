import { useState } from 'react';
import { motion } from 'framer-motion';
import CaseStudyModal from './CaseStudyModal';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { 
      title: "CodeMentorAI", 
      category: "AI Platform", 
      overview: "The world's most advanced AI-powered platform for teaching programming languages.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "AI"],
      outcome: "Revolutionizing programming education with AI",
      imageClass: "bg-codementor",
      link: "https://code-mentor-ai-peach.vercel.app/",
      caseStudyDetails: {
        challenge: "Creating an interactive, AI-driven learning environment for mastering programming languages.",
        solution: "Developed a comprehensive platform using Next.js and Firebase, integrating multiple AI models to provide real-time mentorship and personalized coding lessons.",
        techUsed: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "OpenAI API", "Anthropic API"],
        businessResult: "Successfully built an advanced educational platform that accelerates the learning process for developers through personalized AI guidance."
      }
    },
    { 
      title: "Proofile.in", 
      category: "Mobile App Development", 
      overview: "A dedicated mobile application built exclusively for digital profiling and networking, available on the App Store and Google Play Store.",
      technologies: ["Flutter", "Node.js", "MongoDB"],
      outcome: "Successfully launched app and scaling user base",
      imageClass: "bg-proofile",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.proofile.in",
      appStoreLink: "https://apps.apple.com/in/app/proofile-in/id1660453396",
      caseStudyDetails: {
        challenge: "The client needed a modern, intuitive mobile application solution for seamless digital networking.",
        solution: "We focused entirely on mobile app development, building a robust cross-platform Flutter app optimized for fast profile sharing.",
        techUsed: ["Flutter", "Node.js", "Express", "MongoDB"],
        businessResult: "Successfully launched the mobile app on the App Store and Play Store, receiving positive user feedback for its intuitive design."
      }
    },
    { 
      title: "Revolve By Preethi", 
      category: "Mobile App Development", 
      overview: "A custom mobile application developed exclusively for the 'Revolve By Preethi' brand, available on the App Store and Google Play Store.",
      technologies: ["Flutter", "Firebase"],
      outcome: "Enhanced mobile customer engagement",
      imageClass: "bg-revolve",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.revolve_by_preethi.app",
      appStoreLink: "https://apps.apple.com/us/app/revolve-by-preethi/id6751812012",
      caseStudyDetails: {
        challenge: "The brand required a dedicated mobile app to improve customer engagement and provide a streamlined shopping experience on phones.",
        solution: "We handled the complete mobile app development lifecycle, building a robust Flutter app that offers a seamless and responsive native experience.",
        techUsed: ["Flutter", "Firebase", "Stripe"],
        businessResult: "Successfully launched their dedicated mobile app, increasing mobile conversions and providing a direct marketing channel."
      }
    },
    { 
      title: "VGMart LLP", 
      category: "Website Development", 
      overview: "A custom, scalable e-commerce website designed and developed exclusively for VGMart LLP to provide a seamless web shopping experience.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      outcome: "Launched high-performance website and expanded sales",
      imageClass: "bg-vgmart",
      link: "https://vgmartllp.in/",
      caseStudyDetails: {
        challenge: "VGMart LLP needed a modern, high-performance website to establish their online retail presence.",
        solution: "We focused entirely on custom website development, building a responsive and fast-loading web platform optimized for secure transactions.",
        techUsed: ["React", "Next.js", "Node.js", "PostgreSQL"],
        businessResult: "Successfully launched their new e-commerce website, leading to a broader customer reach and increased online sales."
      }
    },
    { 
      title: "Delyte", 
      category: "Enterprise Mobile App", 
      overview: "A comprehensive internal employee management application currently available in Closed Testing and TestFlight.",
      technologies: ["Flutter", "Node.js", "Firebase"],
      outcome: "Launched in Closed Testing & TestFlight",
      imageClass: "bg-delyte",
      playStoreLink: "#",
      appStoreLink: "#",
      caseStudyDetails: {
        challenge: "The organization needed a centralized mobile solution to manage employee onboarding, leave requests, and internal communications effectively.",
        solution: "We built a secure, scalable internal employee application that unifies all HR operations into a single intuitive interface.",
        techUsed: ["Flutter", "Node.js", "Express", "Firebase"],
        businessResult: "Successfully launched the application in Closed Testing and TestFlight, currently receiving feedback from initial users to optimize the HR experience."
      }
    },
    { 
      title: "Singhai Auto Parts", 
      category: "Full-Stack Web App", 
      overview: "Bilingual auto repair, 2-wheeler servicing, and lathe machine works platform with dynamic WhatsApp booking & Google Maps integration.",
      technologies: ["JavaScript", "HTML5", "CSS3", "WhatsApp API", "Bilingual i18n"],
      outcome: "Streamlined workshop appointments and 100% digitalized bookings",
      imageClass: "bg-singhai-auto-parts",
      link: "https://singhai-auto-parts.vercel.app/",
      caseStudyDetails: {
        challenge: "Singhai Auto Parts & Electricals required a responsive digital presence to handle bike service booking, genuine spare parts catalog inquiries, and machine repair quotes in both Hindi and English.",
        solution: "Engineered a high-performance, dark-themed responsive web application featuring instant language switching (Hindi/English), automated WhatsApp appointment dispatch, Google Maps location & review showcase.",
        techUsed: ["JavaScript", "HTML5", "CSS3", "Glassmorphism UI", "WhatsApp API", "Google Maps Embed"],
        businessResult: "Digitized garage inquiries, reducing manual phone calls and increasing direct service bookings via WhatsApp by over 45%."
      }
    },
    { 
      title: "Shubham Traders", 
      category: "E-Commerce & Retail Website", 
      overview: "Commercial auto parts, tractor spares, lubricants & hardware store website with instant catalog browsing.",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "WhatsApp Ordering"],
      outcome: "Expanded wholesale and retail reach across Madhya Pradesh",
      imageClass: "bg-shubham-traders",
      link: "https://shubham-traders.vercel.app/",
      caseStudyDetails: {
        challenge: "A leading regional automotive parts dealer required an online presence to showcase genuine tractor spares, engine lubricants, and hardware tools with fast mobile ordering.",
        solution: "Built a customized web platform with fast product search, categorized inventory, location navigation, and direct-to-WhatsApp order placement.",
        techUsed: ["React", "JavaScript", "CSS3", "SEO Optimization", "WhatsApp API"],
        businessResult: "Boosted digital discoverability for tractor owners and mechanics, increasing daily spare parts inquiries and bulk orders."
      }
    },
    { 
      title: "Shubhaytanam Connect", 
      category: "Real Estate Mobile & Admin", 
      overview: "Premium property discovery, plot booking, and estate management mobile application with admin dashboard.",
      technologies: ["Flutter", "Riverpod", "Firebase", "Cloud Firestore", "React Admin"],
      outcome: "Seamless virtual property walkthroughs and digitized plot bookings",
      imageClass: "bg-shubhaytanam",
      caseStudyDetails: {
        challenge: "A premium real estate developer needed a modern cross-platform mobile app for clients to explore plotted developments, check availability, and request virtual tours.",
        solution: "Developed a Flutter mobile application backed by Firebase Firestore with reactive Riverpod state management, plus a React web console for back-office lead management.",
        techUsed: ["Flutter", "Dart", "Riverpod", "Firebase Firestore", "Cloud Functions", "React"],
        businessResult: "Accelerated property inquiry-to-booking conversions and provided property buyers with instant access to plot dimensions and pricing."
      }
    },
    { 
      title: "Mentor Learner Ecosystem", 
      category: "EdTech Mobile Platform", 
      overview: "Cross-platform mentor-mentee consultation app with real-time sessions, coins rewards, and React management console.",
      technologies: ["Flutter", "Dart", "Firebase", "Riverpod", "React", "Cloud Functions"],
      outcome: "End-to-end 1-on-1 mentorship platform with rewards ecosystem",
      imageClass: "bg-mentor",
      caseStudyDetails: {
        challenge: "Educational startup required an interactive platform connecting learners with subject-matter mentors, including scheduling, rewards, and multi-tier user roles.",
        solution: "Architected a dual mobile app (Android & iOS) with coin/wallet system, appointment booking, and a dedicated React super-admin console for dispute resolution and mentor onboarding.",
        techUsed: ["Flutter", "Riverpod", "Firebase Auth", "Cloud Functions", "React Admin Console"],
        businessResult: "Successfully launched mobile experience with seamless appointment tracking and scalable community features."
      }
    },
    { 
      title: "AI Customer Agent", 
      category: "Generative AI", 
      overview: "An intelligent autonomous agent that handles tier-1 customer support, significantly reducing response times and support costs.",
      technologies: ["React", "Python", "OpenAI API", "AWS"],
      outcome: "Reduced support ticket resolution time by 60%",
      imageClass: "bg-ai-agent",
      caseStudyDetails: {
        challenge: "The client was overwhelmed by support tickets, leading to a 48-hour average response time and dropping customer satisfaction scores.",
        solution: "We engineered a fine-tuned LLM autonomous agent capable of resolving tier-1 issues, understanding context, and escalating complex tickets seamlessly.",
        techUsed: ["React", "Python", "OpenAI API", "LangChain", "AWS Lambda"],
        businessResult: "Decreased response times to under 2 minutes and reduced support operations costs by 35% in the first quarter."
      }
    },
    { 
      title: "Healthcare Dashboard", 
      category: "Enterprise Dashboard", 
      overview: "A secure, HIPAA-compliant patient management dashboard providing real-time analytics and predictive health risk assessments.",
      technologies: ["React", "TypeScript", "PostgreSQL", "Google Cloud"],
      outcome: "Saved medical staff 20 hours per week in data entry",
      imageClass: "bg-healthcare",
      caseStudyDetails: {
        challenge: "Medical staff were spending excessive hours manually entering patient data across multiple disconnected systems, causing severe inefficiencies.",
        solution: "We developed a centralized, HIPAA-compliant dashboard that aggregates patient data in real-time and provides predictive risk analytics.",
        techUsed: ["React", "TypeScript", "PostgreSQL", "Google Cloud", "Docker"],
        businessResult: "Reclaimed 20 hours per week for medical staff, allowing them to focus entirely on patient care rather than admin work."
      }
    }
  ];

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <motion.div 
          className="portfolio-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <i className="fa-solid fa-briefcase"></i> Selected Work
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Client Engagements</span>
          </h2>
          <p className="portfolio-subheading">
            A curated showcase of real-world digital applications, e-commerce stores, and multi-platform solutions engineered by Sethji Solutions.
          </p>
        </motion.div>
        
        <div className="portfolio-grid">
          {projects.map((project, i) => (
            <motion.div 
              className="portfolio-card" 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.15 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="portfolio-image-wrapper">
                <div className={`portfolio-image ${project.imageClass}`}></div>
                <div className="portfolio-badge">{project.category}</div>
                
                <div className="image-expand-overlay">
                  <span className="expand-pill">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i> Case Study
                  </span>
                </div>
                
                <div className="store-icons-overlay">
                  {project.appStoreLink && project.appStoreLink !== "#" && (
                    <div className="store-icon" onClick={(e) => e.stopPropagation()} title="App Store">
                      <a href={project.appStoreLink} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-apple" style={{ color: '#007AFF' }}></i>
                      </a>
                    </div>
                  )}
                  {project.playStoreLink && project.playStoreLink !== "#" && (
                    <div className="store-icon" onClick={(e) => e.stopPropagation()} title="Google Play">
                      <a href={project.playStoreLink} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-google-play" style={{ color: '#fff' }}></i>
                      </a>
                    </div>
                  )}
                  {project.link && project.link !== "#" && (
                    <div className="store-icon" onClick={(e) => e.stopPropagation()} title="Live Site">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-globe" style={{ color: '#4F8CFF' }}></i>
                      </a>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="portfolio-details">
                <h3 className="portfolio-card-title">{project.title}</h3>
                <p className="portfolio-card-desc">{project.overview}</p>
                
                <div className="portfolio-tags">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="portfolio-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="portfolio-tag">+{project.technologies.length - 4}</span>
                  )}
                </div>

                <div className="portfolio-card-footer">
                  <span className="view-case-link">
                    Explore Details <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CaseStudyModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </section>
  );
};

export default Portfolio;
