import Header from "./components/Header/header";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Perfil from "./perfil";
import ListaDeImoveis from "./components/Imoveis/ListaDeImoveis";
import Chat from "./components/Chat/chat";
import descImovel from "./descImovel";
import cadastro from "./cadastro";


function App() {
  return (
    <div className="App">
      <Route path="/chat" component={Chat}/>
      <Route path="/perfil" component={Perfil}/>
      <Route path="/imoveis" component={ListaDeImoveis}/>
      <Route path="/descImovel" component={descImovel}/>
      <Route path="/cadastro" component={cadastro}/>
    </div>
  );
}

export default App;
