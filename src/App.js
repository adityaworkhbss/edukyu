import './App.css';
import Navbar from "./navbar/Navbar";
import ScholarshipGrantCard from "./FloatingSideCards/Component/ScholarshipGrantFloatingIcon";
import FloatingSideCards from "./FloatingSideCards/FloatingSideCards";
import Footer from "./Footer/Footer";
import InDemandCourseCard from "./HomeScreen/InDemandCourseCard/InDemandCourseCard";

function App() {
  return (
    <div className="App">
      {/*<Navbar/>*/}
      {/*<FloatingSideCards/>*/}
      {/*<Footer/>*/}
    <InDemandCourseCard/>
    </div>
  );
}

export default App;
