import React from 'react'
import ReactDOM from 'react-dom'

import NavBar from
  './components/NavBar'

import LatestMovieReviewsContainer from
  './components/LatestMovieReviewsContainer'

import SearchableMovieReviewsContainer from
  './components/SearchableMovieReviewsContainer'


ReactDOM.render(
  <div className="app row">
    <div>
      <NavBar />
    </div>
    <div>
      <SearchableMovieReviewsContainer />
    </div>
    <div>
      <LatestMovieReviewsContainer />
    </div>
  </div>,
  document.getElementById('main')
)

require('./test/index-test.js') // Leave this in!
