import React, { useEffect } from 'react';
import '../ModalPadrao/style.css'

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string
};

export default function Modal({ isOpen, onClose, children, className }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-container" onClick={onClose}>
      <div className={`modal-content ${className || ''}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
