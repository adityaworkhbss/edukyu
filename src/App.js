import './App.css';
import CardSliders from "./HomeScreen/CardSliders/CardSliders";
import 'antd/dist/reset.css';
import NumberOfTrust from "./HomeScreen/NumberOfTrust/NumberOfTrust";
import UniversityCard from "./HomeScreen/Cards/UniversityCard/UniversityCard";

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
                <UniversityCard />

                {/* <Footer /> */}
            </div>
        </div>
    );
}


export default App;
