import { useParams, Link } from "react-router-dom"
import { useEffect } from "react"
import { useGlobalContext } from "../context/GlobalContext"
import ReviewCard from "../components/ReviewCard"

function MovieDetailPage() {
  const { id } = useParams()
  const { movie, fetchMovie } = useGlobalContext()

  const renderReviews = () => {
    return movie?.reviews?.map(item => <ReviewCard key={item.id} review={item} />) || null
  }

  useEffect(() => fetchMovie(id), [id, fetchMovie])

  return (
    <>

      <header className="">
        <div className="d-flex">
          {movie.image && <img src={movie.image} alt={movie.title} className="img-movie-top" />}
        </div>
        <div className="p-4">
          <h1>{movie.title}</h1>
          <h3><i>By {movie.director}</i></h3>
          <p>{movie.abstract}</p>
          <p>{movie.vote}</p>
        </div>
      </header>

      <section>
        {movie.reviews && renderReviews()}
      </section>

      <footer>
        <Link to='/' className="btn btn-primary" > Torna all'elenco FIlm</Link>
      </footer>

    </>
  )
}

export default MovieDetailPage
