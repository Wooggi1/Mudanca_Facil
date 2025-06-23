import React from 'react';
import '../Input/style.css'

type InputProps = {
  id: string;
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean
};

const Input: React.FC<InputProps> = ({
  id,
  name,
  type = 'text',
  value,
  placeholder = '',
  onChange,
  required = false,
}) => {
  return (
      <input className='custom-input'
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
  );
};

export default Input;
