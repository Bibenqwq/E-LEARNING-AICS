// src/components/Button.jsx
import React from 'react';

const Button = ({ label, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition"
    >
      {label}
    </button>
  );
};

export default Button;
