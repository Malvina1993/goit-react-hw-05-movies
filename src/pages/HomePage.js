import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../services/app.js';
import {MovieCard} from '../components/MovieCard/MovieCard.js'

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

    console.log(movies);
    console.log(isLoading)

    return (
        <div>
            
            {(movies !== null) && movies.map(movie => {
                return (<MovieCard
                    key={movie.id}
                    img={movie.poster_path}
                    title = {movie.title}
                    
                />)
            })}


        </div>
    )
}

export default HomePage;