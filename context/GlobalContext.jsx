import { createContext, useContext, useState } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const api_url = import.meta.env.VITE_API_URL
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const fetchMovies = () => {
    setIsLoading(true)
    axios.get(api_url)
      .then(res => {
        console.log(res.data);
        setMovies(res.data)
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }

  const fetchMovie = (id) => {
    setIsLoading(true)
    axios.get(`${api_url}/${id}`)
      .then(res => {
        console.log(res.data);
        setMovie(res.data)
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }

  const deleteMovie = (id, cb) => {
    setIsLoading(true)
    axios.delete(`${api_url}/${id}`)
      .then(res => cb())
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }

  const value = {
    fetchMovies,
    movies,
    fetchMovie,
    movie,
    deleteMovie,
    isLoading,
    setIsLoading
  }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export {
  GlobalProvider,
  useGlobalContext
}