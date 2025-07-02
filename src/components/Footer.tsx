import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

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
              href="https://github.com/yourusername"
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-accent rounded-lg text-secondary hover:text-primary-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-accent rounded-lg text-secondary hover:text-primary-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
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