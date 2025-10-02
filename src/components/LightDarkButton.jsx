import React from 'react';

export default function LightDarkButton({ theme, toggleTheme }) {
    return (
        <button
            onClick={toggleTheme}
            className={`fixed top-4 right-4 z-50 px-2 py-1 sm:px-4 sm:py-2 rounded-full border border-gray-400 hover:scale-105 transition-transform duration-300 cursor-pointer text-xs sm:text-base
                ${theme === 'light'
                    ? 'bg-white text-gray-800'
                    : 'bg-[#1a1a1a] text-white'
                }`}
            style={{ fontFamily: "'Fira Code', monospace" }}
        >
            {theme === 'light' ? (
                <>
                    Dark
                    <img
                        src="/images/dark-mode.png"
                        alt="Dark icon"
                        className="inline w-4 h-4 ml-2 -mt-1"
                    />
                </>
            ) : (
                <>
                    Light
                    <img
                        src="/images/light-mode.png"
                        alt="Light icon"
                        className="inline w-6 h-6 ml-2 -mt-1"
                    />
                </>
            )}
        </button>
    );
}