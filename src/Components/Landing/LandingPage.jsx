import React from 'react'
import Work1 from '../../assets/Work1.png'
import { FaGoogle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
    return (
        <>
            <div className='w-full h-[100vh] grid place-items-center items-center p-6'>
                <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
                    <h3 className='text-primary-white text-3xl font-oswald font-medium  relative z-10'>Bienvenido a</h3>
                    <h2 className='text-primary-white text-7xl font-oswald font-bold relative z-10'>
                        <span className='text-primary-yellow'>Bizz</span>Tinder
                    </h2>
                    <h3 className='text-primary-white text-2xl font-oswald font-medium uppercase relative z-10'>Haz crecer tu negocio</h3>
                    <h3 className='text-primary-white underline-offset-4 underline text-2xl font-oswald font-medium uppercase relative z-10'>¡ Facil y Rapido !</h3>
                    <br />
                    <div className='relative z-10 grid place-items-center gap-1 w-full'>
                        <NavLink to={'/'} className='text-primary-gray flex justify-center border-primary-gray  w-full p-3 rounded-xl shadow-primary-gray shadow-xl bg-yellow-dark border-2 hover:bg-primary-white hover:border-primary-yellow capitalize font-bold'>Soy una persona</NavLink>
                        <br />
                        <NavLink to={'/'} className='text-primary-gray border-primary-gray  w-full p-3 rounded-xl shadow-primary-gray shadow-xl bg-primary-yellow border-2 hover:bg-primary-white hover:border-primary-yellow flex justify-center gap-2 items-center capitalize font-bold'>Soy un negocio  </NavLink>
                    </div>

                </div>
                <div className='bg-[url(https://images.squarespace-cdn.com/content/v1/594b737559cc68c3d2290e12/1527751417582-Z860XY8Q8GUHOFHIMSJK/Beauty_Blogger_Gif.gif)] w-full h-[100vh] bg-center absolute bg-cover bg-no-repeat z-0 opacity-40'></div>
            </div>
        </>

    )
}

export default LandingPage