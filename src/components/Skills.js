import React from 'react';
import Animated from './Animated';


const Skills = () => {
    const skills = ["JavaScript", "Python", "Java", "React JS", "SQL", "MongoDB", "Flask", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Git"]
    return (
        <Animated>
            <div className='flex flex-col items-center justify-center w-full p-10  dark:bg-black dark:text-white'>
                <h1 className='text-5xl'>Skills</h1>
                <div className='w-[80vw] p-10  flex flex-wrap justify-center gap-10 dark:bg-black dark:text-white  dark:border-white'>
                    {
                        skills.map((skill, index) => (
                            <span key={index} className='w-fit py-3 px-10 shrink-0 shadow-xl text-xl md:text-3xl text-center border-[1px] border-black rounded-3xl text-black dark:bg-black dark:text-white dark:border-white'>{skill}</span>
                        ))
                    }
                </div>
            </div>
        </Animated>
    )
}

export default Skills;