import React from 'react';

import { Link } from 'react-router-dom';

export const MovieLink = ({id, title }) => {
    return (
       

        <li>
            <Link to={`/movies/${id}`} >{title}</Link>    
        </li>
    )
}

export default MovieLink ;