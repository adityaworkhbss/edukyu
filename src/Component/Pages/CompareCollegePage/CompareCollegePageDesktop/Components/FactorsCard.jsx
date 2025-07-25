const FactorsCard = ({ title, description, icon }) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 p-6 text-center">
            <div className="bg-indigo-100 rounded-full w-14 h-14 mx-auto flex items-center justify-center mb-4">
                <img src={icon} alt={title} className="bg-cover" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
    );
};

export default FactorsCard;
