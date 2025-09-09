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
        <a href="/" className="hover:text-indigo-600">Home</a>
        <a href="/about" className="hover:text-indigo-600">About</a>
        <a href="/projects" className="hover:text-indigo-600">Projects</a>
        <a href="/contact" className="hover:text-indigo-600">Contact</a>
      </div>
    </nav>
  );
}