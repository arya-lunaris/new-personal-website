import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col justify-start items-center ml-40 md:ml-65 transition-opacity transition-transform duration-1000 ease-out bg-white px-4 sm:px-8 md:px-12 py-12 sm:py-10 mt-30 -mb-4 ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight sm:mt-16 mb-6 sm:mb-8 text-center text-[#1D1D1F] font-[Fira_Code]">Contact</h1>
      <p className="text-center text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-xl font-light text-[#1D1D1F]">
        Feel free to reach out through any of the platforms below!
      </p>
      <div className="flex flex-col space-y-10 w-full max-w-xs items-center">
        <a href="mailto:arya.ram.dev@outlook.com" className="flex items-center font-medium transform transition duration-300 hover:scale-105 text-[#1D1D1F] text-sm sm:text-base md:text-lg">
          <img src="https://imgur.com/37uFyH0.gif" alt="Email icon" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mr-2" />
          Email
        </a>
        <a
          href="https://linkedin.com/in/arya-ram-"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center font-medium transform transition duration-300 hover:scale-105 ml-5 text-[#1D1D1F] text-sm sm:text-base md:text-lg"
        >
          <img src="https://imgur.com/AmYxG7F.png" alt="LinkedIn icon" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mr-2" />
          LinkedIn
        </a>
        <a
          href="https://github.com/arya-lunaris"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center font-medium transform transition duration-300 hover:scale-105 ml-3 text-[#1D1D1F] text-sm sm:text-base md:text-lg"
        >
          <img src="https://imgur.com/VgQ0gk0.gif" alt="GitHub icon" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mr-2" />
          GitHub
        </a>
      </div>
    </div>
  );
}