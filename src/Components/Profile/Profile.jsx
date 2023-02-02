import React from 'react'
import NavBar from '../Navbar/NavBar'
import { useSelector } from "react-redux";
import { FaStar, FaRegHeart, FaTimes } from "react-icons/fa";

const Profile = () => {



    const UserName = useSelector((state) => state.UserName);


    return (
        <>
            <div className='flex gap-5 items-start p-5'>
                <img src='https://images.pexels.com/photos/8093910/pexels-photo-8093910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" className='w-[10rem] h-[10rem] rounded-full flex justify-start mt-7' />
                <br />
                <br />
                <div className='flex justify-center items-start mt-5 flex-col'>
                    <h1 className='text-primary-white text-2xl font-bold mb-2'>{UserName}</h1>
                    <p className='text-primary-white text-2xl font-sm'>edad: 19 años</p>
                    <p className='text-primary-white text-2xl font-sm'>intereses: tatuajes</p>
                    <p className='text-primary-white text-2xl font-sm'>ciudad: Bogota</p>
                </div>
            </div>



            <div className='w-full h-full mt-2'>
                <hr />
                <div className='w-full h-full'>
                    <div className='w-full h-full p-5 flex justify-center items-center space-x-3'>
                        <h4 className='text-2xl items-center text-primary-coffe flex gap-2'>Tus Favoritos <FaStar /> :</h4>
                    </div>

                </div>
                <hr />

            </div>





            <NavBar />
        </>
    )
}

export default Profile