import React from "react";
import Pokemon from "./Pokemon";
import pokemons from "./data";

export default class Pokedex extends React.Component {
  render() {
    //   const { name } = pokemons;
    //   console.log(name)
    return (
      <div>
        <Pokemon pokemonData={pokemons[0]}/>
      </div>
    );
  }
}
