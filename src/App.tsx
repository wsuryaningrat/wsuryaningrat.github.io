import { useState, useEffect } from 'react';
import { site } from './config/site';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import StickyPanel from './components/StickyPanel';
import Hero from './sections/Hero';
import About from './sections/About';
import Work from './sections/Work';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        {site.showNavbar && <Navbar />}
        
        <main className="pt-14 sm:pt-16">
          <Hero />
          <About />
          <Work />
          <Education />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        
        <StickyPanel isDark={isDark} toggleTheme={toggleTheme} />
      </div>
    </LanguageProvider>
  );
}

export default App;
