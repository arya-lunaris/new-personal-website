import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LightDarkButton from "./components/LightDarkButton";
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-white');
  }, [theme]);

  return (
    <Router>
      <div className={`flex flex-col min-h-screen w-screen ${theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
        <NavBar theme={theme} />
        <LightDarkButton theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/about" element={<AboutMe theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/projects" element={<Projects theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/contact" element={<Contact theme={theme} toggleTheme={toggleTheme} />} />
          </Routes>
        </main>
        <Footer theme={theme} />
      </div>
    </Router>
  );
}

export default App;