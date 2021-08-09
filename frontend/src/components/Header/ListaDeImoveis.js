import React, { Component } from "react";

export class ListaDeImoveis extends Component {
  render() {
    return (
      <div>
        <a>
          <ul>
            <li ul class="container">
              <img id="apartamento1" src="Apartamento1.jpg" />
              <h2>R$ 1000/mês</h2>
              <p>Descrição da casa</p>
            </li>
            <br />
            <li class="container">
              <img id="apartamento2" src="apartamento2.jpg" />
              <h2>R$ 900/mês</h2>
              <p>Descrição da casa</p>
            </li>
            <br />
            <li class="container">
              <img id="apartamento3" src="apartamento3.jpg" />
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
