import logo from './logo.svg';
import './App.css';
import React from 'react';


const Event1 = () => console.log('Eu sou o evento1');
const Event2 = () => console.log('Eu sou o evento2');
const Event3 = () => console.log('Eu sou o evento3');

export default class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={Event1}>My Precious Button</button>
        <button onClick={Event2}>Another Button</button>
        <button onClick={Event3}>Another Button again!</button>
      </div>
    )
  }
}
