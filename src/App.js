import React from "react";
import "./s.css";
import target from "./target.png"

//top = 0, 880
//left = 0, 1600
//ToDo: 
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
      count: 0,
      goal: 10
    };
    this.onClick = this.move.bind(this);
    this.playAgain = this.playAgain.bind(this);
    this.goal = this.changeGoal.bind(this);
  }


  //when target is hit, change position and add to score count
  move() {
    //change the position of the center of the target if it is too high to have the whole img remain inside the window by atleast 1px.
    let h = (Math.random() * (window.innerHeight))
    h = h > (window.innerHeight - 75) ? window.innerHeight - 76 : h

    let w = (Math.random() * (window.innerWidth))
    w = w > (window.innerWidth - 75) ? window.innerWidth - 76 : w

    this.setState({
      top: h,
      left: w,
      count: this.state.count + 1
    });
  }

  //restart 
  playAgain() {
    this.setState({
      top: (window.innerHeight / 2),
      left: (window.innerWidth / 2),
      count: 0
    });
  }

  changeGoal(props) {
    this.setState({
      goal: props.target.value
    })
  }

  render() {


    const text = {
      textAlign: 'center',
      fontSize: 70,
    }

    //win the game if a score cap is set
    if (this.state.count == this.state.goal) {

      return (
        <div>
          <h1 style={text}> WINNER </h1>
          <button style={{
            height: 75,
            width: 75,
            position: 'absolute',
            top: (window.innerHeight / 2),
            left: (window.innerWidth / 2)
          }} onClick={this.playAgain}> PLAY AGAIN </button>
        </div>

      )
    }

    const button = {
      height: 75,
      width: 75,
      position: 'absolute',
      left: this.state.left,
      bottom: this.state.top
    }

    //starting position
    if (this.state.count === 0) {
      return (
        <div>
          <h1 style={text}>CLICK THE TARGET TO BEGIN</h1>
          <input type="number" onChange={this.goal} defaultValue="10" min="2" />
          <img style={button} onClick={this.onClick} src={target} alt="target" />
        </div >
      )
    }

    //once the game has begun
    return (
      <div>
        <img style={button} onClick={this.onClick} src={target} alt="target" />
        <h1 className="score">Score: {this.state.count}</h1>
      </div >
    )
  };
}

export default App;
