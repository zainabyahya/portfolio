import React from 'react';

const ResizeOverlay = () => {
    return (
        <div className='resize-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 dark:bg-white dark:bg-opacity-70 z-50 flex justify-center items-center'>
            <h1 className='text-white text-xl'>Resizing...</h1>
        </div>
    );
};

export default ResizeOverlay;
