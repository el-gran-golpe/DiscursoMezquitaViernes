import React from 'react';
import { MovieCard } from '../../Components/MovieCardComponent/MovieCard';
import Banner from '../../Components/BannerComponent/Banner';

export default function Home() {
  const movieIds = Array.from({ length: 24 }, (_, i) => i + 1); //Cambiar lenght para la demo

  return (
    <>
      {/* Banner */}
      <Banner/>
      
      {/* Main content */}
      <main className="container mx-auto px-6 py-4"> 

        {/* Section title */}
        <div className="flex items-center text-2xl font-bold text-white-600 mb-4">
          <span>Watch movies online</span>
        </div>

        {/* Responsive Grid Layout with Movie Grid */}
        <div className="grid" style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(11rem, 1fr))', 
          gridAutoRows: '17rem', 
          gridColumnGap: '0.5rem', // Horizontal gap between columns
          gridRowGap: '0.5rem'    // Vertical gap between rows
        }}>
          {movieIds.map((id) => (
            <div
              key={id}
              className="w-full h-full" // Maintain the full width and height for each grid item
            >
              <MovieCard 
                movieId={id.toString()}
                className="relative transform transition-transform ease-in-out duration-300 hover:scale-105 hover:z-10" 
              />
            </div>
          ))}
        </div>

        {/* Upcoming releases in Spain */}
        <div className="flex items-center text-2xl font-bold text-white-600 mb-1 py-4">
          <span>Upcoming releases in Spain</span>
        </div>

        {/* Responsive Grid Layout with Movie Grid */}
        <div className="grid" style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(11rem, 1fr))', 
          gridAutoRows: '17rem', 
          gridColumnGap: '0.5rem', // Horizontal gap between columns
          gridRowGap: '0.5rem'    // Vertical gap between rows
        }}>
          {movieIds.map((id) => (
            <div
              key={id}
              className="w-full h-full" // Maintain the full width and height for each grid item
            >
              <MovieCard 
                movieId={id.toString()}
                className="relative transform transition-transform ease-in-out duration-300 hover:scale-105 hover:z-10" 
              />
            </div>
          ))}
        </div> 

      </main>
    </>
  );
}
