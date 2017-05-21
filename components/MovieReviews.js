import React from 'react'

const Review = ({display_title, headline, summary_short, link, multimedia, mpaa_rating}) => {
  const mpaa = mpaa_rating ? mpaa_rating : 'NR'
  return (
    <div  className="review card">
      <div className="card-image">
        <img src={multimedia.src} />
        <span className="card-title blue-grey darken-3"><strong>{display_title}</strong>: {mpaa}</span>
      </div>
      <div className="card-content">
        <h3>{headline}</h3>
        <p>{summary_short}</p>
      </div>
      <div className="card-action">
        <a href={link.url} className="green-text text-accent-4" target="_blank">{link.suggested_link_text}</a>
      </div>
    </div>
  )
}

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      { reviews.map( (movie, i) => <span key={i}>{Review(movie)}</span> )}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: [{multimedia: {src: '#'}, link: {url: '#', suggested_link_text: '#'}}]
}

export default MovieReviews
