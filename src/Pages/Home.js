import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { MovieCard } from '../Components/MovieCardComponent/MovieCard';
import HomeCSS from './Home.module.css';

function Home() {
  // Assuming movieIds has 28 different IDs
  const movieIds = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <main className="container mx-auto p-4">
      {/* Section title */}
      <div className="flex items-center text-2xl font-bold text-red-600 mb-4">
        <FontAwesomeIcon icon={faFilm} className="mr-2" />
        <span>Ver películas online</span>
      </div>
      
      <div className={HomeCSS.movieGrid}>
        {movieIds.map((id) => (
          <MovieCard key={id} movieId={id.toString()} className={HomeCSS.movieCard} />
        ))}
      </div>
    </main>
  );
}

export default Home;
