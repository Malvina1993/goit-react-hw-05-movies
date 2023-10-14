import React from 'react';
import css from './MovieCard.module.css'

export const MovieCard = ({img,title }) => {
    return (
        <div>
            <img className={ css.imageCover} src={`https://image.tmdb.org/t/p/w500/${img}`} alt={title} />
            <p>{ title}</p>
        </div>
    )
}

export default MovieCard ;