import React from 'react';

export default function LightDarkButton({ theme, toggleTheme }) {
    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 z-50 px-1 py-0.5 sm:px-4 sm:py-2 rounded-full border border-gray-400 bg-white text-gray-800 hover:scale-105 transition-transform duration-300 cursor-pointer"
            style={{ fontFamily: "'Fira Code', monospace" }}
        >
            {theme === 'light' ? (
                <>
                    Dark
                    <img
                        src="https://i.imgur.com/1JDEGN9.png"
                        alt="Moon icon"
                        className="inline w-4 h-4 ml-2 -mt-1"
                    />
                </>
            ) : (
                <>
                    Light
                    <img
                        src="https://i.imgur.com/W2fiLn3.png"
                        alt="Sun icon"
                        className="inline w-6 h-6 ml-2 -mt-1"
                    />
                </>
            )}
        </button>
    );
}