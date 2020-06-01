import React from "react";
import "./s.css";
import target from "./target.png"
import s1 from "./s3.wav"


//ToDo: 
//some timer
//sound
//view

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      top: '50%',
      left: '50%',
      count: -1,
      goal: 10,
      misses: 0,
      targetSize: 2,
    };
    this.onClick = this.move.bind(this);
    this.playAgain = this.playAgain.bind(this);
    this.goal = this.changeGoal.bind(this);
    this.miss = this.miss.bind(this);
    this.size = this.changeSize.bind(this);
  }

  miss() {
    this.setState({
      misses: this.state.misses + 1
    })
  }

  //when target is hit, change position and add to score count
  move() {
    //change the position of the center of the target if it is too high to have the whole img remain inside the window by atleast 1px.
    let h = 80;
    h = (Math.random() * h)
    console.log("h-> " + h)
    //if its height/width is too low 
    if (h < 10) {
      h = 10
    }
    if (h > 75) {
      h = 70
    }
    let w = 80
    w = (Math.random() * w)
    if (w < 10) {
      w = 10
    }

    const s = new Audio(s1);
    s.play();

    this.setState({
      top: h + "%",
      left: w + "%",
      count: this.state.count + 1
    });
  }


  //restart 
  playAgain() {
    this.setState({
      top: '50%',
      left: '50%',
      count: -1,
      misses: 0,
      targetSize: 2,
    });
  }

  changeGoal(props) {
    this.setState({
      goal: props.target.value
    })
  }

  changeSize(props) {
    this.setState({
      targetSize: props.target.value
    })
  }

  render() {

    //win the game if a score cap is set
    if (this.state.count == this.state.goal) {

      return (
        <div>
          <h1 className="text"> WINNER </h1>
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

    if (this.state.misses == 3) {
      return (
        <div>
          <h1 className="text"> LOST </h1>
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

    //target style
    const button = {
      height: Math.pow(2, this.state.targetSize) + 'vw',
      width: Math.pow(2, this.state.targetSize) + 'vw',
      position: 'absolute',
      left: this.state.left,
      bottom: this.state.top,
      userSelect: 'none',
      userDrag: 'none',
    }

    //starting position
    if (this.state.count == -1) {
      return (
        <div>
          <h1 className='text'>CLICK THE TARGET TO BEGIN</h1>
          <h2 className='p1'> Choose the number of targets to practice with:</h2>
          <input type="number" onChange={this.goal} defaultValue="10" min="1" className='goal' />
          <h2 className='p2'> Choose the size of the target: </h2>
          <input type="number" onChange={this.size} defaultValue="2" min="1" max="3" className='size' />
          <img style={button} draggable="false" onClick={this.onClick} src={target} alt="target" />
        </div >
      )
    }

    //style of back range 
    const range = {
      backgroundColor: 'gray',
      position: 'absolute',
      left: '10%',
      top: '7.5%',
      height: '80%',
      width: '80%',
      border: '5px dotted darkred',
      borderBottom: '5px dotted black',
      borderTop: '5px dotted black',

    }

    //once the game has begun
    return (
      <div>
        <p draggable="false" onClick={this.miss} style={range}>  </p>
        <img style={button} draggable="false" onClick={this.onClick} src={target} alt="target" />
        <h1 className="score">Score: {this.state.count}</h1>
        <h1 className="score">Miss : {this.state.misses}</h1>
      </div >
    )
  };
}

export default App;
