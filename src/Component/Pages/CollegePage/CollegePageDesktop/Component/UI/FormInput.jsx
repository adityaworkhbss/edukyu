import React from 'react';

export const FormInput = ({
                              placeholder,
                              value,
                              onChange,
                              type = "text",
                              className = ""
                          }) => {
    return (
        <div
            className={`items-center border flex min-h-[52px] gap-[18px] grow shrink basis-auto px-4 py-[15px] rounded-xl border-solid border-[#6A6A69] ${className}`}
        >
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="text-[#6A6A69] self-stretch my-auto bg-transparent outline-none flex-1 text-lg font-normal"
                aria-label={placeholder}
            />
        </div>
    );
};
