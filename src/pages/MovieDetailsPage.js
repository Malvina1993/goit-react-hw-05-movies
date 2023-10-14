import MovieDetails from 'components/MovieDetails/MovieDetails';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/app';
import { Link, Outlet } from 'react-router-dom';
import Loader from '../components/Loader/Loader.js';

export const MovieDetailsPage = () => {

    const { movieId } = useParams();
    const [isLoading, setLoading] = useState(false);
    const [movieDetails, setMovieDetails] = useState(null)

    useEffect(() => {
       
        const fetchDetails = async () => {
            try {
                setLoading(true);
                const data = await fetchMovieDetails(movieId);
                // console.log(data);
                setMovieDetails(data);
                
                
            } catch {
                console.log('not found')
            } finally { setLoading(false)}
        }
        fetchDetails();
        
    }, [movieId])
    
    return (
        (isLoading&&<Loader/>) ||(<main>
            {movieDetails && <MovieDetails
                poster={movieDetails.poster_path}
                title={movieDetails.original_title ? movieDetails.original_title : movieDetails.name}
                year={movieDetails.release_date}
                overview={movieDetails.overview}
                genres={movieDetails.genres.map(genre => { return genre.name })}
            />}
            {isLoading&&<Loader/>}
            <div>
                <b>Informations</b>
                <ul>
                    <li>
                        <Link to={'cast'} >Cast</Link>    
                    </li>
                    <li>
                        <Link to={'reviews'} >Reviews</Link>    
                    </li>
                </ul>
                <Outlet/>
            </div>

        </main>)
    )
}

export default MovieDetailsPage;