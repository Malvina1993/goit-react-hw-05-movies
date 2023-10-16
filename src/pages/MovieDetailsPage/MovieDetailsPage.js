import MovieDetails from 'components/MovieDetails/MovieDetails';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/app';
import { Link, Outlet, useLocation  } from 'react-router-dom';
import Loader from '../../components/Loader/Loader.js';
import css from './MovieDetailsPages.module.css';
const MovieDetailsPage = () => {
    const location = useLocation();
    const backLinck = useRef(location.state?.from ?? "/");
    const { movieId } = useParams();
    const [isLoading, setLoading] = useState(false);
    const [movieDetails, setMovieDetails] = useState(null)

    useEffect(() => {
       
        const fetchDetails = async () => {
            try {
                setLoading(true);
                const data = await fetchMovieDetails(movieId);
                console.log(data);
                setMovieDetails(data);
                
                
            } catch {
                console.log('not found')
            } finally { setLoading(false)}
        }
        fetchDetails();
        
    }, [movieId])
    
    return (
        (isLoading && <Loader />) || (<main className={css.container}>
            <li className={css.goBack}>
               <Link to={backLinck.current} className={css.goBackLink}>Go Back</Link>

            </li>

            {movieDetails && <MovieDetails
                
                poster={movieDetails.poster_path}
                scores={movieDetails.vote_average}
                title={movieDetails.original_title ? movieDetails.original_title : movieDetails.name}
                year={movieDetails.release_date}
                overview={movieDetails.overview}
                genres={movieDetails.genres.map(genre => { return genre.name })}
            />}
            {isLoading&&<Loader/>}
            <div className={css.informations}>
                <b>Additional informations</b>
                <ul className={css.informationsList}>
                    <li >
                        <Link to={'cast'} className={css.informLink}>Cast</Link>    
                    </li>
                    <li >
                        <Link to={'reviews'} className={css.informLink}>Reviews</Link>    
                    </li>
                </ul>
                <Outlet/>
            </div>

        </main>)
    )
}

export default MovieDetailsPage;