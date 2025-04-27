// components/CTAButton/CTAButton.jsx
export default function CTAButton({
                                      children,
                                      bgColor = "bg-[#025E68]",
                                      textColor = "text-[#FFD23F]",
                                      className = ""
                                  }) {
    return (
        <button className={`${bgColor} ${textColor} font-semibold px-6 py-3 rounded text-sm md:text-base ${className}`}>
            {children}
        </button>
    );
}