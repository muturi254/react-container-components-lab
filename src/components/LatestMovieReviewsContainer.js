import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '86rx2GMiXFvIg0VRGlDYsMtDn8alOFcx';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: []
        }
    }



    componentDidMount() {
        this.fetchReviews();
    }

    fetchReviews = () => {
        return fetch(URL).then(res => res.json()).then(data => {
            // console.log(data);
            this.setState({ reviews: data.results });
        });
    }

    render() {
        // console.log("hello", this.state.reviews)
        return (
           <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
           </div>
        )
    }
}

export default LatestMovieReviewsContainer;