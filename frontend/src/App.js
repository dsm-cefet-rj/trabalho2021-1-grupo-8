import Header from "./components/Header/header";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import Perfil from "./perfil";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path="/perfil" component={Perfil} />
                    <Link to="/perfil"> Link </Link>
                </Switch>
            </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
