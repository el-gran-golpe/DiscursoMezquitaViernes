import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';


export function MovieCard({ movieId }) {
  return (
    <article className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden mx-auto relative transform hover:-translate-y-2 transition ease-in-out duration-500">
      {/* This div ensures a smooth gradient */}
      <div className="overlay absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
      {/* Content from the CardContents component */}
      <div
        className="movie-card flex flex-col justify-center overflow-hidden rounded-xl relative shadow-lg text-white w-48 h-72 z-20"
        data-movie-id={movieId}
        style={{
          backgroundImage: `url("http://image.tmdb.org/t/p/w342/s1FhMAr91WL8D5DeHOcuBELtiHJ.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
      </div>

      {/* <div className="z-30">
        <PosterFooter />
      </div> */}
    </article>
  );
}


// MY COPY/PASTE:

// Exports
function PosterFooter() {
  return (
    <div className="flex justify-center relative pb-2 z-10">
      <SetDownloadButton />
    </div>
  );
}

function SetDownloadButton() {
  const reminderUrl = generateReminderUrl({
    date: "20210915T010000Z",
    text: "Dune - Movie Premiere",
    location: "http://moviedates.info",
    details: "This reminder was created through http://moviedates.info",
  });

  return (
    <a
      className="flex items-center py-1 px-2 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700"
      href={reminderUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
       {/* Put a button to download and another one to see online XDD*/}
      <FontAwesomeIcon icon={faCloudArrowDown} className="w-6 h-6" />
      <div className="text-sm text-white ml-2">Download</div>
    </a>
  );
}

function generateReminderUrl({ date, text, location, details }) {
  const encodedText = encodeURIComponent(text);
  const encodedLocation = encodeURIComponent(location);
  const encodedDetails = encodeURIComponent(details);
  return `http://www.google.com/calendar/event?action=TEMPLATE&dates=${date}%2F${date}&text=${encodedText}&location=${encodedLocation}&details=${encodedDetails}`;
}

