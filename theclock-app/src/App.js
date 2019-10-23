import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }

  currentTime = () => {
    this.setState(() => {
      this.setState({time:new Date().toLocaleTimeString()})
    })
  }

  componentDidMount = () =>{
    setInterval(() =>{
      this.currentTime()
    }, 1000)
  }

  render(){
    return(
      <div className="App">
      <div className="clock-container">
      <h1 className="clock">
      {this.state.time}
      </h1>
      </div>      
      </div>
    )
  }
}



export default App;