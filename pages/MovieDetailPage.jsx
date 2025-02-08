import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useGlobalContext } from "../context/GlobalContext"

function MovieDetailPage() {
  const { id } = useParams()
  const { movie, fetchMovie } = useGlobalContext()

  useEffect(() => fetchMovie(id), [])

  return (
    <div>
      Dettaglio Film {id}
    </div>
  )
}

export default MovieDetailPage
