import React from 'react';
import '../Button/style.css'

type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  onClick,  
}) => {
  return (
    <button
      type={type}
      className='custom-button'
      onClick={onClick} 
    >
      {children}
    </button>
  );
};


export default Button;
