import { useState } from "react"

function CreateMovie() {

  const initialData = {
    title: '',
    director: '',
    abstract: '',
    image: 'null'
  }
  const [formData, setFormData] = useState(initialData)

  const handleSetValue = (e) => {
    console.log(e.target);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <div className="card">

      <header className="card-header">
        <h1>Aggiungi nuovo Film</h1>
      </header>

      <section className="card-body">
        <form action="#" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Titolo</label>
            <input
              className="form-control"
              type="text"
              name="title"
              placeholder="Inserisci il titolo"
              value={formData.title}
              onChange={handleSetValue}
            />
          </div>
          <div className="form-group">
            <label>Regista</label>
            <input
              className="form-control"
              type="text"
              name="director"
              placeholder="Inserisci il regista"
              value={formData.director}
              onChange={handleSetValue}
            />
            <div className="form-group">
              <label>Descrizione</label>
              <input
                className="form-control"
                name="abstract"
                placeholder="Inserisci la descrizione"
                value={formData.abstract}
                onChange={handleSetValue}
              />
            </div>
            <div className="form-group">
              <label>Immagine</label>
              <input
                className="form-control"
                name="image"
                type="file"
                placeholder="Inserisci un immagine"
                value={formData.image}
                onChange={handleSetValue}
              />
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary" type="submit" >Invia</button>
            </div>
          </div>
        </form>

      </section>

    </div>
  )
}

export default CreateMovie
