import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Hero, Projects, Experience, Contact, SpaceBackground } from './components';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-primary transition-colors duration-300">
        <SpaceBackground />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App; 