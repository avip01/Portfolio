import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      let offset = 0;
      if (id === 'projects') {
        // Position the projects title about 25px from the top
        offset = -15;
      }
      const elementPosition = element.offsetTop + offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="fade-in text-center"
          >
            {/* Circular Photo Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8 flex justify-center"
            >
              <div className="w-64 h-64 bg-card border-2 border-pink-100 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-6xl font-medium text-secondary">AP</span>
              </div>
            </motion.div>
            
            <h1 className="heading-xl mb-6">Avi Patel</h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-tagline fade-in-delay-1"
            >
              Engineering clarity. Building products that scale.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subheader fade-in-delay-2"
            >
              Computer Science @ UAB · Full-Stack Engineer · Early-stage Builder
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="btn-group fade-in-delay-3"
            >
              <button
                onClick={() => scrollToSection('experience')}
                className="btn btn-primary"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-outline"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-outline"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 