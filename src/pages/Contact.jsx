import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [fadeInTitle, setFadeInTitle] = useState(false);
  const [fadeInGrid, setFadeInGrid] = useState(false);

  useEffect(() => {
    setFadeInTitle(true);
    const gridTimer = setTimeout(() => setFadeInGrid(true), 250);
    return () => clearTimeout(gridTimer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center -mt-20 ml-40 md:ml-65 px-4 sm:px-8 md:px-12 py-12 font-[Fira Code] bg-white text-[#1D1D1F] transition-all duration-1000">
      <h1
        style={{ fontFamily: "'Fira Code', monospace" }}
        className={`text-3xl sm:text-4xl md:text-5xl font-extralight mb-10 text-center transition-all duration-1000 ${fadeInTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        &lt;Contact&gt;
      </h1>
      <div className={`grid sm:grid-cols-3 gap-8 mt-10 w-full max-w-4xl transition-all duration-1000 ${fadeInGrid ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <a href="mailto:arya.ram.dev@outlook.com" className="flex flex-col items-center font-medium text-[#1D1D1F] text-sm sm:text-base md:text-lg transform transition duration-1000 hover:scale-105 hover:text-[#555555]">
          <img src="https://i.imgur.com/Zqbfd6U.png" alt="Email icon" className="h-12 w-12 sm:h-16 sm:w-16 mb-3" />
          Email
        </a>
        <a href="https://linkedin.com/in/arya-ram-" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center font-medium text-[#1D1D1F] text-sm sm:text-base md:text-lg transform transition duration-1000 hover:scale-105 hover:text-[#555555]">
          <img src="https://i.imgur.com/LTVUBVS.png" alt="LinkedIn icon" className="h-12 w-12 sm:h-16 sm:w-16 mb-3" />
          LinkedIn
        </a>
        <a href="https://github.com/arya-lunaris" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center font-medium text-[#1D1D1F] text-sm sm:text-base md:text-lg transform transition duration-1000 hover:scale-105 hover:text-[#555555]">
          <img src="https://i.imgur.com/VDLFjQj.png" alt="GitHub icon" className="h-12 w-12 sm:h-16 sm:w-16 mb-3" />
          GitHub
        </a>
      </div>
    </div>
  );
}