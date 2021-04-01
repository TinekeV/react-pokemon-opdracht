import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../App.css"

function PokemonCard( {url} ) {
    const [pokemonCard, setPokemonCard] = useState({})
    // const [pokemonAbilities, setPokemonAbilities] = useState([])
    // const [moves, setMoves]

    useEffect(() => {
        async function fetchData() {
            try {
                const { data: { name, sprites: {front_default}, weight, moves, abilities } } = await axios.get(url)
                setPokemonCard({
                    name: name,
                    image: front_default,
                    weight: weight,
                    moves: moves.length,
                    abilities: abilities
                })

                console.log(name)
                console.log(front_default)
                console.log(weight)
                console.log(moves)
                console.log(abilities)

            } catch (e) {
                console.error(e);
            }
        }

        fetchData()

    }, [url])

    return (
        <>
            <div className="pokemon-card">
                {PokemonCard &&
                <section className="card">
                    <h3>{pokemonCard.name}</h3>
                    <img src={pokemonCard.image} alt="pokemon" />
                    <p>Weight: {pokemonCard.weight}</p>
                    <p>Moves: {pokemonCard.moves} </p>
                    <p>Abilities: </p>
                    {pokemonCard.abilities && pokemonCard.abilities.map((pokemonCar) => {
                        return <li key={pokemonCard.id}>{pokemonCar.abilities}</li>
                    })}
                </section>}

            </div>
        </>
    );
}

export default PokemonCard;