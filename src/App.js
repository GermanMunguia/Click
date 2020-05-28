import React from "react";
import "./s.css";

//top = 0, 880
//left = 0, 1600

//ToDo:
//add a counter which increments+1 everyclick 
//some timer 
//change button to image
//add background

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      top: 440,
      left: 800
    };
    this.onClick = this.move.bind(this);
  }

  move() {
    this.setState({
      top: (Math.random() * 880),
      left: (Math.random() * 1600)
    });
  }

  render() {

    const button = {
      backgroundColor: "#FF2D00",
      height: 45,
      fontSize: 32,
      position: 'absolute',
      left: this.state.left,
      bottom: this.state.top
    }

    return (
      <button style={button} onClick={this.onClick}>HIT ME</button>
    )
  };
}

export default App;
