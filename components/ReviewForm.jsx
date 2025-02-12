import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useGlobalContext } from "../context/GlobalContext"

function ReviewForm({ movie_id, fetchData }) {

  const { setIsLoading } = useGlobalContext()

  const api_url = `${import.meta.env.VITE_API_URL}/${movie_id}/reviews`

  const initialFormData = {
    name: '',
    vote: '',
    text: ''
  }

  const [formData, setFormData] = useState(initialFormData)
  const [erroMessage, setErrorMessage] = useState('')

  const validateForm = () => {
    if (!formData.name || !formData.text) return false
    if (isNaN(formData.vote) || formData.vote < 1 || formData.vote > 5) return false
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    if (!validateForm()) {
      setErrorMessage('Attenzione compila tutti i campi in maniera corretta')
      return
    }
    setIsLoading(true)
    axios.post(api_url, formData, { headers: { 'Content-Type': 'application/json' } })
      .then(res => {
        console.log(res.data);
        setFormData(initialFormData)
        setErrorMessage('')
        fetchData(movie_id)
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => setIsLoading(false))
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
        <p className="text-danger">{erroMessage}</p>
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
