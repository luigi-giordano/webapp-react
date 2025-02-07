import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"

function HomePage() {

  const { fetchMovies } = useGlobalContext()

  useEffect(fetchMovies, [])

  return (
    <div>
      Home
    </div>
  )
}

export default HomePage
