import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../App.css"

function PokemonCard( {url} ) {
    const [pokemonCard, setPokemonCard] = useState({})
    const [abilities, setAbilities] = useState([])
    const [moves, setMoves] = useState("")
    const [image, setImage] = useState("")

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(url)
                setPokemonCard(data)
                setMoves(data.moves)
                setImage(data.sprites)
                setAbilities(data.abilities)

                // console.log(data)

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
                    <img src={image.front_default} alt="pokemon" />
                    <p>Weight: {pokemonCard.weight}</p>
                    <p>Moves: {moves.length} </p>
                    <p className="abilities">Abilities </p>
                    {abilities && abilities.map((ability) => {
                        return <li key={ability.ability.name} className="ability-list">{ability.ability.name}</li>
                    })}
                </section>}

            </div>
        </>
    );
}

export default PokemonCard;