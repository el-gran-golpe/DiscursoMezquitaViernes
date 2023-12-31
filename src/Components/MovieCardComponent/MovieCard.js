import ShadowMovieCard from "./ShadowMovieCard";

export function MovieCard({ movieId, movieYear = 2023 }) {
  return (
    <article className="group flex flex-col shadow-md rounded-lg overflow-hidden mx-auto relative transform hover:-translate-y-2 transition ease-in-out duration-500 w-full h-full">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url("http://image.tmdb.org/t/p/w342/s1FhMAr91WL8D5DeHOcuBELtiHJ.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 z-20 transition duration-500"></div>

      {/* Chip */}
      <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white rounded-full px-3 py-1 z-40 opacity-100 group-hover:opacity-0 transition duration-500">
        {movieYear}
      </div>

      {/* ShadowMovieCard */}
      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 z-50 transition duration-500">
        <ShadowMovieCard/>
      </div>

      {/* Content from the CardContents component */}
      <div className="movie-card flex flex-col justify-center overflow-hidden rounded-xl relative shadow-lg text-white w-48 h-72 z-30" data-movie-id={movieId}>
      </div> 
    </article>
  );
}
