import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { createPortal } from 'react-dom';
import FarmDashboardImg from '../assets/FarmDashboard.png';
import FarmDemoImg from '../assets/FarmDemoPhoto.png';
import CurrencyConverterImg from '../assets/CurrencyConverter.png';
import CurrencyConverterAppImg from '../assets/CurrencyConverterApp.png';
import TravelBuddy1 from '../assets/TravelBuddy1.png';
import TravelBuddy2 from '../assets/TravelBuddy2.png';
import TravelBuddy3 from '../assets/TravelBuddy3.png';
import TravelBuddy4 from '../assets/TravelBuddy4.png';
import TravelBuddy5 from '../assets/TravelBuddy5.png';
import TravelBuddy6 from '../assets/TravelBuddy6.png';
import TravelBuddy7 from '../assets/TravelBuddy7.png';
import TravelBuddy8 from '../assets/TravelBuddy8.png';
import TravelBuddy9 from '../assets/TravelBuddy9.png';
import TravelBuddy10 from '../assets/TravelBuddy10.png';
import TravelBuddy11 from '../assets/TravelBuddy11.png';
import TravelBuddy12 from '../assets/TravelBuddy12.png';

const Projects: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [expandedProjects, setExpandedProjects] = useState<{ [key: number]: boolean }>({});
  const [modalProjectIndex, setModalProjectIndex] = useState<number | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);

  // Debug current state values
  console.log('Current state - modalImage:', modalImage, 'modalProjectIndex:', modalProjectIndex, 'modalImageIndex:', modalImageIndex);

  const projects = [
    {
      title: 'TravelBuddy',
      description: '• Developing a travel-planning iOS app using React, TypeScript, and Tailwind CSS providing recommendations for local events, dining locations, accommodations, and attractions based on user preferences.\n• Integrating real-time airport and cruise assistance features—dining, restrooms, accessibility, and terminal info—via APIs to support travelers in transit.\n• Developing social networking features to connect users traveling to the same destinations, with planned integration of Firebase for real-time data storage and engagement.',
      images: [
        TravelBuddy1,
        TravelBuddy2,
        TravelBuddy3,
        TravelBuddy4,
        TravelBuddy5,
        TravelBuddy6,
        TravelBuddy7,
        TravelBuddy8,
        TravelBuddy9,
        TravelBuddy10,
        TravelBuddy11,
        TravelBuddy12
      ],
      tech: ['React', 'Firebase', 'Google Maps API', 'Tailwind CSS', 'REST APIs'],
      responsibilities: [
        'Designed and implemented boarding pass parser to extract location data',
        'Integrated Google Maps and external event APIs for contextual recommendations',
        'Built real-time Firebase-based chat for user interaction',
        'Created responsive, mobile-first UI using Tailwind and React hooks',
        'Architected Firestore database and authentication flow'
      ],
      links: [
        { type: 'github', url: 'https://github.com/avip01/TravelBuddyFinal', label: 'GitHub' }
      ]
    },
    {
      title: 'FarmDashboard',
      description: '• Built a responsive, user-friendly interface using Java and XML in Eclipse to visualize drone data related to soil quality, crop conditions, and animal movements across the farm.\n• Led a team of four in building the JavaFX dashboard, managing timelines, preventing scope creep, and ensuring clear communication through weekly check-ins.\n• Authored 10+ pages of documentation on system architecture, wireframes, and data flows to ensure consistency and alignment across the project.',
      images: [
        FarmDashboardImg,
        FarmDemoImg
      ],
      tech: ['Java', 'JavaFX', 'XML', 'Eclipse', 'FXML', 'Team Collaboration Tools'],
      responsibilities: [
        'Built an interactive, responsive UI in Java using JavaFX and XML for real-time data display',
        'Led a 4-person development team, managing scope, setting milestones, and conducting weekly progress check-ins',
        'Designed and implemented views for telemetry data related to soil sensors, crop diagnostics, and livestock tracking',
        'Authored 10+ pages of internal documentation covering system architecture, component interaction, and data flows',
        'Ensured alignment between design and implementation through wireframing and structured dev handoff'
      ],
      links: [
        { type: 'github', url: 'https://gitlab.com/group96281743/FarmDashboard', label: 'GitLab' }
      ]
    },
    {
      title: 'Currency Converter App',
      description: '• Developed innovative app features, including auto-detect currency functionality and language changer through Kotlin, which reduced localization bugs by 60% during testing.\n• Implemented API integration to deliver real-time exchange rate updates, significantly enhancing accuracy and user experience.\n• Collaborated with backend engineers to streamline frontend components, achieving a 30% reduction in load times and overall interface improvements.',
      images: [
        CurrencyConverterAppImg,
        CurrencyConverterImg
      ],
      tech: ['Kotlin', 'Android SDK', 'REST API (ExchangeRate API)', 'Google Maps API'],
      responsibilities: [
        'Developed clean, responsive Android UI using XML and Kotlin components',
        'Connected app to a live exchange rate API for real-time conversion and historical data',
        'Implemented dynamic language toggle (i18n-ready)',
        'Integrated Google Maps to visualize user location contextually',
        'Handled error states, offline handling, and asynchronous data flows'
      ],
      links: [
        { type: 'github', url: 'https://github.com/heyzeus77/CS422-CS522_CurrencyConverter', label: 'GitHub' }
      ]
    },
  ];

  const handlePrevImage = (projectIndex: number) => {
    const currentIndex = currentImageIndex[projectIndex] || 0;
    const newIndex = currentIndex === 0 ? projects[projectIndex].images.length - 1 : currentIndex - 1;
    setCurrentImageIndex(prev => ({ ...prev, [projectIndex]: newIndex }));
  };

  const handleNextImage = (projectIndex: number) => {
    const currentIndex = currentImageIndex[projectIndex] || 0;
    const newIndex = currentIndex === projects[projectIndex].images.length - 1 ? 0 : currentIndex + 1;
    setCurrentImageIndex(prev => ({ ...prev, [projectIndex]: newIndex }));
  };

  const isImagePath = (value: string) => {
    console.log('Checking isImagePath for:', value, 'Type:', typeof value);
    // Check if it's a string that ends with image extensions OR an imported image module
    return typeof value === 'string' && (
      /\.(png|jpe?g|gif|webp|svg)$/i.test(value) || 
      value.includes('static/media/') ||
      value.startsWith('data:') ||
      value.startsWith('/assets/') ||
      value.startsWith('/static/')
    );
  };

  const toggleProjectExpansion = (projectIndex: number) => {
    setExpandedProjects(prev => ({ 
      ...prev, 
      [projectIndex]: !prev[projectIndex] 
    }));
  };

  const openModal = (projectIndex: number, imageIndex: number) => {
    console.log('Opening modal for project:', projectIndex, 'image:', imageIndex);
    console.log('Project images:', projects[projectIndex].images);
    console.log('Setting modalImage to:', projects[projectIndex].images[imageIndex]);
    setModalProjectIndex(projectIndex);
    setModalImageIndex(imageIndex);
    setModalImage(projects[projectIndex].images[imageIndex] as string);
  };

  const closeModal = () => {
    setModalProjectIndex(null);
    setModalImageIndex(0);
    setModalImage(null);
  };

  const navigateModalImage = (direction: 'prev' | 'next') => {
    if (modalProjectIndex === null) return;
    
    const currentProject = projects[modalProjectIndex];
    const totalImages = currentProject.images.length;
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = modalImageIndex === 0 ? totalImages - 1 : modalImageIndex - 1;
    } else {
      newIndex = modalImageIndex === totalImages - 1 ? 0 : modalImageIndex + 1;
    }
    
    setModalImageIndex(newIndex);
    setModalImage(currentProject.images[newIndex] as string);
  };

  const goToModalImage = (imageIndex: number) => {
    if (modalProjectIndex === null) return;
    
    setModalImageIndex(imageIndex);
    setModalImage(projects[modalProjectIndex].images[imageIndex] as string);
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (modalProjectIndex === null) return;

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          navigateModalImage('prev');
          break;
        case 'ArrowRight':
          event.preventDefault();
          navigateModalImage('next');
          break;
        case 'Escape':
          event.preventDefault();
          closeModal();
          break;
      }
    };

    if (modalProjectIndex !== null) {
      document.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [modalProjectIndex, modalImageIndex]);

  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-center mb-12">Projects</h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card"
              >
                {/* Image with Carousel */}
                <div className={`relative ${isImagePath(project.images[currentImageIndex[index] || 0]) ? '' : 'project-image'}`}>
                  {(() => {
                    const current = project.images[currentImageIndex[index] || 0];
                    const isCurrencyConverter = project.title === 'Currency Converter App';
                    const isTravelBuddy = project.title === 'TravelBuddy';
                    return isImagePath(current) ? (
                      <img
                        src={current}
                        alt={`${project.title} screenshot ${((currentImageIndex[index] || 0) + 1)}`}
                        style={{ 
                          width: isCurrencyConverter ? '59%' : (isTravelBuddy ? '32%' : '100%'),
                          height: 'auto',
                          borderRadius: '0.5rem',
                          margin: isCurrencyConverter ? '0 auto 1rem' : (isTravelBuddy ? '0 auto 1rem' : '0 auto 1rem'),
                          cursor: 'pointer',
                          userSelect: 'none',
                          display: 'block'
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log('Image clicked! Project index:', index, 'Current image index:', currentImageIndex[index] || 0);
                          openModal(index, currentImageIndex[index] || 0);
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.02)';
                          e.currentTarget.style.transition = 'transform 0.2s ease';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />
                    ) : (
                      <>[{current}]</>
                    );
                  })()}
                  
                  {/* Navigation Arrows - Only show if multiple images */}
                  {project.images.length > 1 && (
                    <div className="absolute flex items-center space-x-3" style={{ bottom: '12px', left: '50%', transform: 'translateX(-50%)' }}>
                      <motion.button
                        onClick={() => handlePrevImage(index)}
                        className="w-8 h-8 bg-black bg-opacity-40 hover:bg-opacity-60 rounded-full flex items-center justify-center transition-all duration-200 border-0 outline-0 focus:outline-none"
                        style={{ border: 'none', outline: 'none' }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4 text-white" />
                      </motion.button>
                      
                      <motion.button
                        onClick={() => handleNextImage(index)}
                        className="w-8 h-8 bg-black bg-opacity-40 hover:bg-opacity-60 rounded-full flex items-center justify-center transition-all duration-200 border-0 outline-0 focus:outline-none"
                        style={{ border: 'none', outline: 'none' }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 h-4 text-white" />
                      </motion.button>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <h3 className="project-title mb-0">{project.title}</h3>
                  {project.title === 'TravelBuddy' && (
                    <span className="text-sm text-gray-300 font-normal">Jan 2025 - Present</span>
                  )}
                  {project.title === 'FarmDashboard' && (
                    <span className="text-sm text-gray-300 font-normal">Sep 2024 - Dec 2024</span>
                  )}
                  {project.title === 'Currency Converter App' && (
                    <span className="text-sm text-gray-300 font-normal">May 2024 - Aug 2024</span>
                  )}
                </div>
                <div className="project-description">
                  {project.description.split('\n').map((line, index) => (
                    <p key={index} className="mb-2 last:mb-0">{line}</p>
                  ))}
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-secondary mb-2">Tech Stack:</p>
                  <div className="tech-tags">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expandable Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedProjects[index] ? 'auto' : 0,
                    opacity: expandedProjects[index] ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="mb-6">
                    <p className="text-sm font-medium text-secondary mb-3">Key Responsibilities:</p>
                    <ul className="text-sm text-muted space-y-2">
                      {project.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent-blue mr-2 mt-1">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="project-links">
                    {project.links.map((link, idx) => (
                      <a key={idx} href={link.url} className="project-link">
                        {link.type === 'github' ? (
                          <Github className="w-4 h-4 mr-1" />
                        ) : (
                          <ExternalLink className="w-4 h-4 mr-1" />
                        )}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>

                {/* Expand/Collapse Button */}
                <div className="flex justify-center mt-4">
                  <motion.button
                    onClick={() => toggleProjectExpansion(index)}
                    className="flex items-center justify-center w-10 h-10 bg-card hover:bg-accent/10 rounded-full border border-border transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={expandedProjects[index] ? 'Collapse project details' : 'Expand project details'}
                  >
                    {expandedProjects[index] ? (
                      <ChevronUp className="w-5 h-5 text-secondary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-secondary" />
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Image Modal with Carousel */}
        {modalImage && modalProjectIndex !== null && (
          <div
            className="fixed inset-0 flex items-center justify-center p-4"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(8px)',
              zIndex: 99999,
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative max-w-5xl max-h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image Container */}
              <div className="relative inline-block">
                <img
                  src={modalImage || ''}
                  alt={`${projects[modalProjectIndex].title} screenshot ${modalImageIndex + 1}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '80vh',
                    borderRadius: '0.75rem',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    display: 'block'
                  }}
                />

                {/* Navigation Arrows - positioned relative to modal container for consistent positioning */}
                {projects[modalProjectIndex].images.length > 1 && (
                  <>
                    <button
                      onClick={() => navigateModalImage('prev')}
                      className="fixed w-20 h-20 bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full flex items-center justify-center transition-opacity duration-200 shadow-lg"
                      style={{ 
                        left: '50px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 100000,
                        border: 'none',
                        outline: 'none'
                      }}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-10 h-10 text-white" />
                    </button>

                    <button
                      onClick={() => navigateModalImage('next')}
                      className="fixed w-20 h-20 bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full flex items-center justify-center transition-opacity duration-200 shadow-lg"
                      style={{ 
                        right: '50px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 100000,
                        border: 'none',
                        outline: 'none'
                      }}
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-10 h-10 text-white" />
                    </button>
                  </>
                )}

                {/* Close Button - positioned relative to image */}
                <button
                  onClick={closeModal}
                  className="absolute w-16 h-16 bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full flex items-center justify-center transition-opacity duration-200 text-white shadow-lg"
                  style={{ 
                    top: '-10px',
                    right: '-25px',
                    border: 'none', 
                    outline: 'none', 
                    zIndex: 10,
                    fontSize: '28px',
                    fontWeight: 'bold'
                  }}
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>

              {/* Page Numbers Only */}
              {projects[modalProjectIndex].images.length > 1 && (
                <div className="flex justify-center items-center mt-4">
                  <div className="text-white text-sm font-medium">
                    {modalImageIndex + 1} / {projects[modalProjectIndex].images.length}
                  </div>
                </div>
              )}

              {/* Project Title */}
              <div className="text-center mt-3">
                <h3 className="text-white text-lg font-semibold">
                  {projects[modalProjectIndex].title}
                </h3>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 