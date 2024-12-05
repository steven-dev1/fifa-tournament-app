import React from 'react'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { LuBadgeCheck } from 'react-icons/lu'

export default function SuccesfullyRegister() {
  return (
    <div className='flex flex-col min-h-[300px] p-4 border border-gray-200 rounded-lg justify-center items-center text-center my-10'>
        <LuBadgeCheck size={50}/>
        <h2 className='text-base md:text-2xl font-bold'>Te has registrado correctamente.</h2>
        <p className='flex items-center flex-col gap-1 md:gap-0 my-1 md:flex-row text-xs md:text-sm'>Si tienes dudas, puedes escribir al WhatsApp: <a target='_blank' href='https://w.app/R1XmFw' className='flex hover:bg-black hover:text-mainGreen transition-all duration-150 mx-1 items-center text-black bg-mainGreen font-medium py-1 px-2 rounded-full'><AiOutlineWhatsApp strokeWidth={3} size={18} className='mr-1'/> 304 3189031</a></p>
    </div>
  )
}
