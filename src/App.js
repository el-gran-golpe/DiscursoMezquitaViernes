import './App.css';
import NavBar from './Components/NavBarComponent/NavBar';
import Pricing from './Pages/Pricing';
import About from './Pages/About';
import Home from './Pages/HomePage/Home';
import {Route, Routes} from "react-router-dom";

export default function App(){
  return (
    <>
    <NavBar />
    <div className="bg-gray-900 text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div className="text-left p-5">
        Film Affinity 2 is the premier website to watch movies and series online. Our platform boasts the most recent films and shows in unparalleled full HD quality. To watch comprehensive movies and series for free, you can utilize the search bar at the top or follow links sorted by genre or release year on the right side of the page. Recognizing the diversity of our audience, we provide movies and series dubbed in every language on the planet, as well as subtitles. If you've been searching for the ultimate online movie and series portal, you've discovered it at Film Affinity 2.
      <br />
        Copyright © 2022 - 2023 Film Affinity 2. Some Rights Reserved | Film Affinity 2 does not store any files on its servers. It functions as a comprehensive content search and indexing tool. | Created with Belarus 🇧🇾.
      </div>
    </div>
    </>
  );
}
