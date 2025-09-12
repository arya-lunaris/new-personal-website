import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col justify-start items-center pt-75 pl-40 p-6 transition-opacity transition-transform duration-700 ease-out ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <h1 className="text-4xl font-light mb-4">Contact</h1>
      <p className="text-lg font-light max-w-xl text-center">
        Feel free to reach out to me via{' '}
        <a href="mailto:arya.ram.dev@outlook.com" className="font-medium inline-block transform transition duration-300 hover:scale-105">
          email
        </a>{' '}
        or connect with me on{' '}
        <a
          href="https://linkedin.com/in/arya-ram-"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium inline-block transform transition duration-300 hover:scale-105"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}