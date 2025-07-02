import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'TravelBuddy',
      description: 'A full-stack travel planning app that parses boarding passes to surface airport data, local events, and a user chat system. Designed for travelers seeking contextual recommendations during layovers or transit.',
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
                <div className="project-image">
                  [Project Image Placeholder]
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