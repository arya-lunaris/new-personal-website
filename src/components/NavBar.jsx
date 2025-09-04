import React from 'react';

export default function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="font-bold text-xl">Arya's Portfolio</div>
      <div className="space-x-4">
        <a href="/" className="hover:text-blue-400">Home</a>
        <a href="/about" className="hover:text-blue-400">About</a>
        <a href="/projects" className="hover:text-blue-400">Projects</a>
        <a href="/contact" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
}