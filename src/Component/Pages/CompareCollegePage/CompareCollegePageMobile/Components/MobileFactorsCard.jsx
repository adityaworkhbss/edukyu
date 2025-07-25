const MobileFactorsCard = ({ title, description, icon }) => {
    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-5 mb-4">
            <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#357E86] to-[#2a636b] rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <img src={icon} alt={title} className="w-8 h-8 object-contain" />
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default MobileFactorsCard;