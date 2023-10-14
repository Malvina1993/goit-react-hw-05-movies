import React from 'react';


function MovieDetails({ poster, title, year, overview, genres }) {
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=500x350'
  return (
    <div>
      <img src={poster?`https://image.tmdb.org/t/p/w500/${poster}`:defaultImg} alt={title} />
      <h1>{title} ({year.slice(0, 4)})</h1>
      <b>Overview</b>
      <p>{overview}</p>
      <b>Genres</b>
      <p>{genres.join(', ')}</p>
    </div>
  )
}

export default MovieDetails;

