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
      <div>
        <div className="card-panel hoverable searchable-movie-reviews row" style={{ marginBottom: 50 + 'px' }}>
          <form onSubmit={ this.handleSubmit.bind(this) }>
            <div className="input-field">
              <input className="center-align" type="text" value={ this.state.query } onChange={ this.handleSearch.bind(this) }/>
            </div>
            <button type="submit" className="col s10 offset-s1 center-align waves-effect waves-light btn green accent-4 center">Search</button>
          </form>
        </div>
        <div>
          <MovieReviews reviews={ this.state.reviews }/>
        </div>
    </div>
    )
  }
}

export default SearchableMovieReviewsContainer
