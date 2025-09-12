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
];

export default function Projects() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center pl-40 transition-all duration-1000 font-light bg-white text-gray-800 px-12 py-16 ml-30">
      <h1
        className={`text-5xl font-light mb-12 transition-all duration-1000 ${
          fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl w-full px-8">
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
              <p className="text-base font-light text-gray-600">{description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}