import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faTv, faBolt, faShapes } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';

export default function Navbar(){
    return (
        <nav className="sticky top-0 bg-gray-800 text-white py-1.5 z-10">
            <div className="flex justify-between items-center w-full">
                <div className="flex-none px-4">
                    <Link to="/" className="text-3xl font-bold hover:opacity-75 transition-opacity duration-300">
                        FilmAffinity 2
                    </Link>
                </div>
                <div className="flex justify-center items-center flex-grow">
                    <ul className="flex gap-x-4 ml-10">
                        <li>
                            <Link to="/movies" className="flex items-center hover:opacity-75 transition-opacity duration-300">
                                <FontAwesomeIcon icon={faFilm} className="mr-2" />
                                Películas
                            </Link>
                        </li>
                        <li>
                            <Link to="/series" className="flex items-center hover:opacity-75 transition-opacity duration-300">
                                <FontAwesomeIcon icon={faTv} className="mr-2" />
                                Series
                            </Link>
                        </li>
                        <li>
                            <Link to="/new" className="flex items-center hover:opacity-75 transition-opacity duration-300">
                                <FontAwesomeIcon icon={faBolt} className="mr-2" />
                                Novedades
                            </Link>
                        </li>
                        <li>
                            <Link to="/genres" className="flex items-center hover:opacity-75 transition-opacity duration-300">
                                <FontAwesomeIcon icon={faShapes} className="mr-2" />
                                Géneros
                            </Link>
                        </li>
                    </ul>
                    <SearchBar />
                </div>
            </div>
        </nav>
    );
}