import Header from "./components/Header/header";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Perfil from "./perfil";
import ListaDeImoveis from "./components/Imoveis/ListaDeImoveis";
import Chat from "./components/Chat/chat";

function App() {
  return (
    <div className="App">
      <Route path="/chat" component={Chat}/>
      <Route path="/perfil" component={Perfil}/>
    </div>
  );
}

export default App;
