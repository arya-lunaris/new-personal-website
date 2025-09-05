import React from 'react';

function Home() {
  return (
    <div className="flex h-screen w-screen pt-16">
      {/* Left side */}
      <div className="flex-1 h-full">
        <img
          src="https://imgur.com/tZBa0Be.png"
          alt="Arya headshot"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side */}
      <div className="flex-1 flex flex-col justify-center items-start px-12 bg-white">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">Hi, I'm Arya</h1>
        <p className="text-xl text-gray-600 mb-6">
          I'm a developer!
        </p>
      </div>
    </div>
  );
}

export default Home;
