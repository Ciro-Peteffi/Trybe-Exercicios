import pokemons from "./data";
import { Component } from  'react';
import { PokemonCard } from "./PokemonCard";

export class Pokedex extends Component {
    render() {
        return (
            pokemons.map(pokemonData => {

                return <PokemonCard key={pokemonData.name} pokemon={pokemonData}/>
            })
        )
    }
}