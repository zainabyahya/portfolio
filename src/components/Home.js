import React from 'react';
import Animated from './Animated';
// import avatar from "../stroke.png"


const Home = () => {
    return (
        <Animated>
            <div className='bg-white h-[70vh] md:h-[90vh] relative flex flex-col items-start md:items-center justify-center border-b-[1px] border-black p-7 dark:bg-black font-bebas'>
                <h1 className='hover:rotate-6 font-bold text-5xl md:text-7xl lg: xl:text-9xl z-10 dark:text-white'>ZAINAB YAHYA</h1>
                <h1 className='hover:rotate-6 text-5xl md:text-7xl xl:text-9xl z-10 dark:text-white'>WEB DEVELOPER</h1>
                {/* <img src={avatar} alt='img' width={1400} className='right-0 md:right-0 lg:right-30 absolute z-0 opacity-60' /> */}
            </div>
        </Animated>

    );
}

export default Home;
