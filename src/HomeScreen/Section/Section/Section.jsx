export default function Section({ title, description, children, className = "" }) {
    return (
        <div className={`max-w-7xl mx-auto px-4 md:px-8 lg:px-16 ${className}`}>
            {title && (
                <div className="text-left">
                    <h2 className="text-[32px] font-semibold">{title}</h2>
                    {description && <p className="text-[16px] mt-[8px]">{description}</p>}
                    {!description && (
                        <div className="w-full h-[1px] mt-[12px] mb-[48px] bg-[#003E40]"></div>
                    )}
                </div>
            )}
            <div className="mb-[74px]">
                {children}
            </div>

        </div>
    );
}