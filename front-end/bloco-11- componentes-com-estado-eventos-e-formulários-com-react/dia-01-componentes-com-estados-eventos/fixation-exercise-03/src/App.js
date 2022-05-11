import "./App.css";
import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numberClicks1: 0,
      numberClicks2: 0,
      numberClicks3: 0,
    };

    this.Event1 = this.Event1.bind(this);
    // this.Event2 = this.Event2.bind(this);
    // this.Event3 = this.Event3.bind(this);
  }

  Event1 = () => {
    this.setState((previousState, _props) => ({
      numberClicks1: previousState.numberClicks1 + 1,
    }));
    console.log("clicks 1: ", this.state.numberClicks1);
  };

  Event2 = () => {
    this.setState((previousState, _props) => ({
      numberClicks2: previousState.numberClicks2 + 1,
    }));
    console.log("clicks 2: ", this.state.numberClicks2);
  };

  Event3 = () => {
    this.setState((previousState, _props) => ({
      numberClicks3: previousState.numberClicks3 + 1,
    }));
    console.log("clicks 3: ", this.state.numberClicks3);
  };

  render() {
    return (
      <div>
        <button onClick={this.Event1}>My Precious Button</button>
        <button onClick={this.Event2}>Another Button</button>
        <button onClick={this.Event3}>Another Button again!</button>
      </div>
    );
  }
}
