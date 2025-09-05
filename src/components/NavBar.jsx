import React from 'react';

export default function NavBar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md px-8 py-4 flex justify-between items-center z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="https://i.imgur.com/Z5P2t3z.png"
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* Links */}
      <div className="space-x-6 text-gray-700 font-medium">
        <a href="/" className="hover:text-indigo-600">Home</a>
        <a href="/about" className="hover:text-indigo-600">About</a>
        <a href="/projects" className="hover:text-indigo-600">Projects</a>
        <a href="/contact" className="hover:text-indigo-600">Contact</a>
      </div>
    </nav>
  );
}