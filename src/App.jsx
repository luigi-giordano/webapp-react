import HomePage from "../pages/HomePage"
import MovieDetailPage from "../pages/MovieDetailPage"
import Error404 from "../pages/Error404"
import DefaultLayout from "../layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "../context/GlobalContext"

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies/:id" element={<MovieDetailPage />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
