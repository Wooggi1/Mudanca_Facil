import React from 'react';
import '../Button/style.css';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  onClick,
  loading = false,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className='custom-button'
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading ? <span className="spinner" /> : children}
    </button>
  );
};

export default Button;
