import React from 'react'
import Home from "../components/Home";
import Divider from '../components/Divider';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

const HomePage = () => {
    return (
        <div>
            <Home />
            <Divider array={["Full-Stack Developer", "Responsive Websites"]} />
            <Skills />
            <Divider array={["Crafting digital experiences one line of code at a time"]} />
            <Projects stop={true} />
            <Divider array={["A Peek Behind the Screen"]} />
            <About />
        </div>
    )
}

export default HomePage;;