'use client'
import React, { useState } from 'react'
import { generateApartments, towers } from '@/utils/helpers';
import { HiMiniExclamationTriangle } from 'react-icons/hi2';
import { DataForm } from '@/types/types';
import SuccesfullyRegister from './SuccesfullyRegister';
import toast, { Toaster } from 'react-hot-toast';

export default function RegisterForm() {
    const apartments = generateApartments();
    const [registered, setRegistered] = useState(false)
    const [dataForm, setDataForm] = useState<DataForm>({
        "tower": 1,
        "apto": 101,
        "age": 0,
        "name": undefined,
        "last_name": undefined,
        "cellphone": undefined,
    })
    const validAge = dataForm.age && dataForm.age < 10 || dataForm.age >= 100 || dataForm.age === 0
    const minAge = dataForm.age && dataForm.age < 10 || dataForm.age === 0

    const handleTowerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedTower = parseInt(e.target.value, 10);
        setDataForm((prevState) => ({
            ...prevState,
            tower: selectedTower,
        }));
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        const parsedValue = id === "age" ? parseInt(value) : value

        setDataForm((prevState) => ({
            ...prevState,
            [id]: parsedValue
        }));
    };
    const handleApartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedApartment = parseInt(e.target.value, 10);
        setDataForm((prevState) => ({
            ...prevState,
            apto: selectedApartment,
        }));
    };
    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!dataForm.age || !dataForm.cellphone || !dataForm.last_name || !dataForm.name) {
            return toast.error("Todos los campos son obligatorios.")
        }
        if(dataForm.age < 10 || dataForm.age >= 100) {
            return toast.error("Ingresa una edad válida.")
        }
        try {
            const data = fetch('/api', {
                method: "POST",
                body: JSON.stringify(dataForm),
            })
            data.then(data => data.json())
                .then(data => {
                    console.log(data)
                    if(data.status === 201){
                        setRegistered(true)
                    } else {
                        toast.error("¡Ups! Hubo un error en el registro, intenta nuevamente")
                    }
                })
        } catch (e) {
            console.log(e)
        }
    };

    if(registered) return <SuccesfullyRegister />

    return (
        <form id='register-form' onSubmit={handleRegister} className="space-y-4 my-4 w-full text-xs md:text-sm md:w-1/2 rounded-lg md:border flex flex-col items-center justify-between border-gray-300 p-4">
            <Toaster />
            <h4 className="text-black text-center text-lg md:text-2xl md:font-bold font-semibold">Formulario de inscripción</h4>
            <div className='flex flex-col w-full'>
                <label htmlFor="tower">Seleccionar torre:</label>
                <select
                    id="tower"
                    value={dataForm.tower}
                    onChange={handleTowerChange}
                    className="border cursor-pointer outline-mainGreen p-2 rounded"
                >
                    {towers.map((tower) => (
                        <option key={tower} value={tower}>
                            Torre {tower}
                        </option>
                    ))}
                </select>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor="apto">Seleccionar apartamento:</label>
                <select
                    id="apto"
                    value={dataForm.apto}
                    onChange={handleApartmentChange}
                    className="border outline-mainGreen p-2 rounded"
                >
                    {apartments.map(
                        (apt) =>
                            Math.floor(apt / 100) <= 5 && (
                                <option key={apt} value={apt}>
                                    Apartamento {apt}
                                </option>
                            )
                    )}
                </select>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor="name">Nombre: </label>
                <input  onChange={(e) => handleInputChange(e)} id='name' type="text" placeholder='¿Cuál es tu nombre?' className='border outline-mainGreen p-2 rounded' />
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor="last_name">Apellido: </label>
                <input  id='last_name' onChange={(e) => handleInputChange(e)} type="text" placeholder='¿Cuál es tu apellido?' className='border outline-mainGreen p-2 rounded' />
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor="age">Edad: </label>
                <input  onChange={(e) => handleInputChange(e)} id='age' min={10} max={100} type="number" placeholder='¿Qué edad tienes?' className='border outline-mainGreen p-2 rounded' />
                <span className={`text-amber-500 mt-1 gap-1 items-center ${validAge ? "flex" : "hidden"}`}>
                    <HiMiniExclamationTriangle size={16} />
                    {minAge ? "La edad minima para participar es de 10 años." : "Introduce una edad válida."}
                </span>
            </div>
            {dataForm.age < 18 && dataForm.age >= 10 &&
                <>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="adult_name">Nombre de tu acudiente: </label>
                        <input  id='adult_name' onChange={(e) => handleInputChange(e)} type="text" placeholder='¿Cómo se llama tu acudiente?' className='border outline-mainGreen p-2 rounded' />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="adult_contact">Número de tu acudiente: </label>
                        <input  id='adult_contact' onChange={(e) => handleInputChange(e)} type="number" placeholder='Agrega el número de tu acudiente.' className='border outline-mainGreen p-2 rounded' />
                    </div>
                </>
            }
            <div className='flex flex-col w-full'>
                <label htmlFor="cellphone">Número de contacto: </label>
                <input  onChange={(e) => handleInputChange(e)} id='cellphone' type="number" placeholder='Agrega tu número de contacto.' className='border outline-mainGreen p-2 rounded' />
            </div>
            <button type="submit" className="bg-mainGreen hover:scale-110 transition-all duration-200 hover:bg-black hover:text-mainGreen text-sm text-black font-semibold p-2 rounded-full">
                Inscribirme
            </button>
        </form>
    )
}
