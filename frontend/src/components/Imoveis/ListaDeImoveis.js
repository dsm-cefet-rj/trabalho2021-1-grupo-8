import "./imoveis.css";

export default function ListaDeImoveis() {
  return (
    <div>
      <ul>
        <a href="/descImovel">
          <li className="lista">
            <img className="img" src="Apartamento1.jpg" />
            <h2>R$ 1000/mês</h2>
            <p>Descrição da casa</p>
          </li>
        </a>
        <br />

        <a href="">
          <li className="lista">
            <img className="img" src="apartamento2.jpg" />
            <h2>R$ 900/mês</h2>
            <p>Descrição da casa</p>
          </li>
        </a>
        <br />

        <a href="">
          <li className="lista">
            <img className="img" src="apartamento3.jpg" />
            <h2>R$ 2000/mês</h2>
            <p>Descrição da casa</p>
          </li>
        </a>
      </ul>
    </div>
  );
}
