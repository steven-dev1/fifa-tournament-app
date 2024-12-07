'use client';
import React, { useState } from 'react';
import { generateApartments, towers } from '@/utils/helpers';
import { HiMiniExclamationTriangle } from 'react-icons/hi2';
import toast, { Toaster } from 'react-hot-toast';
import TowerSelector from './TowerSelector';
import ApartmentSelector from './ApartmentSelector';
import InputField from './InputField';
import SuccesfullyRegister from './SuccesfullyRegister';
import { DataForm } from '@/types/types';

export default function RegisterForm() {
    const apartments = generateApartments();
    const [registered, setRegistered] = useState(false);
    const [dataForm, setDataForm] = useState<DataForm>({
        tower: 1,
        apto: 101,
        age: 0,
        name: undefined,
        last_name: undefined,
        cellphone: undefined,
    });

    const validAge = dataForm.age && (dataForm.age < 10 || dataForm.age >= 100 || dataForm.age === 0);
    const minAge = dataForm.age && (dataForm.age < 10 || dataForm.age === 0);
    const inputsClassname = 'border outline-mainGreen p-2 rounded';

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        const parsedValue = id === 'age' ? parseInt(value) : value;
        setDataForm((prevState) => ({
            ...prevState,
            [id]: parsedValue,
        }));
    };

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!dataForm.age || !dataForm.cellphone || !dataForm.last_name || !dataForm.name) {
            return toast.error('Todos los campos son obligatorios.');
        }
        if (dataForm.age < 10 || dataForm.age >= 100) {
            return toast.error('Ingresa una edad válida.');
        }
        try {
            const response = await fetch('/api', {
                method: 'POST',
                body: JSON.stringify(dataForm),
            });
            const result = await response.json();
            if (result.status === 201) {
                setRegistered(true);
            } else {
                toast.error('¡Ups! Hubo un error en el registro, intenta nuevamente.');
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (registered) return <SuccesfullyRegister />;

    return (
        <form onSubmit={handleRegister} className="space-y-4 my-4 w-full text-xs md:text-sm md:w-1/2 rounded-lg md:border flex flex-col items-center justify-between border-gray-300 p-4">
            <Toaster />
            <h4 className="text-black text-center text-lg md:text-2xl md:font-bold font-semibold">Formulario de inscripción</h4>
            <TowerSelector value={dataForm.tower} onChange={handleInputChange} towers={towers} className={inputsClassname} />
            <ApartmentSelector value={dataForm.apto} onChange={handleInputChange} apartments={apartments} className={inputsClassname} />
            <InputField id="name" type="text" placeholder="¿Cuál es tu nombre?" onChange={handleInputChange} className={inputsClassname} />
            <InputField id="last_name" type="text" placeholder="¿Cuál es tu apellido?" onChange={handleInputChange} className={inputsClassname} />
            <InputField id="age" type="number" placeholder="¿Qué edad tienes?" onChange={handleInputChange} className={inputsClassname}>
                {validAge ? (
                    <span className={`text-amber-500 gap-1 w-full items-center ${validAge ? 'flex' : 'hidden'}`}>
                        <HiMiniExclamationTriangle size={16} />
                        {minAge ? 'La edad mínima para participar es de 10 años.' : 'Introduce una edad válida.'}
                    </span>
                ) : ""}
            </InputField>
            {dataForm.age < 18 && dataForm.age >= 10 && (
                <>
                    <InputField id="adult_name" type="text" placeholder="Nombre de tu acudiente" onChange={handleInputChange} className={inputsClassname} />
                    <InputField id="adult_contact" type="number" placeholder="Número de tu acudiente" onChange={handleInputChange} className={inputsClassname} />
                </>
            )}
            <InputField id="cellphone" type="number" placeholder="Número de contacto" onChange={handleInputChange} className={inputsClassname} />
            <button type="submit" className="bg-mainGreen hover:scale-110 transition-all duration-200 hover:bg-black hover:text-mainGreen text-sm text-black font-semibold p-2 rounded-full">
                Inscribirme
            </button>
        </form>
    );
}
