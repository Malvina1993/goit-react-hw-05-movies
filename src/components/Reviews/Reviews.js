import React, { useEffect, useState } from 'react';
import {fetchMovieReviews} from 'services/app.js'
import { useParams } from 'react-router-dom';
import Review from '../Review/Review.js'
import Loader from '../Loader/Loader.js'


const Reviews = () => {
    const { movieId } = useParams();
    const [isLoading, setLoading] = useState(false);
    const [movieReviews, setMovieRevievs] = useState([]);

    useEffect(() => {
       
        const fetchReviews = async () => {
            try {
                setLoading(true);
                const data = await fetchMovieReviews(movieId);
                setMovieRevievs(data.results);
                
                
                
            } catch {
                console.log('not found')
            } finally { setLoading(false)}
        }
        fetchReviews();
        
    }, [movieId])

    console.log(movieReviews);
    // console.log(isLoading);
    return (
       (isLoading&&<Loader/>)||(   <div>
            {(movieReviews.length === 0 && <p>We don't have any reviews for this movie</p>) || (movieReviews.map(review => {
                return <Review
                    key={review.id}
                    author={review.author}
                    content={review.content}
                />
            }))} 
       </div>)
    )
}

export default Reviews;