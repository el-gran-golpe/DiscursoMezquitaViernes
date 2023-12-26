import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faTv, faBolt, faShapes } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';

// Menu items as an array
const menuItems = [
  { path: "/movies", icon: faFilm, label: "Películas" },
  { path: "/series", icon: faTv, label: "Series" },
  { path: "/new", icon: faBolt, label: "Novedades" },
  { path: "/genres", icon: faShapes, label: "Géneros" },
];

export default function Navbar(){
    return (
        <nav className="sticky top-0 bg-gray-800 text-white py-1.5 z-10">
            <div className="flex justify-between items-center w-full">

                {/* Film Affinity 2 title */}
                <div className="flex-none pl-6 pr-4">
                    <Link to="/" className="text-3xl font-bold hover:opacity-75 transition-opacity duration-300">
                        FilmAffinity 2
                    </Link>
                </div>

                {/* Rest of titles */}
                <div className="flex justify-center items-center flex-grow">
                    <ul className="flex gap-x-4 ml-10">
                        {menuItems.map(item => (
                          <li key={item.label}>
                            <Link to={item.path} className="flex items-center hover:opacity-75 transition-opacity duration-300">
                                <FontAwesomeIcon icon={item.icon} className="mr-2" />
                                {item.label}
                            </Link>
                          </li>
                        ))}
                    </ul>
                    <div className="flex flex-grow items-center justify-end pl-5 pr-2">
                        <SearchBar />
                    </div>
                </div>
            </div>
        </nav>
    );
}
