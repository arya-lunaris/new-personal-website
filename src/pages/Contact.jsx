import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col justify-start items-center mt-20 ml-50 p-6 transition-opacity transition-transform duration-700 ease-out ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <h1 className="text-4xl font-light mt-25 mb-5 text-center">Contact</h1>
      <p className="text-center text-lg mb-8 max-w-xl font-light">
        Feel free to reach out through any of the platforms below!
      </p>
      <div className="flex flex-col space-y-15 w-full max-w-xs items-center mt-15">
        <a href="mailto:arya.ram.dev@outlook.com" className="flex items-center font-medium transform transition duration-300 hover:scale-105 ">
          <img src="https://i.imgur.com/5kED5be.gif" alt="Email icon" className="mr-5 scale-110" />
          Email
        </a>
        <a
          href="https://linkedin.com/in/arya-ram-"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center font-medium transform transition duration-300 hover:scale-105 ml-5"
        >
          <img src="https://i.imgur.com/yGhylLQ.png" alt="LinkedIn icon" className="mr-5 scale-120" />
          LinkedIn
        </a>
        <a
          href="https://github.com/arya-lunaris"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center font-medium transform transition duration-300 hover:scale-105 ml-2"
        >
          <img src="https://i.imgur.com/YsvojEn.gif" alt="GitHub icon" className="mr-5 scale-120" />
          GitHub
        </a>
      </div>
    </div>
  );
}