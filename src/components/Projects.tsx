import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const projects = [
    {
      title: 'TravelBuddy',
      description: 'A full-stack travel planning app that parses boarding passes to surface airport data, local events, and a user chat system. Designed for travelers seeking contextual recommendations during layovers or transit.',
      images: [
        'Project Screenshot 1',
        'Project Screenshot 2', 
        'Project Screenshot 3'
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
        { type: 'demo', url: '#', label: 'Live Demo' },
        { type: 'github', url: '#', label: 'GitHub' }
      ]
    },
    {
      title: 'FarmDashboard',
      description: 'A JavaFX-based desktop dashboard designed to visualize real-time agricultural drone data, including soil quality, crop health, and animal movement patterns — built for precision farming applications.',
      images: [
        'Dashboard Overview',
        'Data Visualization',
        'Settings Panel'
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
        { type: 'github', url: '#', label: 'GitHub' },
        { type: 'external', url: '#', label: 'Demo screenshots coming soon' }
      ]
    },
    {
      title: 'Currency Converter App',
      description: 'A Kotlin-based Android app for real-time currency conversion and trading. Built with multilingual support and integrated Google Maps to show the user\'s location relative to forex data sources.',
      images: [
        'Main Interface',
        'Currency Selection',
        'Maps Integration'
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
        { type: 'github', url: '#', label: 'GitHub' }
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
                <div className="project-image relative">
                  [{project.images[currentImageIndex[index] || 0]}]
                  
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
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
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
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 