import React, { useState, useEffect } from 'react';
import LightDarkButton from '../components/LightDarkButton';

export default function Contact({ theme, toggleTheme }) {
  const [fadeInTitle, setFadeInTitle] = useState(false);
  const [fadeInGrid, setFadeInGrid] = useState(false);

  useEffect(() => {
    setFadeInTitle(true);
    const gridTimer = setTimeout(() => setFadeInGrid(true), 250);
    return () => clearTimeout(gridTimer);
  }, []);

  const bgClass = theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-white text-[#1D1D1F]';

  const icons = {
    email: 'https://i.imgur.com/nfLPiqo.gif',
    linkedin: 'https://i.imgur.com/6FMDJrd.gif',
    github: 'https://i.imgur.com/AGA7A04.gif',
  };

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center ml-35 md:ml-65 px-4 sm:px-8 md:px-12 py-12 font-[Fira Code] transition-all duration-750 ${bgClass}`}>
      <LightDarkButton theme={theme} toggleTheme={toggleTheme} />

      <h1
        style={{ fontFamily: "'Fira Code', monospace" }}
        className={`text-3xl sm:text-4xl md:text-5xl font-extralight mb-4 text-center transition-all duration-500 ${fadeInTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        &lt;Contact&gt;
      </h1>

      <p className={`text-center text-sm sm:text-base md:text-lg mb-10 max-w-xl transition-all duration-750 ${fadeInTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        Feel free to reach out for project requests, collaborations, or any questions you might have. I'm always happy to connect and discuss new ideas!
      </p>

      <div className={`grid sm:grid-cols-3 gap-8 mt-10 w-full max-w-4xl transition-all duration-750 ${fadeInGrid ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <a href="mailto:arya.ram.dev@outlook.com" className="flex flex-col items-center font-medium text-sm sm:text-base md:text-lg transform transition duration-500 hover:scale-105">
          <img src={icons.email} alt="Email icon" className="h-16 w-16 sm:h-20 sm:w-20 mb-2" />
          <span className={`${theme === 'dark' ? 'text-white' : 'text-[#1D1D1F]'}`}>Email</span>
        </a>

        <a href="https://linkedin.com/in/arya-ram-" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center font-medium text-sm sm:text-base md:text-lg transform transition duration-500 hover:scale-105">
          <img src={icons.linkedin} alt="LinkedIn icon" className="h-16 w-16 sm:h-20 sm:w-20 mb-2" />
          <span className={`${theme === 'dark' ? 'text-white' : 'text-[#1D1D1F]'}`}>LinkedIn</span>
        </a>

        <a href="https://github.com/arya-lunaris" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center font-medium text-sm sm:text-base md:text-lg transform transition duration-500 hover:scale-105">
          <img src={icons.github} alt="GitHub icon" className="h-16 w-16 sm:h-20 sm:w-20 mb-2" />
          <span className={`${theme === 'dark' ? 'text-white' : 'text-[#1D1D1F]'}`}>GitHub</span>
        </a>
      </div>
    </div>
  );
}