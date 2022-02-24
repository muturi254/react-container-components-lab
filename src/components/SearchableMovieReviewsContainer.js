import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '86rx2GMiXFvIg0VRGlDYsMtDn8alOFcx';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let url = `${URL}&query=${this.state.searchTerm}`;
        console.log(url);
        fetch(url).then(res => res.json()).then(data => {
            console.log(data);
            this.setState({ reviews: data.results });
        });
    } 

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name='searchTerm' value={this.state.searchTerm} onChange={ (e) => { this.setState({ searchTerm: [e.target.value] })} } />
                    <button type="submit">Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;