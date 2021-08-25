import { useEffect, useReducer, useState } from "react";
import { Route } from "react-router-dom";
import Perfil from "./perfil";
import ListaDeImoveis from "./components/Imoveis/ListaDeImoveis";
import Chat from "./components/Chat/chat";
import descImovel from "./descImovel";
import Cadastro from "./cadastro";
import axios from "axios";
import { Provider } from "react-redux";
import { createStore } from "redux";

function App() {
  

  const [login, setLogin] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/login").then((response) => {
      setLogin(response.data);
    });
  }, []);

  let lastId = 1;
  const initialState = login;

  function Reducer(state = [initialState], action) {
    switch (action.type) {
      case "perfilAdd":
        return [
          ...state,
          {
            id: ++lastId,
            email: action.payload.email,
            senha: action.payload.senha,
          },
        ];
      case "perfilRemovido":
        return state.filter((perfil) => perfil.id !== action.payload.id);
      default:
        return state;
    }
  }
  const store = createStore(Reducer)
  console.log(store.getState())
  const filteredStore = store.getState()
  console.log(filteredStore)
  return (
    
      <div className="App">
        <Route path="/chat" component={Chat} />
        <Route path="/perfil"><Perfil filteredStore ={filteredStore}/></Route>
        <Route path="/imoveis" component={ListaDeImoveis} />
        <Route path="/descImovel" component={descImovel} />
        <Route path="/cadastro"><Cadastro filteredStore={filteredStore}/></Route>
      </div>
    
  );
}

export default App;
