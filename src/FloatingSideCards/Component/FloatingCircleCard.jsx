// FloatingCircleCard.jsx
import React from 'react';

const FloatingCircleCard = ({ icon: Icon, className, size = "50px" }) => {
    return (
        <button
            className={`text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center hover:shadow-xl ${className}`}
            style={{
                width: size,
                height: size
            }}
        >
            {Icon && <Icon size={24} />}
        </button>
    );
};

export default FloatingCircleCard;