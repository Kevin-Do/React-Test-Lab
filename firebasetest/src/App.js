import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {

  constructor(){
    super();
    this.state = {
      speed: 10000
    };
  }

componentDidMount(){
  const rootRef = firebase.database().ref();
  const speedRef = rootRef.child('Parking Lot 12');
  speedRef.on('value', snap => {
    this.setState({
      speed: snap.val()
    })
  });
}

  render() {
    return (
      <div className = "App">
        <h1> {this.state.speed}</h1>
      </div>
    );
  }
}

export default App;
