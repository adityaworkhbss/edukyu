// FormInput.js
import React from 'react';

export const FormInputMobile = ({
                              placeholder,
                              value,
                              onChange,
                              type = "text",
                              className = ""
                          }) => {
    return (
        <div
            className={`border border-[#FFD23F] rounded-[12px] overflow-hidden ${className}`}
        >
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full px-4 py-3 text-[#000] font-[Outfit] text-[14px] font-light placeholder-[#CDCDCD] outline-none"
                aria-label={placeholder}
            />
        </div>
    );
};