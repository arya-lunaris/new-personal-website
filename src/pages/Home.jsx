import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="ml-50 flex h-screen w-[calc(100vw-10rem)] items-center justify-center bg-white">
      {/* Left side */}
      <div className={`flex-1 h-12/12 transition-opacity duration-2250 ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <img
          src="https://i.imgur.com/yozC82P.jpeg"
          alt="Arya headshot"
          className="w-9/12 h-10/12 object-cover rounded-3xl mx-auto ml-60 mt-20"
        />
      </div>

      {/* Right side */}
      <div className="flex-1 flex flex-col px-12 justify-center h-full">
        <div className={`flex flex-col items-center w-full transition-opacity duration-2000 ease-out delay-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* Intro */}
          <div className={`-mt-5 mb-20 w-full transition-all duration-1000 ease-out text-center ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl font-extralight text-gray-800 mb-3">
              Hello, I'm
            </h1>
            <div className="inline-block transform transition duration-300 hover:scale-105">
              <Link to="/about" className="no-underline text-5xl font-extralight text-gray-800">
                &lt;Arya&gt;<span className="animate-blink">|</span>
              </Link>
            </div>
            <p className="text-[20px] font-light text-gray-600 m-30">
              I'm a Software Engineer
            </p>
          </div>

          <a
            href="/projects"
            className={`glass-button transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} -mt-10`}
          >
            View My Projects
          </a>
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
