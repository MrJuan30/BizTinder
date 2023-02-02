import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaComment, FaUserAlt, FaSistrix, FaHeart } from "react-icons/fa";
const NavBar = () => {
    return (
        <>
            <div className='bg-primary-black flex items-center justify-between w-full h-20 gap-x-11 fixed bottom-0 p-5 z-50'>
                <NavLink to={'/Find'} className='bg-primary-red  py-2 cursor-pointer text-primary-yellow text-4xl hover:text-primary-white active:text-primary-white'>
                    <FaSistrix />
                </NavLink>
                <NavLink className='text-primary-yellow pr-4 text-3xl align-baseline hover:text-primary-white active:text-primary-white' to={'/'}>
                    <FaComment />
                </NavLink>
                <NavLink className='text-primary-yellow pr-4 text-3xl align-baseline hover:text-primary-white active:text-primary-white' to={'/'}>
                    <FaHeart />
                </NavLink>
                <NavLink to={'/Profile'} className='bg-primary-red py-2 cursor-pointer text-primary-yellow text-3xl hover:text-primary-white active:text-primary-white'>
                    <FaUserAlt />
                </NavLink>
            </div>
        </>
    )
}

export default NavBar