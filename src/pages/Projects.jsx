import React, { useEffect, useState } from 'react';
import LightDarkButton from '../components/LightDarkButton';

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

export default function Projects({ theme, toggleTheme }) {
  const [fadeInTitle, setFadeInTitle] = useState(false);
  const [fadeInGrid, setFadeInGrid] = useState(false);

  useEffect(() => {
    setFadeInTitle(true);
    const gridTimer = setTimeout(() => setFadeInGrid(true), 250);
    return () => clearTimeout(gridTimer);
  }, []);

  const bgClass = theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-white text-[#1D1D1F]';

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center ml-35 md:ml-65 px-4 sm:px-8 md:px-12 py-12 sm:py-10 transition-all duration-1000 font-light ${bgClass}`}
    >
      <LightDarkButton theme={theme} toggleTheme={toggleTheme} />
      <h1
        style={{ fontFamily: "'Fira Code', monospace" }}
        className={`text-3xl sm:text-4xl md:text-5xl font-extralight mb-10 md:mb-15 text-center transition-all duration-1000 ${
          fadeInTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        } mt-10 sm:mt-15 md:mt-10`}
      >
        &lt;Projects&gt;
      </h1>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15 sm:gap-10 md:gap-15 
                    w-[80%] sm:w-[85%] md:max-w-7xl
                    transition-all duration-1000 ${
                      fadeInGrid ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
      >
        {projects.map(({ title, description, image, link }) => (
          <a
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="w-full transform hover:scale-105 hover:brightness-110 transition-all duration-500">
              <img
                src={image}
                alt={`${title} screenshot`}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <h2
                className={`text-2xl font-light mt-4 ${
                  theme === 'dark' ? 'text-white' : 'text-[#1D1D1F]'
                }`}
              >
                {title}
              </h2>
              <p
                className={`text-sm sm:text-base font-light ${
                  theme === 'dark' ? 'text-white' : 'text-[#6E6E73]'
                }`}
              >
                {description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}