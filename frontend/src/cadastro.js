// import "./imoveis.css";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import store from "./store";

import { useEffect } from "react";

export default function Cadastro(filteredStore) {
  const [values, setValues] = useState({});
  const history = useHistory();

  function onChange(event) {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  }
  function resize() {
    window.location.reload();
  }
  function onSubmit(event) {
    event.preventDefault();

    axios.post("http://localhost:5000/login", values).then((response) => {
      
      history.push("/imoveis");
      resize()
    });
    
  }

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios("http://localhost:5000/login")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const initialState = JSON.stringify(data, null, 2);
  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <div>
      {filteredStore.filteredStore[0].map((m) => (
        <a>{m.id}</a>
      ))}
      {console.log(filteredStore.filteredStore[1])}
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input name="email" onChange={onChange} />
        <label>Senha</label>
        <input name="senha" onChange={onChange} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
