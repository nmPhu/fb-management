// src/components/ButtonSelect.js
import React from 'react';
import './ButtonSelect.css';

const ButtonSelect = ({ options, onSelect }) => {
  return (
    <div className="button-select">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onSelect(option.value)}
          className="button-option"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonSelect;
