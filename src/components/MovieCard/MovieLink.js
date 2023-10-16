import React from 'react';

import { Link } from 'react-router-dom';
import css from './MovieCard.module.css';
const MovieLink = ({id, title, location }) => {
    return (
       

        <li>
            <Link to={`/movies/${id}`} state={{ from: location }} className={css.movieLink}>{title}</Link>    
        </li>
    )
}

export default MovieLink ;