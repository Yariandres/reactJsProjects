import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: 0
        },
        {
          name: "Dracula",
          id: 1
        },
        {
          name: "Zombie",
          id: 2
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster, index) => (
          <h1 key={index}>
            {monster.name} <br />
            {monster.id}
          </h1>
        ))}
      </div>
    );
  }
}

export default App;
