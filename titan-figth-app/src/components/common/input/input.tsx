import React from 'react';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        className={`input-field ${error ? 'error' : ''}`}
        {...props}
      />
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
};