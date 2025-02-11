import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="container-fluid">
          <img src="/logo.png" alt="BOOLFLIX" style={{ maxWidth: '150px', height: 'auto' }} />
          <Link className="btn btn-primary" to="/movies/create">Aggiungi Film</Link>
        </div>
      </nav>

    </header>
  )
}

export default Header
