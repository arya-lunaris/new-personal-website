import React from 'react';

function Home() {
  return (
    <div className="ml-45 flex h-screen w-[calc(100vw-12rem)]">
      {/* Left side */}
      <div className="flex-1 h-full">
        <img
          src="https://imgur.com/tZBa0Be.png"
          alt="Arya headshot"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side */}
      <div className="flex-1 flex flex-col px-12 bg-white justify-center mr-">
        <div className="flex flex-col items-center w-full">
          {/* Intro */}
          <div className="mb-10 w-full mt-10">
            <h1 className="text-5xl font-light mb-4 text-gray-800">Hi, I'm Arya</h1>
            <p className="text-xl font-light text-gray-600">I'm a developer!</p>
          </div>

          {/* Projects section */}
          <div className="w-full flex flex-col items-center mt-10">
            <h2 className="text-2xl font-light mb-6 text-gray-800 w-full text-center">Recent Projects</h2>
            <div className="grid grid-cols-2 gap-6 w-full">
              <a
                href="https://psquest.netlify.app/"
                className="flex flex-col h-56 w-full rounded shadow-md overflow-hidden transition-transform duration-200 hover:scale-105"
              >
                <img
                  src="https://imgur.com/rHGJUW1.png"
                  alt="PSQuest"
                  className="h-40 w-full object-cover"
                />
                <div className="py-4 px-2 bg-white w-full text-center flex items-center justify-center">
                  <p className="text-lg font-light text-gray-700">PSQuest</p>
                </div>
              </a>
              <a
                href="https://app-toonder.netlify.app/"
                className="flex flex-col h-56 w-full rounded shadow-md overflow-hidden transition-transform duration-200 hover:scale-105"
              >
                <img
                  src="https://imgur.com/XJc2So8.png"
                  alt="Toonder"
                  className="h-40 w-full object-cover"
                />
                <div className="py-4 px-2 bg-white w-full text-center flex items-center justify-center">
                  <p className="text-lg font-light text-gray-700">Toonder</p>
                </div>
              </a>
              <a
                href="https://stranger-tales.netlify.app/"
                className="flex flex-col h-56 w-full rounded shadow-md overflow-hidden transition-transform duration-200 hover:scale-105"
              >
                <img
                  src="https://imgur.com/y4os3JF.png"
                  alt="Stranger Tales"
                  className="h-40 w-full object-cover"
                />
                <div className="py-4 px-2 bg-white w-full text-center flex items-center justify-center">
                  <p className="text-lg font-light text-gray-700">Stranger Tales</p>
                </div>
              </a>
              <a
                href="https://arya-lunaris.github.io/game-project-wordle/"
                className="flex flex-col h-56 w-full rounded shadow-md overflow-hidden transition-transform duration-200 hover:scale-105"
              >
                <img
                  src="https://imgur.com/IQOoqH9.png"
                  alt="Wordle"
                  className="h-40 w-full object-cover"
                />
                <div className="py-4 px-2 bg-white w-full text-center flex items-center justify-center">
                  <p className="text-lg font-light text-gray-700">Wordle</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
