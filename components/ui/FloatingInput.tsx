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

  const isLabelFloated = isFocused || value.length > 0;

  return (
    <div className={`relative ${className} w-full`}>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        className="w-full text-lg border-b outline-none pb-2 border-[#B7B7B7] text-[#B7B7B7] bg-transparent peer"
      />
      <label
        className={`absolute left-0 uppercase font-medium text-[#B7B7B7] transition-all duration-300 ease-out pointer-events-none ${
          isLabelFloated ? "top-[-19px] text-md" : "top-[2px] text-md"
        }`}
      >
        {label} {required && "*"}
      </label>
    </div>
  );
}
