import React, { useEffect, useRef } from 'react';

const Animated = ({ children }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (element) {
            element.classList.add('animate-slide-in-left'); 
        }
    }, []);

    return <div ref={elementRef}>{children}</div>;
};

export default Animated;
