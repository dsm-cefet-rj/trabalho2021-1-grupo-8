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
import { createSlice, PayloadAction, configureStore, createEntityAdapter } from "@reduxjs/toolkit";


function App() {
  const [login, setLogin] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/login").then((response) => {
      setLogin(response.data);
    });
  }, []);

  let lastId = 1;

  const loginAdapter = createEntityAdapter();
  const initialLoginState = loginAdapter.getInitialState({
    status: 'not_loaded',
    error: null
  });

  
  function addLoginReducer(state, action) {
    return [
      ...state,
      {
        id: ++lastId,
        email: action.payload.email,
        senha: action.payload.senha,
      },
    ];
  }

  function removeLoginReducer(state, action) {
    return state.filter((perfil) => perfil.id !== action.payload.id);
  }

  const loginSlice = createSlice({
    name: "login",
    initialLoginState,
    reducers: {
      addLogin: (state, action) => addLoginReducer(state, action),
      removeLogin: (state, action) => removeLoginReducer(state, action),
    },
    extraReducers: {

      [removeLoginReducer.fulfilled]:(state, action) => {state.status = 'deleted'; loginAdapter.removeOne(state, action.payload);},

      [addLoginReducer.fulfilled]:(state, action) => {state.status = 'saved'; loginAdapter.addOne(state, action.payload);},

  }
  });

  const store = configureStore({
    reducer: loginSlice.reducer,
  });

  //const store = createStore(Reducer)
  console.log(store.getState());
  const filteredStore = store.getState();
  console.log(filteredStore);
  return (
    <div className="App">
      <Route path="/chat" component={Chat} />
      <Route path="/perfil">
        <Perfil filteredStore={filteredStore} />
      </Route>
      <Route path="/imoveis" component={ListaDeImoveis} />
      <Route path="/descImovel" component={descImovel} />
      <Route path="/cadastro">
        <Cadastro filteredStore={filteredStore} />
      </Route>
    </div>
  );
}

export default App;
