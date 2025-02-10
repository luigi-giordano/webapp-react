import { useState } from "react"

function ReviewForm({ movie_id }) {

  const api_url = `${import.meta.env.VITE_API_URL}/${movie_id}/reviews`

  const initialFormData = {
    name: '',
    vote: '',
    text: ''
  }

  const [formData, setFormData] = useState(initialFormData)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);


  }


  const setFieldValue = (e) => {
    const { value, name } = e.target
    setFormData((prev => ({ ...prev, [name]: value })))
  }

  return (
    <div className="card my-3">
      <header className="card-header">
        <h1>Aggiungi una nuova recensione</h1>
      </header>
      <div className="card-body">
        <form action="#" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome</label>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Inserisci il nome"
              value={formData.name}
              onChange={setFieldValue}
            />
          </div>
          <div className="form-group">
            <label>Voto</label>
            <input
              className="form-control"
              type="number"
              name="vote"
              min={1}
              max={5}
              placeholder="Inserisci il voto"
              value={formData.vote}
              onChange={setFieldValue}
            />
          </div>
          <div className="form-group">
            <label>Testo Recensione</label>
            <textarea
              className="form-control my-3"
              name="text"
              placeholder="Inserisci la recensione"
              value={formData.text}
              onChange={setFieldValue}
            ></textarea>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary" type="submit" >Invia</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default ReviewForm
