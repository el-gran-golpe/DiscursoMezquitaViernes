import React from "react";


export default function ShadowMovieCard() {
  return (
    <section className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info">
      <Countdown />
      <PosterInfo />
    </section>
  );
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

function PosterInfo() {
  return (
    <div className="poster__info align-self-end w-full">
      <div className="h-32"></div>
      <div className="space-y-6 detail_info">
        <TrailerButton />
        <MovieTitle />
        <MovieStats />
        <MovieOverview />
      </div>
    </div>
  );
}


// Trailer Button components

function TrailerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function TrailerLabel() {
  return (
    <div className="absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold text-white group-hover:pr-2">
      Trailer
    </div>
  );
}

function TrailerButton() {
  return (
    <a
      className="relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-700"
      data-unsp-sanitized="clean"
    >
      <TrailerIcon />
      <TrailerLabel />
    </a>
  );
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Movie Title components

function MovieTitle() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white" data-unsp-sanitized="clean">
        Dune
      </h3>
      <div className="mb-0 text-lg text-gray-400">Beyond fear, destiny awaits.</div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="flex flex-col datos_col">
      <div className="stat-value">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}

function MovieStats() {
  return (
    <div className="flex flex-row justify-between datos">
      <Stat label="Popularity:" value="440.052" />
      <Stat label="Release date:" value="2021-09-15" />
      <Stat label="Runtime:" value="155 min" />
    </div>
  );
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Movie Overview component

function OverviewTitle() {
  return (
    <div className="text-xs text-gray-400 mb-2">Overview:</div>
  );
}

function OverviewText() {
  return (
    <p className="text-xs text-gray-100 mb-6">
      Paul Atreides, a brilliant and gifted young man born into
      a great destiny beyond his understanding, must travel to
      the most dangerous planet in the universe to ensure the
      future of his family and his people. As malevolent forces
      explode into conflict over the planet's exclusive supply
      of the most precious resource in existence—a commodity
      capable of unlocking humanity's greatest potential—only
      those who can conquer their fear will survive.
    </p>
  );
}

function MovieOverview() {
  return (
    <div className="flex flex-col overview">
      <OverviewTitle />
      <OverviewText />
    </div>
  );
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Movie Countdown component

function CountdownLabel({ label }) {
  return (
    <span className="mx-1 text-white">{label}</span>
  );
}

function CountdownTime({ time }) {
  return (
    <span className="mx-1 text-white">{time}</span>
  );
}

function Countdown() {
  // This is a placeholder. You would replace this with your actual countdown logic.
  const days = "00";
  const hours = "00";
  const minutes = "00";
  const seconds = "00";

  return (
    <div
      data-countdown="2021-09-15"
      className="absolute inset-x-0 top-0 pt-5 w-full mx-auto text-2xl uppercase text-center drop-shadow-sm font-bold text-white"
    >
      <CountdownTime time={days} />
      <CountdownLabel label="Days" />
      <CountdownTime time={hours} />
      <CountdownLabel label=":" />
      <CountdownTime time={minutes} />
      <CountdownLabel label=":" />
      <CountdownTime time={seconds} />
    </div>
  );
}





  
 
  