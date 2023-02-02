import React from 'react'
import { useSelector } from "react-redux";
import NavBar from '../Navbar/NavBar';

const Find = () => {

    const UserName = useSelector((state) => state.UserName);


    const images = [
        'https://tatuing.com/wp-content/uploads/2020/04/montar-estudio-tatuajes.jpg',
        'https://telencargos.com/wp-content/uploads/2020/05/tatuajes.jpg',
        'https://muchosnegociosrentables.com/wp-content/uploads/2015/08/Cómo-abrir-un-negocio-de-tatuajes-y-piercings.jpg',
    ];





    return (
        <>
            <div className='bg-primary-black w-full p-5'>
                <h1 className='font-oswald capitalize text-1xl font-bold text-primary-white'>Bienvenido <span className='text-primary-yellow'>{UserName}!</span> estos son los recomendados de hoy:</h1>
            </div>


            <NavBar />
        </>
    )
}

export default Find