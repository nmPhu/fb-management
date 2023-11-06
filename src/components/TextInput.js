// src/components/TextInput.js
import React from 'react';
import './TextInput.css';

const TextInput = ({ label, value, onChange }) => {
  return (
    <div className="text-input">
      <label>{label}</label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default TextInput;
