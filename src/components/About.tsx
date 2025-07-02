import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="heading-lg mb-8">About Avi</h2>
          
          <div className="text-lg space-y-6 leading-relaxed max-w-3xl mx-auto">
            <p>
              I'm a Computer Science student at UAB passionate about building scalable systems and intuitive interfaces. I've launched full-stack applications across web and mobile using React, Firebase, Kotlin, REST APIs, and Tailwind — including an AI-enabled travel planner, a currency app, and a vertically integrated ecommerce brand.
            </p>
            
            <p>
              I'm driven by clarity, execution, and real-world feedback. I thrive in early-stage teams where thoughtful engineering and fast iteration meet.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 