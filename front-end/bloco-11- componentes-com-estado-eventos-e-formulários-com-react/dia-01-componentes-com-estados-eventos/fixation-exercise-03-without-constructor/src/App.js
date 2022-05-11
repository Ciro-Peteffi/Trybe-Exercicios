import "./App.css";
import React from "react";

export default class App extends React.Component {
  state = {
    countClicks1: 0,
    countClicks2: 0,
    countClicks3: 0,
  };

  changeState1 = () => {
    this.setState((previousSt, _props) => ({
      countClicks1: previousSt.countClicks1 + 1,
    }));
    console.log("clicks1: ", this.state.countClicks1);
  };

  changeState2 = () => {
    this.setState((previousSt, _props) => ({
      countClicks2: previousSt.countClicks2 + 1,
    }));
    console.log("clicks2: ", this.state.countClicks2);
  };

  changeState3 = () => {
    this.setState((previousSt, _props) => ({
      countClicks3: previousSt.countClicks3 + 1,
    }));
    console.log("clicks3: ", this.state.countClicks3);
  };

  render() {
    return (
      <div>
        <button onClick={this.changeState1}>Button-1</button>
        <button onClick={this.changeState2}>Button-2</button>
        <button onClick={this.changeState3}>Button-3</button>
      </div>
    );
  }
}
