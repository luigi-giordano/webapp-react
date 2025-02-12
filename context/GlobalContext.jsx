import { createContext, useContext, useState } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const api_url = import.meta.env.VITE_API_URL
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState({})

  const fetchMovies = () => {
    axios.get(api_url)
      .then(res => {
        console.log(res.data);
        setMovies(res.data)
      })
      .catch(err => console.log(err))
  }

  const fetchMovie = (id) => {
    axios.get(`${api_url}/${id}`)
      .then(res => {
        console.log(res.data);

        setMovie(res.data)
      })
      .catch(err => console.log(err))
  }

  const deleteMovie = (id, cb) => {
    axios.delete(`${api_url}/${id}`)
      .then(res => cb())
      .catch(err => console.log(err))
  }

  const value = {
    fetchMovies,
    movies,
    fetchMovie,
    movie,
    deleteMovie
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