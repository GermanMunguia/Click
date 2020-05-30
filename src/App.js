import React from "react";
import "./s.css";

//top = 0, 880
//left = 0, 1600
//ToDo:
//add a counter which increments+1 everyclick 
//some timer 
//change button to image
//add background
//cap size?

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      top: (window.innerHeight / 2),
      left: (window.innerWidth / 2),
      count: 0
    };
    this.onClick = this.move.bind(this);
  }

  //when target is hit, change position and add to score count
  move() {
    this.setState({
      top: (Math.random() * (window.innerHeight - 0)),
      left: (Math.random() * (window.innerHeight - 0)), //sub based on target size
      count: this.state.count + 1
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
      <div>
        <button style={button} onClick={this.onClick}>HIT ME</button>
        <h1 className="score">Score: {this.state.count}</h1>
      </div>
    )
  };
}

export default App;
