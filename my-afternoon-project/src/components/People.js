import React, { Component } from 'react'
import Button from './Button'
import Person from './Person'

export default class People extends Component {
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
                dataDisplayIndex: this.props.people.length - 1
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
        if (this.state.dataDisplayIndex === this.props.people.length - 1) {
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
        let dataRedo = this.props.people.map(element => {
            return (
                <Person person={element} />
            )
        })
        return (
            <div>
                <div className="greyBox">
                    {dataRedo[this.state.dataDisplayIndex]}
                </div>

                <div className="buttonsToClick">
                    <Button title='Previous' action={this.handlePrevious} />
                    <div className="EditDeleteNew">
                        <Button title='Edit' />
                        <Button title='Delete' />
                        <Button title='New' />
                    </div>
                    <Button title='Next' action={this.handleNext} />
                </div>
            </div>
        )
    }
}