import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github } from 'lucide-react';

// Custom Square LinkedIn Icon
const LinkedinSquare: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Contact: React.FC = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:avip921@gmail.com',
      text: 'avip921@gmail.com'
    },
    {
      icon: LinkedinSquare,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/arpatel2004',
      text: 'LinkedIn'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/avip01',
      text: 'GitHub'
    }
  ];

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="heading-lg mb-8">Let's Connect</h2>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto text-secondary">
            Open to new opportunties!
          </p>
          
          <div className="contact-links">
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="contact-link"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
                <span>{link.text}</span>
              </motion.a>
            ))}
          </div>
          
          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-light text-center"
          >
            <p className="text-sm text-muted">
              © 2025 Avi Patel. Built with React & TypeScript.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 