import React from 'react';

export default function Footer({ theme }) {
  const bgClass = theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-white text-gray-700';

  return (
    <footer className={`mt-auto w-screen py-2 sm:py-3 md:py-4 flex flex-col items-center md:items-center sm:items-center font-light ml-20 sm:ml-20 md:ml-35 text-sm sm:text-base transition-colors duration-500 ${bgClass}`}>
      <div>
        <p className="mt-[3px] -mb-5">
          © 2025 Arya Lunaris. All rights reserved.
        </p>
      </div>
    </footer>
  );
}