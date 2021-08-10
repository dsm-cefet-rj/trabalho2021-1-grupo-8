import React, { Component } from "react";
import "./imoveis.css"

export class ListaDeImoveis extends Component {
  render() {
    return (
      <div>
        <a>
          <ul>
            <li className="lista">
              <img className="img" src="Apartamento1.jpg" />
              <h2>R$ 1000/mês</h2>
              <p>Descrição da casa</p>
            </li>
            <br />
            <li className="lista">
              <img className="img" src="apartamento2.jpg" />
              <h2>R$ 900/mês</h2>
              <p>Descrição da casa</p>
            </li>
            <br />
            <li className="lista">
              <img className="img" src="apartamento3.jpg" />
              <h2>R$ 2000/mês</h2>
              <p>Descrição da casa</p>
            </li>
          </ul>
        </a>
      </div>
    );
  }
}

export default ListaDeImoveis;
