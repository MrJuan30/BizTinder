import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setUserNameGlobal } from "../../store/slices/username.slice";

const FormPerson = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const submit = e => {
        e.preventDefault()
        const name = e.target.name.value
        const age = e.target.age.value
        const interests = e.target.age.value
        const city = e.target.age.value
        dispatch(setUserNameGlobal(name))
        navigate('/Find')
    }

    return (
        <>
        <div className='w-full h-screen flex justify-center items-center'>
            <form onSubmit={submit} className='w-[300px] h-auto border border-solid border-[rgba(183,_122,_55,_0.5)] shadow-[5px_5px_0px_0px_rgba(183,_122,_55,_0.4),10px_10px_0px_0px_rgba(183,_122,_55,_0.3),15px_15px_0px_0px_rgba(183,_122,_55,_0.2),20px_20px_0px_0px_rgba(183,_122,_55,_0.1),25px_25px_0px_0px_rgba(183,_122,_55,_0.05)] flex flex-col justify-center items-center p-4 gap-5'>
                <label className='relative w-[250px]'>
                    <input
                        type="text"
                        id="name"
                        required="required"
                        className='peer/name w-full p-[10px] border-[1px] border-solid border-primary-coffe bg-[#2a2a2a] rounded outline-none text-white text-base'
                    />
                    <span className='absolute left-0 p-[10px] pointer-events-none text-base text-gray-400 uppercase transition-[0.5s] peer-focus/name:text-primary-coffe peer-focus/name:translate-x-[10px] peer-focus/name:translate-y-[-10px] peer-focus/name:text-[0.65em] peer-focus/name:py-0 peer-focus/name:px-[10px] peer-focus/name:bg-[#2a2a2a] peer-focus/name:border-primary-coffe peer-focus/name:border-l peer-focus/name:border-r peer-valid/name:text-primary-coffe peer-valid/name:translate-x-[10px] peer-valid/name:translate-y-[-10px] peer-valid/name:text-[0.65em] peer-valid/name:py-0 peer-valid/name:px-[10px] peer-valid/name:bg-[#2a2a2a] peer-valid/name:border-primary-coffe peer-valid/name:border-l peer-valid/name:border-r'>Nombre</span>
                </label>
                <label className='relative w-[250px]'>
                    <input
                        type="number"
                        id="age"
                        required="required"
                        className='peer/age w-full p-[10px] border-[1px] border-solid border-primary-coffe bg-[#2a2a2a] rounded outline-none text-white text-base'
                    />
                    <span className='absolute left-0 p-[10px] pointer-events-none text-base text-gray-400 uppercase transition-[0.5s] peer-focus/age:text-primary-coffe peer-focus/age:translate-x-[10px] peer-focus/age:translate-y-[-10px] peer-focus/age:text-[0.65em] peer-focus/age:py-0 peer-focus/age:px-[10px] peer-focus/age:bg-[#2a2a2a] peer-focus/age:border-primary-coffe peer-focus/age:border-l peer-focus/age:border-r peer-valid/age:text-primary-coffe peer-valid/age:translate-x-[10px] peer-valid/age:translate-y-[-10px] peer-valid/age:text-[0.65em] peer-valid/age:py-0 peer-valid/age:px-[10px] peer-valid/age:bg-[#2a2a2a] peer-valid/age:border-primary-coffe peer-valid/age:border-l peer-valid/age:border-r'>Edad</span>
                </label>
                <label className='relative w-[250px]'>
                    <input
                        type="text"
                        id="interests"
                        required="required"
                        className='peer/interests w-full p-[10px] border-[1px] border-solid border-primary-coffe bg-[#2a2a2a] rounded outline-none text-white text-base'
                    />
                    <span className='absolute left-0 p-[10px] pointer-events-none text-base text-gray-400 uppercase transition-[0.5s] peer-focus/interests:text-primary-coffe peer-focus/interests:translate-x-[10px] peer-focus/interests:translate-y-[-10px] peer-focus/interests:text-[0.65em] peer-focus/interests:py-0 peer-focus/interests:px-[10px] peer-focus/interests:bg-[#2a2a2a] peer-focus/interests:border-primary-coffe peer-focus/interests:border-l peer-focus/interests:border-r peer-valid/interests:text-primary-coffe peer-valid/interests:translate-x-[10px] peer-valid/interests:translate-y-[-10px] peer-valid/interests:text-[0.65em] peer-valid/interests:py-0 peer-valid/interests:px-[10px] peer-valid/interests:bg-[#2a2a2a] peer-valid/interests:border-primary-coffe peer-valid/interests:border-l peer-valid/interests:border-r'>Intereses</span>
                </label>
                <label className='relative w-[250px]'>
                    <input
                        type="text"
                        id="city"
                        required="required"
                        className='peer/city w-full p-[10px] border-[1px] border-solid border-primary-coffe bg-[#2a2a2a] rounded outline-none text-white text-base'
                    />
                    <span className='absolute left-0 p-[10px] pointer-events-none text-base text-gray-400 uppercase transition-[0.5s] peer-focus/city:text-primary-coffe peer-focus/city:translate-x-[10px] peer-focus/city:translate-y-[-10px] peer-focus/city:text-[0.65em] peer-focus/city:py-0 peer-focus/city:px-[10px] peer-focus/city:bg-[#2a2a2a] peer-focus/city:border-primary-coffe peer-focus/city:border-l peer-focus/city:border-r peer-valid/city:text-primary-coffe peer-valid/city:translate-x-[10px] peer-valid/city:translate-y-[-10px] peer-valid/city:text-[0.65em] peer-valid/city:py-0 peer-valid/city:px-[10px] peer-valid/city:bg-[#2a2a2a] peer-valid/city:border-primary-coffe peer-valid/city:border-l peer-valid/city:border-r'>Ciudad</span>
                </label>
                <button className="relative inline-block text-lg group">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-400 transition-colors duration-300 ease-out border-2 border-primary-coffe rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#2a2a2a]"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary-coffe group-hover:-rotate-180 ease"></span>
                        <span className="relative uppercase">Enviar</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-primary-coffe rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </button>
            </form>
        </div>
        </>
    )
}

export default FormPerson