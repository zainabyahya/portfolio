import React from 'react';
import Animated from './Animated';

const About = () => {
    return (
        <Animated>
            <div className='py-10 px-[10vw] flex flex-col items-center justify-center lg:h-[80vh] lg:flex-row dark:bg-black dark:text-white'>
                <div className="flex flex-col items-center justify-center">
                    <h1 className='text-5xl p-10 '>About Me</h1>
                    <div className='text-center w-full font-bebas p-10 text-2xl flex flex-wrap justify-center gap-10 dark:bg-black dark:text-white dark:border-white'>
                        <p>I am Zainab Yahya, a dedicated junior full-stack developer known for crafting responsive websites that prioritize simplicity and user-friendliness. I am based in Iraq and Lebanon. With fluency in both English and Arabic, it enables seamless communication and collaboration across diverse projects.</p>
                        <p>Beyond the world of coding, I am an avid reader and photographer, constantly seeking inspiration from various sources. My passion for learning extends beyond technology, driving me to explore new ideas and perspectives that enrich both my personal and professional growth.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className='text-5xl p-10'>Availability</h1>
                    <div className='text-center w-full font-bebas p-10 text-2xl flex flex-wrap justify-center gap-10 dark:bg-black dark:text-white dark:border-white'>
                        <p>I'm actively seeking freelance opportunities to leverage my skills and contribute to exciting projects. Whether you're looking to revamp your website, develop a new web application, or need assistance with any other digital endeavor, I'm here to help bring your vision to life.</p>
                        <p>However, my eagerness to collaborate extends beyond just freelance work. If you have any other requests, inquiries, or questions, please feel free to reach out. I'm always open to exploring new opportunities and discussing how I can assist you in achieving your goals.</p>
                    </div>
                </div>
            </div>
        </Animated>
    );
}

export default About;
