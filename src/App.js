import './App.css';
import Navbar from "./navbar/Navbar";
import ScholarshipGrantCard from "./FloatingSideCards/Component/ScholarshipGrantFloatingIcon";
import FloatingSideCards from "./FloatingSideCards/FloatingSideCards";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <FloatingSideCards/>
    </div>
  );
}

export default App;
