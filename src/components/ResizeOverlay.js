// // import React, { useEffect, useRef } from 'react';
// // import Particles from '@tsparticles/react';
// // import { loadFull } from 'tsparticles';

// // const ResizeOverlay = () => {
// //     const particlesContainerRef = useRef(null); // Create a ref for the particles container

// //     const particlesInit = () => {
// //         loadFull(particlesContainerRef.current); // Access the container element using the ref
// //     };

// //     useEffect(() => {
// //         // Initialize tsparticles after component mounts
// //         particlesInit();
// //     }, []);




// //     return (
// //         <div className='resize-overlay fixed top-0 left-0 w-full h-full'>
// //             <div id="particles-js" ref={particlesContainerRef}> {/* Use only ID for tsparticles container */}
// //                 <Particles
// //                     id="tsparticles"
// //                     init={particlesInit}
// //                     options={particlesOptions}
// //                 />
// //             </div>
// //         </div>
// //     );
// // };

// // export default ResizeOverlay;


// import React, { useEffect, useRef } from "react";
// import Particles from "@tsparticles/react";
// import { loadFull } from "tsparticles";

// const ResizeOverlay = () => {
//     const particlesContainerRef = useRef(null);

//     const particlesInit = (engine) => {
//         loadFull(engine);
//     };

//     useEffect(() => {
//         particlesInit(particlesContainerRef.current);
//     }, []);

//     const particlesOptions = {
//         fpsLimit: 120,
//         interactivity: {
//             events: {
//                 resize: true,
//             },
//             modes: {
//                 push: {
//                     quantity: 4,
//                 },
//                 repulse: {
//                     distance: 200,
//                     duration: 0.4,
//                 },
//             },
//         },
//         particles: {
//             color: {
//                 value: "#ffffff",
//             },
//             collisions: {
//                 enable: true,
//             },
//             move: {
//                 direction: "none",
//                 enable: true,
//                 outModes: {
//                     default: "bounce",
//                 },
//                 random: false,
//                 speed: 1,
//                 straight: false,
//             },
//             number: {
//                 density: {
//                     enable: true,
//                     area: 800,
//                 },
//                 value: 80,
//             },
//             opacity: {
//                 value: 0.5,
//             },
//             shape: {
//                 type: "circle",
//             },
//             size: {
//                 value: { min: 1, max: 5 },
//             },
//         },
//         detectRetina: true,
//     };


//     return (
//         <div className="resize-overlay fixed top-0 left-0 w-full h-full">
//             <div id="particles-js" ref={particlesContainerRef}>
//                 <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
//             </div>
//         </div>
//     );
// };

// export default ResizeOverlay;

import React from 'react';

const ResizeOverlay = () => {
    return (
        <div className='resize-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 dark:bg-white dark:bg-opacity-70 z-50 flex justify-center items-center'>
            <h1 className='text-white text-xl'>Resizing...</h1>
        </div>
    );
};

export default ResizeOverlay;