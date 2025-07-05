import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle, Hero, Projects, Experience, Contact, SpaceBackground } from './components';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-primary transition-colors duration-300">
        <SpaceBackground />
        <ThemeToggle />
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