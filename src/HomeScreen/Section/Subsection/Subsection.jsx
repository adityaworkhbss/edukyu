// components/Subsection/Subsection.jsx
export default function Subsection({ title, children }) {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="text-left">
                <div className="text-[20px] mb-[24px] font-semibold ml-[6px]">{title}</div>
            </div>
            <div className="mb-[74px]">
                {children}
            </div>

        </div>
    );
}