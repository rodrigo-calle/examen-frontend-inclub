// import logo from './logo.svg';
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AddPokemon from "./components/addPokemon/AddPokemon";
import Navbar from "./components/navbar/Navbar";
import PokemonDetail from "./components/pokemonDetail/PokemonDetail";
import PokemonList from "./components/pokemonsList/PokemonsList";

function App() {

  return (
    <div className="App">

    <BrowserRouter>
      <Navbar />
      <Routes>
      
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="/pokemon/add" element={<AddPokemon />} />
      </Routes>
    </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
