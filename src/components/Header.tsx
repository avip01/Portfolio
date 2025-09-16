import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Me', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = href === '#projects' ? 5 : 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition + offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-4 ${
      isScrolled ? 'bg-primary/90 backdrop-blur border-b border-border-color' : 'bg-transparent'
    }`}>
      <nav className="container">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Left - Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold text-primary justify-self-start"
          >
            Avi Patel
          </motion.div>

          {/* Center - Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="flex items-center justify-center space-x-4"
          >
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 bg-accent rounded-lg text-primary hover:text-primary-600 hover:bg-secondary transition font-medium"
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Right - Empty placeholder to keep grid alignment */}
          <div className="justify-self-end" />
        </div>
      </nav>
    </header>
  );
};

export default Header; 