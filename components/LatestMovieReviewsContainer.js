import React, { Component } from 'react'
import { FetchNewYorkTimesMovieReviews } from '../api/fetchMovieReviews'
import MovieReviews from './MovieReviews'
import { NavBar } from './NavBar'

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = { reviews: [] }
  }

  componentDidMount() {
    FetchNewYorkTimesMovieReviews()
    .then( data => this.setState({ reviews: data.results }))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={ this.state.reviews } />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
