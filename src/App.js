import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import PokemonCard from "./components/PokemonCard";


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, toggleLoading] = useState(false);
  const [error, setError] = useState('')

  useEffect(() => {
      async function fetchData() {
          setError('');
          toggleLoading(true);

          try {
              const { data: { results } } = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
              setPokemons(results)
              console.log(results)

          } catch (e) {
              setError('Er is iets fout gegaan bij het ophalen van de data')
              console.error(e);
          }
          toggleLoading(false)
      }

      fetchData()

  }, [])

    return (
    <>
        {error && <p>{error}</p>}
        {loading && <p>Data wordt geladen...</p>}
        <h1>Tineke's Pokedex</h1>
        <button type="button">previous pokemons</button>
        <button type="button">next 20 pokemons</button>
        <div className="pokemon-container">
            {pokemons && pokemons.map((pokemon) => {
                return <PokemonCard url={pokemon.url} />
            })}
        </div>
    </>
  );
}

export default App;
