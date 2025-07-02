import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

const Contact: React.FC = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:avi@example.com',
      text: 'avi@example.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yourprofile',
      text: 'LinkedIn'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/yourprofile',
      text: 'GitHub'
    },
    {
      icon: FileText,
      label: 'Resume',
      href: '/resume.pdf',
      text: 'Resume (PDF)'
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
            Open to internships, collaborations, and building cool stuff
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
              © 2024 Avi Patel. Built with React & TypeScript.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 