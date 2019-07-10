import React, { Component } from 'react';
import './App.css';
import data from './data'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      dataDisplayIndex: 0
    }
    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  handlePrevious() {
    if (this.state.dataDisplayIndex === 0) {
      this.setState({
        dataDisplayIndex: data.length - 1
      })
    }
    else {
      this.setState({
        dataDisplayIndex: this.state.dataDisplayIndex - 1
      })
    }
    console.log(this.state.dataDisplayIndex)
  }


  handleNext() {
    if (this.state.dataDisplayIndex === data.length - 1) {
      this.setState({
        dataDisplayIndex: 0
      })
    }
    else {
      this.setState({
        dataDisplayIndex: this.state.dataDisplayIndex + 1
      })
    }
    console.log(this.state.dataDisplayIndex)
  }

  render() {
    console.log(data)
    let dataRedo = data.map(element => {
      return (
        <div>
          <h1>
            First: {element.name.first}
          </h1>
          <h1>
            Last: {element.name.last}
          </h1>
          <h1>
            City: {element.city}
          </h1>
          <h1>
            Country: {element.country}
          </h1>
          <h1>
            Employer: {element.employer}
          </h1>
          <h1>
            Title: {element.title}
          </h1>
          <h1>
            Favorite Movie: {element.favoriteMovies}
          </h1>
        </div>
      )
    })

    return (
      <div className="App">
        <div className="blueHeader">
          <div className="Home">Home</div>
        </div>

        <div>
          <div className="blackBody">

            <div className="greyBox">
              {dataRedo[this.state.dataDisplayIndex]}
            </div>

            <div className="buttonsToClick">
              <button className="Previous" onClick={this.handlePrevious}>Previous</button>
              <div className="EditDeleteNew">
                <button className='Edit'>Edit</button>
                <button className='Delete'>Delete</button>
                <button className='New'>New</button>
              </div>
              <button className='Next' onClick={this.handleNext}>Next</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


