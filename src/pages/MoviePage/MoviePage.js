import React, {useEffect, useState} from 'react';
import { useSearchParams, useLocation  } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/app';
import Loader from '../../components/Loader/Loader.js';
import MovieLink from '../../components/MovieCard/MovieLink.js';
import css from './MoviePage.module.css'
const MoviePage = () => {

    const [searchParams, setSearchParam] = useSearchParams();
    const location = useLocation();
    const query = searchParams.get('query')

    const [isLoading, setLoading] = useState(false);
    const [searchMovies, setSearchMovies] = useState([])

    useEffect(() => {
        if (!query) return;
        const searchMovie = async () => {
            try {
                setLoading(true);
                const data = await fetchMovieByQuery(query)
                setSearchMovies(data.results);

            } catch {
                console.log('not found')
            } finally { setLoading(false)}
        }

        searchMovie()
    }, [query])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.currentTarget.elements.searchMovie.value;
        console.log(searchValue);
        setSearchParam({ query: searchValue });
        e.currentTarget.elements.searchMovie.value = '';
    }

    return (
        <main className={css.container}>
            <form onSubmit={handleFormSubmit} className={css.searchForm}>
                <input className={css.inputSearchForm}  tupe="text" name="searchMovie" required />
                <button tupe="submit">Search</button>
            </form>

            {(isLoading && <Loader />) || (<ul>
            
                {(searchMovies.length !== 0) && searchMovies.map(movie => {
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

export default MoviePage ;