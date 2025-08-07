import Image from "next/image";
import { useState } from "react";

const LogoItem = ({ logo, index }) => {
    const [hasError, setHasError] = useState(false);

    return (
        <div className="flex-shrink-0 w-32 h-16 relative bg-gray-200 rounded">
            {!hasError ? (
                <Image
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    fill
                    className="object-contain"
                    onError={() => setHasError(true)}
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">
                    No Logo
                </div>
            )}
        </div>
    );
};

const PartnerLogos = ({ logos }) => {
    return (
        <div className="overflow-x-auto">
            <div className="flex space-x-6 py-4 px-2 min-w-full">
                {logos.map((logo, index) => (
                    <LogoItem key={index} logo={logo} index={index} />
                ))}
            </div>
        </div>
    );
};

export default PartnerLogos;
