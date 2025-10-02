import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar({ theme }) {
  return (
    <nav
      className={`fixed top-0 left-0 h-screen w-35 md:w-65 shadow-[0_8px_30px_rgba(0,0,0,0.35)] flex flex-col items-center z-50 bg-cover bg-center ${theme === 'dark' ? 'bg-[#1a1a1a] text-white' : 'bg-[white] text-[#1D1D1F]'}`}
    >
      <div className="mt-5">
        <a href="/">
          <img
            src={theme === 'dark' ? "https://i.imgur.com/BZZuQuD.png" : "https://imgur.com/T7E7ZTl.png"}
            alt="Logo"
            className="w-10 h-10 rounded-full inline-block transform transition duration-300 hover:scale-110"
          />
        </a>
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-6 font-['Fira_Code'] text-center text-[17px]">
        {['/', '/about', '/projects', '/contact'].map((path) => {
          const label = path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
          return (
            <div key={path} className="relative">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `inline-block transform transition-transform duration-750 relative ${
                    isActive
                      ? 'translate-x-2 font-medium before:content-[">"] before:absolute before:left-[-1.2rem] before:opacity-100 before:translate-x-0'
                      : 'hover:translate-x-2 before:content-[">"] before:absolute before:left-[-1.2rem] before:opacity-0 before:-translate-x-[5px] before:transition-all before:duration-300'
                  }`
                }
              >
                {label}
              </NavLink>
            </div>
          );
        })}
      </div>

      <div className="mb-6 flex flex-row justify-center space-x-6">
        <a href="mailto:arya.ram.dev@outlook.com" className="flex items-center transform transition duration-500 hover:scale-110">
          <img src={theme === 'dark' ? "https://i.imgur.com/krwISnr.png" : "https://imgur.com/XgkoBMa.png"} alt="Email icon" className="h-6 w-6 sm:h-7 sm:w-7" />
        </a>
        <a href="https://linkedin.com/in/arya-ram-" className="flex items-center transform transition duration-500 hover:scale-110">
          <img src={theme === 'dark' ? "https://i.imgur.com/H2eDhrp.png" : "https://i.imgur.com/LTVUBVS.png"} alt="LinkedIn icon" className="h-6 w-6 sm:h-7 sm:w-7" />
        </a>
        <a href="https://github.com/arya-lunaris" className="flex items-center transform transition duration-500 hover:scale-110">
          <img src={theme === 'dark' ? "https://i.imgur.com/FVTHHVH.png" : "https://i.imgur.com/VDLFjQj.png"} alt="GitHub icon" className="h-6 w-6 sm:h-7 sm:w-7" />
        </a>
      </div>
    </nav>
  );
}