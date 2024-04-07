import React from 'react'

const Contact = () => {
    return (
        <div className='bg-black text-white flex flex-col items-center justify-center w-full p-10 dark:bg-white dark:text-black'>
            <h1 className='text-2xl p-10'>Contact Me</h1>
            <div className='flex  justify-center items-center'>
                <span className='px-5 pb-5 text-xl cursor-pointer hover:underline'><a href='mailto:zainab0yahya@gmail.com' target="_blank" rel="noopener noreferrer">Email</a></span>
                <span className='px-5 pb-5 text-xl cursor-pointer hover:underline'><a href='tel:+964 786 750 9015' target="_blank" rel="noopener noreferrer">Phone</a></span>
                <span className='px-5 pb-5 text-xl cursor-pointer hover:underline'><a href='https://www.linkedin.com/in/zainab-yahya-b0a7b9233/' target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
                <span className='px-5 pb-5 text-xl cursor-pointer hover:underline'><a href='https://github.com/zainabyahya' target="_blank" rel="noopener noreferrer">Github</a></span>
            </div>
        </div>
    )
}

export default Contact;