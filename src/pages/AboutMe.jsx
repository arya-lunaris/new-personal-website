import React, { useEffect, useState } from 'react';

const AboutMe = () => {
  const [loaded, setLoaded] = useState(false);

  const languages = [
    { name: 'JavaScript', img: 'https://imgur.com/oPy4OtF.png' },
    { name: 'HTML', img: 'https://imgur.com/tuwJT6J.png' },
    { name: 'CSS', img: 'https://imgur.com/mTf9551.png' },
    { name: 'React', img: 'https://imgur.com/TyppCpz.png' },
    { name: 'Node.js', img: 'https://imgur.com/WwwosDJ.png' },
    { name: 'Express', img: 'https://imgur.com/0a8UYNH.png' },
    { name: 'Python', img: 'https://imgur.com/NTFcpSv.png' },
    { name: 'Django', img: 'https://imgur.com/GS8n25V.png' },
    { name: 'MongoDB', img: 'https://imgur.com/dsBsHeC.png' },
    { name: 'PostgreSQL', img: 'https://imgur.com/oyqrAEC.png' },
    { name: 'Git', img: 'https://imgur.com/97m20hj.png' },
    { name: 'VS Code', img: 'https://imgur.com/c6YYrff.png' }
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`ml-30 min-h-screen flex flex-col justify-center items-center pl-40 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} font-light bg-white text-gray-800 px-12 py-16`}>
      <h1 className="text-5xl font-extralight, white mb-8 text-center text-[#1D1D1F]">About Me</h1>
      <p className="max-w-3xl text-lg mb-12 text-center leading-relaxed text-[#1D1D1F]">
        Coming from backgrounds in healthcare and fashion, I developed a strong sense of empathy, an eye for design, and a natural problem-solving mindset. But I’ve always had a deep affinity for the internet, technology, and gaming — you could say I’m a bit of a nerd at heart. I decided to finally pursue that passion and made a bold career pivot, graduating from General Assembly’s Software Engineering bootcamp in 2025. There, I gained hands-on experience with modern web development tools and practices. I’m especially drawn to front-end development, where I can combine my creative instincts with technical skills to build clean, user-friendly experiences. I’m excited to explore the vast opportunities in tech, and one day, I hope to find a place in the gaming industry.
      </p>

      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-light mb-4">Languages & Tools</h2>
        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {languages.map((lang) => (
            <li key={lang.name} className={`flex flex-col items-center bg-gray-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <img src={lang.img} alt={lang.name} className="h-12 w-12 mb-2" />
              <span className="text-gray-700 text-sm">{lang.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;