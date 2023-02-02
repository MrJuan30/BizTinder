import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../store/slices/username.slice'

const FormBusiness = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const submit = e => {
    e.preventDefault()
    const company_name = e.target.company_name.value
    const company_description = e.target.company_description.value
    const company_pictures = e.target.company_pictures.value
    dispatch(setUserNameGlobal(company_name))
    navigate('/Find')
  }

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
        <form onSubmit={submit} className='w-[300px] min-h-[347px] border border-solid border-[rgba(183,_122,_55,_0.5)] shadow-[5px_5px_0px_0px_rgba(183,_122,_55,_0.4),10px_10px_0px_0px_rgba(183,_122,_55,_0.3),15px_15px_0px_0px_rgba(183,_122,_55,_0.2),20px_20px_0px_0px_rgba(183,_122,_55,_0.1),25px_25px_0px_0px_rgba(183,_122,_55,_0.05)] flex flex-col justify-center items-center p-4 gap-12'>
          <label className='relative w-[250px]'>
            <input
              type="text"
              id='company_name'
              required="required"
              className='peer w-full p-[10px] border-[1px] border-solid border-primary-coffe bg-[#2a2a2a] rounded outline-none text-white text-base'
            />
            <span className='absolute left-0 p-[10px] pointer-events-none text-base text-gray-400 uppercase transition-[0.5s] peer-focus:text-primary-coffe peer-focus:translate-x-[10px] peer-focus:translate-y-[-10px] peer-focus:text-[0.65em] peer-focus:py-0 peer-focus:px-[10px] peer-focus:bg-[#2a2a2a] peer-focus:border-primary-coffe peer-focus:border-l peer-focus:border-r peer-valid:text-primary-coffe peer-valid:translate-x-[10px] peer-valid:translate-y-[-10px] peer-valid:text-[0.65em] peer-valid:py-0 peer-valid:px-[10px] peer-valid:bg-[#2a2a2a] peer-valid:border-primary-coffe peer-valid:border-l peer-valid:border-r'>Nombre de la empresa</span>
          </label>
          <label className='relative w-[250px]'>
            <textarea
              id='company_description'
              required="required"
              className='peer w-full p-[10px] border-[1px] border-solid border-primary-coffe bg-[#2a2a2a] rounded outline-none text-white text-base'
            />
            <span className='absolute left-0 p-[10px] pointer-events-none text-base text-gray-400 uppercase transition-[0.5s] peer-focus:text-primary-coffe peer-focus:translate-x-[10px] peer-focus:translate-y-[-10px] peer-focus:text-[0.65em] peer-focus:py-0 peer-focus:px-[10px] peer-focus:bg-[#2a2a2a] peer-focus:border-primary-coffe peer-focus:border-l peer-focus:border-r peer-valid:text-primary-coffe peer-valid:translate-x-[10px] peer-valid:translate-y-[-10px] peer-valid:text-[0.65em] peer-valid:py-0 peer-valid:px-[10px] peer-valid:bg-[#2a2a2a] peer-valid:border-primary-coffe peer-valid:border-l peer-valid:border-r'>Descripción de la empresa</span>
          </label>
          <label className='relative w-[250px]'>
            <input type="file" id='company_pictures' required="required"
              className='peer w-full h-20 pt-[40px] p-[10px] border-[1px] border-solid border-primary-coffe bg-[#2a2a2a] rounded outline-none text-white text-base focus:pt-[20px] focus:h-16 valid:pt-[20px] valid:h-16' multiple />
            <span className='absolute left-0 p-[10px] pointer-events-none text-base text-gray-400 uppercase transition-[0.5s] peer-focus:text-primary-coffe peer-focus:translate-x-[10px] peer-focus:translate-y-[-10px] peer-focus:text-[0.65em] peer-focus:py-0 peer-focus:px-[10px] peer-focus:bg-[#2a2a2a] peer-focus:border-primary-coffe peer-focus:border-l peer-focus:border-r peer-valid:text-primary-coffe peer-valid:translate-x-[10px] peer-valid:translate-y-[-10px] peer-valid:text-[0.65em] peer-valid:py-0 peer-valid:px-[10px] peer-valid:bg-[#2a2a2a] peer-valid:border-primary-coffe peer-valid:border-l peer-valid:border-r'>Imagenes de la empresa</span>
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

export default FormBusiness