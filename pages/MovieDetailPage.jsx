import { useParams, Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useGlobalContext } from "../context/GlobalContext"
import ReviewCard from "../components/ReviewCard"
import ReviewForm from "../components/ReviewForm"

function MovieDetailPage() {
  const { id } = useParams()
  const { movie, fetchMovie, deleteMovie } = useGlobalContext()

  const renderReviews = () => {
    return movie?.reviews?.map(item => <ReviewCard key={item.id} review={item} />) || null
  }

  useEffect(() => fetchMovie(id), [id])

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
          <button className="btn btn-danger my-3" onClick={() => {
            if (confirm('Sei sicuro di voler eliminare il Film dal database?')) {
              console.log('ELIMINA');
              deleteMovie(movie.id, redirect('/'))
            }
          }}>Elimina Film</button>
        </div>
      </header>

      <section>
        {movie.reviews && renderReviews()}
      </section>

      <section>
        <ReviewForm movie_id={movie.id} fetchData={fetchMovie} />
      </section>

      <footer>
        <Link to='/' className="btn btn-primary" > Torna all'elenco FIlm</Link>
      </footer>

    </>
  )
}

export default MovieDetailPage
