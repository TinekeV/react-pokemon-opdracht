import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import PokemonCard from "./components/PokemonCard";
import Pagination from "./components/Pagination";


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, toggleLoading] = useState(false);
  const [error, setError] = useState('')

  //pagination
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");


  useEffect(() => {
      async function fetchData() {
          setError('');
          toggleLoading(true);

          try {
              const { data } = await axios.get(currentPage)
              setPokemons(data.results)
              console.log(data)
              setNextPage(data.next)
              setPreviousPage(data.previous)

          } catch (e) {
              setError('Er is iets fout gegaan bij het ophalen van de data')
              console.error(e);
          }
          toggleLoading(false)
      }

      fetchData()

  }, [currentPage])

    function goToNextPage() {
      setCurrentPage(nextPage)
    }

    function goToPrevPage() {
        setCurrentPage(previousPage)
    }

    return (
    <>
        {error && <p>{error}</p>}
        {loading && <p>Capturing Pokemons...</p>}
        <h1>Tineke's Pokedex</h1>
        <Pagination
            goToNextPage={nextPage ? goToNextPage : null}
            goToPrevPage={previousPage ? goToPrevPage : null}
        />
        <div className="pokemon-container">
            {pokemons && pokemons.map((pokemon) => {
                return <PokemonCard url={pokemon.url} />
            })}
        </div>
    </>
  );
}

export default App;
