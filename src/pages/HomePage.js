import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../services/app.js';
import MovieLink from '../components/MovieCard/MovieLink.js';

import Loader from '../components/Loader/Loader.js';

export const HomePage = () => {

    const [movies, setMovies] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
       
        const fetchMovieTrends = async () => {
            try {
                setLoading(true);
                const data = await fetchMovies();
                
                setMovies(data.results);
                
            } catch {
                console.log('not found')
            } finally { setLoading(false)}
        }
        fetchMovieTrends();
        
    }, [])

    // console.log(movies);
    // console.log(isLoading)

    return (
        <main>
            {(isLoading && <Loader />) || (<ul>
                    
                {(movies !== null) && movies.map(movie => {
                    return (
                        <MovieLink
                            key={movie.id}
                            id={movie.id}
                            title={movie.original_title ? movie.original_title : movie.name}
                            
                        />

                    )
                })}

                    


            </ul >)}
        </main>
    )
}

export default HomePage;