import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../index.css';
import LightDarkButton from '../components/LightDarkButton';

function Home({ theme, toggleTheme }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const headshotSrc = theme === 'dark' ? 'https://i.imgur.com/3hazGIv.jpeg' : 'https://i.imgur.com/g6ytR9U.png';

  return (
    <div className={`flex h-screen w-full relative font-[Fira Code] -mb-4 transition-colors duration-500 ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'}`}>
      <LightDarkButton theme={theme} toggleTheme={toggleTheme} />

      {/* Black strip */}
      <div
        className={`flex-1 h-12/12 bg-[#1a1a1a] transition-opacity duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0'} absolute top-1/2 w-full h-100 -translate-y-1/2 z-0`}
      ></div>

      <div className="flex-1 flex relative z-10 w-full -ml-20">
        {/* Headshot */}
        <div className={`ml-0 sm:ml-0 md:ml-80 flex-1 h-12/12 transition-all duration-500 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <img
            src={headshotSrc}
            alt="Arya headshot"
            className="w-7/12 h-10/12 object-cover rounded-3xl mx-auto ml-80 mt-20 shadow-2xl shadow-gray-800/50"
            style={{ boxShadow: '10px 10px 25px rgba(0,0,0,0.8)' }}
          />
        </div>

        {/* Right side */}
        <div className="flex-1 flex flex-col justify-center h-full -ml-50 sm:-ml-75 md:-ml-50">
          <div className={`flex flex-col items-center w-full transition-opacity duration-2000 ease-out delay-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            {/* Intro */}
            <div className={`w-full transition-all duration-1000 ease-out text-center ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-3xl font-extralight text-[#F5F5F8] mb-0">
                Hello, I'm
              </h1>
              <div className="inline-block transform transition duration-500 hover:scale-105">
                <Link
                  to="/about"
                  className="no-underline text-5xl font-extralight text-[#F5F5F8] ml-6 hover:text-[#F5F5F8]"
                  style={{ fontFamily: "'Fira Code', monospace" }}
                >
                  &lt;Arya&gt;<span className="animate-blink">|</span>
                </Link>
              </div>
              <p className="text-[20px] font-light text-[#F5F5F8] m-10 mt-5 mb-12">
                I'm a Software Engineer
              </p>
            </div>

            <a
              href="/contact"
              className={`transition-all duration-500 ease-out transform hover:scale-110 hover:shadow-lg ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-[15px] -mt-5 px-4 py-2 rounded-full border-1 border-[#F5F5F8] text-[#F5F5F8] hover:bg-[#F5F5F8] hover:border-[#F5F5F8] hover:text-black inline-block text-center`}
            >
              Say Hello 👋
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </div>
  );
}

export default Home;