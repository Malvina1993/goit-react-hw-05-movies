import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../../services/app.js';
import MovieLink from '../../components/MovieCard/MovieLink.js';
import {useLocation  } from 'react-router-dom';
import Loader from '../../components/Loader/Loader.js';
import css from './HomePage.module.css';

const HomePage = () => {
       
    const location = useLocation();
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

    

    return (
        <main>
            <h1 className={css.titleHome}>Trending today</h1>
            {(isLoading && <Loader />) || (<ul className={css.trandMovieList}>
                    
                {(movies !== null) && movies.map(movie => {
                    return (
                        <MovieLink
                            key={movie.id}
                            id={movie.id}
                            title={movie.original_title ? movie.original_title : movie.name}
                            location = {location}
                            
                        />

                    )
                })}

                    


            </ul >)}
        </main>
    )
}

export default HomePage;