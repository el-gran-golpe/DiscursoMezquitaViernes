import './App.css';
import Navbar from './Components/Navbar';
import Pricing from './Pages/Pricing';
import About from './Pages/About';
import Home from './Pages/Home';
import {Route, Routes} from "react-router-dom";



function App(){
  return (
    <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
