import React, { useEffect, useState } from 'react';

const projects = [
  {
    title: 'PSQuest',
    description:
      'A web-based multiplayer RPG game featuring quests, battles, and character progression, built with Phaser and Node.js.',
    image: 'https://imgur.com/rHGJUW1.png',
    link: 'https://psquest.netlify.app/',
  },
  {
    title: 'Toonder',
    description:
      'A task and project management tool designed for teams to collaborate efficiently, developed using React and Django.',
    image: 'https://imgur.com/XJc2So8.png',
    link: 'https://app-toonder.netlify.app/',
  },
  {
    title: 'Stranger Tales',
    description:
      'An interactive storytelling platform where users can create and share their own stories, created with Vue.js and Firebase.',
    image: 'https://imgur.com/y4os3JF.png',
    link: 'https://stranger-tales.netlify.app/',
  },
  {
    title: 'Wordle',
    description:
      'A clone of the popular word-guessing game with additional features and daily challenges, built using React and TypeScript.',
    image: 'https://imgur.com/IQOoqH9.png',
    link: 'https://arya-lunaris.github.io/game-project-wordle/',
  },
  {
    title: 'Daft Punk Soundboard',
    description:
      'I made the Daft Punk soundboard for their iconic hit Harder, Better, Faster, Stronger.',
    image: 'https://imgur.com/IBggIFP.png',
    link: 'https://arya-lunaris.github.io/js-soundboard-start/',
  },
];

export default function Projects() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center ml-40 md:ml-65 px-4 sm:px-8 md:px-12 py-12 sm:py-10 transition-all duration-1000 font-light bg-white text-[#1D1D1F]">
      <h1
        style={{ fontFamily: "'Fira Code', monospace" }}
        className={`text-3xl sm:text-4xl md:text-5xl font-extralight mb-10 md:mb-15 text-center text-[#1D1D1F] transition-all duration-1000 ${
          fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 sm:gap-8 md:gap-12 max-w-7xl w-full">
        {projects.map(({ title, description, image, link }) => (
          <a
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center space-y-4"
          >
            <div
              className={`transition-all duration-1000 ${
                fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } w-full transform hover:scale-105 hover:brightness-110`}
            >
              <img
                src={image}
                alt={`${title} screenshot`}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <h2 className="text-2xl font-light mt-4">{title}</h2>
              <p className="text-sm sm:text-base font-light text-[#6E6E73]">{description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}