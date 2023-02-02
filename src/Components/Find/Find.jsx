import React, { useState } from 'react'
import { useSelector } from "react-redux";
import NavBar from '../Navbar/NavBar';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { FaStar, FaRegHeart, FaTimes } from "react-icons/fa";
import { RxDotFilled } from 'react-icons/rx';

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


    const [currentIndex, setcurrentIndex] = useState()

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