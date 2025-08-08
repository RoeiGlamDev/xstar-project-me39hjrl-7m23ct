import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, required }) => {const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleBlur = () => {
    if (required && !value) {
      setIsValid(false);} else {
      setIsValid(true);
    }
    setIsFocused(false);
  };

  return (
    <div className="mb-6">
      <label className={block text-lg font-semibold text-orange-600 mb-2 ${!isValid ? 'text-red-600' : ''}}>
        {label}
      </label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        className={w-full p-4 border rounded-lg transition duration-300 ease-in-out 
          ${isValid ? 'border-gray-300' : 'border-red-600'} 
          ${isFocused ? 'shadow-lg' : 'shadow-sm'} 
          focus:outline-none focus:ring-2 focus:ring-orange-500}
        initial={{ scale: 1 }}
        animate={{ scale: isFocused ? 1.02 : 1 }}
      />
      {!isValid && <p className="text-red-600 text-sm mt-1">This field is required.</p>}
    </div>
  );
};

export default Input;