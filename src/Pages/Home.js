import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faTicket } from '@fortawesome/free-solid-svg-icons';
import { MovieCard } from '../Components/MovieCardComponent/MovieCard';
import comingSoonImage from '../Images/banner-placeholder.png';





export default function Home() {
  const movieIds = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <main className="container mx-auto px-6 py-4"> {/*Here you can adjust the overall left margin!*/} 

       {/* Hero Image */}
      <div className="mb-6">
        <img src={comingSoonImage} alt="Coming Soon Banner" className="w-full h-96 object-cover rounded" />
      </div>

      {/* Section title */}
      <div className="flex items-center text-2xl font-bold text-red-600 mb-4">
        <FontAwesomeIcon icon={faFilm} className="mr-2" />
        <span>Ver películas online</span>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-4">
        {/* Movie Grid */}
        <div className="col-span-7">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
            {movieIds.map((id) => (
              <MovieCard key={id} movieId={id.toString()} className="relative transform transition-transform ease-in-out duration-300 hover:scale-105 hover:z-10" />))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-2 p-4 bg-gray-800 rounded">
        {/* Title for the section */}
          <div className="flex items-center text-xl font-bold mb-4 text-white">
            <FontAwesomeIcon icon={['fa-solid', 'fa-ticket']} className="mr-2 text-red-400" />
            <span>Películas más vistas</span>
          </div>
          {/* List of Most Viewed Movies */}
          <ul className="space-y-2">
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faTicket} className="mr-2 text-gray-400" />
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  Movie 1
                </a>
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faTicket} className="mr-2 text-gray-400" />
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  Movie 2
                </a>
            </li>
            <li className="flex items-center mb-2"> 
                <FontAwesomeIcon icon={faTicket} className="mr-2 text-gray-400" />
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  Movie 3
                </a>
            </li>
            {/* ... add more movies as needed */}
          </ul>
          {/* Any other sidebar components can be added here */}
        </div>
      </div>
    </main>
  );
}
