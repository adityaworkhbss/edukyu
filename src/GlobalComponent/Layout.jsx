'use client';
import React from 'react';
import HomePage from "@/Component/Pages/HomePage/HomePage";

const Layout = () => {
    const renderPage = () => {
        // switch (currentPage) {
        //     case 'home': return <HomePage />;
        //     case 'blog': return <BlogPageMain />;
        //     case 'compare-colleges': return <CompareCollegePage />;
        //     case 'college':
        //         if (!selectedCollege) {
        //             return (
        //                 <div className="w-full p-8 text-center">
        //                     <h2 className="text-2xl font-semibold text-red-600 mb-4">
        //                         No College Selected
        //                     </h2>
        //                     <p className="text-gray-600 mb-4">
        //                         Please select a college to view its details.
        //                     </p>
        //                     <button
        //                         onClick={() => setCurrentPage('home')}
        //                         className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        //                     >
        //                         Return to Home
        //                     </button>
        //                 </div>
        //             );
        //         }
        //         return <CollegePage collegeName={selectedCollege} />;
        //     case 'course':
        //         if (!selectedCourse) {
        //
        //             console.log("selectedCourse", selectedCourse);
        //
        //             return (
        //                 <div className="w-full p-8 text-center">
        //                     <h2 className="text-2xl font-semibold text-red-600 mb-4">
        //                         No Course Selected
        //                     </h2>
        //                     <p className="text-gray-600 mb-4">
        //                         Please select a Course to view its details.
        //                     </p>
        //                     <button
        //                         onClick={() => setCurrentPage('home')}
        //                         className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        //                     >
        //                         Return to Home
        //                     </button>
        //                 </div>
        //             );
        //         }
        //         return <CoursePage collegeName={selectedCourse} />;
        //     default:
        //         return <HomePage />;
        // }
        return <HomePage/>
    };

    // const config = gridConfigs[breakpoint] || gridConfigs.default;

    return (
        <div className="w-full font-[Outfit]">
            {/* <TopNav /> */}
            <div className="relative">
                {renderPage()}
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;