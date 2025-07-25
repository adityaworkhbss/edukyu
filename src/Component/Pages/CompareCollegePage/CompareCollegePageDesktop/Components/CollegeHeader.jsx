const CollegeHeader = ({ colleges }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center mb-2 rounded-sm border right-0 bg-[#357E86] p-6">
            {colleges.map((college, index) => (
                <div key={index} className="flex flex-col items-center mb-4 md:mb-0 flex-1">
                    <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden mb-3 bg-gray-100">
                        <img
                            src={college.Colleges.img}
                            alt={`${college.Colleges.text} Logo`}
                            className="w-full h-full object-contain p-2"
                        />
                    </div>
                    <h3 className="text-[14px] font-semibold text-center text-white ">{college.Colleges.text}</h3>
                </div>
            ))}
        </div>
    );
};

export default CollegeHeader;