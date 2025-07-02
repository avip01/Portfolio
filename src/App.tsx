import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle, Hero, About, Projects, Experience, Contact } from './components';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-primary transition-colors duration-300">
        <ThemeToggle />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App; 