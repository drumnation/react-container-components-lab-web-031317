import React from 'react'
import 'whatwg-fetch'
import SearchableMovieReviewsContainer from '../components/SearchableMovieReviewsContainer'

export function FetchNewYorkTimesMovieReviews() {
  let ALL_REVIEWS_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json'
  ALL_REVIEWS_URL += '?' + "api-key=be24f19da9f84eb0aef9e483d391fab2"
  return fetch(ALL_REVIEWS_URL)
  .then( response => response.json() )
}

export function SearchFetchNewYorkTimesMovieReviews(query) {
  let SEARCH_REVIEWS_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json'
  SEARCH_REVIEWS_URL += '?' + 'api-key=be24f19da9f84eb0aef9e483d391fab2' + '&' + 'query=' + query
  return fetch(SEARCH_REVIEWS_URL)
  .then( response => response.json() )
}
