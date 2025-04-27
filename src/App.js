import './App.css';
import 'antd/dist/reset.css';

import Navbar from "./navbar/Navbar";
import FloatingSideCards from "./FloatingSideCards/FloatingSideCards";
import Footer from "./Footer/Footer";
import HomeScreen from "./HomeScreen/HomeScreen";

function App() {
    return (
        <div className="App">
            <Navbar />
            <FloatingSideCards />

            <HomeScreen/>

            <Footer />
        </div>
    );
}

export default App;