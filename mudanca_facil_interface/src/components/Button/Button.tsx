import React from 'react';
import '../Button/style.css'

type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className='custom-button'
    >
      {children}
    </button>
  );
};

export default Button;
