import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`ml-40 md:ml-65 min-h-screen flex flex-col justify-center items-center bg-white px-4 sm:px-8 md:px-12 py-12 sm:py-10 font-[Fira Code] transition-all duration-1500 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

      {/* Heading and paragraph above circle */}
      <div className="text-center -mt-30 mb-13">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extralight mb-3 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ fontFamily: 'Fira Code, monospace' }}>
          &lt;Contact&gt;
        </h1>
        <p className={`text-sm sm:text-base md:text-lg font-light transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Feel free to reach out through any of the platforms below!
        </p>
      </div>

      {/* Black bar behind */}
      <div className={`absolute top-1/2 w-full h-60 sm:h-90 bg-[#141414] -translate-y-1/2 -z-10 transition-opacity duration-1500 ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`} />

      {/* Circular container */}
      <div className={`rounded-full aspect-square w-80 sm:w-96 md:w-[500px] flex flex-col items-center justify-center transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
        backgroundImage: "url('https://i.imgur.com/LO5uYJP.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '10px 10px 25px rgba(0,0,0,0.8)',
      }}>
        {/* Link logos */}
        <div className="flex flex-col space-y-6 w-full max-w-xs items-center">
          <a href="mailto:arya.ram.dev@outlook.com" className={`flex items-center font-medium text-[#1D1D1F] text-sm sm:text-base md:text-lg transform transition duration-1000 hover:scale-105 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <img src="https://i.imgur.com/Zqbfd6U.png" alt="Email icon" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 mr-4 transform transition duration-800 hover:-rotate-6" />
            Email
          </a>
          <a href="https://linkedin.com/in/arya-ram-" target="_blank" rel="noopener noreferrer" className={`flex items-center font-medium text-[#1D1D1F] text-sm sm:text-base md:text-lg transform transition duration-1500 hover:scale-105 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <img src="https://i.imgur.com/LTVUBVS.png" alt="LinkedIn icon" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 ml-6 mr-4 transform transition duration-800 hover:-rotate-6" />
            LinkedIn
          </a>
          <a href="https://github.com/arya-lunaris" target="_blank" rel="noopener noreferrer" className={`flex items-center font-medium text-[#1D1D1F] text-sm sm:text-base md:text-lg transform transition duration-2000 hover:scale-105 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <img src="https://i.imgur.com/VDLFjQj.png" alt="GitHub icon" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 ml-3 mr-3 transform transition duration-800 hover:-rotate-6" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}