import React from 'react';
import { useNavigate } from "react-router-dom";
import { projects } from "../projects";
import fastfood from "../images/1.png";
import pokemon from "../images/2.png";
import togood from "../images/3.png";
import memory from "../images/4.png";
import Animated from './Animated';


const Projects = ({ stop }) => {
    const navigate = useNavigate();

    const handleNavigate = (url) => {
        window.open(url, '_blank');
    };

    const images = [memory, fastfood, togood, pokemon];
    return (
        <Animated>
            <div className='flex flex-col items-center justify-center w-full p-10 dark:bg-black dark:text-white'>
                <h1 className='text-5xl'>Projects</h1>
                <div className='w-[80vw] p-10 flex flex-wrap justify-center gap-10 dark:bg-black dark:text-white dark:border-white'>
                    {stop
                        ? projects.slice(0, 3).map((project, index) => (
                            <div key={project.id} className={`transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none flex flex-col justify-center items-center w-[25rem] p-10 border-[1px] border-black rounded-3xl shadow-xl dark:border-white`}>
                                <span className='shrink-0 text-3xl text-center p-3 text-black dark:bg-black dark:text-white dark:border-white'>{project.title}</span>
                                <img src={images[project.id]} alt={project.title} className='m-5' />
                                <div className='flex justify-evenly gap-4'>
                                    <sub className='text-2xl p-3 hover:underline dark:bg-black dark:text-white'><a href={project.link} target="_blank" rel="noopener noreferrer">Live</a></sub>
                                    <sub className='text-2xl p-3 hover:underline dark:bg-black dark:text-white'><a href={project.github} target="_blank" rel="noopener noreferrer">Github</a></sub>
                                </div>
                            </div>
                        ))
                        : projects.map((project, index) => (
                            <div key={project.id} className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none flex flex-col justify-center items-center w-[25rem] p-10 border-[1px] border-black rounded-3xl shadow-xl dark:border-white'>
                                <span className='shrink-0 text-3xl text-center p-3 text-black dark:bg-black dark:text-white dark:border-white'>{project.title}</span>
                                <img src={images[project.id]} alt={project.title} className='m-5' />
                                <div className='flex justify-evenly gap-4'>
                                    <sub className='text-2xl p-3 hover:underline dark:bg-black dark:text-white'><a href={project.link} target="_blank" rel="noopener noreferrer">Live</a></sub>
                                    <sub className='text-2xl p-3 hover:underline dark:bg-black dark:text-white'><a href={project.github} target="_blank" rel="noopener noreferrer">Github</a></sub>
                                </div>
                            </div>
                        ))}
                </div>
                {stop && (
                    <sub onClick={() => { navigate("/projects"); window.scrollTo(0, 0); }} className='p-5 mr-[10vw] text-xl self-end cursor-pointer'>
                        see more ..
                    </sub>
                )}
            </div>
        </Animated>
    );
};

export default Projects;
