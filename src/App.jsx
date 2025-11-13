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

    </>
  )

}
export default App
