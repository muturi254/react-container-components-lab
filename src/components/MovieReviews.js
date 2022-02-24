// Code MovieReviews Here
import React from "react";

const MovieReviews = (props) => {
    
    // console.log(props.reviews);
    return (
        <div className="review-list">
            { props.reviews.map((data, index) => (
                <li className="review" key={index}>{data.critics_pick}</li>
            )) }
        </div>
    )
}

export default MovieReviews;