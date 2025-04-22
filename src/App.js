import './App.css';
import Navbar from "./navbar/Navbar";
import ScholarshipGrantCard from "./FloatingSideCards/Component/ScholarshipGrantFloatingIcon";
import FloatingSideCards from "./FloatingSideCards/FloatingSideCards";
import Footer from "./Footer/Footer";
import InDemandCourseCard from "./HomeScreen/InDemandCourseCard/InDemandCourseCard";
import CardSliders from "./HomeScreen/CardSliders/CardSliders";
import 'antd/dist/reset.css';
function App() {
    return (
        <div className="App">
            {/* Layout Container for consistent spacing */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                {/* Uncomment as needed */}
                {/* <Navbar /> */}
                {/* <FloatingSideCards /> */}

                {/* Content */}
                {/* <InDemandCourseCard /> */}
                <CardSliders />

                {/* <Footer /> */}
            </div>
        </div>
    );
}


export default App;
