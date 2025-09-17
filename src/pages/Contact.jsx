import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col justify-start items-center ml-65 transition-opacity transition-transform duration-1000 ease-out bg-white -mb-4 ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <h1 className="text-5xl font-extralight mt-25 mb-5 text-center text-[#1D1D1F] font-[Fira_Code] mt-50">Contact</h1>
      <p className="text-center text-lg -mt- max-w-xl font-light text-[#1D1D1F]">
        Feel free to reach out through any of the platforms below!
      </p>
      <div className="flex flex-col space-y-15 w-full max-w-xs items-center mt-15 -ml-9">
        <a href="mailto:arya.ram.dev@outlook.com" className="flex items-center font-medium transform transition duration-300 hover:scale-105 text-[#1D1D1F] -mb-5">
          <img src="https://imgur.com/37uFyH0.gif" alt="Email icon" className="scale-40" />
          Email
        </a>
        <a
          href="https://linkedin.com/in/arya-ram-"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center font-medium transform transition duration-300 hover:scale-105 ml-5 text-[#1D1D1F] -mb-5"
        >
          <img src="https://imgur.com/AmYxG7F.png" alt="LinkedIn icon" className="scale-40" />
          LinkedIn
        </a>
        <a
          href="https://github.com/arya-lunaris"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center font-medium transform transition duration-300 hover:scale-105 ml-3 text-[#1D1D1F]"
        >
          <img src="https://imgur.com/VgQ0gk0.gif" alt="GitHub icon" className="scale-50" />
          GitHub
        </a>
      </div>
    </div>
  );
}