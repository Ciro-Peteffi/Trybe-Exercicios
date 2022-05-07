// import logo from './logo.svga';
// import './App.css';

import React from "react";

const arrayOfTasks = ['cookingLunch', 'cookingDinner', 'gyn', 'studyReact', 'stutyAtTrybe', 'takeBath', 'brushTeeth', 'cleanHouse'];

const Tasks = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return arrayOfTasks.map(Tasks);
  }
}

export default App;
