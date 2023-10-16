import React from 'react';
import css from './Reviews.module.css'
const Review = ({author, content}) => {
    return (
        <div className={css.review }>  
            <b className={css.authorReview}>{author}</b>
            <p className={css.reviewContent}>{content}</p>
        </div>
    )
}

export default Review;