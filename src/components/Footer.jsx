import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-auto w-screen bg-white py-2 sm:py-3 md:py-4 flex flex-col items-center md:items-center sm:items-start text-gray-700 font-light ml-20 sm:ml-28 md:ml-35 text-sm sm:text-base">
      <div className="border-t border-gray-200 w-max">
        <p className="mt-[3px] -mb-5">
          © 2025 Arya Lunaris. All rights reserved.
        </p>
      </div>
    </footer>
  );
}