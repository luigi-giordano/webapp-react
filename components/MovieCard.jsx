import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import StarRating from "./StarRating";


function MovieCard({ movieData }) {

  const { id, title, director, genre, abstract, image, vote, rating } = movieData

  return (

    <div className="card mb-5">
      {image && <img className="card-image-top movie-image" src={image} alt={title} />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <span className="card-genre">{genre}</span>
        <address><i>By {director}</i></address>
        <span className="card-text">{abstract || ''}</span>
        <StarRating rating={rating} />

      </div>
      <div className="my-3 d-flex justify-content-center">
        <Link to={`movies/${id}`} className="btn btn-primary">Visualizza Recensioni</Link>
      </div>
    </div>
  )
}

export default MovieCard