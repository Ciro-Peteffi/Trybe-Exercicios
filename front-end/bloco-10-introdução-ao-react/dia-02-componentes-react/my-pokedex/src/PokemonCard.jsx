import { Component } from 'react';

export class PokemonCard extends Component {
    render() {
        const { name, type, averageWeight, image} = this.props.pokemon;
        return (
        <div className="card-container">
            <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>Average Weight: {averageWeight.value}{averageWeight.measurementUnit}</p>
            </div>
            <img src={image} alt={name} />
        </div>
        )
    }
}






