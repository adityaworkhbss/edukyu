// FloatingSideCards.jsx
import React from 'react';
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp, FaGraduationCap } from "react-icons/fa";
import FloatingCircleCard from '../FloatingSideCards/Component/FloatingCircleCard';

const FloatingSideCards = () => {
    return (
        <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-4 items-end -mr-4">
            {/* Scholarship Grant Button (Vertical Text) */}
            <div className="relative group">
                <button
                    className="bg-[#005A6B] text-white px-3 py-4 rounded-tr-lg rounded-br-lg  shadow-md flex items-center justify-center"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                    Scholarship Grant
                </button>
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaGraduationCap className="text-[#005A6B] text-xl" />
                </div>
            </div>

            {/* Call Button */}
            <FloatingCircleCard
                icon={IoIosCall}
                className="bg-blue-600 hover:bg-blue-700"
                size="50px"
            />

            {/* WhatsApp Button */}
            <FloatingCircleCard
                icon={FaWhatsapp}
                className="bg-green-600 hover:bg-green-700"
                size="50px"
            />
        </div>
    );
};

export default FloatingSideCards;