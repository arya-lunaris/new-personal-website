import React from 'react';

export default function NavBar() {
  return (
    <nav
      className="fixed top-0 left-0 h-screen w-40 bg-[#F5F5F7] md:w-65 shadow-[0_8px_30px_rgba(0,0,0,0.35)] flex flex-col items-center z-50 bg-cover bg-center"
    >
      <div className="mt-5">
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
      <div className="flex-1 flex flex-col justify-center space-y-6 text-[#1D1D1F] font-['Fira_Code'] text-center text-[17px]">
        <div className="relative">
          <a
            href="/"
            className="relative hover:no-underline hover:text-[#1D1D1F] hover:font-medium inline-block transform transition-all duration-500"
          >
            Home
          </a>
        </div>
        <div className="relative">
          <a
            href="/about"
            className="relative hover:no-underline hover:text-[#1D1D1F] hover:font-medium inline-block transform transition-all duration-500"
          >
            About
          </a>
        </div>
        <div className="relative">
          <a
            href="/projects"
            className="relative hover:no-underline hover:text-[#1D1D1F] hover:font-medium inline-block transform transition-all duration-500"
          >
            Projects
          </a>
        </div>
        <div className="relative">
          <a
            href="/contact"
            className="relative hover:no-underline hover:text-[#1D1D1F] hover:font-medium inline-block transform transition-all duration-500"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mb-6 flex flex-row justify-center space-x-6">
        <a href="mailto:arya.ram.dev@outlook.com" className="flex items-center transform transition duration-500 hover:scale-110">
          <img src="https://imgur.com/XgkoBMa.png" alt="Email icon" className="h-6 w-6 sm:h-8 sm:w-8" />
        </a>
        <a href="https://linkedin.com/in/arya-ram-" className="flex items-center transform transition duration-500 hover:scale-110">
          <img src="https://i.imgur.com/LTVUBVS.png" alt="LinkedIn icon" className="h-6 w-6 sm:h-8 sm:w-8" />
        </a>
        <a href="https://github.com/arya-lunaris" className="flex items-center transform transition duration-500 hover:scale-110">
          <img src="https://i.imgur.com/VDLFjQj.png" alt="GitHub icon" className="h-6 w-6 sm:h-8 sm:w-8" />
        </a>
      </div>
    </nav>
  );
}