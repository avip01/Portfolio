import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, ArrowUp } from 'lucide-react';

// Custom Square LinkedIn Icon
const LinkedinSquare: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-secondary border-t border-border-color">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted">
              © {currentYear} [Your Name]. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://github.com/avip01"
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-accent rounded-lg text-secondary hover:text-primary-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/arpatel2004"
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-accent rounded-lg text-secondary hover:text-primary-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinSquare size={18} />
            </motion.a>
            <motion.a
              href="mailto:avip921@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-accent rounded-lg text-secondary hover:text-primary-600 transition"
            >
              <Mail size={18} />
            </motion.a>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-accent rounded-lg text-secondary hover:text-primary-600 transition"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 