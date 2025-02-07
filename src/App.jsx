import HomePage from "../pages/HomePage"
import MovieDetailPage from "../pages/MovieDetailPage"
import Error404 from "../pages/Error404"
import DefaultLayout from "../layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
