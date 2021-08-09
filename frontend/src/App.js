import Header from "./components/Header/header";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import Perfil from "./perfil";
import ListaDeImoveis from "./components/Header/ListaDeImoveis";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path="/perfil" component={Perfil} />
                    <Link to="/perfil"> Perfil </Link>
                </Switch>
            </div>
       </BrowserRouter>

      <ListaDeImoveis/>
    </div>
  );
}

export default App;
