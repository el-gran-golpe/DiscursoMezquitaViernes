import React from 'react';
import PosterFooter from './CardFooter';
import MovieBody from './CardBody';

export function MovieCard({ movieId }) {
  return (
    <article className={"flex flex-col max-w-xxs w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto relative transform hover:-translate-y-2 transition ease-in-out duration-500"}>
{/* 
    <article 
      style={{ maxWidth: '140px', maxHeight: '210px' }}  // Adjust these values as needed
      className={"flex flex-col w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto relative transform hover:-translate-y-2 transition ease-in-out duration-500"}
    > */}

      {/* This div below ensure a smooth gradient */}
      <div className="overlay absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
      <div className="flex-grow relative">
        <CardContents movieId={movieId} />
      </div>
      <div className="z-30">
        <PosterFooter />
      </div>
    </article>
  );
}

function CardContents({ movieId }) {
  return (
    <div
      className="movie-card flex flex-col justify-center overflow-hidden rounded-xl relative shadow-lg text-white"
      data-movie-id={movieId}
      style={{
        backgroundImage: `url("http://image.tmdb.org/t/p/w342/s1FhMAr91WL8D5DeHOcuBELtiHJ.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <MovieBody />
    </div>
  );
}
