// ConsentCheckbox.js
import React from 'react';

export const ConsentCheckboxMobile = ({ checked, onChange }) => {
    return (
        <div className="flex items-start gap-3 mt-6">
            <button
                type="button"
                onClick={() => onChange(!checked)}
                className={`flex w-6 shrink-0 h-6 rounded-[6px] items-center justify-center mt-1 ${
                    checked ? 'bg-[#024B53]' : 'bg-[#D9D9D9]'
                }`}
                aria-label="Consent checkbox"
                role="checkbox"
                aria-checked={checked}
            >
                {checked && (
                    <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </button>
            <label className="text-black font-[Outfit] text-[12px] font-normal leading-normal"
            >
                I authorise Edukyu and its associates to contact me with updates
                & notifications via Email, SMS, WhatsApp, and Voice call as per
                the Privacy Policy. This consent will override any registration
                for DNC / NDNC.
            </label>
        </div>
    );
};