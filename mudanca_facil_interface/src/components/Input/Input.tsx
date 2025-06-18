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
};

const Input: React.FC<InputProps> = ({
  id,
  name,
  type = 'text',
  value,
  placeholder = '',
  onChange,
}) => {
  return (
      <input className='custom-input'
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
  );
};

export default Input;
