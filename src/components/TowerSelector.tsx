import React from 'react';

interface TowerSelectorProps {
    value: number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    towers: number[];
    className: string;
}

const TowerSelector: React.FC<TowerSelectorProps> = ({ value, onChange, towers, className }) => (
    <div className="flex flex-col w-full">
        <label htmlFor="tower">Seleccionar torre:</label>
        <select id="tower" value={value} onChange={onChange} className={className}>
            {towers.map((tower) => (
                <option key={tower} value={tower}>
                    Torre {tower}
                </option>
            ))}
        </select>
    </div>
);

export default TowerSelector;
