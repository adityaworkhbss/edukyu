const MobileCollegeHeader = ({ colleges }) => {
    return (
        <div className="flex flex-col space-y-4 mb-6">
            {colleges.map((college, index) => (
                <div key={index} className="bg-gradient-to-r from-[#357E86] to-[#2a636b] rounded-xl p-4 shadow-lg">
                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full border-3 border-white shadow-md overflow-hidden bg-white flex-shrink-0">
                            <img
                                src={college.Colleges.img}
                                alt={`${college.Colleges.text} Logo`}
                                className="w-full h-full object-contain p-1"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-white leading-tight">
                                {college.Colleges.text}
                            </h3>
                            <div className="flex items-center mt-1">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                                <span className="text-green-100 text-sm">Verified</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MobileCollegeHeader;