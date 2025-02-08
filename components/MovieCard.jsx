import PropTypes from "prop-types"

function MovieCard({ movieData }) {

  const { title, director, genre, abstract, image, vote } = movieData

  return (

    <div className="card mb-5">
      {image && <img className="card-image-top movie-image" src={image} alt={title} />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <span className="card-genre">{genre}</span>
        <address><i>By {director}</i></address>
        <span className="card-text">{abstract || ''}</span>
        <p className="card-text">Voto: {vote}</p>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    abstract: PropTypes.string,
    image: PropTypes.string
  }).isRequired
}

export default MovieCard
