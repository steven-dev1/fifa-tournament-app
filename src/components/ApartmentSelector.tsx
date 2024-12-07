import React from 'react';

interface ApartmentSelectorProps {
    value: number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    apartments: number[];
    className: string;
}

const ApartmentSelector: React.FC<ApartmentSelectorProps> = ({ value, onChange, apartments, className }) => (
    <div className="flex flex-col w-full">
        <label htmlFor="apto">Seleccionar apartamento:</label>
        <select id="apto" value={value} onChange={onChange} className={className}>
            {apartments.map((apt) => (
                <option key={apt} value={apt}>
                    Apto {apt}
                </option>
            ))}
        </select>
    </div>
);

export default ApartmentSelector;
