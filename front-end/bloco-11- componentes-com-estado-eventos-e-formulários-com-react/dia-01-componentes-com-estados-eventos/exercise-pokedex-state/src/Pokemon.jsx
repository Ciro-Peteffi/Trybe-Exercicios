import React from "react";

export default class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemonData;
    return (
      <div>
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        <img src={image} alt={name} />
      </div>
    );
  }
}
