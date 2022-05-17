import './App.css';
import React from 'react';


export default class App extends React.Component {

  constructor() {
    super ();
    this.Event1 = this.Event1.bind(this);
    this.Event2 = this.Event2.bind(this);
    this.Event3 = this.Event3.bind(this);
  }

Event1() {
  console.log('Eu sou o Event1');
}

Event2() {
  console.log('Eu sou o Event2');
}

Event3() {
  console.log('Eu sou o Event3');
}



  render() {
    return (
      <div>
        <button onClick={this.Event1}>My Precious Button</button>
        <button onClick={this.Event2}>Another Button</button>
        <button onClick={this.Event3}>Another Button again!</button>
      </div>
    )
  }
}
