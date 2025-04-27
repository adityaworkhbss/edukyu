export default function ColoredSection({
                                           title,
                                           description,
                                           children,
                                           bgColor = "bg-gradient-to-b from-[#00292E] to-[#004449]",
                                           textColor = "text-white",
                                           titleColor = "text-[#FFD23F]"
                                       }) {
    return (
        <div className={`relative ${bgColor} py-16 overflow-hidden`}>
            {/* Top Curve */}
            <div className="absolute top-0 left-0 right-0 overflow-hidden leading-[0] rotate-180">
                <svg className="relative block w-[calc(150%+1.3px)] h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39 56.24C221.07 68.44 111.6 104.15 0 120V0h1200v120c-111.6-15.85-221.07-51.56-321.39-63.76C776.49 41.6 600 17.5 400 41.6 288.16 54.23 211.82 68.89 121.57 81.68 50.36 91.6 0 84.53 0 84.53V0h1200v120H0V84.53z" fill="#ffffff"></path>
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative z-10">
                <div className="text-left max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                    {title && <h2 className={`${titleColor} text-[32px] font-semibold mb-4`}>{title}</h2>}
                    {description && <p className={`${textColor} text-[16px] leading-7`}>{description}</p>}
                </div>
                {children}
            </div>

            {/* Bottom Curve */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
                <svg className="relative block w-[calc(150%+1.3px)] h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39 56.24C221.07 68.44 111.6 104.15 0 120V0h1200v120c-111.6-15.85-221.07-51.56-321.39-63.76C776.49 41.6 600 17.5 400 41.6 288.16 54.23 211.82 68.89 121.57 81.68 50.36 91.6 0 84.53 0 84.53V0h1200v120H0V84.53z" fill="#ffffff"></path>
                </svg>
            </div>
        </div>
    );
}