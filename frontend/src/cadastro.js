// import "./imoveis.css";
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from  'react-router-dom'



export default function Cadastro() {
  const [values, setValues] = useState({ });
  const history = useHistory();

  function onChange(event){
    const { name, value } = event.target;

    setValues({ ...values, [name]: value })
  }

  function onSubmit(event){
    event.preventDefault();

    axios.post('http://localhost:5000/login', values)
    .then((response) => {
      history.push('/imoveis');
    });
  }

    return (
      <div>
        <form onSubmit={onSubmit}>
          <label>Email</label>
          <input name="email" onChange={onChange}/>
          <label>Senha</label>
          <input name="senha" onChange={onChange}/>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
  