import React, { Component } from 'react'
import { SearchFetchNewYorkTimesMovieReviews } from '../api/fetchMovieReviews'
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = { query: '', reviews: [] }
  }

  handleSubmit(event) {
    event.preventDefault()
    SearchFetchNewYorkTimesMovieReviews(this.state.query)
    .then( data => this.setState({ query: '', reviews: data.results }))
  }

  handleSearch(event) {
    this.setState({ query: event.target.value })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h4 className="text-align-center">Search for a New York Times Article</h4>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <div className="input-field text-align-center">
            <input type="text" value={ this.state.query } onChange={ this.handleSearch.bind(this) }/>
          </div>
          <button type="submit" className="waves-effect waves-light btn green accent-4 center">Search</button>
        </form>
        <MovieReviews reviews={ this.state.reviews }/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
