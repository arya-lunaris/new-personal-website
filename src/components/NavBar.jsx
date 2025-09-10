import React from 'react';

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 h-screen w-45 bg-white shadow-md flex flex-col items-center py-8 z-50">
      {/* Logo */}
      <div className="mb-12">
        <img
          src="https://imgur.com/T7E7ZTl.png"
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* Links */}
      <div className="flex flex-col space-y-6 text-gray-700 font-light">
        <div className="relative">
          <a
            href="/"
            className="relative hover:no-underline hover:text-gray-700 after:content-[''] after:block after:h-1 after:w-1 after:rounded-full after:bg-gray-700 after:mx-auto after:mt-1 after:opacity-0 hover:after:opacity-100 after:transition"
          >
            Home
          </a>
        </div>
        <div className="relative">
          <a
            href="/about"
            className="relative hover:no-underline hover:text-gray-700 after:content-[''] after:block after:h-1 after:w-1 after:rounded-full after:bg-gray-700 after:mx-auto after:mt-1 after:opacity-0 hover:after:opacity-100 after:transition"
          >
            About
          </a>
        </div>
        <div className="relative">
          <a
            href="/projects"
            className="relative hover:no-underline hover:text-gray-700 after:content-[''] after:block after:h-1 after:w-1 after:rounded-full after:bg-gray-700 after:mx-auto after:mt-1 after:opacity-0 hover:after:opacity-100 after:transition"
          >
            Projects
          </a>
        </div>
        <div className="relative">
          <a
            href="/contact"
            className="relative hover:no-underline hover:text-gray-700 after:content-[''] after:block after:h-1 after:w-1 after:rounded-full after:bg-gray-700 after:mx-auto after:mt-1 after:opacity-0 hover:after:opacity-100 after:transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}