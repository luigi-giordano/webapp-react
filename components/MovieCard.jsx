
function MovieCard({ movieData }) {

  const { id, title, director, genre, release_year, abstract, image, } = movieData

  return (

    <div className="card mb-5">
      <img className="card-image-top movie-image" src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <span className="card-genre">{genre}</span>
        <address><i>By {director}</i></address>
        <span className="card-text">{abstract}</span>
      </div>
    </div>
  )
}

export default MovieCard
