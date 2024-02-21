import './App.css';
import Navbar from './Components/NavBarComponent/Navbar';
import Peliculas from './Pages/Peliculas';
import Home from './Pages/HomePage/Home';
import {Route, Routes} from "react-router-dom";

export default function App(){
  return (
    <>
    <Navbar />
    <div className="bg-gray-900 text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Peliculas />} />
      </Routes>
      <div className="text-left p-5">
        Film Affinity 2 offers free access to the latest movies and series in full HD, featuring a user-friendly search and genre-based navigation. Content is available in all languages with subtitles. The site, operational from 2022 to 2023 and created with Belarusian involvement, is a powerful search and indexing tool for streaming content without hosting files on its servers.
      </div>
    </div>
    </>
  );
}
