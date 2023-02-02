import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FormPerson = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [interests, setInterests] = useState("");
    const [city, setCity] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/')
        console.log(`Name: ${name}`);
        console.log(`Age: ${age}`);
        console.log(`Interests: ${interests}`);
        console.log(`City: ${city}`);
    };

  return (
    <>
    <div className='w-full h-full p-2 font-oswald'>
        <form onSubmit={handleSubmit} className='w-full flex flex-col justify-center items-center p-4 gap-5'>
            <div className='relative w-[250px]'>
                <input
                    type="text"
                    id="name"
                    value={name}
                    required="required"
                    onChange={(e) => setName(e.target.value)}
                    className='w-full p-[10px] border-[1px] border-solid border-primary-coffe bg-[#2a2a2a] rounded outline-none text-white text-base peer'
                />      
                <span className='absolute left-0 p-[10px] pointer-events-none text-base text-gray-600 uppercase transition-[0.5s] peer-focus:text-primary-coffe peer-focus:translate-x-[10px] peer-focus:translate-y-[-10px] peer-focus:text-[0.65em] peer-focus:py-0 peer-focus:px-[10px] peer-focus:bg-[#2a2a2a] peer-focus:border-primary-coffe peer-focus:border-l peer-focus:border-r peer-valid:text-primary-coffe peer-valid:translate-x-[10px] peer-valid:translate-y-[-10px] peer-valid:text-[0.65em] peer-valid:py-0 peer-valid:px-[10px] peer-valid:bg-[#2a2a2a] peer-valid:border-primary-coffe peer-valid:border-l peer-valid:border-r'>Nombre</span>
            </div>
            <div className='relative w-[250px]'>
                <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className='w-full p-[10px] border-[1px] border-solid border-primary-coffe bg-[#2a2a2a] rounded outline-none text-white text-base peer'
                />
                <span className='absolute left-0 p-[10px] pointer-events-none text-base text-gray-600 uppercase transition-[0.5s] peer-focus:text-primary-coffe peer-focus:translate-x-[10px] peer-focus:translate-y-[-10px] peer-focus:text-[0.65em] peer-focus:py-0 peer-focus:px-[10px] peer-focus:bg-[#2a2a2a] peer-focus:border-primary-coffe peer-focus:border-l peer-focus:border-r peer-valid:text-primary-coffe peer-valid:translate-x-[10px] peer-valid:translate-y-[-10px] peer-valid:text-[0.65em] peer-valid:py-0 peer-valid:px-[10px] peer-valid:bg-[#2a2a2a] peer-valid:border-primary-coffe peer-valid:border-l peer-valid:border-r'>Edad</span>      
            </div>
            <div className='relative w-[250px]'>
                <input
                    type="text"
                    id="interests"
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    className='w-full p-[10px] border-[1px] border-solid border-primary-coffe bg-[#2a2a2a] rounded outline-none text-white text-base peer'
                />      
                <span className='absolute left-0 p-[10px] pointer-events-none text-base text-gray-600 uppercase transition-[0.5s] peer-focus:text-primary-coffe peer-focus:translate-x-[10px] peer-focus:translate-y-[-10px] peer-focus:text-[0.65em] peer-focus:py-0 peer-focus:px-[10px] peer-focus:bg-[#2a2a2a] peer-focus:border-primary-coffe peer-focus:border-l peer-focus:border-r peer-valid:text-primary-coffe peer-valid:translate-x-[10px] peer-valid:translate-y-[-10px] peer-valid:text-[0.65em] peer-valid:py-0 peer-valid:px-[10px] peer-valid:bg-[#2a2a2a] peer-valid:border-primary-coffe peer-valid:border-l peer-valid:border-r'>Intereses</span>
            </div>
            <div className='relative w-[250px]'>
                <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className='w-full p-[10px] border-[1px] border-solid border-primary-coffe bg-[#2a2a2a] rounded outline-none text-white text-base peer'
                />      
                <span className='absolute left-0 p-[10px] pointer-events-none text-base text-gray-600 uppercase transition-[0.5s] peer-focus:text-primary-coffe peer-focus:translate-x-[10px] peer-focus:translate-y-[-10px] peer-focus:text-[0.65em] peer-focus:py-0 peer-focus:px-[10px] peer-focus:bg-[#2a2a2a] peer-focus:border-primary-coffe peer-focus:border-l peer-focus:border-r peer-valid:text-primary-coffe peer-valid:translate-x-[10px] peer-valid:translate-y-[-10px] peer-valid:text-[0.65em] peer-valid:py-0 peer-valid:px-[10px] peer-valid:bg-[#2a2a2a] peer-valid:border-primary-coffe peer-valid:border-l peer-valid:border-r'>Ciudad</span>
            </div>
            <button type="submit">Submit</button>
        </form>    
    </div>
    
    </>
  )
}

export default FormPerson