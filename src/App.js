import './App.css';
import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from "./pages/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound";
import ResizeOverlay from './components/ResizeOverlay';

const App = () => {
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsResizing(true);

      clearTimeout(window.resizeTimer);
      window.resizeTimer = setTimeout(() => {
        setIsResizing(false);
      }, 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isResizing && <ResizeOverlay />}
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Contact />

      </div>
    </div>
  );
};

export default App;

