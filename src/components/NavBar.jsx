import React from 'react';

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 h-screen w-40 bg-white shadow-md flex flex-col items-center z-50 ">
      <div className="mt-8">
        {/* Logo */}
        <a href="/">
          <img
            src="https://imgur.com/T7E7ZTl.png"
            alt="Logo"
            className="w-10 h-10 rounded-full inline-block transform transition duration-300 hover:scale-110"
          />
        </a>
      </div>

      {/* Links */}
      <div className="flex-1 flex flex-col justify-center space-y-6 text-gray-700 font-light mb-60 text-center">
        <div className="relative">
          <a
            href="/"
            className="relative hover:no-underline hover:text-gray-700 after:content-[''] after:block after:h-1 after:w-1 after:rounded-full after:bg-gray-700 after:mx-auto after:mt-1 after:opacity-0 hover:after:opacity-100 after:transition inline-block transform transition duration-300 hover:scale-105"
          >
            Home
          </a>
        </div>
        <div className="relative">
          <a
            href="/about"
            className="relative hover:no-underline hover:text-gray-700 after:content-[''] after:block after:h-1 after:w-1 after:rounded-full after:bg-gray-700 after:mx-auto after:mt-1 after:opacity-0 hover:after:opacity-100 after:transition inline-block transform transition duration-300 hover:scale-105"
          >
            About
          </a>
        </div>
        <div className="relative">
          <a
            href="/projects"
            className="relative hover:no-underline hover:text-gray-700 after:content-[''] after:block after:h-1 after:w-1 after:rounded-full after:bg-gray-700 after:mx-auto after:mt-1 after:opacity-0 hover:after:opacity-100 after:transition inline-block transform transition duration-300 hover:scale-105"
          >
            Projects
          </a>
        </div>
        <div className="relative">
          <a
            href="/contact"
            className="relative hover:no-underline hover:text-gray-700 after:content-[''] after:block after:h-1 after:w-1 after:rounded-full after:bg-gray-700 after:mx-auto after:mt-1 after:opacity-0 hover:after:opacity-100 after:transition inline-block transform transition duration-300 hover:scale-105"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}