import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

function CreateMovie() {

  const { setIsLoading } = useGlobalContext()

  const api_url = import.meta.env.VITE_API_URL
  const navigate = useNavigate()

  const initialData = {
    title: '',
    director: '',
    abstract: '',
    image: 'null'
  }
  const [formData, setFormData] = useState(initialData)

  const handleSetValue = (e) => {
    const { value, name } = e.target;
    if (name === 'image') {
      setFormData(prev => ({ ...prev, image: e.target.files[0] }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);

    const dataToSend = new FormData()

    console.log(dataToSend);
    for (let key in formData) {
      dataToSend.append(key, formData[key])
    }
    setIsLoading(true)
    axios
      .post(api_url, dataToSend, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(() => navigate('/'))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
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
