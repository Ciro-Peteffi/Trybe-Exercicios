import React from "react";
import Pokemon from "./Pokemon";
import pokemons from "./data";

export default class Pokedex extends React.Component {
  state = {
    indexPokemon: 0,
    pokemonsFiltered: '',
    pokemonsFilterLength: 0,
  };

  handleState = () => {
    const { indexPokemon, pokemonsFilterLength, pokemonsFiltered} = this.state;
    if (indexPokemon === pokemons.length - 1 || pokemonsFilterLength === pokemonsFiltered.length - 1 ) {
      return this.setState({ indexPokemon: 0, pokemonsFilterLength: 0 });
    }
    this.setState((prevSt) => ({ indexPokemon: prevSt.indexPokemon + 1, pokemonsFilterLength: prevSt.pokemonsFilterLength + 1 }));
  };

  pokemonFilter = (pokemonType) => {
     const resultFilter = pokemons.filter(pokemon => pokemon.type === pokemonType)
    this.setState({ pokemonsFiltered: resultFilter })
  }

 

  render() {
    const { indexPokemon, pokemonsFiltered, pokemonsFilterLength } = this.state;
    return (
      <div>
        <Pokemon pokemonData={pokemonsFiltered === '' ? pokemons[indexPokemon] : pokemonsFiltered[pokemonsFilterLength]} />
        <button onClick={this.handleState}>Next Pokemon</button>
        <button onClick={() => this.pokemonFilter('Fire')}>Fire</button>
      </div>
    );
  }
}
