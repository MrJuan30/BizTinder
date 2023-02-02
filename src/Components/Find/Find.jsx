import React, { useState } from 'react'
import { useSelector } from "react-redux";
import NavBar from '../Navbar/NavBar';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { FaStar, FaRegHeart, FaTimes } from "react-icons/fa";
import { RxDotFilled } from 'react-icons/rx';
import { current } from '@reduxjs/toolkit';

const Find = () => {

    const UserName = useSelector((state) => state.UserName);


    const slides = [
        {
            url: 'https://tatuing.com/wp-content/uploads/2020/04/montar-estudio-tatuajes.jpg',
        },
        {
            url: 'https://telencargos.com/wp-content/uploads/2020/05/tatuajes.jpg',
        },
        {
            url: 'https://muchosnegociosrentables.com/wp-content/uploads/2015/08/Cómo-abrir-un-negocio-de-tatuajes-y-piercings.jpg',
        },
    ];


    const [currentIndex, setcurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setcurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setcurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setcurrentIndex(slideIndex);
    };


    return (
        <>
            <div className='bg-primary-black w-full max-h-[5rem] p-5 '>
                <h1 className='font-oswald capitalize text-1xl font-bold text-primary-white'>Bienvenido <span className='text-primary-yellow'>{UserName}!</span> estos son los recomendados de hoy:</h1>
            </div>
            <label for="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
    </div>
            <div className='max-w-[1400px] h-[480px] w-full m-auto py-16 px-4 relative group mt-6'>
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                ></div>
                {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-primary-black/60 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-primary-black/60 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer'
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full flex items-center justify-center'>
                <div className='w-[90%] h-full m-top-5 p-2  flex justify-center items-center gap-10'>
                    <h4 className='bg-primary-white p-2 h-[5rem] w-[5rem] flex justify-center items-center rounded-full text-4xl text-primary-yellow '><FaTimes /></h4>
                    <h4 className='bg-primary-white p-2 h-[5rem] w-[5rem] flex justify-center items-center rounded-full text-3xl text-[#6391ae]'> <FaStar /> </h4>
                    <h4 className='bg-primary-white p-2 h-[5rem] w-[5rem] flex justify-center items-center rounded-full text-4xl  text-[#fd0000]'> <FaRegHeart /> </h4>

                </div>
            </div>


            <NavBar />
        </>
    )
}

export default Find