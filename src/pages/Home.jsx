import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="ml-40 flex h-screen w-[calc(100vw-10rem)]">
      {/* Left side */}
      <div className={`flex-1 h-full transition-opacity duration-2250 ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <img
          src="https://i.imgur.com/wXIBxUS.png"
          alt="Arya headshot"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side */}
      <div className="flex-1 flex flex-col px-12 bg-white justify-center">
        <div className={`flex flex-col items-center w-full transition-opacity duration-2000 ease-out delay-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* Intro */}
          <div className={`mb-10 w-full transition-all duration-1000 ease-out text-center ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl font-extralight mb-4 text-gray-800">
              Hello, I'm{' '}
              <Link to="/about" className="font-normal hover:underline decoration-2 decoration-gray-700">
                Arya
              </Link>
            </h1>
            <hr className="m-5"></hr>
            <p className="text-xl font-light text-gray-600 mb-5">I build minimalist, thoughtful, and beautiful web applications</p>
          </div>

          {/* Recent Projects title */}
          <h2 className={`text-2xl font-light text-center mb-6 w-full transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Recent Projects
          </h2>

          {/* Projects section */}
          <div className="grid grid-cols-2 gap-8 w-140">
            {[
              { href: "https://psquest.netlify.app/", src: "https://imgur.com/rHGJUW1.png", title: "PSQuest" },
              { href: "https://app-toonder.netlify.app/", src: "https://imgur.com/XJc2So8.png", title: "Toonder" },
              { href: "https://stranger-tales.netlify.app/", src: "https://imgur.com/y4os3JF.png", title: "Stranger Tales" },
              { href: "https://arya-lunaris.github.io/game-project-wordle/", src: "https://imgur.com/IQOoqH9.png", title: "Wordle" }
            ].map((project, index) => (
              <a
                key={project.title}
                href={project.href}
                className={`flex flex-col h-50 w-full rounded shadow-md overflow-hidden transition-all duration-1000 ease-out transform hover:scale-105 hover:brightness-110 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} delay-${index * 100}`}
              >
                <img
                  src={project.src}
                  alt={project.title}
                  className="h-40 w-full object-cover"
                />
                <div className="py-4 px-2 bg-white w-full text-center flex items-center justify-center">
                  <p className="text-lg font-light text-gray-700">{project.title}</p>
                </div>
              </a>
            ))}
          </div>
          <a
            href="/projects"
            className="mt-8 w-[200px] border border-gray-300 text-center py-3 px-6 text-gray-700 font-light mx-auto transform transition-transform duration-300 hover:scale-105 rounded-3xl mt-12"
          >
            View All Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
