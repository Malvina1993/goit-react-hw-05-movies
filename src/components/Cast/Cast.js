
import React, { useEffect, useState } from 'react';
import {fetchMovieCasts} from 'services/app.js'
import { useParams } from 'react-router-dom';
import Actor from '../Actor/Actor.js'
import Loader from '../Loader/Loader.js'

import css from './Cast.module.css'
const Cast = () => {

    const { movieId } = useParams();
    const [isLoading, setLoading] = useState(false);
    const [movieCasts, setMovieCasts] = useState([]);
   
    useEffect(() => {
       
        const fetchCasts = async () => {
            try {
                setLoading(true);
                const data = await fetchMovieCasts(movieId);
                setMovieCasts(data.cast);
                
                
                
            } catch {
                console.log('not found')
            } finally { setLoading(false)}
        }
        fetchCasts();
        
    }, [movieId])

    return (
       
       (isLoading&&<Loader/>) ||( <div className={css.cast}>
            {movieCasts && movieCasts.map(cast => {
                return <Actor
                    key={ cast.id}
                    portret={cast.profile_path}
                    name={cast.name}
                    character={cast.character}
                />
            
            })}
       </div>)
    )
}

export default Cast ;