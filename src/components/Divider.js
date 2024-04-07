import React from 'react'

const Divider = ({ array }) => {
    return (
        <div className='p-10 bg-black text-white text-2xl flex items-center justify-evenly dark:bg-white dark:text-black'>
            {array.map((item, index) => (
                <span key={index} className="text-center">{item}</span>
            ))}
        </div >
    )
}

export default Divider