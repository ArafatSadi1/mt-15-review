import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';

const Review = () => {
    const [reviews, setReviews] = useReviews()
    
    return (
        <div>
            <h2>this is review: {reviews.length}</h2>
        </div>
    );
};

export default Review;