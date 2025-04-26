import './App.css';
import 'antd/dist/reset.css';

// Components
import CardSliders from "./HomeScreen/CardSliders/CardSliders"

function App() {
    return (
        <div className="App">
            {/* Layout Container for consistent spacing */}
            {/*<div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">*/}
                {/* Uncomment components as needed */}
                {/* <Navbar /> */}
                {/* <FloatingSideCards /> */}
                {/* <InDemandCourseCard /> */}

                {/* Main Content */}
                {/*<UniversityCard />*/}
                <CardSliders />

                {/* <Footer /> */}
            {/*</div>*/}
        </div>
    );
}

export default App;