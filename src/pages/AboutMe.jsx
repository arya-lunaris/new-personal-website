import React, { useEffect, useState } from 'react';
import LightDarkButton from '../components/LightDarkButton';

const AboutMe = ({ theme, toggleTheme }) => {
  const [loaded, setLoaded] = useState(false);

  const languages = [
    { name: 'JavaScript', img: '/images/javascript.png' },
    { name: 'HTML', img: '/images/html.png' },
    { name: 'CSS', img: '/images/css.png' },
    { name: 'React', img: '/images/react.png' },
    { name: 'Node.js', img: '/images/node-js.png' },
    { name: 'Express', img: '/images/express.png' },
    { name: 'Python', img: '/images/python.png' },
    { name: 'Django', img: '/images/django.png' },
    { name: 'MongoDB', img: '/images/mongo-db.png' },
    { name: 'PostgreSQL', img: '/images/postgresql.png' },
    { name: 'Git', img: '/images/git.png' },
    { name: 'VS Code', img: '/images/vs-code.png' }
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`ml-35 sm:ml-40 md:ml-65 min-h-screen flex flex-col justify-center items-center 
                    font-light px-4 sm:px-8 md:px-12 py-12 sm:py-10 transition-all duration-750
                    ${theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-white text-[#1D1D1F]'}`}>
      <LightDarkButton theme={theme} toggleTheme={toggleTheme} />

      <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extralight mb-6 sm:mb-8 text-center transition-all duration-750 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mt-0 sm:mt-15 md:mt-10`}
        style={{ fontFamily: 'Fira Code, monospace' }}>
        &lt;About Me&gt;
      </h1>

      <p className={`max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg mb-8 sm:mb-12 text-center leading-relaxed transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        Coming from backgrounds in healthcare and fashion, I developed a strong sense of empathy, an eye for design, and a natural problem-solving mindset. But I’ve always had a deep affinity for the internet, technology, and gaming — you could say I’m a bit of a nerd at heart. I decided to finally pursue that passion and made a bold career pivot, graduating from General Assembly’s Software Engineering bootcamp in 2025. There, I gained hands-on experience with modern web development tools and practices. I’m especially drawn to front-end development, where I can combine my creative instincts with technical skills to build clean, user-friendly experiences. I’m excited to explore the vast opportunities in tech, and one day, I hope to find a place in the gaming industry.
      </p>

      <div className={`w-full max-w-full sm:max-w-3xl md:max-w-4xl transition-all duration-1250 ${loaded ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-10'}`}>
        <h2 className={`text-sm sm:text-base md:text-[18px] font-light mb-3 sm:mb-4 mt-10`} style={{ fontFamily: 'Fira Code, monospace' }}>
          Languages & Tools
        </h2>
        <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 sm:gap-3 md:gap-4 justify-items-center">
          {languages.map((lang) => (
            <li
              key={lang.name}
              className={`flex flex-col items-center rounded-lg p-2 sm:p-3 md:p-3 shadow-sm hover:shadow-md transition-shadow duration-500
        ${theme === 'dark'
                  ? 'bg-[#252525] text-white'
                  : 'bg-[#F5F5F7] text-gray-700'} 
        ${loaded ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'}
        w-[100%] sm:w-full`}
            >
              <img
                src={lang.img}
                alt={lang.name}
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mb-1 sm:mb-2"
              />
              <span className="text-xs sm:text-sm md:text-sm" style={{ fontFamily: 'Fira Code, monospace' }}>
                {lang.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;