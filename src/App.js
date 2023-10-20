import './App.css';
import Navbar from './Components/NavBarComponent/Navbar';
import Pricing from './Pages/Pricing';
import About from './Pages/About';
import Home from './Pages/Home';
import {Route, Routes} from "react-router-dom";



export default function App(){
  return (
    <>
    <Navbar />
    <div className="bg-gray-900 text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </>
  );
}
