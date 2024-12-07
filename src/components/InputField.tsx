import React, { ReactNode } from 'react';

interface InputFieldProps {
    id: string;
    type: string;
    placeholder: string;
    value?: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className: string;
    children?: ReactNode
}

const InputField: React.FC<InputFieldProps> = ({ id, type, placeholder, value, onChange, className, children }) => (
    <div className="flex flex-col w-full">
        <label htmlFor={id}>{placeholder}</label>
        <input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} className={className} />
        {children}
    </div>
);

export default InputField;
