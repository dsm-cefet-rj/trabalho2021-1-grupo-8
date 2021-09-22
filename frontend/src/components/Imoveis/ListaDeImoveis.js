import "./imoveis.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ListaDeImoveis() {

  const [imovel, setImovel] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/imoveis").then((response) => {
      setImovel(response.data);
    });
  }, []);
  return (
    <div>
      {imovel.map((imovel)=>(
        <ul>
          <a href="/descImovel">
          <li className="lista">
            <img className="img" src="Apartamento1.jpg" />
            <h2>{imovel.preço}</h2>
            <p>{imovel.desc}</p>
          </li>
        </a>
        </ul>
      ))}
    </div>
  );
}
