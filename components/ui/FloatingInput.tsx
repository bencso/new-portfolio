"use client";

import { useState } from "react";

interface FloatingInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  required?: boolean;
}

export function FloatingInput({
  label,
  type = "text",
  value,
  onChange,
  className = "",
  required = false,
}: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const isLabelFloated = isFocused || value.length > 0;

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const validateEmail = (email: string) => {
    if (type === "email" && email.length > 0) {
      return emailRegex.test(email);
    }
    return true;
  };

  const handleChange = (newValue: string) => {
    onChange(newValue);
    if (type === "email") {
      setIsValid(validateEmail(newValue));
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (type === "email" && value.length > 0) {
      setIsValid(validateEmail(value));
    }
  };

  return (
    <div className={`relative ${className} w-full`}>
      <input
        type={type}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        required={required}
        className={`w-full text-lg border-b outline-none pb-2 text-[#B7B7B7] bg-transparent peer transition-colors duration-300 ${
          type === "email" && !isValid && value.length > 0
            ? "border-red-500 text-red-400"
            : "border-[#B7B7B7] focus:border-white"
        }`}
      />
      <label
        className={`absolute left-0 uppercase font-medium transition-all w-full duration-300 ease-out pointer-events-none ${
          isLabelFloated ? "top-[-19px] text-md" : "top-[2px] text-md"
        } ${
          type === "email" && !isValid && value.length > 0
        ? "text-red-400"
        : "text-[#B7B7B7]"
        }`}
      >
        {label} {required && "*"}
      </label>
      {type === "email" && !isValid && value.length > 0 && (
        <p className="text-red-400 text-sm mt-1">Kérem adjon meg egy érvényes email címet</p>
      )}
    </div>
  );
}
