import { useState, useEffect } from 'react'
import axios from "axios";


function App() {

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  function handleFormData(e) {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  }

  function chiamataAxios() {
    axios.post(
      "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts",
      formData
    )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }



  return (
    <>
      <h1>Crea un nuovo post</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          chiamataAxios();
        }}
      >
        <div>
          <label>Autore</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleFormData}
            placeholder="Inserisci autore"
          />
        </div>


        <div>
          <label>Titolo</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleFormData}
            placeholder="Inserisci titolo"
          />
        </div>

        <div>
          <label>Testo del post</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleFormData}
            placeholder="Scrivi il contenuto del post"
          ></textarea>
        </div>


        <div>
          <input
            type="checkbox"
            name="public"
            checked={formData.public}
            onChange={handleFormData}
          />
          <label>Pubblico</label>
        </div>


        <button type="submit">Invia Post</button>

      </form>
    </>
  );



}
export default App
