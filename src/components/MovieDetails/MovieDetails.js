import React from 'react';
import css from './MoviDetails.module.css'

const MovieDetails = ({ poster, scores, title, year, overview, genres }) => {
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=500x350'
  return (
    <div className={css.movieDetails}>
      <img className={css.poster} src={poster?`https://image.tmdb.org/t/p/w500/${poster}`:defaultImg} alt={title} />
      <div>
        <h1>{title} ({year.slice(0, 4)})</h1>
        <p>User scores:  { Math.round(scores*10)}%</p>
        <b>Overview</b>
        <p>{overview}</p>
        <b>Genres</b>
        <p>{genres.join(', ')}</p>
      </div>
    </div>
  )
}

export default MovieDetails;

