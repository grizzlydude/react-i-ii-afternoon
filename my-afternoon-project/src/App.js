import React, { Component } from 'react';
import './App.css';
import data from './data'
import People from './components/People'

export default class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="blueHeader">
          <div className="Home">Home</div>
        </div>

        <div>
          <div className="blackBody">

            <People people={data}/>
          </div>
        </div>
      </div>
    )
  }
}


