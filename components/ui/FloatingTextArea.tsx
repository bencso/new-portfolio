"use client";

import { useState } from "react";

interface FloatinTextAreaProp {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function FloatingTextarea({
  label,
  value,
  onChange,
  className = "",
}: FloatinTextAreaProp) {
  const [isFocused, setIsFocused] = useState(false);

  const isLabelFloated = isFocused || value.length > 0;

  return (
    <div className={`relative w-full ${className}`}>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full min-h-10 max-h-20 resize-none text-lg border-b outline-none pt-2 pb-0 border-[#B7B7B7] text-[#B7B7B7] bg-transparent peer overflow-hidden"
        maxLength={255}
        required
        style={{
          height: "20px"
        }}
        onInput={(e) => {
          const target = e.target as HTMLTextAreaElement;
          target.style.height = "auto";
          target.style.height = target.scrollHeight + "px";
          if (target.value.length === 0) {
            target.style.height = "20px";
          }
        }}
      />
      <label
        className={`absolute left-0 uppercase font-medium text-[#B7B7B7] transition-all duration-300 ease-out pointer-events-none ${
          isLabelFloated ? "top-[-19px] text-sm" : "top-[2px] text-md"
        }`}
      >
        {label} *
      </label>
    </div>
  );
}
