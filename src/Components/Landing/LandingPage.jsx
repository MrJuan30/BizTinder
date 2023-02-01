import React from 'react'
import Work1 from '../../assets/Work1.png'

const LandingPage = () => {
    return (
        <>
            <div className='w-full h-full grid place-items-center align-middle pt-[50%] p-5 gap-10'>
                <h1 className='text-primary-white text-6xl font-oswald font-bold relative z-10'>BizzTinder</h1>
                <h2 className='text-primary-white text-2xl font-oswald font-medium capitalize  relative z-10'>La app que impulsa a tu negocio</h2>
                <div className='bg-primary-white opacity-59 w-full h-full p-2 relative z-10'>
                    <img src={Work1} alt="Bussines Image" className='w-full h-full  relative z-10' />
                </div>
                <div className=''></div>
                <div className='bg-[url(https://www.art-consciousness.com/image0420/62/6223a0a74a6cf0b7168d7c300e387ffa.gif)] w-full h-[105vh] bg-center absolute bg-cover z-0 opacity-30'></div>
            </div>
        </>

    )
}

export default LandingPage